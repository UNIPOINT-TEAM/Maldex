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
        name: string;
        id: string;
        images_set: {
          image_url: string;
        }[];
      };
    }[];
  };
  sliderTime: number;
  titleLength: number;
}

const Slider: React.FC<SliderProps> = ({
  SliderItems,
  sliderTime,
  titleLength,
}) => {
  return (
    <Swiper
      centeredSlides
      loop
      autoplay={{
        delay: sliderTime,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="w-full h-full "
      style={{ mixBlendMode: "multiply" }}
    >
      {SliderItems?.product_set.map((item) => (
        <SwiperSlide
          key={item.id}
          className="w-full group relative h-full flex flex-col "
        >
          <div className="pt-1 ps-2 h-[20%]">
            <h2 className="text-fs_7 font-medium text-[#ffffff] group-hover:text-darkPrimary">
              {item?.productID?.name.length > titleLength
                ? item?.productID?.name.slice(0, titleLength) + "..."
                : item?.productID?.name}
            </h2>
          </div>
          <Link
            to={`/category/${item?.productID?.id}`}
            className="w-[80%] mx-auto h-[80%] flex items-center justify-center"
          >
            <img
              src={item?.productID?.images_set[0]?.image_url}
              alt="product-img"
              className="w-[80%] h-[80%] mx-auto object-center object-contain"
              loading="lazy"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
