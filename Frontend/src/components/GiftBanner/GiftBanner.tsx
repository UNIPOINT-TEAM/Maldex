import { BannerSlider, BannerTop, GiftBannerBottom, LeftAccordion } from "..";

const GiftBanner = () => {
  return (
    <div className="container_xxl px-10 my-10">
      <div className="flex gap-3">
        <div className="w-1/5">
          <LeftAccordion />
        </div>
        <div className="flex flex-col gap-2.5 w-4/5 ">
          <div className="h-[430px]">
            <BannerSlider />
          </div>
          <GiftBannerBottom />
        </div>
      </div>
    </div>
  );
};

export default GiftBanner;
