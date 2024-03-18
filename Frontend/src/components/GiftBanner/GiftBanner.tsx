import {  GiftBannerBottom, GiftBannerSlider, LeftAccordion } from "..";

const GiftBanner = () => {
  return (
    <div className="container_xxl px-3 my-10">
      <div className="lg:flex gap-3">
        <div className="w-1/5 hidden lg:block">
          <LeftAccordion />
        </div>
        <div className="flex flex-col gap-2.5 lg:w-4/5 ">
          <div className=" lg:h-[430px]">
            <GiftBannerSlider />
          </div>
          <GiftBannerBottom />
        </div>
      </div>
    </div>
  );
};

export default GiftBanner;
