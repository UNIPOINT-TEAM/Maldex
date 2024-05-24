import React from "react";
import arrowRight from "../../assets/icons/arrow-right.png";
import Slider from "./Slider";
interface BannerProp {
  BannerData: {
    id: string;
    name: string;
    product_set: {
      id: string;
      productID: {
        id: string;
        images_set: {
          image_url: string;
        }[];
      };
    }[];
  }[];
}

const BannerTop: React.FC<BannerProp> = ({ BannerData }) => {
  return (
    <div
      className="grid grid-cols-4 gap-[9px]"
      style={{ mixBlendMode: "multiply" }}
    >
      <div className="group relative flex items-center col-span-4 bg-white h-[200px] cursor-pointer hover:bg-[#fff] transition-all duration-200">
        <div
          className="h-[110px]  w-[300px] mx-auto  flex items-center justify-center"
          style={{ mixBlendMode: "multiply" }}
        >
          <Slider SliderItems={BannerData && BannerData[0]} sliderTime={2500} />
        </div>
        <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" />
          </button>
        </div>
      </div>
      <div className="group relative bg-white h-[130px] flex items-center justify-center cursor-pointer hover:bg-[#fff] duration-200">
        <div
          className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center"
          style={{ mixBlendMode: "multiply" }}
        >
          <Slider SliderItems={BannerData && BannerData[1]} sliderTime={3000} />
        </div>
        <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-4" />
          </button>
        </div>
      </div>
      <div className="group bg-white h-[130px] flex items-center relative cursor-pointer hover:bg-[#fff] duration-200">
        <div
          className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center"
          style={{ mixBlendMode: "multiply" }}
        >
          <Slider SliderItems={BannerData && BannerData[2]} sliderTime={3500} />
        </div>
        <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-4" />
          </button>
        </div>
      </div>
      <div className="group relative bg-white h-[130px] flex items-center cursor-pointer hover:bg-[#fff] duration-200">
        <div
          className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center"
          style={{ mixBlendMode: "multiply" }}
        >
          <Slider SliderItems={BannerData && BannerData[3]} sliderTime={2000} />
        </div>
        <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-4" />
          </button>
        </div>
      </div>
      <div className="group relative bg-white h-[130px] flex items-center cursor-pointer hover:bg-[#fff] duration-200">
        <div
          className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center"
          style={{ mixBlendMode: "multiply" }}
        >
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={4000} />
        </div>
        <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
