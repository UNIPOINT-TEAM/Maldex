import React from "react";
import Slider from "./Slider";
import statya from "../../assets/statya.png";
import statya2 from "../../assets/statya2.png";
const BannerBottomMobile: React.FC<any> = ({ BannerData }) => {
  return (
    <div className="grid grid-cols-2 mt-2 gap-2 lg:hidden">
      <div className="grid grid-cols-2 gap-[9px] ">
        <div className="col-span-2 bg-white h-[65px]  flex items-center justify-center py-3">
          <div className="h-full w-[100px]">
            <Slider
              SliderItems={BannerData && BannerData[1]}
              sliderTime={3000}
            />
          </div>
        </div>
        <div className=" bg-white h-[80px] flex items-center justify-center">
          <div className="h-[50px] w-[50px]">
            <Slider
              SliderItems={BannerData && BannerData[2]}
              sliderTime={3000}
            />
          </div>
        </div>
        <div className=" bg-white h-[80px] flex items-center justify-center">
          <div className="h-[50px] w-[50px]">
            <Slider
              SliderItems={BannerData && BannerData[3]}
              sliderTime={3000}
            />
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-center">
        <div className="h-[100px] w-[100px]">
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={3000} />
        </div>
      </div>
      <div
        className="bg-cover bg-center flex p-2 lg:p-3 h-[100px]"
        style={{
          backgroundImage: `url(${statya})`,
        }}
      >
        <p className="text-[#fff] mt-auto tracking-wider font-medium text-fs_8 lg:text-fs_6">
          Идеи подарков
        </p>
      </div>
      <div
        className="bg-cover bg-center p-2 lg:p-3 h-[100px]"
        style={{
          backgroundImage: `url(${statya2})`,
        }}
      >
        <p className="text-[#fff] tracking-wider font-medium text-fs_8 lg:text-fs_6">
          Разработка дизайна
        </p>
      </div>
    </div>
  );
};

export default BannerBottomMobile;
