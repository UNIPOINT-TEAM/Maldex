import { useEffect, useState } from 'react';
import { GetMainBanner } from '../../services/main';
import BannerTop from './BannerTop';
import BannerSlider from './BannerSlider';
import BannerBottom from './BannerBottom';

const MainBanner = () => {
  const [mainBannerData, setMainBannerData] = useState([]);
  useEffect(() => {
    GetMainBanner().then((res) => {
      setMainBannerData(res);
    });
  }, []);
  return (
    <>
      <div className="flex gap-[9px] my-5">
        <div className="w-2/5 hidden lg:block">
          <BannerTop BannerData={mainBannerData} />
        </div>
        <div
          className="w-full lg:w-3/5 "
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <BannerSlider />
        </div>
      </div>
      {/* <BannerBottom BannerData={mainBannerData} /> */}
    </>
  );
};

export default MainBanner;
