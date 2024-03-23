import { useRef } from "react";
import Slider from "react-slick";
import prev from "../../assets/linear/arrow-left.svg";
import next from "../../assets/linear/arrow-right.svg";

function SaleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const slider = useRef<Slider>(null);
  return (
    <div className="bg-white my-2 sale-slider">
      <div className="container_xxl  px-3 lg:px-0">
        <div className="w-full relative">
          <Slider
            className="h-[40px] lg:h-[50px] px-10 font-normal cursor-pointer"
            ref={slider}
            {...settings}
          >
            <div className="py-3 flex items-center">
              <div className="flex justify-center items-center gap-2">
                <h2 className="text-fs_8 lg:text-fs_7 text-center font-medium">
                  <span className="text-redPrimary pe-1 font-bold">30%</span>
                  Cкидка при первом заказе! 🎉
                </h2>
                <button className="hidden md:block px-1 py-[2px] font-medium uppercase border border-black rounded-lg text-black text-[11px]">
                  подробнее
                </button>
              </div>
            </div>
            <div className="py-3 flex items-center">
              <div className="flex justify-center items-center gap-2">
                <h2 className="text-fs_8 lg:text-fs_7 text-center font-medium">
                  <span className="text-redPrimary pe-1 font-bold">30%</span>
                  Cкидка при первом заказе! 🎉
                </h2>
                <button className="hidden md:block px-1 py-[2px] font-medium uppercase border border-black rounded-lg text-black text-[11px]">
                  подробнее
                </button>
              </div>
            </div>
          </Slider>
          <div className="bg-black h-0 absolute w-full left-0 top-[35%] ">
            <button
              onClick={() => slider?.current?.slickPrev()}
              className="absolute ps-3"
            >
              <img src={prev} alt="" />
            </button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className="absolute right-0 pe-3"
            >
              <img src={next} alt="carusel-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleSlider;
