import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImg from "../../assets/images/carouselImg.png";
import { Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { getData } from "../../services/services";
import { Link } from "react-router-dom";
import prev from "../../assets/icons/projectPrev.svg";
import next from "../../assets/icons/projectNext.svg";
import Close from "../../assets/icons/close.png";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useFetchHook } from "../../hooks/UseFetch";

const SliderProduct = () => {
  // @ts-ignore
  const [product, setProduct] = useState([]);
  const [productModal, setProductModal] = useState(false);
  const [defaultProduct, setDefaultProduct] = useState(true);
  const [addCard, setAddCard] = useState(false);
  const { fetchData, response } = useFetchHook();
  const [size, setSize] = useState(null);

  useEffect(() => {
    fetchData({ method: "GET", url: "/product/" });
  }, []);

  const changeStatus = () => {
    setDefaultProduct(!defaultProduct);
  };

  useEffect(() => {
    if (productModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [productModal]);

  const handleOpen = (value: string) => setSize(value);

  return (
    <div className="container_xxl relative px-3">
      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        size={size || "md"}
        handler={handleOpen}
        className="px-4 py-2"
      >
        <button className="flex ml-auto outline-none" onClick={handleOpen}>
          <img src={Close} alt="" />
        </button>
        <div className="flex justify-between items-center gap-5 px-10 mb-6">
          <div className="w-1/3 py-2 flex flex-col items-center ">
            <div className="h-[200px] w-[200px] mb-3">
              <Swiper
                navigation={{
                  prevEl: ".prevProduct",
                  nextEl: ".nextProduct",
                }}
                modules={[Navigation]}
                className="swiper-product"
              >
                <SwiperSlide>
                  <img className="" src={CarouselImg} alt="no img" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-[200px] ">
              <div className="flex justify-between mb-3">
                <p>Количество</p>
                <input
                  type="text"
                  className="border border-black w-[40px] h-[24px] rounded flex px-1 outline-none"
                />
              </div>
              <div className="relative mb-2">
                <p className="text-xl">
                  45.
                  <span className="text-xs absolute top-0">00</span>
                  <span className="ml-4 mr-1">RUB</span>
                  <span className="text-xs absolute top-0 line-through text-redPrimary">
                    7 545
                  </span>
                </p>
              </div>
              <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg shadow-gray-400">
                + В корзину
              </button>
            </div>
          </div>
          <div className="w-2/3  py-2 px-10">
            <p className="text-2xl mb-3">Бейсболка “Poly”</p>
            <p className="text-sm mb-5">107045356</p>
            <p className="text-xl mb-3">Выбор цвета</p>
            <div className="flex gap-3 mb-3">
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
              <button className="bg-redPrimary w-[30px] h-[30px] rounded-[15px]"></button>
            </div>
            <p className="text-sm mb-3 text-gray-400">Размер:</p>
            <div className="flex justify-start items-center gap-1 mb-3">
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
            <p className="text-2xl font-light mb-3">
              Материал: <span className="font-bold">Сатин</span>
            </p>
            <p className="text-2xl font-light mb-3">
              Вес: <span className="font-bold">157 гр.</span>
            </p>
            <p className="text-lg">
              Если вы думаете о s'mores как о чем-то, что нельзя отправить по
              почте, подумайте еще раз! Этот подарочный набор превращает всеми
              любимую закуску у костра в изысканную форму искусства, и он не для
              случайных любителей. Конечно, потребуется некоторая сборка, но все
              знают, что это часть удовольствия.
            </p>
          </div>
        </div>
      </Dialog>

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
          365: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper  overscroll-x-auto h-[500px]"
      >
        {response.results?.map((item) => (
          <SwiperSlide>
            <div className="catalog">
              <div className="relative w-full catalogImgBox h-[220px] mb-4 bg-gray-200">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="swiper-item h-full"
                >
                  <SwiperSlide>
                    <div
                      onClick={() => handleOpen("lg")}
                      className="relative h-full"
                    >
                      <div className="flex justify-center items-center h-full">
                        <img
                          className="mb-2 object-contain product-img"
                          //@ts-ignore
                          src={item.image}
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
                  <div className="mb-5 min-h-[70px]">
                    <p className="text-fs_7 tracking-wide">
                      {
                        //@ts-ignore
                        item.name.length > 30
                          ? //@ts-ignore
                            item.name.substring(0, 40) + "..."
                          : //@ts-ignore
                            item.name
                      }
                    </p>
                  </div>
                  <p className="mb-2 text-gray-600">{item.vendor_code}</p>
                  <div className="relative mb-2">
                    <p className="text-xl">
                      {item.price}
                      <span className="text-xs absolute top-0">12</span>
                      <span className="ml-4 mr-1">{item.price_type}</span>
                      <span className="text-xs absolute top-0 line-through text-redPrimary">
                        234
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-between catalog_btns">
                    <button
                      onClick={changeStatus}
                      className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg text-sm shadow-gray-400 w-[120px]"
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
                    <p className="text-lg text-gray-600 mb-2">Количество:</p>
                    <div className="flex justify-around items-center gap-2 rounded-xl p-2 border border-gray-400 mb-2">
                      <button>-</button>
                      <p>1 543</p>
                      <button>+</button>
                    </div>
                    <p className="text-lg text-gray-600 mb-2">Размер:</p>
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
                        className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg text-sm shadow-gray-400 w-[120px]"
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
        ))}
      </Swiper>
      <div className="hidden lg:flex prev text-black  hover:text-white">
        <img src={prev} alt="" />
      </div>
      <div className="hidden lg:flex next text-black hover:text-white">
        <img src={next} alt="" />
      </div>
    </div>
  );
};
export default SliderProduct;
