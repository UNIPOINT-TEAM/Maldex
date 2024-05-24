import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
interface SliderProps {
  SliderItems: {
    id: string;
    product_set: {
      id: string;
      productID: {
        id: string;
        images_set: {
          image_url: string;
        }[];
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
        <SwiperSlide
          key={item.id}
          className="flex w-full h-full items-center justify-center"
        >
          <Link
            to={`/category/${item?.productID?.id}`}
            className="w-full h-full"
          >
            <img
              src={item?.productID?.images_set[0]?.image_url}
              alt=""
              className="w-full h-full object-center object-contain"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
