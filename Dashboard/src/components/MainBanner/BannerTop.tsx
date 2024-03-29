import React from 'react';
import Slider from './Slider';
import BannerEditModal from './BannerEditModal';
import DeleteItemBanner from './DeleteItemBanner';
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
      <div className="group flex relative flex-col justify-center col-span-4 bg-white h-[200px] cursor-pointer hover:bg-[#fff] transition-all duration-200">
        <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
          <BannerEditModal bannberItems={BannerData && BannerData[0]} />
          <DeleteItemBanner />
        </div>
        <div className="h-[110px]  w-[300px] mx-auto   flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[0]} sliderTime={2500} />
        </div>
      </div>
      <div className="group relative bg-white h-[130px] flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
        <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
          <BannerEditModal bannberItems={BannerData && BannerData[1]} />
          <DeleteItemBanner />
        </div>
        <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[1]} sliderTime={3000} />
        </div>
      </div>
      <div className="group relative bg-white h-[130px] flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
        <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
          <BannerEditModal bannberItems={BannerData && BannerData[2]} />
          <DeleteItemBanner />
        </div>
        <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[2]} sliderTime={3500} />
        </div>
      </div>
      <div className="group relative bg-white h-[130px] flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
        <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
          <BannerEditModal bannberItems={BannerData && BannerData[3]} />
          <DeleteItemBanner />
        </div>
        <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[3]} sliderTime={2000} />
        </div>
      </div>
      <div className="group relative bg-white h-[130px] flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
        <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
          <BannerEditModal bannberItems={BannerData && BannerData[4]} />
          <DeleteItemBanner />
        </div>
        <div className="mx-auto h-[70px] max-w-[70px] w-full flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[4]} sliderTime={4000} />
        </div>
      </div>
    </div>
  );
};

export default BannerTop;
