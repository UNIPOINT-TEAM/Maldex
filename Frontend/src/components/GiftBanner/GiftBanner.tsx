import { BannerSlider, BannerTop, GiftBannerBottom, LeftAccordion } from "..";

const GiftBanner = () => {
  return (
    <div className="container_xxl px-10">
      <div className="flex gap-3">
        <div className="w-1/5">
          <LeftAccordion />
        </div>
        <div className="flex flex-col gap-2.5 w-4/5 ">
          <BannerSlider />
          <GiftBannerBottom />
        </div>
      </div>
    </div>
  );
};

export default GiftBanner;
