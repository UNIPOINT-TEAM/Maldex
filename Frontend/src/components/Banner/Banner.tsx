import { BannerBottom, BannerBottomMobile, BannerSlider, BannerTop } from "..";
import useFetch from "../../hooks/UseFetch";
import { BASE_URL } from "../../utils";

const Banner = () => {
  const { data, loading } = useFetch<{ title: string }>(`${BASE_URL}/banner/`);
  return (
    <>
      <div className="flex gap-3">
        <div className="w-2/5 hidden lg:block">
          <BannerTop BannerData={data} />
        </div>
        <div className="w-full lg:w-3/5 ">
          <BannerSlider />
        </div>
      </div>
      <BannerBottom BannerData={data} />
      <BannerBottomMobile />
    </>
  );
};

export default Banner;
