import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { QuestForm } from "../../components";
import nasilnenie_l from "../../assets/t-shirt.png";
import nasilnenie_r from "../../assets/t-shirt.png";
import {
  Option,
  Select,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { FreeSample } from "../../components/CategoryDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { useFetchHook } from "../../hooks/UseFetch";
import { useParams } from "react-router-dom";
import ProductPerviewModalGift from "./ProductPerviewModalGift";
import GiftTabDescription from "./GiftTabDescription";
import GiftTabList from "./GiftTabList";
import GiftTabFour from "./GiftTabFour";
import ProductSize from "../../components/CategoryDetails/ProductSize";
import { formatPrice } from "../../utils/FormatPrice";
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";

const CategoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("Описание");
  const [isActive] = useState<number>(1);
  const [btnActiveSize, setbtnActiveSize] = useState<number>(1);
  const [quantityVisible, setQuantityVisible] = useState(null);
  const [cardSetproduct, setCardSetproduct] = useState([]);
  const [productItem, setProductItem] = useState({
    quantity: 1,
    totalPrice: 0,
    discountRange: 0,
    discount: 0,
    discounts: [{ name: 0, count: 0 }],
    application: null,
  });
  const dispatch = useDispatch();
  const { fetchData, response } = useFetchHook();
  const { fetchData: fetchPrinting, response: responsePrint } = useFetchHook();
  useEffect(() => {
    fetchPrinting({
      method: "GET",
      url: `/print-categories/`,
    });
  }, []);
  useEffect(() => {
    fetchData({ method: "GET", url: `/gifts/baskets/${id}` });
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    setCardSetproduct(response?.gift_basket_product);
  }, [response]);
  console.log(cardSetproduct);
  function calculateDiscount(quantity: number, price: number) {
    let discount = 0;
    if (quantity >= 300) {
      discount = 0.07;
      setProductItem((prev) => ({
        ...prev,
        discount: 7,
        discountRange: 100,
      }));
    } else if (quantity >= 100) {
      discount = 0.05;
      setProductItem((prev) => ({ ...prev, discount: 5, discountRange: 50 }));
    } else if (quantity >= 30) {
      discount = 0.03;
      setProductItem((prev) => ({ ...prev, discount: 3, discountRange: 0 }));
    } else if (quantity < 30) {
      discount = 0.03;
      setProductItem((prev) => ({ ...prev, discount: 3, discountRange: 0 }));
    }
    const discountedPrice = price * (1 - discount);
    return discountedPrice;
  }

  function calculateTotal() {
    const discountedPrice = calculateDiscount(
      setProductItem.quantity,
      setProductItem.price
    );
    const discountedTotalPrice = discountedPrice * setProductItem.quantity;
    setProductItem((prev) => ({
      ...prev,
      discountedPrice: discountedTotalPrice,
    }));
  }
  useEffect(() => {
    calculateTotal();
  }, [productItem.quantity, productItem.discounts]);
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
      content: (
        <GiftTabList
          setCardSetproduct={setCardSetproduct}
          cardSetproduct={cardSetproduct}
        />
      ),
    },

    {
      label: "добавить товар",
      value: "добавить товар",
      content: <GiftTabFour setCardSetproduct={setCardSetproduct} />,
    },  
  ];
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
  const addToCartHandler = (product) => {
    if (productItem.quantity < 1) return;
    const totalPrice = calculateTotalCost(
      productItem.quantity,
      response?.discount_price > 0 ? response?.discount_price : response?.price,
      productItem.discounts
    );
    dispatch(
      addToCart({
        ...product,
        quantity: Number(productItem.quantity),
        totalPrice: Number(totalPrice),
      })
    );
  };
  const handleRangeChange = (value) => {
    const maxQuantity =
      productItem.discounts[productItem.discounts.length - 1].count;
    const newQuantity = Math.floor((value[1] / 100) * maxQuantity);
    setProductItem((prev) => ({
      ...prev,
      quantity: newQuantity,
    }));
  };
  const calculateTotalCost = (quantity, unitPrice, discountData) => {
    if (!discountData) return 0;
    const discountPercentage = calculateDiscountPercentage(
      quantity,
      discountData
    );
    const discountAmount = unitPrice * quantity * (discountPercentage / 100);
    const discountPrice = unitPrice * quantity - discountAmount;
    return discountPrice.toFixed(2);
  };
  const updateItemQuantity = (id: number, quantity: number) => {
    setCardSetproduct(
      cardSetproduct.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div className="container_xxl tracking-wider overflow-hidden px-3">
      <div className="grid grid-cols-3 lg:grid-cols-10 my-5">
        <div className="h-full py-5 lg:pr-6 col-span-3 order-3 lg:order-1 ">
          <div>{response.description}</div>
        </div>
        <div className="bg-white order-1 lg:order-2 flex flex-col items-start p-2 lg:p-5 col-span-3 lg:col-span-4 relative">
          <div className="flex justify-end w-full"></div>

          <div
            className={`flex justify-center mt-10 w-full h-full items-center ${
              isActive !== 1 && "hidden"
            }`}
          >
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
          <div className="border-0 border-l ps-8">
            <div className="font-medium text-fs_4 flex items-center gap-4 mb-4">
              <h2 className="font-Articulat">Ваш набор</h2>
              <h2>Майя</h2>
            </div>
            <ul className="divide-y divide-lightSecondary">
              {cardSetproduct?.map((item) => (
                <li className="group grid grid-cols-12  py-5 ">
                  <div className="col-span-3 h-[56px]">
                    {item?.product_sets?.images_set?.length > 0 && (
                      <img
                        src={
                          item?.product_sets?.images_set[0]?.image ||
                          item?.product_sets?.images_set[0]?.image_url
                        }
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="col-span-6 h-full w-full text-fs_8 flex flex-col justify-between ">
                    <h4 className="font-medium leading-4 line-clamp-2 tracking-wide text-fs_8">
                      {item?.product_sets?.name}
                    </h4>
                    <p className="font-normal mt-1">
                      {item?.product_sets?.price}{" "}
                      {item?.product_sets?.price_type}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 duration-300 col-span-3 h-full flex justify-end">
                    <div className="flex w-full flex-col justify-between items-end h-full text-darkSecondary ">
                      <IoCloseSharp
                        className="cursor-pointer"
                        onClick={() =>
                          setCardSetproduct((prev) =>
                            prev.filter(
                              (el) =>
                                el?.product_sets?.id !== item?.product_sets.id
                            )
                          )
                        }
                      />

                      {quantityVisible === item.id ? (
                        <input
                          value={item.quantity}
                          onChange={(e) =>
                            updateItemQuantity(item?.id, Number(e.target.value))
                          }
                          className="w-[50px] px-2 text-black border border-black rounded-lg focus: outline-none"
                        />
                      ) : (
                        <IoAddSharp
                          className="cursor-pointer"
                          onClick={() => setQuantityVisible(item.id)}
                        />
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <>
            <div className="py-4">
              {response?.sizes?.length >= 0 && (
                <div className="mt-4">
                  <p className="text-darkSecondary text-fs_8 tracking-wide font-semibold">
                    РАЗМЕР:
                  </p>
                  <div className="flex space-x-2">
                    {response?.sizes?.map(
                      (item, i) =>
                        item.name && (
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
            <div className="my-2 w-full add-applying font-Helvetica-Neue ">
              <Select
                placeholder={"Select Version"}
                label="Добавить нанесение"
                onChange={(e) =>
                  setProductItem((prev) => ({ ...prev, application: e }))
                }
              >
                {responsePrint?.map((item) => (
                  <Option key={item.id}>{item.title}</Option>
                ))}
              </Select>
            </div>
            <div className="">
              <div className="bg-white rounded-xs py-2 px-3 mb-5">
                <div className="border-b border-gray-500">
                  <div className="flex justify-between items-center py-1">
                    <p className="font-normal">Количество:</p>
                    <input
                      value={productItem.quantity}
                      onChange={(e) =>
                        setProductItem((prev) => ({
                          ...prev,
                          quantity: Number(e.target.value),
                        }))
                      }
                      className={`${
                        productItem.quantity < 1 ? "border-redPrimary" : ""
                      } border w-[50px] bg-transparent text-fs_7 border-black rounded-md outline-none px-2 tracking-wider font-normal`}
                    />
                  </div>
                  <div className="w-full px-2 py-2">
                    <RangeSlider
                      min={0}
                      max={100}
                      value={[0]}
                      onInput={handleRangeChange}
                      className="range-slider"
                    />
                    <div className="flex justify-between text-[10px] font-normal py-2">
                      {productItem?.discounts?.map((item, i) => (
                        <p key={i}>
                          {item?.name}% <br />
                          {item?.count} шт.
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1 font-normal">
                    <p>Стоимость тиража:</p>
                    <div>
                      {response?.discount_price > 0
                        ? formatPrice(response?.discount_price)
                        : formatPrice(response?.price)}
                      <span className="ml-1">{response?.price_type}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <p>Скидка:</p>
                    <p>{productItem.discount}% </p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-3 py-1 text-base">
                  <b className="">Итоговая стоимость:</b>
                  <b className="">
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
                <span className="text-[9px] lg:text-[10px] text-[#666666] border border-[#666666] px-1 lg:px-4 py-[6px] rounded-lg uppercase">
                  <b>бесплатный дизайн макет</b>
                </span>
              </div>
            </div>
          </>
        </div>
      </div>
      <div className="mb-16 mt-16 w-[70%]">
        <Tabs value={activeTab}>
          <TabsHeader
            placeholder={<div />}
            className="bg-transparent border-0 border-b-2 gap-16 rounded-none p-0 m-0"
            indicatorProps={{
              className:
                "bg-transparent border-0 border-b-4 border-redPrimary  shadow-none rounded-none",
            }}
          >
            {CategoryTabs.map(({ label, value }) => (
              <Tab
                placeholder={<div />}
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                activeClassName="text-[#fff]"
                className="text-[18px] font-medium p-0  font-Helvetica-Neue uppercase h-[60px] text-darkSecondary w-auto  text-start tracking-normal"
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
                {item?.content}
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
