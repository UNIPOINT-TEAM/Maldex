import React, { useEffect } from 'react'
import { useFetchHook } from '../../hooks/UseFetch';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import product from "../../assets/images/slider-item.png";


function CompanyBannerSlider() {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/banner/carousel/" });
  }, []);
  return (
    <div>    <div className="banner-carusel relative w-full h-full bg-greenPrimary flex  p-[12px] lg:p-[20px] text-white font-helvetica-neue">
    <div className="w-full h-full ps-2">
      <Swiper
        centeredSlides
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".prev-arrow",
          nextEl: ".next-arrow",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full h-full  "
      >
        {/* @ts-expect-error: This */}
        {response && response[0]?.product_set?.map((item) => (
            <SwiperSlide className="w-full flex h-full" key={item.id}>
              <div className="w-[55%] flex flex-col justify-between">
                <div>
                  <span className="border  font-medium text-[8px] lg:text-[11px] uppercase p-1 tracking-wide rounded-md">
                    корпоративные подарки
                  </span>
                  <h2 className="font-bold lg:font-medium text-base lg:text-[30px] m-0  tracking-wide leading-none lg:leading-none mt-2 lg:mt-4">
                    {item.productCarouselID?.name}
                  </h2>
                </div>
                <div className="mt-auto flex gap-1 lg:gap-3 text-fs_8 font-semibold">
                  <Link
                    to={"/gift"}
                    className="border text-center px-2 w-auto lg:w-[160px] py-[7px] lg:py-[10px] capitalize lg:uppercase font-medium tracking-wider rounded-lg  hover:bg-[rgba(0,0,0,0.11)]  duration-300"
                  >
                    Подробнее
                  </Link>
                  <Link
                    to={"/gift"}
                    className="border font-medium text-center px-2 w-auto lg:w-[160px] py-[7px] lg:py-[10px]  capitalize lg:uppercase  tracking-widest rounded-lg hover:bg-[rgba(0,0,0,0.11)]  duration-300"
                  >
                    заказать
                  </Link>
                </div>
              </div>
              <div className="w-[45%] pt-4  flex items-end">
                {/* <video
                  src={item?.bannerCarouselVideo}
                  className="w-[75%] h-full object-cover"
                  controls
                >
                  <source
                    autoSave="true"
                    src={item?.bannerCarouselVideo}
                    type="video/mp4"
                  />
                </video> */}
                <img
                  src={product}
                  alt="img"
                  className="w-full h-[300px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="navigation-box  absolute right-3 lg:right-6 bottom-3 lg:bottom-5 z-[9] flex gap-2">
        <button className="prev-arrow backdrop-blur-lg p-2 border border-[#fff] rounded-lg">
          <FaArrowLeft className="text-fs_8 lg:text-fs_7" />
        </button>
        <button className="next-arrow p-2 border border-[#fff]  rounded-lg">
          <FaArrowRight className="text-fs_8 lg:text-fs_7" />
        </button>
      </div>
    </div>
  </div></div>
  )
}

export default CompanyBannerSlider