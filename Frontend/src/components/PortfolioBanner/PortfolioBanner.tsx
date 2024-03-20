import BannerSlider from "../Banner/BannerSlider";
import { PortfolioBannerLeft, PortfolioBannerRight } from "..";

function PortfolioBanner() {
  return (
    <>
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
    </>
  );
}

export default PortfolioBanner;
