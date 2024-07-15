import { useEffect, useState } from "react";
// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import {

  QuestForm,
  TabList,
} from "../../components";
//@ts-expect-error: This
import Tshirt from "../../assets/t-shirt.svg";
import nasilnenie_l from "../../assets/t-shirt.png";
import nasilnenie_r from "../../assets/t-shirt.png";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,

  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import {
  FreeSample,
  // TabDescription,
  TabFour,
} from "../../components/CategoryDetails";
import { ProductColor } from "../../mock/data";
// import ProductPerviewModal from "../../components/CategoryDetails/ProductPerviewModal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useFetchHook } from "../../hooks/UseFetch";
import { useParams } from "react-router-dom";
// import ProductPerviewModal from "./ProductPerviewModalGift";
import ProductPerviewModalGift from "./ProductPerviewModalGift";
import GiftTabDescription from "./GiftTabDescription";
import GiftTabList from "./GiftTabList";
import GiftTabFour from "./GiftTabFour";

const btnSize = [
  { id: 1, size: "XS" },
  { id: 2, size: "S" },
  { id: 3, size: "M" },
  { id: 4, size: "L" },
  { id: 5, size: "XL" },
];

const CategoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  // @ts-expect-error: This
  const [activeTab, setActiveTab] = useState("Описание");
  const [isActive] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [productColor, setproductColor] = useState<number>(0);
  const [btnActiveSize, setbtnActiveSize] = useState<number>(1);
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
    fetchData({ method: "GET", url: `/gifts/baskets/${id}` });
  }, [id]);
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
  // @ts-expect-error: This
  const CategoryTabs = [
    {
      label: "Описание",
      value: "Описание",
      content: (
        <GiftTabDescription
          description={response?.description}
          products={response?.gift_basket_product}
        />
      ),
    },
    {
      label: "изменить набор",
      value: "изменить набор",
      /*@ts-expect-error: This */
      content: <GiftTabList description={response?.description}
      products={response?.gift_basket_product} />,
    },

    {
      label: "добавить товар",
      value: "добавить товар",
      /*@ts-expect-error: This */
      content: <GiftTabFour prints={response?.prints} />,
    },
  ];

  // const imageSrc = response.gift_basket_images[0].images;

  // console.log(imageSrc);

  return (
    <div className="container_xxl tracking-wider overflow-hidden px-3">
      <div className="grid grid-cols-3 lg:grid-cols-10 my-5">
        <div className="h-full py-5 lg:pr-6 col-span-3 order-3 lg:order-1 ">

          <div>
            {/* @ts-expect-error: This */}
            {response.description}
          </div>
        </div>
        <div className="bg-white order-1 lg:order-2 flex flex-col items-start p-2 lg:p-5 col-span-3 lg:col-span-4 relative">
          <div className="flex justify-end w-full">

          </div>

          <div
            className={`flex justify-center mt-10 w-full h-full items-center ${
              isActive !== 1 && "hidden"
            }`}
          >
            {/*@ts-expect-error: This */}
            <ProductPerviewModalGift images={response?.gift_basket_images} />
          </div>
          <div
            className={`${
              isActive !== 2 && "hidden"
            } grid grid-cols-2 items-center my-3 h-full w-full`}
          >
            <div className="box-l flex justify-end">
              <img src={nasilnenie_r} alt="" className="w-[260px]" />
            </div>
            <div className="box-r flex justify-start">
              <img src={nasilnenie_l} alt="" className="w-[200px] " />
            </div>
          </div>
          <div
            className={`${
              isActive !== 3 && "hidden"
            } flex justify-center items-center mt-10 w-full h-full`}
          >
            {/* @ts-expect-error: This */}
            <img
              src={
                response.gift_basket_images &&
                response?.gift_basket_images[0]?.images
              }
              alt=""
            />
            <div className="color-panel"></div>
          </div>
        </div>
        <div className="py-3 px-0 order-1 lg:order-2 lg:px-5 col-span-3">
          <div>
            <div className="flex justify-between">
    
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
                {response.title}
              </h2>
              <div className=" mt-4">
                <p className="text-darkSecondary text-fs_8 tracking-wide font-semibold">
                  РАЗМЕР:
                </p>

              </div>
            </div>
            <div className="">
              <div className="flex justify-between items-center mb-5">
                <button className="text-greenPrimary font-bold">
                  + Добавить нанесение
                </button>
                <Tooltip
                  placement="bottom"
                  className="border w-full lg:w-[380px] px-10 translate-x-0  lg:-translate-x-20 border-blue-gray-50 bg-white  py-3 shadow-xl shadow-black/10"
                  content={
                    <div className="w-full">
                      <Typography
                        placeholder={<h2 />}
                        variant="small"
                        color="blue-gray"
                        className="font-medium font-Helvetica-Neue text-center"
                      >
                        Точную сумму нанесения вам сообщит менеджер после
                        оформления заказа
                      </Typography>
                    </div>
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Tooltip>
              </div>
              <div className="bg-gray-200 rounded-xs py-2 px-3 mb-5">
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
                // @ts-expect-error: This
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
        {/* <MainProductFilter status="new" /> */}
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
                className="text-[19px] p-0 me-[8px] font-Helvetica-Neue uppercase h-[25px] text-darkSecondary w-auto font-helvetica-neue font-bold text-start"
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

      <QuestForm />
    </div>
  );
};

export default CategoryDetails;
