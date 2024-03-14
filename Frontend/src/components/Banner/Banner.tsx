import { useEffect } from "react";
import { BannerBottom, BannerBottomMobile, BannerSlider, BannerTop } from "..";
import { useFetchHook } from "../../hooks/UseFetch";

const Banner = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/banner" });
  }, []);

  return (
    <>
      <div className="flex gap-3">
        <div className="w-2/5 hidden lg:block">
          <BannerTop BannerData={response} />
        </div>
        <div className="w-full lg:w-3/5 ">
          <BannerSlider />
        </div>
      </div>
      <BannerBottom BannerData={response} />
      <BannerBottomMobile />
    </>
  );
};

export default Banner;
