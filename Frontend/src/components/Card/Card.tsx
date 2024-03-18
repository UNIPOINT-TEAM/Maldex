import { useState } from "react";
import { Link } from "react-router-dom";
import Product1 from "../../assets/images/product4.png";
import { SliderProduct } from "..";

const CardModal = () => {
    const [activeCard, setActiveCard] = useState(false);
    return (
        <>
            <Link
                to={"card"}
                className="sm:hidden flex items-center w-[120px] bg-white h-[30px] lg:h-[36px] rounded-full"
            >
                <div className="bg-redPrimary text-fs_8 h-full w-[30px] lg:w-[36px] rounded-full flex items-center justify-center">
                    <span className="text-white">3</span>
                </div>
                <span className="text-darkPrimary text-fs_8 font-bold ml-1 me-3">
                    14 619,00 ₽
                </span>
            </Link>
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
                        <span className="text-white">3</span>
                    </div>
                    <span className="text-darkPrimary text-fs_8 font-bold ml-1 me-3">
                        14 619,00 ₽
                    </span>
                </button>
                {activeCard && (
                    <div className="absolute w-[700px] z-[99999] min-h-[700px] bg-white top-0 right-0 rounded-xl">
                        <div className="w-full h-full p-3 mb-5">
                            <div className="flex justify-between items-center px-3 pt-2">
                                <p className="text-xl">Корзина</p>
                                <button
                                    onClick={() => setActiveCard(!activeCard)}
                                >
                                    <i className="fa-solid fa-xmark text-xl"></i>
                                </button>
                            </div>
                            <div className="overflow-y-scroll h-[500px] scrollbar-custom pr-3 mb-5">
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-3">
                                    <div className="grid grid-cols-12 grid-rows-1 gap-4">
                                        <div className="col-span-2 h-[100px] border border-gray-500 rounded-xl p-3 flex justify-center items-center">
                                            <img
                                                className="w-full"
                                                src={Product1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-span-5 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Инновационный очиститель
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        обеззараживатель,
                                                        озонатор воздуха
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        Артикул: 107045356
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        15 185.55 ₽
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        16 564{" "}
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        7% Скидка
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Один размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2">
                                                    <p className="text-xs teext-slate-950 row-span-1 mb-1">
                                                        Количество
                                                    </p>
                                                    <div className="w-1/2 flex justify-center items-center border border-slate-500 rounded-xl">
                                                        <p className="">20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <button>
                                                <i className="fa-solid fa-trash-can text-xl text-gray-500"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-3">
                                    <div className="grid grid-cols-12 grid-rows-1 gap-4">
                                        <div className="col-span-2 h-[100px] border border-gray-500 rounded-xl p-3 flex justify-center items-center">
                                            <img
                                                className="w-full"
                                                src={Product1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-span-5 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Инновационный очиститель
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        обеззараживатель,
                                                        озонатор воздуха
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        Артикул: 107045356
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        15 185.55 ₽
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        16 564{" "}
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        7% Скидка{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Один размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2">
                                                    <p className="text-xs teext-slate-950 row-span-1 mb-1">
                                                        Количество
                                                    </p>
                                                    <div className="w-1/2 flex justify-center items-center border border-slate-500 rounded-xl">
                                                        <p className="">20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <button>
                                                <i className="fa-solid fa-trash-can text-xl text-gray-500"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-3">
                                    <div className="grid grid-cols-12 grid-rows-1 gap-4">
                                        <div className="col-span-2 h-[100px] border border-gray-500 rounded-xl p-3 flex justify-center items-center">
                                            <img
                                                className="w-full"
                                                src={Product1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-span-5 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Инновационный очиститель
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        обеззараживатель,
                                                        озонатор воздуха
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        Артикул: 107045356
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        15 185.55 ₽
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        16 564{" "}
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        7% Скидка{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Один размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2">
                                                    <p className="text-xs teext-slate-950 row-span-1 mb-1">
                                                        Количество
                                                    </p>
                                                    <div className="w-1/2 flex justify-center items-center border border-slate-500 rounded-xl">
                                                        <p className="">20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <button>
                                                <i className="fa-solid fa-trash-can text-xl text-gray-500"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-3">
                                    <div className="grid grid-cols-12 grid-rows-1 gap-4">
                                        <div className="col-span-2 h-[100px] border border-gray-500 rounded-xl p-3 flex justify-center items-center">
                                            <img
                                                className="w-full"
                                                src={Product1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-span-5 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Инновационный очиститель
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        обеззараживатель,
                                                        озонатор воздуха
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        Артикул: 107045356
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        15 185.55 ₽
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        16 564{" "}
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        7% Скидка{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Один размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2">
                                                    <p className="text-xs teext-slate-950 row-span-1 mb-1">
                                                        Количество
                                                    </p>
                                                    <div className="w-1/2 flex justify-center items-center border border-slate-500 rounded-xl">
                                                        <p className="">20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <button>
                                                <i className="fa-solid fa-trash-can text-xl text-gray-500"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-3">
                                    <div className="grid grid-cols-12 grid-rows-1 gap-4">
                                        <div className="col-span-2 h-[100px] border border-gray-500 rounded-xl p-3 flex justify-center items-center">
                                            <img
                                                className="w-full"
                                                src={Product1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-span-5 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Инновационный очиститель
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        обеззараживатель,
                                                        озонатор воздуха
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        Артикул: 107045356
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        15 185.55 ₽
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        16 564{" "}
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-xs teext-slate-950 row-span-1">
                                                        7% Скидка{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2 py-1">
                                                    <p className="text-sm teext-slate-950">
                                                        Один размер
                                                    </p>
                                                </div>
                                                <div className="row-span-2">
                                                    <p className="text-xs teext-slate-950 row-span-1 mb-1">
                                                        Количество
                                                    </p>
                                                    <div className="w-1/2 flex justify-center items-center border border-slate-500 rounded-xl">
                                                        <p className="">20</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <button>
                                                <i className="fa-solid fa-trash-can text-xl text-gray-500"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-10 grid-rows-1 gap-4 mb-4">
                                <div className="col-span-2 row-span-1 h-[110px]">
                                    <div className="grid grid-cols-1 grid-rows-4 h-full">
                                        <p className="row-span-2 text-2xl ">
                                            Ваш заказ
                                        </p>
                                        <p className="row-span-1">
                                            Общий тираж
                                        </p>
                                        <div className="row-span-1 w-1/4 flex justify-center items-center border border-slate-500 rounded-lg">
                                            <p className="">20</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 row-span-1">
                                    <div className="grid grid-cols-1 grid-rows-4 h-full">
                                        <p className="row-span-2 text-lg text-teal-200">
                                            + Добавить нанесение
                                        </p>
                                        <p className="row-span-1">
                                            Стоимость тиража
                                        </p>
                                        <div className="row-span-1 flex justify-start items-center ">
                                            <p className="">80 619,00 ₽ </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 row-span-1">
                                    <div className="grid grid-cols-1 grid-rows-4 h-full">
                                        <p className="row-span-2 text-lg">
                                            <i className="fa-regular fa-circle-question text-gray-400"></i>
                                        </p>
                                        <p className="row-span-1">
                                            Общая скидка
                                        </p>
                                        <div className="row-span-1 flex justify-start items-center ">
                                            <p className="">5% </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 row-span-1">
                                    <div className="grid grid-cols-1 grid-rows-4 h-full">
                                        <p className="row-span-2 text-lg"></p>
                                        <p className="row-span-1">
                                            Итоговая стоимость:
                                        </p>
                                        <div className="row-span-1 flex justify-start items-center ">
                                            <p className="">14 619,00 ₽ </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to={"/card"}>
                                <button
                                    onClick={() => setActiveCard(false)}
                                    className="bg-black w-1/3 text-white py-3 rounded-xl"
                                >
                                    перейти в корзину
                                </button>
                            </Link>
                        </div>
                        {/* <SliderProduct /> */}
                    </div>
                )}
            </div>
        </>
    );
};
export default CardModal;
