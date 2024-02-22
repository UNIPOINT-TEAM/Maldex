import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ProductCard } from "..";


const SliderProduct = () => {
  return (
    <div className="container_xxl">
      <div className="relative">
        <Swiper
          className="w-full"
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          modules={[Navigation]}
        >
          <SwiperSlide>
            <ProductCard /> 
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SliderProduct;
