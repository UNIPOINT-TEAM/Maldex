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
      <div className="flex gap-[9px]">
        <div className="w-2/5 hidden lg:block">
          <BannerTop BannerData={response} />
        </div>
        <div
          className="w-full lg:w-3/5 "
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
