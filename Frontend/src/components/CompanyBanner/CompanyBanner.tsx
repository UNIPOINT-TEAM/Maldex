import { useEffect } from "react";
import CompanyBannerBottom from "./CompanyBannerBottom";
import CompanyBannerTop from "./CompanyBannerTop";
import { useFetchHook } from "../../hooks/UseFetch";
import CompanyBannerSlider from "./CompanyBannerSlider";
function CompanyBanner() {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/banner" });
  }, []);
  return (
    <div>
      <div className="container_xxl">
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-center gap-3 mt-3">
            <div className="w-[40%] h-full">
              <CompanyBannerTop BannerData={response} />
            </div>
            <div className="w-[60%] h-full bg-red-100">
              <CompanyBannerSlider />
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-[50%]">
              <CompanyBannerSlider />
            </div>
            <div className="w-[50%]">
              <CompanyBannerBottom BannerData={response} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyBanner;
