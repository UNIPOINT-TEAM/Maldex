import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import {
    Banner,
    MainProductFilter,
    QuestForm,
    TabList,
} from "../../components";
import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
} from "@material-tailwind/react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import ProductSize from "../../components/CategoryDetails/ProductSize";
import {
    FreeSample,
    TabDescription,
    TabFour,
} from "../../components/CategoryDetails";
import ProductPerviewModal from "../../components/CategoryDetails/ProductPerviewModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useFetchHook } from "../../hooks/UseFetch";
import { useParams } from "react-router-dom";
import { formatPrice } from "../../utils/FormatPrice";
import { Helmet } from "react-helmet";
import { DeleteLike, PostDataToken } from "../Auth/service";

const TOKEN = localStorage.getItem("token");
const CategoryDetails = () => {
    const { id } = useParams();
    const [productId, setproductId] = useState(Number(id));
    const dispatch = useDispatch();
    const { fetchData, response } = useFetchHook();
    const isLike = response?.is_liked;
    useEffect(() => {
        if (TOKEN) {
            fetchData({
                method: "GET",
                url: `/product/${productId}`,
                headers: { Authorization: `Bearer ${TOKEN}` },
            });
        } else {
            fetchData({ method: "GET", url: `/product/${productId}` });
        }
    }, [id, productId]);
    useEffect(() => {
        setIsFavorite(response.is_liked);
    }, [id, response.is_liked]);

    const [activeTab, setActiveTab] = useState("Описание");
    const [isFavorite, setIsFavorite] = useState(isLike);
    console.log(isFavorite);
    const [btnActiveSize, setbtnActiveSize] = useState(1);

    const [productItem, setProductItem] = useState({
        quantity: 1,
        totalPrice: 0,
        discountRange: 0,
        discount: 0,
        discounts: [{ name: 0, count: 0 }],
    });

    const handleFavorite = (id: number) => {
        const data = {
            is_liked: true,
        };
        PostDataToken(`product/${id}/like/`, data)
            .then(() => setIsFavorite(true))
            .catch((err) => console.log(err));
    };
    const HandleDeleteLike = (id: number) => {
        DeleteLike(`product/${id}/like/`)
            .then(() => setIsFavorite(false))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (response?.discounts) {
            const filterDiscount = response.discounts.sort(
                (a, b) => a.name - b.name
            );
            setProductItem((prev) => ({ ...prev, discounts: filterDiscount }));
        }
    }, [response]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    const calculateDiscountPercentage = (quantity, discountData) => {
        discountData?.sort((a, b) => a?.count - b?.count);

        if (quantity >= discountData[2]?.count) {
            return discountData[2].name;
        } else if (quantity >= discountData[1]?.count) {
            return discountData[1].name;
        } else if (quantity >= discountData[0]?.count) {
            return discountData[0].name;
        }
        return 0;
    };

    const calculateTotalCost = (quantity, unitPrice, discountData) => {
        if (!discountData) return 0;
        const discountPercentage = calculateDiscountPercentage(
            quantity,
            discountData
        );

        const discountAmount =
            unitPrice * quantity * (discountPercentage / 100);
        const discountPrice = unitPrice * quantity - discountAmount;
        return discountPrice.toFixed(2);
    };
    const addToCartHandler = (product) => {
        if (productItem.quantity < 1) return;
        const totalPrice = calculateTotalCost(
            productItem.quantity,
            response?.discount_price > 0
                ? response?.discount_price
                : response?.price,
            productItem.discounts
        );
        console.log(Number(totalPrice));
        dispatch(
            addToCart({
                ...product,
                quantity: Number(productItem.quantity),
                totalPrice: Number(totalPrice),
            })
        );
    };

    const CategoryTabs = [
        {
            label: "Описание",
            value: "Описание",
            content: <TabDescription description={response?.description} />,
        },
        {
            label: response?.pack && "Характеристики",
            value: "Характеристики",
            content: <TabList pack={response?.pack} />,
        },
        {
            label: "виды нанесения",
            value: "виды нанесения",
            content: <TabFour prints={response?.prints} />,
        },
    ];
    useEffect(() => {
        const discountPercentage = calculateDiscountPercentage(
            productItem.quantity,
            productItem.discounts
        );

        let discountRange = 0;
        if (productItem.discounts[2]?.count <= productItem.quantity) {
            discountRange = 100;
        } else if (productItem.discounts[1]?.count <= productItem.quantity) {
            discountRange = 50;
        } else if (productItem.discounts[0]?.count <= productItem.quantity) {
            discountRange = 0;
        }

        setProductItem((prev) => ({
            ...prev,
            discountRange,
            discount: discountPercentage,
        }));
    }, [productItem.quantity]);

    return (
        <div className="container_xxl tracking-wider overflow-hidden px-3">
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {response?.name
                        ? `${response.name} . Нанесения логотипа компании`
                        : "Загрузка..."}
                </title>
            </Helmet>
            <div className="grid grid-cols-3 lg:grid-cols-10 mt-5">
                <div className="h-full py-5 lg:pr-6 col-span-3 order-3 lg:order-1">
                    {/* <img src={tabImages} alt="icon" className="w-[70px] py-5" /> */}
                    <Tabs value={activeTab}>
                        <TabsHeader
                            placeholder={<div />}
                            className="bg-transparent"
                            indicatorProps={{
                                className:
                                    "bg-transparent border-b-2 border-redPrimary shadow-none rounded-none ",
                            }}
                        >
                            {CategoryTabs.map(({ label, value }) => (
                                <Tab
                                    placeholder={<div />}
                                    key={value}
                                    value={value}
                                    onClick={() => setActiveTab(value)}
                                    activeClassName="text-[#fff]"
                                    className="text-[9px] p-0 me-3 font-Helvetica-Neue uppercase h-[25px] text-darkSecondary w-auto font-bold text-start "
                                >
                                    <p
                                        className={`${
                                            activeTab === value
                                                ? "text-redPrimary"
                                                : "text-darkSecondary"
                                        } hover-position`}
                                    >
                                        {label}
                                    </p>
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody placeholder={<div />} className="p-0 m-0 ">
                            {CategoryTabs.map((item, i) => (
                                <TabPanel
                                    key={i}
                                    value={item.value}
                                    className="p-0 m-0 py-2 mt-4 hover-position"
                                >
                                    {item.content}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
                <div className="order-1 lg:order-2 p-2 lg:p-5 col-span-3 lg:col-span-4">
                    <div className="relative bg-white w-full h-[500px] flex items-center justify-center">
                        <div className="absolute h-full right-2 lg:right-5 top-0 flex items-center">
                            <div className="flex flex-col gap-2 bg-white px-3 py-5 rounded-s-xl">
                                {response?.colors?.map((item) => (
                                    <input
                                        key={item.id}
                                        onClick={() =>
                                            setproductId(item.product.id)
                                        }
                                        type="radio"
                                        name="color"
                                        style={{
                                            accentColor: item.hex,
                                            background: item.hex,
                                        }}
                                        className={`${
                                            item?.hex === "#FFFFFF" &&
                                            "border border-lightSecondary"
                                        } w-4 lg:w-5 h-4 lg:h-5 bg-black ${
                                            productId !== item.product.id &&
                                            "appearance-none"
                                        } rounded-full cursor-pointer`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center w-full h-full items-center">
                            <ProductPerviewModal
                                images={response?.images_set}
                            />
                        </div>
                    </div>
                </div>
                <div className="py-3 px-0 order-1 lg:order-2 lg:px-5 col-span-3">
                    <div>
                        <div className="flex justify-between">
                            <div>
                                {response?.is_new && (
                                    <span className="border tracking-normal text-redPrimary border-redPrimary py-[2px] px-1 me-1 rounded-[15px] text-[12px] font-bold">
                                        NEW
                                    </span>
                                )}
                                {response?.is_hit && (
                                    <span className="border tracking-normal border-darkPrimary py-[2px] px-[6px] rounded-[15px] text-[12px] font-bold">
                                        HIT
                                    </span>
                                )}
                            </div>
                            {TOKEN && (
                                <div className="cursor-pointer">
                                    {isFavorite ? (
                                        <IoMdHeart
                                            color="red"
                                            size={20}
                                            onClick={() =>
                                                HandleDeleteLike(response?.id)
                                            }
                                        />
                                    ) : (
                                        <IoMdHeartEmpty
                                            size={20}
                                            onClick={() =>
                                                handleFavorite(response?.id)
                                            }
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="container mx-auto lg:px-4 py-4">
                            <h2 className="text-base font-semibold tracking-wider">
                                {response?.name}
                            </h2>
                            {response?.sizes && (
                                <div className="mt-4">
                                    <p className="text-darkSecondary text-fs_8 tracking-wide font-semibold">
                                        РАЗМЕР:
                                    </p>
                                    <div className="flex space-x-2">
                                        {response?.sizes?.map(
                                            (item, i) =>
                                                item.size && (
                                                    <ProductSize
                                                        {...item}
                                                        onActiveSize={
                                                            setbtnActiveSize
                                                        }
                                                        btnActiveSize={
                                                            btnActiveSize
                                                        }
                                                        index={i}
                                                        key={i}
                                                    />
                                                )
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="min-h-[500px]">
                            <div className="bg-white rounded-xs py-2 px-3 mb-5">
                                <div className="border-b border-gray-500">
                                    <div className="flex justify-between items-center py-1">
                                        <p className="font-normal hover-position">
                                            Количество:
                                        </p>
                                        <input
                                            value={productItem.quantity}
                                            onChange={(e) =>
                                                setProductItem((prev) => ({
                                                    ...prev,
                                                    quantity: Number(
                                                        e.target.value
                                                    ),
                                                }))
                                            }
                                            className={`${
                                                productItem.quantity < 1
                                                    ? "border-redPrimary"
                                                    : ""
                                            } border w-[50px] bg-transparent text-fs_7 border-black rounded-md outline-none px-2 tracking-wider font-normal`}
                                        />
                                    </div>
                                    <div className="w-full px-2 py-2">
                                        <RangeSlider
                                            color={"red"}
                                            value={[
                                                0,
                                                productItem.discountRange,
                                            ]}
                                            thumbsDisabled={[false, false]}
                                            rangeSlideDisabled={true}
                                        />
                                        <div className="flex justify-between text-[10px] font-normal py-2">
                                            {productItem?.discounts?.map(
                                                (item, i) => (
                                                    <p key={i}>
                                                        {item?.name}% <br />
                                                        {item?.count} шт.
                                                    </p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center py-1 font-normal">
                                        <p className="hover-position">
                                            Стоимость тиража:
                                        </p>
                                        <div className="hover-position">
                                            {response?.discount_price > 0
                                                ? formatPrice(
                                                      response?.discount_price
                                                  )
                                                : formatPrice(response?.price)}
                                            <span className="ml-1 ">
                                                {response?.price_type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center py-1">
                                        <p className="hover-position">
                                            Скидка:
                                        </p>
                                        <p className="hover-position">
                                            {productItem.discount}%{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-3 py-1 text-base">
                                    <b className="hover-position">
                                        Итоговая стоимость:
                                    </b>
                                    <b className="hover-position">
                                        {calculateTotalCost(
                                            productItem.quantity,
                                            response?.discount_price > 0
                                                ? response?.discount_price
                                                : response?.price,
                                            productItem.discounts
                                        )}
                                        ₽
                                    </b>
                                </div>
                            </div>
                            <button
                                onClick={() => addToCartHandler(response)}
                                className="w-full py-4 bg-redPrimary text-white text-[11px] lg:text-xs tracking-wide rounded-lg"
                            >
                                В КОРЗИНУ
                            </button>
                            <div className="mt-3 flex justify-between text-darkSecondary">
                                <FreeSample />
                                <span className="text-[9px] lg:text-[10px] text-[#666666] border border-[#666666] px-1 lg:px-4 py-[6px] rounded-lg uppercase hover-position">
                                    <b>бесплатный дизайн макет</b>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-16 mt-0">
                <MainProductFilter status="new" />
            </div>
            <div className="my-5">
                <Banner />
            </div>
            <QuestForm />
        </div>
    );
};

export default CategoryDetails;
