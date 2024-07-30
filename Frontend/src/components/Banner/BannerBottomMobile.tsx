/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "./Slider";
import statya from "../../assets/statya.png";
import statya2 from "../../assets/statya2.png";
const BannerBottomMobile: React.FC<any> = ({ BannerData }) => {
  return (
    <div className="grid grid-cols-2 mt-2 gap-2 md:hidden">
      <div className="grid grid-rows-12 grid-cols-2 gap-[9px] h-[180px] sm:h-[300px]">
        <div className="col-span-2 row-span-5 h-full w-full bg-white flex items-center justify-center py-3">
          <div className="h-full w-full">
            <Slider
              SliderItems={BannerData && BannerData[1]}
              sliderTime={3000}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 row-span-7 col-span-2 gap-[9px] h-full">
          <div className=" h-full w-full bg-white  flex items-center justify-center">
            <Slider
              SliderItems={BannerData && BannerData[3]}
              sliderTime={3000}
            />
          </div>
          <div className=" bg-white h-full w-full flex items-center justify-center">
            <div className="h-full w-full">
              <Slider
                SliderItems={BannerData && BannerData[3]}
                sliderTime={3000}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex items-center justify-center h-[180px] sm:h-[300px]">
        <div className="w-full h-full">
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={3000} />
        </div>
      </div>
      <div className=" h-[100px] sm:h-[250px] col-span-2 grid grid-cols-2 gap-[9px]">
        <div
          className="bg-cover bg-center flex p-2 lg:p-3 h-full"
          style={{
            backgroundImage: `url(${statya})`,
          }}
        >
          <p className="text-[#fff] mt-auto tracking-wider font-medium text-fs_8 lg:text-fs_6">
            Идеи подарков
          </p>
        </div>
        <div
          className="bg-cover bg-center p-2 lg:p-3 h-full"
          style={{
            backgroundImage: `url(${statya2})`,
          }}
        >
          <p className="text-[#fff] tracking-wider font-medium text-fs_8 lg:text-fs_6">
            Разработка дизайна
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottomMobile;
