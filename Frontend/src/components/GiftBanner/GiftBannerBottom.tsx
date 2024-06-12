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
    <div className="grid h-[158px] lg:auto grid-cols-4 lg:grid-cols-5 gap-[10px] lg:h-[410px]">
      {/* Первый блок */}

      <Link
        to={"/category/1"}
        className="group order-2 lg:order-none h-full col-span-2 bg-white flex flex-col justify-center lg:justify-between cursor-pointer hover:bg-[#fff] duration-200 "
      >
        <h2 className="text-fs_7 hidden lg:block tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
          Бутылки для воды
        </h2>
        <div className="lg:h-[238px] h-[96px] w-[96px] lg:w-[238px] mx-auto flex items-center justify-center" style={{ mixBlendMode: 'multiply' }}>
          <Slider 
          // @ts-expect-error: This
          SliderItems={BannerData && BannerData[4]} sliderTime={4000} />
        </div>
        <div className="hidden lg:flex justify-end opacity-0 group-hover:opacity-100 duration-200 ">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="" />
          </button>
        </div>
      </Link>

      {/* Второй блок */}
      <div className="col-span-2 w-full grid grid-rows-2 gap-[10px] ">
        <Link
          to={"/category/1"}
          className="group w-full h-full row-span-1 col-span-1 bg-white flex flex-col justify-center lg:justify-between cursor-pointer hover:bg-[#fff] duration-200 "
        >
          <h2 className="text-fs_7 hidden lg:block tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
            Бутылки для воды
          </h2>
          <div className="w-[96px] h-[35px] lg:w-[330px] lg:h-[100px] mx-auto flex items-center justify-center" style={{ mixBlendMode: 'multiply' }}>
            <Slider
            // @ts-expect-error: This
              SliderItems={BannerData && BannerData[5]}
              sliderTime={4000}
            />
          </div>
          <div className="hidden lg:flex justify-end opacity-0 group-hover:opacity-100 duration-200 ">
            <button className="bg-redPrimary p-1 rounded-lg">
              <img src={arrowRight} alt="arrow icon" className="" />
            </button>
          </div>
        </Link>
        <div className="row-span-1 h-full grid grid-cols-2 gap-[10px]">
          <Link
            to={"/category/1"}
            className="group h-full col-span-1 bg-white flex flex-col justify-center lg:justify-between cursor-pointer hover:bg-[#fff] duration-200 "
          >
            <h2 className="text-fs_7 hidden lg:block tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
              Бутылки для воды
            </h2>
            <div className="w-[90%] h-[46px] lg:h-[140px] mx-auto flex items-center justify-center" style={{ mixBlendMode: 'multiply' }}>
              <Slider
              // @ts-expect-error: This
                SliderItems={BannerData && BannerData[5]}
                sliderTime={4000}
              />
            </div>
            <div className="hidden lg:flex justify-end opacity-0 group-hover:opacity-100 duration-200 ">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="" />
              </button>
            </div>
          </Link>
          <Link
            to={"/category/1"}
            className="group h-full col-span-1 bg-white flex flex-col  justify-center lg:justify-between cursor-pointer hover:bg-[#fff] duration-200 "
          >
            <h2 className="hidden lg:block text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
              Бутылки для воды
            </h2>
            <div className="w-[90%] h-[46px] lg:h-[140px] mx-auto flex items-center justify-center" style={{ mixBlendMode: 'multiply' }}>
              <Slider
              // @ts-expect-error: This
                SliderItems={BannerData && BannerData[5]}
                sliderTime={4000}
              />
            </div>
            <div className="hidden lg:flex justify-end opacity-0 group-hover:opacity-100 duration-200 ">
              <button className="bg-redPrimary p-1 rounded-lg">
                <img src={arrowRight} alt="arrow icon" className="" />
              </button>
            </div>
          </Link>
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
            <div className="mx-auto  max-w-[150px] w-full flex items-center justify-center" style={{ mixBlendMode: 'multiply' }}>
              <Slider
              // @ts-expect-error: This
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
  );
};

export default GiftBannerBottom;