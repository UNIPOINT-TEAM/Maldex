/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "./Slider";
import arrowRight from "../../assets/icons/arrow-right.png";
import statya from "../../assets/statya.png";
import statya2 from "../../assets/statya2.png";

const BannerBottom: React.FC<any> = ({ BannerData }) => {
  return (
    <div className="hidden lg:grid grid-rows-9 h-[760px] grid-cols-5  gap-[9px] my-[9px] ">
      <div className="group relative row-span-9 bg-white  flex items-center cursor-pointer hover:bg-[#fff] duration-200">
        <div
          className="h-[350px] w-[90%] mx-auto flex items-center justify-center"
          style={{ mixBlendMode: "multiply" }}
        >
          <Slider SliderItems={BannerData && BannerData[5]} sliderTime={3000} />
        </div>
        <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-full" />
          </button>
        </div>
      </div>
      <div className="col-span-4 row-span-5">
        <div className="grid grid-cols-11 h-full gap-[9px]">
          <div className="group relative col-span-4 bg-white flex items-center cursor-pointer hover:bg-[#fff] duration-200 ">
            <div
              className="w-[200px] mx-auto flex items-center justify-center"
              style={{ mixBlendMode: "multiply" }}
            >
              <Slider
                SliderItems={BannerData && BannerData[6]}
                sliderTime={4000}
              />
            </div>
            <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200 ">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="" />
              </button>
            </div>
          </div>
          <div className="group relative col-span-2 bg-white flex items-center justify-between cursor-pointer hover:bg-[#fff] duration-200">
            <div
              className="w-[90%] mx-auto flex items-center justify-center"
              style={{ mixBlendMode: "multiply" }}
            >
              <Slider
                SliderItems={BannerData && BannerData[7]}
                sliderTime={4000}
              />
            </div>
            <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="" />
              </button>
            </div>
          </div>
          <div className="group relative col-span-3 bg-white flex items-center cursor-pointer hover:bg-[#fff] duration-200">
            <div
              className="w-[90%] mx-auto h-[300px] flex items-center justify-center"
              style={{ mixBlendMode: "multiply" }}
            >
              <Slider
                SliderItems={BannerData && BannerData[8]}
                sliderTime={3000}
              />
            </div>
            <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="" />
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-rows-2 h-full gap-[9px] w-full">
              <div className="group relative bg-white w-full flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200">
                <div
                  className="w-[150px] h-[140px] mx-auto flex items-center justify-center"
                  style={{ mixBlendMode: "multiply" }}
                >
                  <Slider
                    SliderItems={BannerData && BannerData[9]}
                    sliderTime={3000}
                  />
                </div>
                <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
                  <button className="bg-redPrimary p-1 rounded-lg">
                    <img src={arrowRight} alt="arrow icon" className="w-6" />
                  </button>
                </div>
              </div>
              <div className="group relative bg-white flex items-center cursor-pointer hover:bg-[#fff] duration-200 ">
                <div
                  className="w-[150px] h-[140px] mx-auto flex items-center justify-center"
                  style={{ mixBlendMode: "multiply" }}
                >
                  <Slider
                    SliderItems={BannerData && BannerData[10]}
                    sliderTime={3000}
                  />
                </div>
                <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 duration-200">
                  <button className="bg-redPrimary p-1 rounded-lg">
                    <img src={arrowRight} alt="arrow icon" className="w-6 " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-4">
        <div className="grid grid-cols-2 h-full gap-[9px]">
          <div
            className="bg-cover bg-center flex p-3"
            data-aos="fade-left"
            data-aos-delay="50"
            style={{
              backgroundImage: `url(${statya})`,
            }}
          >
            <p className="text-[#fff] mt-auto tracking-wider text-fs_3 m-0">
              Идеи подарков
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            className="bg-cover bg-center flex p-3"
            style={{
              backgroundImage: `url(${statya2})`,
            }}
          >
            <p className="text-[#fff] tracking-wider text-fs_3">
              Разработка дизайна
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
