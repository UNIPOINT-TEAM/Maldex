import { Checkbox } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getAllCarts, updateCart } from "../../store/cartSlice";
import { IoCloseSharp } from "react-icons/io5";
import { formatPrice } from "../../utils/FormatPrice";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [checkoutData, setCheckoutData] = useState({
    company_name: "",
    name: "",
    phone: "",
    email: "",
  });
  const [isActiveCheckBtn, setIsActiveCheckBtn] = useState<boolean>(false);
  const { totalAmount } = useSelector((state) => state.cart);
  const carts = useSelector(getAllCarts);
  const dispatch = useDispatch();
  const handleUpdateCart = (
    id: number,
    quantity: any,
    discount_price: number,
    price: number
  ) => {
    const totalPrice =
      discount_price > 0 ? quantity * discount_price : quantity * price;
    if (!quantity) {
      return dispatch(updateCart({ id, quantity: 0, totalPrice: 0 }));
    }
    if (isNaN(quantity)) {
      return dispatch(updateCart({ id, quantity: 1, totalPrice }));
    }
    dispatch(updateCart({ id, quantity, totalPrice }));
  };
  console.log(checkoutData);
  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const url =
        "https://maldex.bitrix24.ru/rest/1/ej9v1l5jpvxpzi8s/crm.lead.add"; // Пример правильного URL

      const data = {
        fields: {
          COMPANY_NAME: checkoutData.company_name,
          NAME: checkoutData.name,
          PHONE: [{ VALUE: checkoutData.phone, VALUE_TYPE: "WORK" }],
          EMAIL: checkoutData.email,
          PRODUCTS: carts.map((cartItem) => ({
            PRODUCT_NAME: cartItem.name,
            QUANTITY: cartItem.quantity,
            PRICE:
              cartItem.discount_price > 0
                ? cartItem.discount_price
                : cartItem.price,
          })),
        },
      };

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response from Bitrix24:", response.data);
      dispatch(clearCart());
    } catch (error) {
      console.error("Error sending data to Bitrix24:", error);
    }
  };
  const handleGetData = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    setCheckoutData({ ...checkoutData, [e.target.id]: e.target.value });
  };
  return (
    <div className="container_xxl my-10 px-3  pb-6">
      <div className="flex flex-col md:flex-row justify-between md:divide-x ">
        <div className="w-full md:w-1/2 py-3 md:pe-6">
          <h2 className="text-fs_6 font-medium mb-4">
            Заполните поля для <br /> оформления заказа
          </h2>
          <form className="bg-[#fff] py-6 " onSubmit={handleCheckout}>
            <div className="mb-4">
              <input
                id="company_name"
                onChange={handleGetData}
                required
                placeholder="Название компании"
                className=" outline-none border-0 border-b border-darkPrimary  w-full py-3  text-darkPrimary leading-tight placeholder:text-darkPrimary text-base font-medium"
              />
            </div>
            <div className="mb-4">
              <input
                id="name"
                onChange={handleGetData}
                required
                placeholder="ФИО*"
                className=" outline-none border-0 border-b border-darkPrimary  w-full py-3  text-darkPrimary leading-tight placeholder:text-darkPrimary text-base font-medium"
              />
            </div>
            <div className="mb-4">
              <input
                id="phone"
                onChange={handleGetData}
                type="tel"
                required
                placeholder="Телефон*"
                className=" outline-none border-0 border-b border-darkPrimary  w-full py-3  text-darkPrimary leading-tight placeholder:text-darkPrimary text-base font-medium"
              />
            </div>

            <div className="mb-4">
              <input
                id="email"
                onChange={handleGetData}
                type="email"
                required
                placeholder="Почта*"
                className=" outline-none border-0 border-b border-darkPrimary  w-full py-3  text-darkPrimary leading-tight placeholder:text-darkPrimary text-base font-medium"
              />
            </div>
            <Checkbox
              ripple={false}
              onChange={() => setIsActiveCheckBtn(!isActiveCheckBtn)}
              value={isActiveCheckBtn}
              className="h-6 w-6  border-none bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
              label={
                <p className="font-Helvetica-Neue text-fs_8  font-normal">
                  Согласен в обработкой персональных данных и политикой
                  конфиденциальности
                </p>
              }
            />
            <div className=" flex items-center gap-8">
              <Link
                to={-1}
                className="h-[50px] md:h-[60px] text-fs_6 font-medium flex items-center text-lightSecondary"
              >
                Назад
              </Link>
              <button
                type="submit"
                disabled={!isActiveCheckBtn}
                className="bg-greenPrimary disabled:opacity-60 disabled:cursor-not-allowed flex-1 h-[50px] md:h-[60px] uppercase text-fs_7 hover:opacity-80 duration-200 text-[#fff] font-bold py-2 px-4 rounded-[10px] "
              >
                Оформить заказ
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ps-6">
          <h2 className="text-[22px] text-greenPrimary font-medium mb-4">
            Ваш набор
          </h2>
          <div className="bg-[#fff] divide-y">
            {carts.map((item) => (
              <div className="group grid grid-cols-12 py-5 ">
                <div className="col-span-2 md:h-[75px]">
                  {item?.images_set?.length > 0 && (
                    <img
                      src={
                        item?.images_set[0]?.image ||
                        item?.images_set[0]?.image_url
                      }
                      className=" h-full object-contain"
                      alt=""
                    />
                  )}
                </div>
                <div className="col-span-7 h-full w-full text-base flex flex-col justify-between">
                  <h4 className="font-medium leading-4 line-clamp-1 md:line-clamp-2">
                    {item?.name}
                  </h4>
                  <p className="font-normal mt-1">
                    {item?.discount_price > 0
                      ? formatPrice(item?.discount_price)
                      : formatPrice(item?.price)}
                  </p>
                </div>
                <div className="md:opacity-0 group-hover:opacity-100 duration-300 col-span-3 h-full flex justify-end">
                  <div className="flex w-full flex-col justify-between items-end h-full text-darkSecondary ">
                    <IoCloseSharp className="cursor-pointer" />
                    <input
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateCart(
                          item.id,
                          parseInt(e.target.value),
                          item?.discount_price,
                          item?.price
                        )
                      }
                      className="w-[50px] px-2 text-black border border-black rounded-lg focus: outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="mt-4 font-bold">
                Итоговая стоимость: {totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
