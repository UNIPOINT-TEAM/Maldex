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
    <div className="bg-white my-2">
      <div className="container_xxl relative">
        <div className="px-3">
          <Slider
            className="w-full h-[40px] lg:h-[50px] "
            ref={slider}
            {...settings}
          >
            <div className="py-3">
              <h3 className="text-fs_8 lg:text-fs_7 font-helvetica-neue-black-condensed  text-center ">
                <span className="text-redPrimary pe-1">30%</span>
                Cкидка при первом заказе! 🎉
              </h3>
            </div>
            <div className="py-3">
              <h3 className="text-fs_8 lg:text-fs_7 font-helvetica-neue-black-condensed  text-center">
                <span className="text-redPrimary font-helvetica-neue-black-condensed   pe-1">
                  30%
                </span>
                Cкидка при первом заказе! 🎉
              </h3>
            </div>
          </Slider>
          <div className="absolute top-[30%] w-full">
            <button onClick={() => slider?.current?.slickPrev()}>
              <img src={prev} alt="" />
            </button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className="absolute right-0"
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
