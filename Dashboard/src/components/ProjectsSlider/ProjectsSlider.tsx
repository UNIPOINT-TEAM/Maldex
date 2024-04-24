import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import prev from '../../assets/icons/projectPrev.svg';
import next from '../../assets/icons/projectNext.svg';
import project1 from '../../assets/project 1.png';
import project2 from '../../assets/project 2.png';
import project3 from '../../assets/project 3.png';
import { Link } from 'react-router-dom';
import { Scrollbar } from 'swiper/modules';
import ProductNav from '../ProductNav/ProductNav';

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
        <ProductNav title="ПРОЕКТЫ" color="gray" path="/create-project" />
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
                  <div className="relative">
                    <img src={project1} className="" alt="" />
                    <p className="z-[999999] text-fs_6 left-0 ps-5 absolute bottom-2 text-[#fff]">
                      Мерч для компании Botanikals
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="relative">
                    <img src={project2} alt="" />
                    <p className="z-[999999] text-fs_6 left-0 ps-5 absolute bottom-2 text-[#fff]">
                      Упаковка Beaty бренда
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="relative">
                    <img src={project3} alt="" />
                    <p className="z-[999999] text-fs_6 left-0 ps-5 absolute bottom-2 text-[#fff]">
                      Печатная продукция
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="relative">
                    <img src={project3} alt="" />
                    <p className="z-[999999] text-fs_6 left-0 ps-5 absolute bottom-2 text-[#fff]">
                      Мерч для компании Botanikals
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/portfolio">
                  <div className="">
                    <img src={project3} alt="" />
                    <p className="z-[999999] text-fs_6 left-0 ps-5 absolute bottom-2 text-[#fff]">
                      Мерч для компании Botanikals
                    </p>
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
          <div className="flex flex-col gap-[10px] lg:hidden">
            <div className="h-[180px] relative">
              <img
                src={project1}
                className="w-full h-full object-cover"
                alt=""
              />
              <p className="z-[999999] font-medium text-fs_6 left-0 ps-3 absolute bottom-1 tracking-wide text-[#fff]">
                Мерч для компании Botanikals
              </p>
            </div>
            <div className="h-[180px] relative">
              <img
                src={project2}
                className="w-full h-full object-cover"
                alt=""
              />
              <p className="z-[999999] font-medium text-fs_6 left-0 ps-3 absolute bottom-1 tracking-wide text-[#fff]">
                Упаковка Beaty бренда
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSlider;
