<<<<<<< HEAD
import BannerSlider from "../Banner/BannerSlider";
=======
import React from "react";
import BannerSlider from "../GiftBanner/BannerSlider";
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
import { PortfolioBannerLeft, PortfolioBannerRight } from "..";

function PortfolioBanner() {
  return (
    <>
<<<<<<< HEAD
      <div className="container_xxl">
        <div className=" flex flex-col-reverse">
          <PortfolioBannerLeft />
          <BannerSlider />
        </div>
        <div>
          <div className=" flex items-center gap-[10px] h-[345px] my-[50px]">
            <div className="w-full lg:w-1/2">
            <BannerSlider />
            </div>
            <div className="w-1/2 hidden lg:block">

            <PortfolioBannerRight />
            </div>
          </div>
        </div>
      </div>
=======
    <div className="container_xxl">
            <div className=" flex items-center gap-[10px] h-[402px] my-[50px]">
          <PortfolioBannerLeft />
        <BannerSlider />
      </div>
      <div>
      <div className=" flex items-center gap-[10px] h-[345px] my-[50px]">
        <BannerSlider />
          <PortfolioBannerRight />
      </div>
      </div>
    </div>

>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
    </>
  );
}

export default PortfolioBanner;
