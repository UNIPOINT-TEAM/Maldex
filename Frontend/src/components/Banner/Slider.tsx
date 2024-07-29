import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const SliderCustom: React.FC<SliderProps> = ({
  SliderItems,
  sliderTime,
  titleLength,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: sliderTime,
  };
  return (
    <Slider
      {...settings}
      className="h-full w-full banner-slider"
      style={{ mixBlendMode: "multiply" }}
    >
      {SliderItems?.product_set.map((item) => (
        <div key={item.id} className="w-full group h-full flex flex-col px-2 ">
          <div className="pt-1 ps-2">
            <h2 className="text-fs_7 font-medium text-[#ffffff] group-hover:text-darkPrimary">
              {item?.productID?.name.length > titleLength
                ? item?.productID?.name.slice(0, titleLength) + "..."
                : item?.productID?.name}
            </h2>
          </div>
          <Link
            to={`/category/${item?.productID?.id}`}
            className="w-[80%] h-[70%] mx-auto flex items-center justify-center"
          >
            <img
              src={item?.productID?.images_set[0]?.image_url}
              alt="product-img"
              className="w-[80%] h-[80%] mx-auto object-center object-contain"
              loading="lazy"
            />
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default SliderCustom;
