import { BannerBottom, BannerBottomMobile, BannerSlider, BannerTop } from "..";

const Banner = () => {
  return (
    <>
      <div className="flex gap-3">
        <div className="w-2/5 hidden lg:block">
          <BannerTop />
        </div>
        <div className="w-full lg:w-3/5 ">
          <BannerSlider />
        </div>
      </div>
      <BannerBottom />
      <BannerBottomMobile />
    </>
  );
};

export default Banner;
