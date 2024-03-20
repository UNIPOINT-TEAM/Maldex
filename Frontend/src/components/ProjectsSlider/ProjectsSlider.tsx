import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
<<<<<<< HEAD
// import SwiperCore, { Navigation, Pagination } from "swiper";
=======
import SwiperCore, { Navigation, Pagination } from "swiper";
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
import prev from "../../assets/icons/projectPrev.svg";
import next from "../../assets/icons/projectNext.svg";
import project1 from "../../assets/project 1.png";
import project2 from "../../assets/project 2.png";
import project3 from "../../assets/project 3.png";
import "swiper/css";
import { ProductNav } from "..";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf

function ProjectsSlider() {
  const swiperRef = useRef(null);

  const goNext = () => {
<<<<<<< HEAD
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
=======
    if (swiperRef.current && swiperRef.current.swiper) {
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
<<<<<<< HEAD
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
=======
    if (swiperRef.current && swiperRef.current.swiper) {
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="container_xxl">
<<<<<<< HEAD
      <div className="mx-3">
        <ProductNav title="ПРОЕКТЫ" color="gray"/>
        <div className="my-5 lg:h-[410px]">
          <div className="flex h-full hidden lg:flex">
            <div className="h-[100%] flex items-center">
              <button className="absolute z-50 -ml-[10px] " onClick={goPrev}>
                <img src={prev} alt="" className="w-[32px]"/>
=======
      <div className="mx-10">
        <ProductNav />
        <div className="my-5 h-[410px]">
          <div className="flex h-full">
            <div className="h-[100%] flex items-center">
              <button className="absolute z-50 -ml-[20px] " onClick={goPrev}>
                <img src={prev} alt="" />
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
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
<<<<<<< HEAD
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
=======
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
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
              </SwiperSlide>
              {/* Add more slides if needed */}
            </Swiper>
            <div className="h-[100%] flex items-center">
              <button className="absolute z-50 -ml-[20px]" onClick={goNext}>
<<<<<<< HEAD
                <img src={next} alt="" className="w-[32px]"/>
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
=======
                <img src={next} alt="" />
              </button>
>>>>>>> b72aced1b1de90f432cd87926d1b10d68b2f90bf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSlider;
