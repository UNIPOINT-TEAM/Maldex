import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination } from "swiper";
import prev from "../../assets/icons/projectPrev.svg";
import next from "../../assets/icons/projectNext.svg";
import project1 from "../../assets/project 1.png";
import project2 from "../../assets/project 2.png";
import project3 from "../../assets/project 3.png";
import "swiper/css";
import "swiper/css/scrollbar";
import { ProductNav } from "..";
import { Link } from "react-router-dom";
import { Scrollbar } from "swiper/modules";

function ProjectsSlider() {
  const swiperRef = useRef(null);

  const goNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="container_xxl px-3 md:mb-[100px]">
      <div>
        <ProductNav title="ПРОЕКТЫ" color="gray" />
        <div className="my-5 lg:h-[440px]">
          <div className="h-full hidden lg:flex">
            <div className="h-[410px] flex items-center">
              <button className="absolute z-50 -ml-[16px] " onClick={goPrev}>
                <img src={prev} alt="" className="w-[32px]" />
              </button>
            </div>
            <Swiper
              ref={swiperRef}
              className="w-full p-0"
              slidesPerView={3.5}
              loop={true}
              spaceBetween={10}
              navigation
              pagination={{ clickable: true }}
              modules={[Scrollbar]}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="">
                    <div>
                      <img src={project1} alt="" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="">
                    <div>
                      <img src={project2} alt="" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="">
                    <div>
                      <img src={project3} alt="" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="">
                    <div>
                      <img src={project3} alt="" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="">
                    <div>
                      <img src={project3} alt="" />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
            <div className="h-[410px] flex items-center">
              <button className="absolute z-50 -ml-[15px]" onClick={goNext}>
                <img src={next} alt="" className="w-[32px]" />
              </button>
            </div>
          </div>

          {/* Mobile */}
          <div className="block lg:hidden">
            <div>
              <img src={project1} alt="" />
            </div>
            <div>
              <img src={project2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSlider;
