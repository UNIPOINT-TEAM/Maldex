import { useEffect, useState } from "react";
// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import {
  Banner,
  MainProductFilter,
  QuestForm,
  TabList,
} from "../../components";
import tabImages from "../../assets/images/tab-image.png";

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

const CategoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("Описание");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [productColor, setproductColor] = useState<number>(0);
  const [btnActiveSize, setbtnActiveSize] = useState<number>(1);
  const [productId, setproductId] = useState<number>(id);
  const [product, setProduct] = useState({
    quantity: 50,
    price: 200,
    discount: 0,
    discountedPrice: 0,
    discountRange: 0,
    totalPrice: 0,
    color: "",
    size: "",
    image: "",
    name: " Футболка женская T-bolka Lady, оранжевая",
    description: "",
  });

  const dispatch = useDispatch();
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: `/product/${productId}` });
  }, [id, productId]);
  console.log(response);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  function calculateDiscount(quantity: number, price: number) {
    let discount = 0;
    if (quantity >= 300) {
      discount = 0.07;
      setProduct((prev) => ({
        ...prev,
        discount: 7,
        discountRange: 100,
      }));
    } else if (quantity >= 100) {
      discount = 0.05;
      setProduct((prev) => ({ ...prev, discount: 5, discountRange: 50 }));
    } else if (quantity >= 30) {
      discount = 0.03;
      setProduct((prev) => ({ ...prev, discount: 3, discountRange: 0 }));
    } else if (quantity < 30) {
      discount = 0.03;
      setProduct((prev) => ({ ...prev, discount: 3, discountRange: 0 }));
    }
    const discountedPrice = price * (1 - discount);
    return discountedPrice;
  }

  function calculateTotal() {
    const discountedPrice = calculateDiscount(product.quantity, product.price);
    const discountedTotalPrice = discountedPrice * product.quantity;
    setProduct((prev) => ({
      ...prev,
      discountedPrice: discountedTotalPrice,
    }));
  }
  useEffect(() => {
    calculateTotal();
  }, [product.quantity]);

  const CategoryTabs = [
    {
      label: "Описание",
      value: "Описание",
      /*@ts-expect-error: This */
      content: <TabDescription description={response?.description} />,
    },
    {
      /*@ts-expect-error: This */
      label: response?.pack && "Характеристики",
      value: "Характеристики",
      /*@ts-expect-error: This */
      content: <TabList pack={response?.pack} />,
    },

    {
      label: "виды нанесения",
      value: "виды нанесения",
      /*@ts-expect-error: This */
      content: <TabFour prints={response?.prints} />,
    },
  ];
  const handleFiltre = (id: number) => setproductId(id);

  return (
    <div className="container_xxl tracking-wider overflow-hidden px-3">
      <div className="grid grid-cols-3 lg:grid-cols-10 my-5">
        <div className="h-full py-5 lg:pr-6 col-span-3 order-3 lg:order-1 ">
          <img src={tabImages} alt="icon" className="w-[70px] py-5" />
          <Tabs value={activeTab}>
            <TabsHeader
              placeholder={<div />}
              className="bg-transparent"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-redPrimary shadow-none rounded-none",
              }}
            >
              {CategoryTabs.map(({ label, value }) => (
                <Tab
                  placeholder={<div />}
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  activeClassName="text-[#fff]"
                  className="text-[9px]  p-0 me-3 font-Helvetica-Neue uppercase h-[25px] text-darkSecondary w-auto font-helvetica-neue font-bold text-start"
                >
                  <p
                    className={`${
                      activeTab === value
                        ? "text-redPrimary"
                        : "text-darkSecondary"
                    }`}
                  >
                    {label}
                  </p>
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
              placeholder={<div />}
              className="p-0 m-0"
            >
              {CategoryTabs.map((item, i) => (
                <TabPanel
                  key={i}
                  value={item.value}
                  className="p-0 m-0 py-2 mt-4 font-Helvetica-Neue"
                >
                  {item.content}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
        <div className=" order-1 lg:order-2  p-2 lg:p-5 col-span-3 lg:col-span-4 ">
          <div className="relative bg-white w-full h-[500px] flex items-center justify-center ">
            <div className="absolute h-full right-2 lg:right-5 top-0  flex items-center">
              <div className="flex flex-col gap-2 bg-[#fff] px-3 py-5 rounded-s-xl">
                {response?.colors?.map((item) => (
                  <input
                    key={item.id}
                    onClick={() => {
                      handleFiltre(item.product.id);
                    }}
                    type="radio"
                    name="color"
                    style={{
                      accentColor: item.hex || "#000000",
                      background: item.hex || "#000000",
                    }}
                    className={` ${
                      item?.hex === "#FFFFFF" && "border border-lightSecondary"
                    } w-4 lg:w-5 h-4 lg:h-5 bg-black ${
                      productId !== item.product.id && "appearance-none"
                    } rounded-full  cursor-pointer`}
                  />
                ))}
              </div>
            </div>
            <div
              className={`flex  justify-center  w-full h-full items-center `}
            >
              {/*@ts-expect-error: This */}
              <ProductPerviewModal images={response?.images_set} />
            </div>
          </div>
        </div>
        <div className="py-3 px-0 order-1 lg:order-2 lg:px-5 col-span-3">
          <div>
            <div className="flex justify-between">
              <div>
                {/* @ts-expect-error: This */}
                {response?.is_new && (
                  <span className="border tracking-normal  text-redPrimary border-redPrimary py-[2px] px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                    NEW
                  </span>
                )}
                {/* @ts-expect-error: This */}
                {response?.is_hit && (
                  <span className="border tracking-normal border-darkPrimary py-[2px] px-[6px]  rounded-[15px] text-[12px] font-bold">
                    HIT
                  </span>
                )}
              </div>
              <div className="cursor-pointer">
                {isFavorite ? (
                  <IoMdHeart
                    color="red"
                    size={20}
                    onClick={() => setIsFavorite((prev) => !prev)}
                  />
                ) : (
                  <IoMdHeartEmpty
                    size={20}
                    onClick={() => setIsFavorite((prev) => !prev)}
                  />
                )}
              </div>
            </div>
            <div className="container mx-auto lg:px-4 py-4">
              <h2 className="text-base font-semibold  tracking-wider">
                {/*@ts-expect-error: This */}
                {response.name}
              </h2>
              {/* @ts-expect-error: This */}
              {response?.sizes && (
                <div className=" mt-4">
                  <p className="text-darkSecondary text-fs_8 tracking-wide font-semibold">
                    РАЗМЕР:
                  </p>
                  <div className="flex space-x-2">
                    {/* @ts-expect-error: This */}
                    {response?.sizes.length > 0 &&
                      response?.sizes?.map(
                        (item, i) =>
                          item.size && (
                            <ProductSize
                              {...item}
                              onActiveSize={setbtnActiveSize}
                              btnActiveSize={btnActiveSize}
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
                    <p className="font-normal ">Количество:</p>
                    <input
                      value={product.quantity}
                      onChange={(e) =>
                        setProduct((prev: any) => ({
                          ...prev,
                          quantity: e.target.value,
                        }))
                      }
                      className="border w-[50px] bg-transparent text-fs_7 border-black rounded-md outline-none px-2 tracking-wider font-normal"
                    />
                  </div>
                  <div className="w-full px-2 py-2">
                    <RangeSlider
                      color={"red"}
                      value={[0, product.discountRange]}
                      thumbsDisabled={[false, false]}
                      rangeSlideDisabled={true}
                    />
                    <div className="flex justify-between text-[10px] font-normal py-2">
                      <p>
                        3% <br />
                        30 шт.
                      </p>
                      <p className="text-center">
                        5% <br />
                        100 шт.
                      </p>
                      <p className="text-end">
                        7% <br />
                        300 шт.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1 font-normal">
                    <p>Стоимость тиража:</p>
                    <p>{product.totalPrice} ₽ </p>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <p>Скидка:</p>
                    <p>{product.discount}% </p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-3 py-1 text-base">
                  <b className="">Итоговая стоимость:</b>
                  <b className="">{product.discountedPrice} ₽ </b>
                </div>
              </div>
              <button
                /* @ts-expect-error: This */
                onClick={() => dispatch(addToCart(product))}
                className="w-full py-4 bg-redPrimary text-white text-[11px] lg:text-xs tracking-wide rounded-lg"
              >
                В КОРЗИНУ
              </button>
              <div className="mt-3 flex justify-between text-darkSecondary">
                <FreeSample />
                <span className="text-[9px] lg:text-[10px] text-[#666666] border border-[#666666] px-1 lg:px-4 py-[6px] rounded-lg uppercase">
                  <b>бесплатный дизайн макет</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 mt-16">
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
