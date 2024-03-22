import { ProductNav, QuestForm, SliderProduct } from "../../components";
import Product1 from "../../assets/images/machine.png";
import Trash from "../../assets/icons/trash.png";
import QuestionIcon from "../../assets/icons/questionIcon.png";

const Card = () => {
    return (
        <>
            <div className="home">
                <div className="card container_xxl my-10 px-3">
                    <div className="flex items-center">
                        <p className="text-[28px] font-medium">06</p> &nbsp;
                        <div className="flex flex-col">
                            <p className="text-[10px]">
                                НОЯ <br /> 2023
                            </p>
                        </div>
                    </div>
                    <p className="text-[28px] font-medium">Заказ №5750067</p>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full sm:w-3/4 py-1">
                            <div className="hidden sm:block mb-5">
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[60px] py-5">
                                    <div className="grid grid-cols-12 grid-rows-1 gap-4">
                                        <div className="col-span-2 h-[150px] border border-gray-500 rounded-xl p-3 flex justify-center items-center">
                                            <img
                                                className="w-full"
                                                src={Product1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-span-5 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-[16px] text-slate-950 font-medium">
                                                        Инновационный очиститель
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-[16px] text-slate-950">
                                                        обеззараживатель, <br />
                                                        озонатор воздуха
                                                    </p>
                                                </div>
                                                <div className="row-span-1">
                                                    <p className="text-fs_7 teext-slate-950 row-span-1">
                                                        Артикул: 107045356
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-[16px] teext-slate-950">
                                                        15 185.55 ₽
                                                    </p>
                                                </div>
                                                <div className="row-span-3 py-1">
                                                    <p className="text-fs_8 teext-slate-950 row-span-1">
                                                        7% Скидка{" "}
                                                    </p>
                                                </div>
                                                <div className="row-span-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 ">
                                            <div className="grid grid-rows-5 ">
                                                <div className="row-span-1">
                                                    <p className="text-[16px] teext-slate-950">
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
                                                <img src={Trash} alt="" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:hidden mb-5">
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-5">
                                    <div className="flex justify-between items-center gap-4 h-[120px] mb-3">
                                        <div className="w-1/3">
                                            <div className="border border-gray-400 rounded-md w-[140px] h-[140px]">
                                                <img
                                                    className="w-[140px] h-[140px]"
                                                    src={Product1}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/3 flex flex-col justify-between h-full">
                                            <p className="text-lg teext-slate-950">
                                                15 185.55 ₽
                                            </p>
                                            <p className="text-xs teext-slate-950 row-span-1">
                                                7% Скидка{" "}
                                            </p>
                                            <p className="text-lg teext-slate-950">
                                                Размер
                                            </p>
                                            <p className="text-lg teext-slate-950">
                                                M
                                            </p>
                                        </div>
                                        <div className="w-1/3 flex flex-col justify-between h-full items-end">
                                            <button>
                                                <img src={Trash} alt="" />
                                            </button>
                                            <div>
                                                <p className="text-lg text-black-900 mb-1">
                                                    Количество
                                                </p>
                                                <button className="border border-gray-400 px-3 rounded">
                                                    20
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg teext-slate-950">
                                        Инновационный очиститель
                                    </p>
                                    <p className="text-sm teext-slate-950 mb-2">
                                        обеззараживатель, озонатор воздуха
                                    </p>
                                    <p className="text-xs teext-slate-950 row-span-1">
                                        Артикул: 107045356
                                    </p>
                                </div>
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-5">
                                    <div className="flex justify-between items-center gap-4 h-[120px] mb-3">
                                        <div className="w-1/3">
                                            <div className="border border-gray-400 rounded-md w-[140px] h-[140px]">
                                                <img
                                                    className="w-[140px] h-[140px]"
                                                    src={Product1}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/3 flex flex-col justify-between h-full">
                                            <p className="text-lg teext-slate-950">
                                                15 185.55 ₽
                                            </p>
                                            <p className="text-xs teext-slate-950 row-span-1">
                                                7% Скидка{" "}
                                            </p>
                                            <p className="text-lg teext-slate-950">
                                                Размер
                                            </p>
                                            <p className="text-lg teext-slate-950">
                                                M
                                            </p>
                                        </div>
                                        <div className="w-1/3 flex flex-col justify-between h-full items-end">
                                            <button>
                                                <img src={Trash} alt="" />
                                            </button>
                                            <div>
                                                <p className="text-lg text-black-900 mb-1">
                                                    Количество
                                                </p>
                                                <button className="border border-gray-400 px-3 rounded">
                                                    20
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg teext-slate-950">
                                        Инновационный очиститель
                                    </p>
                                    <p className="text-sm teext-slate-950 mb-2">
                                        обеззараживатель, озонатор воздуха
                                    </p>
                                    <p className="text-xs teext-slate-950 row-span-1">
                                        Артикул: 107045356
                                    </p>
                                </div>
                                <div className="CardItem border-t-2 w-full border-gray-400 mt-2 mb-[40px] py-5">
                                    <div className="flex justify-between items-center gap-4 h-[120px] mb-3">
                                        <div className="w-1/3">
                                            <div className="border border-gray-400 rounded-md w-[140px] h-[140px]">
                                                <img
                                                    className="w-[140px] h-[140px]"
                                                    src={Product1}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="w-1/3 flex flex-col justify-between h-full">
                                            <p className="text-lg teext-slate-950">
                                                15 185.55 ₽
                                            </p>
                                            <p className="text-xs teext-slate-950 row-span-1">
                                                7% Скидка{" "}
                                            </p>
                                            <p className="text-lg teext-slate-950">
                                                Размер
                                            </p>
                                            <p className="text-lg teext-slate-950">
                                                M
                                            </p>
                                        </div>
                                        <div className="w-1/3 flex flex-col justify-between h-full items-end">
                                            <button>
                                                <img src={Trash} alt="" />
                                            </button>
                                            <div>
                                                <p className="text-lg text-black-900 mb-1">
                                                    Количество
                                                </p>
                                                <button className="border border-gray-400 px-3 rounded">
                                                    20
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg teext-slate-950">
                                        Инновационный очиститель
                                    </p>
                                    <p className="text-sm teext-slate-950 mb-2">
                                        обеззараживатель, озонатор воздуха
                                    </p>
                                    <p className="text-xs teext-slate-950 row-span-1">
                                        Артикул: 107045356
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/4 mx-0 sm:mx-5 ">
                            <p className="text-2xl mb-5">Ваш заказ</p>
                            <div className="flex justify-between items-center w-full mb-3">
                                <p className="text-lg">Общий тираж:</p>
                                <p className="text-lg">256</p>
                            </div>
                            <div className="flex justify-between items-center w-full mb-3">
                                <p className="text-lg">Стоимость тиража:</p>
                                <p className="text-lg">80 619,00 ₽ </p>
                            </div>
                            <div className="flex justify-between items-center w-full mb-3">
                                <p className="text-lg">Общая скидка:</p>
                                <p className="text-lg">5% </p>
                            </div>
                            <div className="flex justify-between items-center w-full pb-8 mb-5 border-b-2 border-gray-500">
                                <p className="text-lg text-teal-200">
                                    + Добавить нанесение
                                </p>
                                <img src={QuestionIcon} alt="" />
                            </div>
                            <div className="flex justify-between items-center w-full mb-5">
                                <p className="text-xl">Итоговая стоимость:</p>
                                <p className="text-xl">14 619,00 ₽ </p>
                            </div>
                            <button className="w-full rounded-xl bg-black text-white p-3 text-lg mb-2">
                                оформить
                            </button>
                            <div className="flex justify-center items-center w-full mb-5 gap-4">
                                <button className="text-sm rounded-xl border-2 px-2 py-1 border-teal-200 text-teal-200">
                                    Поделиться корзиной{" "}
                                </button>
                                <button className="hidden sm-block text-sm rounded-xl border-2 px-2 py-1 border-teal-200 text-teal-200">
                                    создать кп
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="section-title ">Вам точно понравится</p>
                </div>
                <div className="container_xxl px-3">
                    <div className="">
                        <ProductNav />
                    </div>
                </div>
                <SliderProduct />
                <QuestForm />
            </div>
        </>
    );
};

export default Card;
