import { BannerBottom, BannerSlider, BannerTop } from "..";

const Banner = () => {
  return (
    <div className="">
      <div className="flex gap-3">
        <div className="w-2/5">
          <BannerTop />
        </div>
        <div className="w-3/5">
          <BannerSlider />
        </div>
      </div>
      <BannerBottom />
    </div>
  );
};

export default Banner;
