import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImg from "../../assets/images/carouselImg.png";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { getData } from "../../services/services";
import { Link } from "react-router-dom";

const SliderProduct = () => {
    const [product, setProduct] = useState([]);
    const [defaultProduct, setDefaultProduct] = useState(true);
    const [addCard, setAddCard] = useState(false);

    useEffect(() => {
        getData("product/").then((res: any) => {
            setProduct(res.results), console.log(res.results);
        });
    }, []);

    const changeStatus = () => {
        setDefaultProduct(!defaultProduct);
    };

    return (
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
            {/* {product?.map((item) => ( */}
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
                                    <div className="h-[200px] flex justify-center items-center p-">
                                        <img
                                            className="mb-2 object-contain"
                                            src={CarouselImg}
                                            alt=""
                                        />
                                    </div>
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
                    {defaultProduct ? (
                        <div className="default">
                            <div className="h-[100px]">
                                <p className="text-fs_7 tracking-wide">
                                    Маска для лица многоразовая из хлопка,
                                    анатомической формы
                                </p>
                            </div>
                            <p className="mb-2">Lorem ipsum dolor sit amet.</p>
                            <div className="relative mb-2">
                                <p className="text-xl">
                                    88888
                                    <span className="text-xs absolute top-0">
                                        12
                                    </span>
                                    <span className="ml-4 mr-1">RUB</span>
                                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                                        234
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between catalog_btns">
                                <button
                                    onClick={changeStatus}
                                    className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400"
                                >
                                    + В корзину
                                </button>

                                <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                                    <Link
                                        to={"category/1"}
                                        className="w-full h-full flex justify-center items-center"
                                    >
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="default">
                            <div className="flex flex-col items-start mb-3">
                                <p className="text-lg text-gray-600 mb-2">
                                    Количество:
                                </p>
                                <div className="flex justify-around items-center gap-2 rounded-xl p-2 border border-gray-400 mb-2">
                                    <button>-</button>
                                    <p>1 543</p>
                                    <button>+</button>
                                </div>
                                <p className="text-lg text-gray-600 mb-2">
                                    Размер:
                                </p>
                                <div className="flex justify-start items-center gap-1">
                                    <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                                        XS
                                    </button>
                                    <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                                        S
                                    </button>
                                    <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                                        M
                                    </button>
                                    <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                                        L
                                    </button>
                                    <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                                        XL
                                    </button>
                                    <button className="w-[34px] h-[34px] border border-gray-400 rounded-[17px] text-xs hover:border-redPrimary hover:text-redPrimary">
                                        2XL
                                    </button>
                                </div>
                            </div>
                            {addCard ? (
                                <div className="flex justify-between catalog_btns">
                                    <button
                                        onClick={() => setAddCard(true)}
                                        className=" bg-redPrimary px-3 py-2 text-white rounded-lg shadow-lg shadow-gray-400"
                                    >
                                        <i className="fa-solid fa-check text-xl"></i>
                                    </button>
                                    <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                                        <Link
                                            to={"category/1"}
                                            className="w-full h-full flex justify-center items-center"
                                        >
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </Link>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex justify-between catalog_btns">
                                    <button
                                        onClick={() => setAddCard(true)}
                                        className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400"
                                    >
                                        + добавить
                                    </button>
                                    <button className="px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                                        <i className="fa-regular fa-heart text-xl"></i>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </SwiperSlide>
            {/* ))} */}

            <div className="prev text-gray-600 hover:text-white">
                <i className="fa-solid fa-arrow-left "></i>
            </div>
            <div className="next text-gray-600 hover:text-white">
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </Swiper>
    );
};
export default SliderProduct;
