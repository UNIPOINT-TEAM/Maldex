import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { BASE_URL } from "../../utils";
interface SliderProps {
  SliderItems: {
    id: string;
    product_set: {
      id: string;
      productID: {
        id: string;
        image: string;
      };
    }[];
  };
  sliderTime: number;
}

const Slider: React.FC<SliderProps> = ({ SliderItems, sliderTime }) => {
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
      {SliderItems?.product_set.map((item) => (
        <SwiperSlide key={item.id} className="flex items-center justify-center">
          <img
            src={`${BASE_URL}${item.productID.image}`}
            alt=""
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
