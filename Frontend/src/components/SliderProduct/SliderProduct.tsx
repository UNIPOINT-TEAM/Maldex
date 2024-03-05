import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImg from "../../assets/images/carouselImg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

export default function App() {
    const [buttons, setButtons] = useState([
        { id: 1, color: "redPrimary", size: 8 },
        { id: 2, color: "orange-600", size: 8 },
        { id: 3, color: "green-600", size: 8 },
        { id: 4, color: "greenPrimary", size: 8 },
        { id: 5, color: "blue-600", size: 8 },
        { id: 6, color: "indigo-600", size: 8 },
        { id: 7, color: "purple-600", size: 8 },
    ]);

    const handleClick = (id: number) => {
        const updatedButtons = buttons.map((button) => {
            if (button.id === id) {
                return { ...button, size: 12 }; // Make clicked button bigger
            } else {
                return { ...button, size: 8 }; // Reset size of other buttons
            }
        });

        // Move clicked button to the first place
        const clickedButtonIndex = updatedButtons.findIndex(
            (button) => button.id === id
        );
        const clickedButton = updatedButtons.splice(clickedButtonIndex, 1)[0];
        updatedButtons.unshift(clickedButton);

        setButtons(updatedButtons);
    };

    return (
        <>
            <div className="container_xxl">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        prevEl: ".prev",
                        nextEl: ".next",
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper px-5 overscroll-x-auto"
                >
                    <SwiperSlide>
                        <div className="catalog px-1">
                            <div className="relative h-3/5 w-full catalogImgBox">
                                <Swiper
                                    pagination={true}
                                    modules={[Pagination]}
                                    className="swiper-item"
                                >
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
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
                            </div>
                            <div className="h-[100px]">
                                <p className="text-lg">
                                    Маска для лица многоразовая из хлопка,
                                    анатомической формы
                                </p>
                            </div>
                            <div className="relative mb-2">
                                <p className="text-xl">
                                    1234
                                    <span className="text-xs absolute top-0">
                                        12
                                    </span>
                                    <span className="ml-4 mr-1">₽</span>
                                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                                        234
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between catalog_btns">
                                <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                                    + В корзину
                                </button>
                                <button className="bg-gray-300 px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog px-1">
                            <div className="relative h-3/5 w-full catalogImgBox">
                                <Swiper
                                    pagination={true}
                                    modules={[Pagination]}
                                    className="swiper-item"
                                >
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
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
                            </div>
                            <div className="h-[100px]">
                                <p className="text-lg">
                                    Маска для лица многоразовая из хлопка,
                                    анатомической формы
                                </p>
                            </div>
                            <div className="relative mb-2">
                                <p className="text-xl">
                                    1234
                                    <span className="text-xs absolute top-0">
                                        12
                                    </span>
                                    <span className="ml-4 mr-1">₽</span>
                                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                                        234
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between catalog_btns">
                                <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                                    + В корзину
                                </button>
                                <button className="bg-gray-300 px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog px-1">
                            <div className="relative h-3/5 w-full catalogImgBox">
                                <Swiper
                                    pagination={true}
                                    modules={[Pagination]}
                                    className="swiper-item"
                                >
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
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
                            </div>
                            <div className="h-[100px]">
                                <p className="text-lg">
                                    Маска для лица многоразовая из хлопка,
                                    анатомической формы
                                </p>
                            </div>
                            <div className="relative mb-2">
                                <p className="text-xl">
                                    1234
                                    <span className="text-xs absolute top-0">
                                        12
                                    </span>
                                    <span className="ml-4 mr-1">₽</span>
                                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                                        234
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between catalog_btns">
                                <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                                    + В корзину
                                </button>
                                <button className="bg-gray-300 px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog px-1">
                            <div className="relative h-3/5 w-full catalogImgBox">
                                <Swiper
                                    pagination={true}
                                    modules={[Pagination]}
                                    className="swiper-item"
                                >
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
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
                            </div>
                            <div className="h-[100px]">
                                <p className="text-lg">
                                    Маска для лица многоразовая из хлопка,
                                    анатомической формы
                                </p>
                            </div>
                            <div className="relative mb-2">
                                <p className="text-xl">
                                    1234
                                    <span className="text-xs absolute top-0">
                                        12
                                    </span>
                                    <span className="ml-4 mr-1">₽</span>
                                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                                        234
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between catalog_btns">
                                <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                                    + В корзину
                                </button>
                                <button className="bg-gray-300 px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog px-1">
                            <div className="relative h-3/5 w-full catalogImgBox">
                                <Swiper
                                    pagination={true}
                                    modules={[Pagination]}
                                    className="swiper-item"
                                >
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
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
                            </div>
                            <div className="h-[100px]">
                                <p className="text-lg">
                                    Маска для лица многоразовая из хлопка,
                                    анатомической формы
                                </p>
                            </div>
                            <div className="relative mb-2">
                                <p className="text-xl">
                                    1234
                                    <span className="text-xs absolute top-0">
                                        12
                                    </span>
                                    <span className="ml-4 mr-1">₽</span>
                                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                                        234
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between catalog_btns">
                                <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                                    + В корзину
                                </button>
                                <button className="bg-gray-300 px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="catalog px-1">
                            <div className="relative h-3/5 w-full catalogImgBox">
                                <Swiper
                                    pagination={true}
                                    modules={[Pagination]}
                                    className="swiper-item"
                                >
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="relative">
                                            <img
                                                className="mb-2"
                                                src={CarouselImg}
                                                alt=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1">
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
                            </div>
                            <div className="h-[100px]">
                                <p className="text-lg">
                                    Маска для лица многоразовая из хлопка,
                                    анатомической формы
                                </p>
                            </div>
                            <div className="relative mb-2">
                                <p className="text-xl">
                                    1234
                                    <span className="text-xs absolute top-0">
                                        12
                                    </span>
                                    <span className="ml-4 mr-1">₽</span>
                                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                                        234
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between catalog_btns">
                                <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                                    + В корзину
                                </button>
                                <button className="bg-gray-300 px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <div className="prev text-gray-600 hover:text-white">
                        <i className="fa-solid fa-arrow-left "></i>
                    </div>
                    <div className="next text-gray-600 hover:text-white">
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>
                </Swiper>
            </div>
        </>
    );
}
