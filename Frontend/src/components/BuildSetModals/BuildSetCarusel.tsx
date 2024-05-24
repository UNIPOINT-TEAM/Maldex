import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import CaruselCard from "./CaruselCard";
const BuildSetCarusel: React.FC<{
  buildSetProducts: any;
  addToCartHandler: any;
}> = ({ buildSetProducts, addToCartHandler }) => {
  return (
    <div className="container_xxl relative px-3">
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
            spaceBetween: 10,
          },
        }}
        // @ts-expect-error: This
        scrollbar={{ draggable: true }}
        modules={[Navigation, Scrollbar]}
        className=" w-full overscroll-x-auto h-[430px] md:h-[500px]"
      >
        {
          // @ts-expect-error: This
          buildSetProducts?.map((item) => (
            <SwiperSlide key={item?.id} className="w-full">
              <CaruselCard
                addToCartHandler={addToCartHandler}
                item={item.product_sets}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className="hidden cursor-pointer lg:flex bg-white prev text-black  hover:text-white">
        <FaArrowLeftLong />
      </div>
      <div className="hidden cursor-pointer lg:flex bg-white next text-black hover:text-white">
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default BuildSetCarusel;
