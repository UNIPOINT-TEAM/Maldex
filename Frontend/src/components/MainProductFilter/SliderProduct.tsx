import { Swiper, SwiperSlide } from "swiper/react";
import CarouselImg from "../../assets/images/carouselImg.png";
import { Navigation, Scrollbar } from "swiper/modules";
import { useState } from "react";

import Close from "../../assets/icons/close.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Dialog } from "@material-tailwind/react";
import ProductsCard from "./ProductsCard";

/*@ts-expect-error: This */
const SliderProduct = ({ products }) => {
  const [size, setSize] = useState(null);

  // @ts-expect-error: This
  const handleOpen = (value: string) => setSize(value);

  return (
    <div className="container_xxl relative px-3">
      <Dialog
        placeholder={<div />}
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
        className="px-4 py-2 text-black"
      >
        <button
          className="flex ml-auto outline-none"
          // @ts-expect-error: This

          onClick={handleOpen}
        >
          <img src={Close} alt="" />
        </button>
        <div className="flex flex-col md:flex md:flex-row justify-between items-center gap-5 px-2 md:px-10 mb-6">
          <div className="w-1/3 py-2 flex flex-col items-center ">
            <div className="h-[200px] w-[300px] mb-3 relative">
              <div className="prevModal flex justify-center items-center">
                <FaArrowLeftLong />
              </div>
              <div className="nextModal flex justify-center items-center">
                <FaArrowRightLong />
              </div>
              <Swiper
                navigation={{
                  prevEl: ".prevModal",
                  nextEl: ".nextModal",
                }}
                modules={[Navigation]}
                className="swiper-item-modal w-[200px]"
              >
                <SwiperSlide>
                  <img className="" src={CarouselImg} alt="no img" />
                </SwiperSlide>
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
                  placeholder="20"
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
          <div className="w-full md:w-2/3  py-2  md:px-10 h-[400px] md:h-auto overflow-y-scroll scrollbar-custom">
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
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
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
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }}
        // @ts-expect-error: This
        scrollbar={{ draggable: true }}
        modules={[Navigation, Scrollbar]}
        className=" w-full overscroll-x-auto h-[430px] md:h-[500px]"
      >
        {/*@ts-expect-error: This */}
        {products?.map((item) => (
          <SwiperSlide key={item.id} className="w-full">
            <ProductsCard item={item} handleOpen={handleOpen} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:flex bg-white prev text-black  hover:text-white">
        <FaArrowLeftLong />
      </div>
      <div className="hidden lg:flex bg-white next text-black hover:text-white">
        <FaArrowRightLong />
      </div>
    </div>
  );
};
export default SliderProduct;
