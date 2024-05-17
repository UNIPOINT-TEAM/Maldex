import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Close from "../../assets/icons/close.png";
import Trash from "../../assets/icons/trash.png";
import QuestionIcon from "../../assets/icons/questionIcon.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFetchHook } from "../../hooks/UseFetch";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getAllCarts,
  removeFromCart,
  updateCart,
} from "../../store/cartSlice";
import { MdAdd } from "react-icons/md";
import ProductsCard from "../MainProductFilter/ProductsCard";
import CartProductCarusel from "./CartProductCarusel";

const CardModal = () => {
  const [activeCard, setActiveCard] = useState(false);
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount, totalQuantity } = useSelector(
    (state: any) => state.cart
  );
  const dispatch = useDispatch();

  const handleUpdateCart = (id: number, quantity: string) => {
    const quantityNumber = parseInt(quantity);
    if (isNaN(quantityNumber)) {
      return dispatch(updateCart({ id, quantity: 1 }));
    }
    dispatch(updateCart({ id, quantity: quantityNumber }));
  };
  console.log(totalAmount);

  return (
    <>
      <div className="hidden sm:block">
        <div
          className={`overLay fixed w-full h-full bg-[#00000083] ${
            activeCard ? "block" : "hidden"
          } top-0 right-0 z-[999]`}
          onClick={() => setActiveCard(false)}
        ></div>
        <button
          onClick={() => setActiveCard(!activeCard)}
          className=" flex items-center w-[120px] bg-white h-[30px] lg:h-[36px] rounded-full"
        >
          <div className="bg-redPrimary text-fs_8 h-full w-[30px] lg:w-[36px] rounded-full flex items-center justify-center">
            <span className="text-white">{itemsCount}</span>
          </div>
          <span className="text-darkPrimary text-fs_8 font-bold ml-1 me-3">
            {totalAmount} ₽
          </span>
        </button>
        {activeCard && (
          <div className="absolute w-[700px] z-[99999]  bg-white top-0 right-0 rounded-xl">
            <div className="w-full h-full p-5 mb-5">
              <div className="flex justify-between items-center  pt-2">
                <p className="text-xl">Корзина</p>
                <button onClick={() => setActiveCard(!activeCard)}>
                  <img src={Close} alt="" />
                </button>
              </div>
              <div className="overflow-y-scroll max-h-[400px] scrollbar-custom  mb-5">
                {carts?.map((item) => (
                  <div className="CardItem border-t w-full border-[#cbcac6] mt-2 mb-[40px] py-3">
                    <div className="grid grid-cols-12 grid-rows-1 gap-4">
                      <div className="col-span-2 h-[100px] border border-lightPrimary rounded-xl  flex justify-center items-center">
                        <img
                          className="w-full h-full rounded-xl object-cover"
                          src={item.images_set[0].image_url}
                          alt=""
                        />
                      </div>
                      <div className="col-span-5 ">
                        <div className="grid grid-rows-5">
                          <div className="row-span-1">
                            <h2 className="text-base font-bold">
                              {item?.name?.slice(0, 25)}...
                            </h2>
                          </div>
                          <div className="row-span-1">
                            <p className="text-xs teext-slate-950 row-span-1">
                              Артикул: {item?.article}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-rows-5">
                        <div className="row-span-1">
                          <p className="text-sm font-bold">
                            {item?.discount_price} ₽
                          </p>
                        </div>
                        <div className="row-span-3 py-1">
                          <p className="text-sm font-medium line-through">
                            {item?.price}
                          </p>
                        </div>
                        <div className="row-span-1">
                          <p className="text-xs teext-slate-950 ">
                            {item?.discount}% Скидка
                          </p>
                        </div>
                      </div>
                      <div className="col-span-2 text-base leading-snug">
                        <div className="grid grid-rows-5 ">
                          <div className="row-span-1">
                            <p className="m-0">Размер</p>
                          </div>
                          <div className="row-span-2">
                            <p className="m-0">Один размер</p>
                          </div>
                          <div className="row-span-2">
                            <p className="">Количество</p>
                            <input
                              placeholder=""
                              onChange={(e) =>
                                handleUpdateCart(item.id, e.target.value)
                              }
                              value={item?.quantity}
                              className="w-[60px] text-center h-[30px] border border-darkPrimary text-fs_7 font-bold rounded-xl outline-none"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <img src={Trash} alt="trash-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full mb-4">
                <div className="flex justify-between gap-4">
                  <div className="col-span-3 flex flex-col items-start">
                    <div className="heading h-[60px] flex items-center">
                      <h2 className=" text-[22px]">Ваш заказ</h2>
                    </div>
                    <p className="row-span-1 text-fs_7 tracking-wide">
                      Общий тираж
                    </p>
                    <div className="min-w-[50px] px-2 h-[25px] flex items-center justify-center text-fs_7 font-bold border border-darkPrimary rounded-lg outline-none ">
                      {totalQuantity}
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-col items-start">
                    <div className="heading h-[60px] flex items-center">
                      <MdAdd className="text-greenPrimary" />
                      <p className="row-span-2 text-fs_9 tracking-wide text-greenPrimary uppercase font-bold">
                        Добавить нанесение
                      </p>
                    </div>
                    <div className="text-fs_7 font-normal tracking-wide">
                      <p className="m-0">Стоимость тиража</p>
                      <p>80 619,00 ₽ </p>
                    </div>
                  </div>
                  <div className="col-span-3 flex  flex-col items-start">
                    <div className="heading h-[60px]  flex items-center ">
                      <img src={QuestionIcon} alt="" />
                    </div>
                    <div className="text-fs_7 font-normal tracking-wide">
                      <p className="">Общая скидка</p>
                      <p className="">5%</p>
                    </div>
                  </div>
                  <div className="col-span-3 flex flex-col items-start">
                    <div className="heading h-[60px] flex items-center"></div>
                    <div className="text-fs_7 font-normal tracking-wide">
                      <p className=" font-bold">Итоговая стоимость:</p>
                      <p className="font-bold">{totalAmount} ₽ </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"/cart"}>
                <button
                  onClick={() => setActiveCard(false)}
                  className="bg-black mt-4 text-fs_7 tracking-wide font-bold w-[270px] h-[50px] text-white py-3 rounded-lg uppercase "
                >
                  перейти в корзину
                </button>
              </Link>
            </div>
            <p className="text-[28px] font-medium uppercase text-gray-500 mb-5 px-3">
              вам точно понравится
            </p>
            <CartProductCarusel />
          </div>
        )}
      </div>
    </>
  );
};
export default CardModal;
