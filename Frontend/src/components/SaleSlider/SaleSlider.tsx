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
      {/* @ts-ignore */}
       
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
        {/* @ts-ignore */}

        <button onClick={() => slider?.current?.slickNext()}>
          <img src={next} alt="" />
        </button>
      </div>
    </div>
    </>
  );
}

export default SaleSlider;
