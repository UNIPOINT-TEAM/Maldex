import { useEffect, useState } from 'react';
import { GetMainBanner } from '../../services/main';
import BannerTop from './BannerTop';
import BannerSlider from './BannerSlider';
import BannerBottom from './BannerBottom';

const MainBanner = () => {
  const [mainBannerData, setMainBannerData] = useState([]);
  const getBannerData = () => {
    GetMainBanner().then((res) => {
      setMainBannerData(res);
    });
  };
  const handleImageChange = (
    id: string,
    imgId: string,
    newUrl: string,
    name: string,
  ) => {
    setMainBannerData((prevData) => prevData.map((item) => console.log(item)));
  };
  useEffect(() => {
    getBannerData();
  }, []);

  return (
    <>
      <div className="flex gap-[9px] my-5">
        <div className="w-2/5 hidden lg:block">
          <BannerTop
            BannerData={mainBannerData}
            handleImageChange={handleImageChange}
          />
        </div>
        <div
          className="w-full lg:w-3/5 "
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <BannerSlider />
        </div>
      </div>
      <BannerBottom BannerData={mainBannerData} />
    </>
  );
};

export default MainBanner;
