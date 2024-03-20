import { useRef } from "react";
import Slider from "react-slick";
<<<<<<< HEAD
=======

>>>>>>> bf64a73 (navbar100)
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
<<<<<<< HEAD
  const slider = useRef<Slider>(null);
  return (
    <div className="bg-white mt-2 sale-slider">
      <div className="container_xxl  px-3 ">
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
              className="absolute "
            >
              <img src={prev} alt="" />
            </button>
            <button
              onClick={() => slider?.current?.slickNext()}
<<<<<<< HEAD
              className="absolute right-0 "
=======
              className="absolute right-0 mr-6"
>>>>>>> db87467 (restart branch 3)
            >
              <img src={next} alt="carusel-arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
=======

  const slider = useRef(null);

  return (
    <>
    <div className=" bg-white">
    <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="container_xxl flex px-10">
        <button onClick={() => slider?.current?.slickPrev()}>
          <img src={prev} alt="" />
        </button>

        <Slider
          className=" w-[95%] h-[50px] m-auto "
          ref={slider}
          {...settings}
        >
          <div className="">
            <div>
              <h3 className=" text-center p-3 text-fs_7 font-[700]">
                <span className="text-redPrimary font-[700]">30%</span> Cкидка при первом заказе! 🎉
              </h3>
            </div>
          </div>
          <div className="">
            <div>
              <h3 className=" text-center p-3 text-fs_7 font-[700]">
                <span className="text-redPrimary font-[700]">30%</span> Cкидка при первом заказе! 🎉
              </h3>
            </div>
          </div>
          <div className="">
            <div>
              <h3 className=" text-center p-3 text-fs_7 font-[700]">
                <span className="text-redPrimary font-[700]">30%</span> Cкидка при первом заказе! 🎉
              </h3>
            </div>
          </div>

        </Slider>
        <button onClick={() => slider?.current?.slickNext()}>
          <img src={next} alt="" />
        </button>
      </div>
    </div>
    </>
>>>>>>> bf64a73 (navbar100)
  );
}

export default SaleSlider;
