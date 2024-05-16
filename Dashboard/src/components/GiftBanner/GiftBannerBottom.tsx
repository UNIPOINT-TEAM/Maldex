import React from 'react';

import Slider from '../MainBanner/Slider';
import BannerEditModal from '../MainBanner/BannerEditModal';
import DeteleteItem from '../DeleteModal';

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
  console.log(BannerData);

  return (
    <div className="grid h-[158px] lg:auto grid-cols-4 lg:grid-cols-5 gap-[10px] lg:h-[410px]">
      {/* Первый блок */}

      <div className="group order-2 lg:order-none h-full col-span-2 bg-white flex flex-col justify-center lg:justify-between cursor-pointer hover:bg-[#fff] duration-200 ">
        <div className="group relative row-span-9 bg-white  flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
          <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
            <BannerEditModal bannberItems={BannerData && BannerData[11]} />
            <DeteleteItem />
          </div>
          <div className="h-[250px] w-[100%] flex items-center justify-center">
            <Slider
              SliderItems={BannerData && BannerData[11]}
              sliderTime={3000}
            />
          </div>
        </div>
      </div>

      {/* Второй блок */}
      <div className="col-span-2 w-full grid grid-rows-2 gap-[10px] ">
        <div className="group w-full h-full row-span-1 col-span-1 bg-white flex flex-col justify-center lg:justify-between cursor-pointer hover:bg-[#fff] duration-200 ">
          <div className=" z-10 opacity-0 group-hover:opacity-100 duration-300 flex justify-end gap-2 p-2 right-0 top-0">
            <BannerEditModal bannberItems={BannerData && BannerData[12]} />
            <DeteleteItem />
          </div>
          <div className="w-[96px] h-[35px] lg:w-[330px] lg:h-[100px] mx-auto flex items-center justify-center">
            <Slider
              SliderItems={BannerData && BannerData[12]}
              sliderTime={4000}
            />
          </div>
        </div>
        <div className="row-span-1 h-full grid grid-cols-2 gap-[10px]">
          <div className="group h-full col-span-1 bg-white flex flex-col justify-center lg:justify-between cursor-pointer hover:bg-[#fff] duration-200 ">
            <div className="group relative row-span-9 bg-white  flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
              <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
                <BannerEditModal bannberItems={BannerData && BannerData[13]} />
                <DeteleteItem />
              </div>
              <div className="w-[90%] h-[46px] lg:h-[140px] mx-auto flex items-center justify-center">
                <Slider
                  SliderItems={BannerData && BannerData[13]}
                  sliderTime={4000}
                />
              </div>
            </div>
          </div>
          <div className="group h-full col-span-1 bg-white flex flex-col  justify-center lg:justify-between cursor-pointer hover:bg-[#fff] duration-200">
            <div className="group relative row-span-9 bg-white  flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
              <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
                <BannerEditModal bannberItems={BannerData && BannerData[14]} />
                <DeteleteItem />
              </div>

              <div className="w-[90%] h-[46px] lg:h-[140px] mx-auto flex items-center justify-center">
                <Slider
                  SliderItems={BannerData && BannerData[14]}
                  sliderTime={4000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Третий блок */}
      <div className="col-span-1 bg-gray-400  hidden lg:block">
        <div className="">
          <div className="group bg-white h-[416px] flex flex-col justify-between cursor-pointer hover:bg-[#fff] duration-200">
            <div className="group relative row-span-9 bg-white  flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
              <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
                <BannerEditModal bannberItems={BannerData && BannerData[15]} />
                <DeteleteItem />
              </div>

              <div className="mx-auto  max-w-[150px] w-full flex items-center justify-center">
                <Slider
                  SliderItems={BannerData && BannerData[15]}
                  sliderTime={3000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftBannerBottom;
