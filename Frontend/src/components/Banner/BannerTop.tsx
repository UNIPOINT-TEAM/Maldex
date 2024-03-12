import React from "react";
import image1 from "../../assets/banner-1.png";
import Slider from "./Slider";
interface BannerProp {
  BannerData: {
    id: string;
    name: string;
    product_set: {
      id: string;
      productID: {
        id: string;
        image: string;
      };
    }[];
  }[];
}

const BannerTop: React.FC<BannerProp> = ({ BannerData }) => {
  return (
    <div className="grid grid-cols-4 gap-3 ">
      <div className="col-span-4 bg-white h-[200px] flex items-center justify-center">
        <div className="h-[110px] max-w-[300px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[0]} sliderTime={2500} />
        </div>
      </div>
      <div className=" bg-white h-[130px] flex items-center justify-center">
        <div className="h-[70px] max-w-[70px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[1]} sliderTime={3000} />
        </div>
      </div>
      <div className=" bg-white h-[130px] flex items-center justify-center">
        <div className="h-[70px] max-w-[70px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[2]} sliderTime={3500} />
        </div>
      </div>
      <div className="  bg-white h-[130px] flex items-center justify-center">
        <div className="h-[70px] max-w-[70px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[3]} sliderTime={2000} />
        </div>
      </div>
      <div className=" bg-white h-[130px] flex items-center justify-center">
        <div className="h-[70px] max-w-[70px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={4000} />
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
