import React from "react";
import arrowRight from "../../assets/icons/arrow-right.png";
import Slider from "./Slider";
import { Link } from "react-router-dom";
interface BannerProp {
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

const BannerTop: React.FC<BannerProp> = ({ BannerData }) => {
  return (
    <div className="grid grid-cols-4 gap-[9px]">
      <Link
        to={"category/1"}
        className="group flex flex-col justify-between col-span-4 bg-white h-[200px] cursor-pointer hover:bg-[#fff] transition-all duration-200"
      >
        <h2 className="text-fs_7 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200 ">
          {BannerData && BannerData[0]?.product_set[0]?.productID?.name}
        </h2>
        <div className="h-[110px]  w-[300px] mx-auto  flex items-center justify-center">
        {/*@ts-expect-error: This */}
          <Slider SliderItems={BannerData && BannerData[0]} sliderTime={2500} />
        </div>
        <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" />
          </button>
        </div>
      </Link>
      <Link
        to={"category/1"}
        className="group bg-white h-[130px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
      >
        <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
          Бутылки для воды
        </h2>
        <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
        {/*  @ts-expect-error: This */}
          <Slider SliderItems={BannerData && BannerData[1]} sliderTime={3000} />
        </div>
        <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-4" />
          </button>
        </div>
      </Link>
      <Link
        to={"category/1"}
        className="group bg-white h-[130px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
      >
        <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
          Бутылки для воды
        </h2>
        <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
          {/* @ts-expect-error: This */}
          <Slider SliderItems={BannerData && BannerData[2]} sliderTime={3500} />
        </div>
        <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-4" />
          </button>
        </div>
      </Link>
      <Link
        to={"category/1"}
        className="group bg-white h-[130px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
      >
        <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
          Бутылки для воды
        </h2>
        <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
          {/*  @ts-expect-error: This */}
          <Slider SliderItems={BannerData && BannerData[3]} sliderTime={2000} />
        </div>
        <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-4" />
          </button>
        </div>
      </Link>
      <Link
        to={"category/1"}
        className="group bg-white h-[130px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200"
      >
        <h2 className="text-fs_8 tracking-wider font-semibold opacity-0 group-hover:opacity-100 duration-200">
          Бутылки для воды
        </h2>
        <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
          {/* @ts-expect-error: This */}
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={4000} />
        </div>
        <div className="flex justify-end opacity-0 group-hover:opacity-100 duration-200">
          <button className="bg-redPrimary p-1 rounded-lg">
            <img src={arrowRight} alt="arrow icon" className="w-4" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default BannerTop;
