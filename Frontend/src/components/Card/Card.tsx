import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product1 from "../../assets/images/product4.png";
import Close from "../../assets/icons/close.png";
import Trash from "../../assets/icons/trash.png";
import QuestionIcon from "../../assets/icons/questionIcon.png";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFetchHook } from "../../hooks/UseFetch";
import { CiSearch } from "react-icons/ci";

const CardModal = () => {
    const [activeCard, setActiveCard] = useState(false);
    const { fetchData, response } = useFetchHook();
    useEffect(() => {
        fetchData({ method: "GET", url: "/product/" });
    }, []);
    return (
        <>
            <Link
                to={"card"}
                className="sm:hidden flex items-center w-[120px] bg-white h-[30px] lg:h-[36px] rounded-full"
            >
                <div className="bg-redPrimary text-base h-full w-[30px] lg:w-[36px] rounded-full flex items-center justify-center">
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
                                    <img src={Close} alt="" />
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
                                                <img src={Trash} alt="" />
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
                                                <img src={Trash} alt="" />
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
                                                <img src={Trash} alt="" />
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
                                                <img src={Trash} alt="" />
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
                                                <img src={Trash} alt="" />
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
                                        <div className="row-span-1 w-1/4 flex justify-center items-center ">
                                            <input
                                                type="text"
                                                placeholder="20"
                                                className="w-[40px] h-[30px] border border-gray-500 rounded-lg outline-none px-2"
                                            />
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
                                            <img src={QuestionIcon} alt="" />
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
                                    className="bg-black w-1/3 text-white py-3 rounded-xl "
                                >
                                    перейти в корзину
                                </button>
                            </Link>
                        </div>
                        <p className="text-[28px] font-medium text-gray-500 mb-5 px-3">вам точно понравится</p>
                        <div className="w-full px-3">
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={{
                                    prevEl: ".prevCard",
                                    nextEl: ".nextCard",
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                                // @ts-ignore

                                modules={[Navigation]}
                                className=" w-full overscroll-x-auto h-[450px]"
                            >
                                {/* @ts-ignore */}
                                {response.results?.map((item) => (
                                    <SwiperSlide className="w-full">
                                        <div className="catalog ">
                                            <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                                                <Swiper
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    modules={[
                                                        Navigation,
                                                        Pagination,
                                                    ]}
                                                    className="  h-full"
                                                >
                                                    <SwiperSlide className="w-full h-full">
                                                        <div className="relative  h-full">
                                                            <div className="flex justify-center items-center h-full">
                                                                <img
                                                                    className="mb-2 w-[50px] h-[50px] object-contain product-img"
                                                                    //@ts-ignore
                                                                    src={
                                                                        item.image
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </Swiper>
                                                <div className="absolute z-[9999] top-[10px] right-[15px] flex flex-col gap-1 swiper-opacity">
                                                    <button
                                                        className={`w-[8px] h-[8px] bg-redPrimary rounded-[4px]`}
                                                    ></button>
                                                    <button
                                                        className={`w-[8px] h-[8px] bg-orange-600 rounded-[4px]`}
                                                    ></button>
                                                    <button
                                                        className={`w-[8px] h-[8px] bg-green-600 rounded-[4px]`}
                                                    ></button>
                                                    <button
                                                        className={`w-[8px] h-[8px] bg-greenPrimary rounded-[4px]`}
                                                    ></button>
                                                    <button
                                                        className={`w-[8px] h-[8px] bg-blue-600 rounded-[4px]`}
                                                    ></button>
                                                    <button
                                                        className={`w-[8px] h-[8px] bg-purple-600 rounded-[4px]`}
                                                    ></button>
                                                    <button
                                                        className={`w-[8px] h-[8px] bg-indigo-600 rounded-[4px]`}
                                                    ></button>
                                                </div>
                                                <div className="absolute z-[999] top-2 right-2 swiper-opacity"></div>
                                                <div className="absolute z-[999] top-2 left-2 flex gap-2">
                                                    <div className="border border-redPrimary text-[10px] text-redPrimary rounded-lg px-1">
                                                        NEW
                                                    </div>
                                                    <div className="border border-black text-[10px] text-black rounded-lg px-1">
                                                        HIT
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="default">
                                                <div className="mb-5 min-h-[70px] ">
                                                    <p className="text-fs_7 tracking-wide">
                                                        {
                                                            //@ts-ignore
                                                            item.name.length >
                                                            30
                                                                ? //@ts-ignore
                                                                  item.name.substring(
                                                                      0,
                                                                      40
                                                                  ) + "..."
                                                                : //@ts-ignore
                                                                  item.name
                                                        }
                                                    </p>
                                                </div>
                                                <p className="mb-2 text-gray-600 text-fs_8">
                                                    {item.vendor_code}
                                                </p>
                                                <div className="relative mb-2">
                                                    <p className="text-fs_4">
                                                        {item.price}
                                                        <span className="text-xs absolute top-0">
                                                            12
                                                        </span>
                                                        <span className="ml-4 mr-1">
                                                            {item.price_type}
                                                        </span>
                                                        <span className="text-xs absolute top-0 line-through text-redPrimary">
                                                            234
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="flex justify-between catalog_btns">
                                                    <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg text-sm shadow-gray-400 w-[120px]">
                                                        + В корзину
                                                    </button>

                                                    <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                                                        <Link
                                                            to={"category/1"}
                                                            className="w-full h-full flex justify-center items-center"
                                                        >
                                                            <CiSearch />
                                                        </Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="hidden lg:flex prevCard text-black  hover:text-white">
                                <FaArrowLeftLong />
                            </div>
                            <div className="hidden lg:flex nextCard text-black hover:text-white">
                                <FaArrowRightLong />
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
export default CardModal;
