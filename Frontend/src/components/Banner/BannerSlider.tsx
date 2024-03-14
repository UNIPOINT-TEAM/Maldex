import { Swiper, SwiperSlide } from "swiper/react";
import SlideItem from "../../assets/images/slider-item.png";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BannerSlider = () => {
  return (
    <div className="banner-carusel relative w-full h-full bg-greenPrimary flex  p-[12px] lg:p-[20px] text-white font-helvetica-neue">
      <div className="w-[55%] flex flex-col justify-between">
        <div>
          <span className="border text-[8px] lg:text-[11px] uppercase p-1 tracking-[1px] rounded-md">
            корпоративные подарки
          </span>
          <h2 className="font-helvetica-neue-bold-condensed font-medium text-fs_6 lg:text-[30px] m-0  tracking-[1.5px] leading-none lg:leading-none mt-2 lg:mt-4">
            Бизнес сувениры <br /> для брендов
          </h2>
        </div>
        <div className="mt-auto flex gap-1 lg:gap-3 text-[9px] lg:text-fs_8 font-semibold">
          <Link
            to={"/gift"}
            className="border text-center px-2 w-auto lg:w-[160px] py-[7px] lg:py-[10px] uppercase tracking-wider rounded-lg  hover:bg-[rgba(0,0,0,0.11)]  duration-300"
          >
            Подробнее
          </Link>
          <Link
            to={"/gift"}
            className="border text-center px-2 w-auto lg:w-[160px] py-[7px] lg:py-[10px]  uppercase tracking-widest rounded-lg hover:bg-[rgba(0,0,0,0.11)]  duration-300"
          >
            заказать
          </Link>
        </div>
      </div>
      <div className="w-[50%] h-full">
        <Swiper
          centeredSlides
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev-arrow",
            nextEl: ".next-arrow",
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <img src={SlideItem} alt="" className="h-[160px] lg:h-[300px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideItem} alt="" className="h-[160px] lg:h-[300px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={SlideItem} alt="" className="h-[160px] lg:h-[300px]" />
          </SwiperSlide>
        </Swiper>
        <div className="navigation-box absolute right-3 lg:right-6 bottom-3 lg:bottom-5 z-[9] flex gap-2">
          <button className="prev-arrow p-2 border border-[#fff] rounded-lg">
            <FaArrowLeft className="text-fs_8 lg:text-fs_7" />
          </button>
          <button className="next-arrow p-2 border border-[#fff]  rounded-lg">
            <FaArrowRight className="text-fs_8 lg:text-fs_7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
