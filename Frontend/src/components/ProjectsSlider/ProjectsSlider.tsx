import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import prev from "../../assets/icons/projectPrev.svg";
import next from "../../assets/icons/projectNext.svg";
import project1 from "../../assets/project 1.png";
import project2 from "../../assets/project 2.png";
import project3 from "../../assets/project 3.png";
import "swiper/css";
import { ProductNav } from "..";

function ProjectsSlider() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="container_xxl">
      <div className="mx-3">
        <ProductNav />
        <div className="my-5 lg:h-[410px]">
          <div className="flex h-full hidden lg:flex">
            <div className="h-[100%] flex items-center">
              <button className="absolute z-50 -ml-[20px] " onClick={goPrev}>
                <img src={prev} alt="" />
              </button>
            </div>
            <Swiper
              ref={swiperRef}
              className="w-full"
              slidesPerView={3.5}
              loop={true}
              spaceBetween={10}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="">
                  <div>
                    <img src={project1} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div>
                    <img src={project2} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div>
                    <img src={project3} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div>
                    <img src={project3} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <div>
                    <img src={project3} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              {/* Add more slides if needed */}
            </Swiper>
            <div className="h-[100%] flex items-center">
              <button className="absolute z-50 -ml-[20px]" onClick={goNext}>
                <img src={next} alt="" />
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="block lg:hidden">
            <div >
              <img src={project1} alt="" />
            </div>
            <div >
              <img src={project2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSlider;
