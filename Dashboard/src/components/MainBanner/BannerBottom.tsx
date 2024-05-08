/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Slider from './Slider';
import EditCategory from '../GiftItem/EditCategory';
import DeteleteItem from '../DeleteModal';
import BannerEditModal from './BannerEditModal';
import statya from '../../assets/statya.png';
import statya2 from '../../assets/statya2.png';

const BannerBottom: React.FC<any> = ({ BannerData }) => {
  return (
    <div className="hidden lg:grid grid-rows-9 h-[700px] grid-cols-5  gap-[9px] my-[9px] ">
      <div className="group relative row-span-9 bg-white  flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
        <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
          <BannerEditModal bannberItems={BannerData && BannerData[5]} />
        </div>
        <div className="h-[250px] w-[100%] flex items-center justify-center">
          <Slider SliderItems={BannerData && BannerData[5]} sliderTime={3000} />
        </div>
      </div>
      <div className="col-span-4 row-span-5">
        <div className="grid grid-cols-11 h-full gap-[9px]">
          <div className="group relative col-span-4 bg-white flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200 ">
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
              <BannerEditModal bannberItems={BannerData && BannerData[6]} />
            </div>
            <div className="w-[200px] mx-auto flex items-center justify-center">
              <Slider
                SliderItems={BannerData && BannerData[6]}
                sliderTime={4000}
              />
            </div>
          </div>
          <div className="group relative col-span-2 bg-white flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
              <BannerEditModal bannberItems={BannerData && BannerData[7]} />
            </div>
            <div className="w-full flex items-center justify-center">
              <Slider
                SliderItems={BannerData && BannerData[7]}
                sliderTime={4000}
              />
            </div>
          </div>
          <div className="group relative col-span-3 bg-white flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
              <BannerEditModal bannberItems={BannerData && BannerData[8]} />
            </div>
            <div className="w-full p-2 h-[250px] flex items-center justify-center">
              <Slider
                SliderItems={BannerData && BannerData[8]}
                sliderTime={3000}
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="grid grid-rows-2 h-full gap-[9px] w-full">
              <div className="group relative bg-white w-full flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200">
                <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
                  <BannerEditModal bannberItems={BannerData && BannerData[9]} />
                </div>
                <div className="w-[120px] h-[140px] mx-auto flex items-center justify-center">
                  <Slider
                    SliderItems={BannerData && BannerData[9]}
                    sliderTime={3000}
                  />
                </div>
              </div>
              <div className="group relative bg-white flex flex-col justify-center cursor-pointer hover:bg-[#fff] duration-200 ">
                <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
                  <BannerEditModal
                    bannberItems={BannerData && BannerData[10]}
                  />
                </div>
                <div className="w-[120px] h-[140px] mx-auto flex items-center justify-center">
                  <Slider
                    SliderItems={BannerData && BannerData[10]}
                    sliderTime={3000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 row-span-4">
        <div className="grid grid-cols-2 h-full gap-[9px]">
          <div
            className="bg-cover group    relative bg-center bg-white flex p-3"
            data-aos="fade-left"
            data-aos-delay="50"
            style={{
              backgroundImage: `url(${statya})`,
            }}
          >
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
              {/* <BannerEditModal bannberItems={BannerData && BannerData[0]} /> */}
            </div>
            <p className="text-[#fff] mt-auto tracking-wider text-fs_3 m-0">
              Идеи подарков
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            className="bg-cover group bg-center relative bg-white flex p-3"
            style={{
              backgroundImage: `url(${statya2})`,
            }}
          >
            <div className="absolute z-10 opacity-0 group-hover:opacity-100 duration-300 flex gap-2 p-2 right-0 top-0">
              {/* <BannerEditModal bannberItems={BannerData && BannerData[0]} /> */}
            </div>
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
