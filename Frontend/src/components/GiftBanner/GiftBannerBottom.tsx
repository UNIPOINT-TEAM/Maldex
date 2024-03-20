import React from "react";
import { Link } from "react-router-dom";

import arrowRight from "../../assets/icons/arrow-right.png";
import Slider from "../Banner/Slider";

interface GiftBannerBottomProp {
  BannerData: {
    id: string;
    name: string;
    product_set: {
      id: string;
      productID: {
        id: string;
        image: string;
        name: string;
      };
    }[];
  }[];
}

const GiftBannerBottom: React.FC<GiftBannerBottomProp> = ({ BannerData }) => {
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-4 h-[200px] lg:grid-cols-5 gap-4 lg:h-[410px]">
      {/* Первый блок */}
      <div className="col-span-2 h-[158px] lg:h-full bg-gray-200 ">
        <Link
          to={"/category/1"}
          className="group  col-span-5 bg-white flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200 "
        >
          <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
            Бутылки для воды
          </h2>
          <div className="w-[200px] lg:h-[357px] h-[158px] mx-auto flex items-center justify-center">
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
      </div>

      {/* Второй блок */}
      <div className="col-span-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[64px] lg:h-full">
          <div className="bg-gray-400 col-span-2 h-full">
            <Link
              to={"/category/1"}
              className="group flex flex-col justify-between col-span-4 bg-white h-[64px] lg:h-[200px] cursor-pointer hover:bg-[#fff] transition-all duration-200"
            >
              <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200 ">
                {BannerData && BannerData[0]?.product_set[0]?.productID?.name}
              </h2>
              <div className="h-[110px] max-w-[300px] mx-auto w-full flex items-center justify-center">
                <Slider
                  SliderItems={BannerData && BannerData[1]}
                  sliderTime={3000}
                />
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
                <button className="bg-redPrimary p-1 rounded-lg">
                  <img src={arrowRight} alt="arrow icon" />
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-gray-300">
            <Link
              to={"/category/1"}
              className="group bg-white h-[200px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
            >
              <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
                Бутылки для воды
              </h2>
              <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
                <Slider
                  SliderItems={BannerData && BannerData[1]}
                  sliderTime={3000}
                />
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
                <button className="bg-redPrimary p-1 rounded-lg">
                  <img src={arrowRight} alt="arrow icon" className="w-4" />
                </button>
              </div>
            </Link>
          </div>
          <div className="bg-gray-300">
            <Link
              to={"/category/1"}
              className="group bg-white h-[200px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
            >
              <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
                Бутылки для воды
              </h2>
              <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
                <Slider
                  SliderItems={BannerData && BannerData[1]}
                  sliderTime={3000}
                />
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
                <button className="bg-redPrimary p-1 rounded-lg">
                  <img src={arrowRight} alt="arrow icon" className="w-4" />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Третий блок */}
      <div className="col-span-1 bg-gray-400  hidden lg:block">
        <div className="">
          <Link
            to={"/category/1"}
            className="group bg-white h-[416px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
          >
            <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
              Бутылки для воды
            </h2>
            <div className="mx-auto h-[80px] max-w-[70px] w-full flex items-center justify-center">
              <Slider
                SliderItems={BannerData && BannerData[1]}
                sliderTime={3000}
              />
            </div>
            <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="w-4" />
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Два блока снизу */}
    </div>
=======
    // <div className="grid grid-cols-3 gap-4">
    //   {/* Первый блок */}
    //   <div className="col-span-1 bg-gray-200 p-4">1 блок 410x410</div>

    //   {/* Второй блок */}
    //   <div className="col-span-1  p-4 bg-gray-200">
    //     <div className="grid grid-cols-1 gap-4 bg-gray-300">
    //       {/* Первый блок во втором блоке */}
    //       <div className="bg-gray-400 h-200">1 блок 410x200</div>
    //       {/* Второй блок во втором блоке */}
    //       <div className="bg-gray-400 h-200">2 блок 410x200</div>
    //       {/* Третий блок во втором блоке */}
    //       <div className="bg-gray-400 h-200">3 блок 410x200</div>
    //     </div>

    //     <div className="col-span-3 row-start-2 grid grid-cols-2 gap-4">
    //     <div className="bg-gray-600 h-200">1 блок 200x200</div>
    //     <div className="bg-gray-600 h-200">2 блок 200x200</div>
    //   </div>
    //   </div>

    //   {/* Третий блок */}
    //   <div className="col-span-1 bg-gray-400 p-4">
    //     <div className="grid grid-rows-2 gap-4">
    //       {/* Первый блок в третьем блоке */}
    //       <div className="bg-gray-500">1 блок 250x200</div>
    //       {/* Второй блок в третьем блоке */}
    //       <div className="bg-gray-500">2 блок 250x200</div>
    //     </div>
    //   </div>

    //   {/* Два блока снизу */}

    // </div>

    <>
      <div>
        <div className="flex gap-[10px] h-[410px]">
          <div className="bg-white w-[410px]">1</div>
          <div className="w-[410px]">
            <div className="bg-white h-[200px]">2</div>
            <div className="flex">
              <div>3</div>
              <div>4</div>
            </div>
          </div>
          <div className="bg-white w-[250px]">5</div>
        </div>
      </div>
    </>
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
  );
};

export default GiftBannerBottom;
