import { useEffect } from "react";
import { useFetchHook } from "../../hooks/UseFetch";
import { BannerBottom, BannerBottomMobile, BannerSlider, BannerTop } from "..";

const Banner = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/banner" });
  }, []);

  return (
    <>
      <div className="flex gap-[9px] h-full main-banner">
        <div className="w-2/5 hidden md:block">
          <BannerTop BannerData={response} />
        </div>
        <div
          className="w-full md:w-3/5 h-[180px] sm:h-[250px]  md:h-[359px]"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <BannerSlider />
        </div>
      </div>
      <BannerBottom BannerData={response} />
      <BannerBottomMobile BannerData={response} />
    </>
  );
};

export default Banner;
