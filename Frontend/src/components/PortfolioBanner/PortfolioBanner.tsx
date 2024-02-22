import React from "react";
import BannerSlider from "../GiftBanner/BannerSlider";
import { PortfolioBannerLeft, PortfolioBannerRight } from "..";

function PortfolioBanner() {
  return (
    <>
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

    </>
  );
}

export default PortfolioBanner;
