import { CartProductCarusel, QuestForm } from "../../components";
import Product1 from "../../assets/images/machine.png";
import Trash from "../../assets/icons/trash.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarts, removeFromCart, updateCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const carts = useSelector(getAllCarts);

  /* @ts-expect-error: This */
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);
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
  console.log(carts);
  return (
    <>
      <div className="home">
        <div className="card container_xxl my-10 px-3">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full sm:w-3/4 py-1">
              <div className="hidden sm:block mb-5">
                {carts?.map((item) => (
                  <div className="CardItem border-t w-full border-[#cbcac6] mt-2 mb-[60px] py-5">
                    <div className="grid grid-cols-12 grid-rows-1 gap-4">
                      <Link
                        to={`/category/${item.id}`}
                        className="col-span-2 w-[120px] h-[120px] border border-lightSecondary  rounded-xl  flex justify-center items-center"
                      >
                        <img
                          className=" w-full h-full rounded-xl object-cover"
                          src={
                            item.images_set[0].image_url
                              ? item.images_set[0].image_url
                              : item.images_set[0].image
                          }
                          alt="product-img"
                        />
                      </Link>
                      <div className="col-span-5 grid grid-rows-2">
                        <div className="row-span-1">
                          <p className="text-[16px] font-bold hover-position">
                            {item?.name}
                          </p>
                        </div>
                        <div className="row-span-1">
                          <p className="text-fs_7 teext-slate-950 row-span-1 hover-position">
                            Артикул: {item.article}
                          </p>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="grid grid-rows-5">
                          <div className="row-span-1 flex items-end gap-2">
                            <p className="text-[16px] font-bold hover-position">
                              {item?.discount_price} ₽
                            </p>
                            <p className="text-fs_8 line-through font-medium hover-position">
                              {item?.price}
                            </p>
                          </div>
                          <div className="row-span-3 py-1">
                            <p className="text-fs_8 teext-slate-950 row-span-1 hover-position">
                              0% Скидка
                            </p>
                          </div>
                          <div className="row-span-1"></div>
                        </div>
                      </div>
                      <div className="col-span-2 grid grid-rows-5">
                        <div className="row-span-1">
                          <p className="text-[16px] teext-slate-950 hover-position">
                            Размер
                          </p>
                        </div>
                        {item?.size && (
                          <div className="row-span-1">
                            <p className="text-sm hover-position">
                              {item?.size}
                            </p>
                          </div>
                        )}
                        <div className="row-span-2">
                          <p className="text-base teext-slate-950 row-span-1 mb-1 hover-position">
                            Количество
                          </p>
                          <div className="w-[50px] flex justify-center items-center rounded-xl">
                            <input
                              className="border border-black w-[50px] rounded-md px-1 outline-none"
                              placeholder="20"
                              onChange={(e) =>
                                handleUpdateCart(
                                  item?.id,
                                  Number(e.target.value),
                                  item?.discount_price,
                                  item?.price
                                )
                              }
                              type="text"
                              value={item?.quantity}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-1 flex items-start justify-end">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <img src={Trash} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sm:hidden mb-5">
                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-5">
                  <div className="flex justify-between items-center gap-4 h-[120px] mb-3">
                    <div className="w-1/3">
                      <div className="border border-gray-400 rounded-md w-[120px] h-[120px]">
                        <img
                          className="w-[120px] h-[120px]"
                          src={Product1}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="w-1/3 flex flex-col justify-between h-full">
                      <p className="text-[16px] text-slate-950 font-bold hover-position">
                        15 185.55 ₽
                      </p>
                      <p className="text-[12px] text-slate-950 row-span-1 hover-position">
                        7% Скидка{" "}
                      </p>
                      <p className="text-[16px] font-[400] teext-slate-950 hover-position">
                        Размер
                      </p>
                      <p className="text-[16px] font-bold text-slate-950">M</p>
                    </div>
                    <div className="w-1/3 flex flex-col justify-between h-full items-end">
                      <button>
                        <img src={Trash} alt="" />
                      </button>
                      <div>
                        <p className="text-lg text-black-900 mb-1">
                          Количество
                        </p>
                        <input
                          placeholder="20"
                          className="border border-gray-700 px-1 rounded w-[40px] outline-none"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-[14px] font-bold teext-slate-950">
                    Инновационный очиститель
                  </p>
                  <p className="text-[14px] font-[400] teext-slate-950 mb-2">
                    обеззараживатель, озонатор воздуха
                  </p>
                  <p className="text-xs teext-slate-950 row-span-1">
                    Артикул: 107045356
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/4 mx-0 sm:mx-5 ">
              <p className="text-[22px] font-normal mb-5 hover-position">
                Ваш заказ
              </p>
              <div className="flex justify-between items-center w-full mb-3 hover-position">
                <p className="text-sm font-[400] hover-position">
                  Общий тираж:
                </p>
                <p className="text-sm font-[400] hover-position">
                  {totalQuantity}
                </p>
              </div>
              <div className="flex justify-between items-center w-full mb-3">
                <p className="text-sm font-[400] hover-position">
                  Стоимость тиража:
                </p>
                <p className="text-sm font-[400] hover-position">
                  80 619,00 ₽{" "}
                </p>
              </div>
              <div className="flex justify-between items-center w-full mb-3">
                <p className="text-sm font-[400] hover-position">
                  Общая скидка:
                </p>
                <p className="text-sm font-[400] hover-position">5% </p>
              </div>

              <div className="flex justify-between items-center w-full mb-5">
                <p className="text-[16px] font-bold hover-position">
                  Итоговая стоимость:
                </p>
                <p className="text-[16px] font-bold">
                  {totalAmount?.toFixed(2)} ₽{" "}
                </p>
              </div>
              <Link
                to={"/checkout"}
                className="w-full block text-center rounded-xl bg-black uppercase text-white p-3 text-fs_7 font-semibold tracking-wider mb-2"
              >
                оформить
              </Link>
              <div className="flex justify-center items-center w-full mb-5 gap-4">
                <button className="text-[10px] rounded-lg border px-2 py-1 border-teal-200 text-teal-200 font-bold">
                  Поделиться корзиной
                </button>
                <button className="hidden sm:block text-[10px] rounded-lg border px-2 py-1 border-teal-200 text-teal-200 font-bold">
                  <Link to={"/admin/gallery/general-information"}>
                    создать кп
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container_xxl ">
          <CartProductCarusel />
        </div>

        <QuestForm />
      </div>
    </>
  );
};

export default Cart;
