import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { GetMainBannerSlider } from '../../services/main';
import { BASE_URL } from '../../utils/BaseUrl';

const BannerSlider = () => {
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    GetMainBannerSlider().then((res) => {
      setSliderData(res);
    });
  }, []);
  return (
    <div className="banner-carusel relative w-full h-full bg-green-primary flex  p-[12px] lg:p-[20px] text-white font-helvetica-neue">
      <div className="w-[55%] flex flex-col justify-between">
        <div>
          <span className="border  font-medium text-[8px] lg:text-[11px] uppercase p-1 tracking-wide rounded-md">
            корпоративные подарки
          </span>
          <h2 className="font-bold lg:font-medium text-base lg:text-[26px] m-0  tracking-wide leading-none lg:leading-none mt-2 lg:mt-4">
            {sliderData[0]?.product_set[0]?.productCarouselID?.name}
          </h2>
        </div>
      </div>
      <div className="w-[45%] h-full ps-2">
        <Swiper
          centeredSlides
          navigation={{
            prevEl: '.prev-arrow',
            nextEl: '.next-arrow',
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="w-full "
        >
          {sliderData?.map((item) => (
            <SwiperSlide className="w-full">
              <img
                src={
                  item?.product_set[0]?.productCarouselID?.images_set[0]
                    ?.big_url
                }
                alt=""
                className="h-[160px]  lg:h-[300px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="navigation-box  absolute right-3 lg:right-6 bottom-3 lg:bottom-5 z-[9] flex gap-2">
          <button className="prev-arrow p-2 border border-[#fff] rounded-lg">
            <FaArrowLeft className="text-fs_8 lg:text-fs_7" />
          </button>
          <button className="next-arrow p-2 border border-[#fff]  rounded-lg">
            <FaArrowRight className="text-fs_8 lg:text-fs_7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
