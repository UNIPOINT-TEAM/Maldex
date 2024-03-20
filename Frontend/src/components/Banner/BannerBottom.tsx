/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Slider from "./Slider";
import arrowRight from "../../assets/icons/arrow-right.png";
import { Link } from "react-router-dom";
import statya from "../../assets/statya.png";
import statya2 from "../../assets/statya2.png";

const BannerBottom: React.FC<any> = ({ BannerData }) => {
  return (
    <div className="hidden lg:grid grid-rows-9 h-[760px] grid-cols-5 grid-flow-col gap-3 my-3">
      <Link
        to={"category/1"}
        className="group row-span-9 bg-white  flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
      >
        <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
          Бутылки для воды
        </h2>
        <div className="h-[400px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={3000} />
        </div>
        <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-full" />
          </button>
        </div>
      </Link>
      <div className=" col-span-4 row-span-5">
        <div className="grid grid-cols-12 h-full gap-3">
          <Link
            to={"category/1"}
            className="group  col-span-5 bg-white flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200 "
          >
            <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
              Бутылки для воды
            </h2>
            <div className="w-[200px] mx-auto flex items-center justify-center">
              <Slider
                SliderItems={BannerData && BannerData[5]}
                sliderTime={4000}
              />
            </div>
            <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200 ">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="" />
              </button>
            </div>
          </Link>
          <Link
            to={"category/1"}
            className="group  col-span-2 bg-white flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
          >
            <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
              Бутылки для воды
            </h2>
            <div className="w-full flex items-center justify-center">
              <Slider
                // SliderItems={BannerData && BannerData[6]}
                sliderTime={4000}
              />
            </div>
            <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="" />
              </button>
            </div>
          </Link>
          <Link
            to={"category/1"}
            className="group  col-span-3 bg-white flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
          >
            <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
              Бутылки для воды
            </h2>
            <div className="w-full h-[300px] flex items-center justify-center">
              <Slider
                // SliderItems={BannerData && BannerData[7]}
                sliderTime={3000}
              />
            </div>
            <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="" />
              </button>
            </div>
          </Link>
          <div className="col-span-2">
            <div className="grid grid-rows-2 h-full gap-3 w-full">
              <Link
                to={"category/1"}
                className="group  bg-white w-full flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
              >
                <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
                  Бутылки для воды
                </h2>
                <div className="w-[150px] h-[140px] mx-auto flex items-center justify-center">
                  <Slider
                    // SliderItems={BannerData && BannerData[8]}
                    sliderTime={3000}
                  />
                </div>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
                  <button className="bg-redPrimary p-1 rounded-lg">
                    <img src={arrowRight} alt="arrow icon" className="w-6" />
                  </button>
                </div>
              </Link>
              <Link
                to={"category/1"}
                className="group bg-white flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200 "
              >
                <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
                  Бутылки для воды
                </h2>
                <div className="w-[150px] h-[140px] mx-auto flex items-center justify-center">
                  <Slider
                    // SliderItems={BannerData && BannerData[8]}
                    sliderTime={3000}
                  />
                </div>
                <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
                  <button className="bg-redPrimary p-1 rounded-lg">
                    <img src={arrowRight} alt="arrow icon" className="w-6 " />
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-4 ">
        <div className="grid grid-cols-2 h-full gap-3">
          <div
            className="bg-cover bg-center flex p-3"
            data-aos="fade-left"
            data-aos-delay="50"
            style={{
              backgroundImage: `url(${statya})`, // Обратите внимание на использование обратных кавычек и ${...} для вставки переменной statya
            }}
          >
            <p className="text-[#fff] mt-auto tracking-wider text-fs_6">
              Идеи подарков
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            className="bg-cover bg-center flex p-3"
            style={{
              backgroundImage: `url(${statya2})`, // Обратите внимание на использование обратных кавычек и ${...} для вставки переменной statya
            }}
          >
            <p className="text-[#fff] tracking-wider text-fs_6">
              Разработка дизайна
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
