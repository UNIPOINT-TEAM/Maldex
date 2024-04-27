import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = ({ SliderItems, sliderTime }) => {
  console.log(SliderItems && SliderItems?.product_set);

  return (
    <Swiper
      centeredSlides
      loop
      autoplay={{
        delay: sliderTime,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full h-full"
    >
      {SliderItems &&
        SliderItems?.product_set.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex w-full h-full items-center justify-center"
          >
            <img
              src={item?.productID?.images_set[0]?.image_url}
              alt=""
              className="w-full h-full object-center object-contain"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
