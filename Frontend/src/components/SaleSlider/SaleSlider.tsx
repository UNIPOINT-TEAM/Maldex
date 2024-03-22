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
      <div className="container_xxl relative px-3 lg:px-0">
        <div className="w-full ">
          <Slider
            className="h-[40px] lg:h-[50px] w-full "
            ref={slider}
            {...settings}
          >
            <div className="py-3">
              <h3 className="text-fs_8 lg:text-fs_7  text-center ">
                <span className="text-redPrimary pe-1">30%</span>
                Cкидка при первом заказе! 🎉
              </h3>
            </div>
            <div className="py-3">
              <h3 className="text-fs_8 lg:text-fs_7   text-center">
                <span className="text-redPrimary  pe-1">30%</span>
                Cкидка при первом заказе! 🎉
              </h3>
            </div>
          </Slider>
          <div className="absolute top-[30%] left-0 w-full">
            <button onClick={() => slider?.current?.slickPrev()}>
              <img src={prev} alt="" />
            </button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className="absolute right-0 mr-6"
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
