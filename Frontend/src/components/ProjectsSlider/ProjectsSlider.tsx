import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import prev from "../../assets/icons/projectPrev.svg";
import next from "../../assets/icons/projectNext.svg";
import project1 from "../../assets/project 1.png";
import project2 from "../../assets/project 2.png";
// import project3 from "../../assets/project 3.png";

// 1import { ProductNav } from "..";
import { Link } from "react-router-dom";
import { Scrollbar } from "swiper/modules";
import { GetProjects, GetTags } from "../../services/services";

function ProjectsSlider() {
  const swiperRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(0);
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    GetProjects(`projects/?tag_id=${selectedItem}`).then((res) => {
      setProjects(res);
    });
    GetTags(`projects/tags/`).then((res) => {
      setTags(res);
      if (selectedItem == 0) {
        setSelectedItem(res[0].id);
      } else {
        setSelectedItem(selectedItem);
      }
    });
  }, [selectedItem]);

  const goNext = () => {
    // @ts-expect-error: This
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-expect-error: This
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    // @ts-expect-error: This
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-expect-error: This
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="container_xxl px-3 md:mb-[100px]">
      <div>
        <div className="mb-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className={""}></h2>
            <button className="mx-3 uppercase text-fs_8 font-medium p-[6px] tracking-wide  border border-redPrimary rounded-lg text-redPrimary block ss:hidden">
              Все топ-товары
            </button>
          </div>
          <div className="border border-lightSecondary rounded-xl  uppercase text-darkSecondary font-semibold tracking-wider">
            <div className="flex justify-between items-center px-3 lg:px-7 py-0">
              <div className="overflow-x-auto product-nav">
                <ul className="flex gap-5 whitespace-nowrap">
                  {tags?.map((item, index) => (
                    <li
                      key={index}
                      className={`cursor-pointer tracking-wider font-medium text-[10px] lg:text-fs_8 py-4 border-b-2 ${
                        // @ts-expect-error: This
                        selectedItem === item.id
                          ? "border-redPrimary text-redPrimary"
                          : "border-transparent hover:text-redPrimary "
                      }`}
                      onClick={() => {
                        // @ts-expect-error: This
                        setSelectedItem(item.id);
                      }}
                    >
                      {
                        // @ts-expect-error: This
                        item?.name
                      }
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link to={'/portfolio'}>
                  <button className="uppercase w-[130px] text-[10px] font-bold tracking-wide h-7  px-3 border border-redPrimary rounded-[8px] text-redPrimary hidden ss:block">
                    Все топ-товары
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
              {projects.map((item) => (
                // @ts-expect-error: This

                <SwiperSlide key={item.id}>
                  <Link 
                  //@ts-expect-error: This 
                  to={`/portfolio/${item.id}`}
                  >
                    <div className="relative">
                      <img
                        src={
                          // @ts-expect-error: This
                          item.images_set[0]
                        }
                        className="h-full w-full object-cover"
                        alt=""
                      />
                      <p className="z-[999999] text-fs_6 left-0 ps-5 absolute bottom-2 text-[#fff]">
                        {
                          // @ts-expect-error: This
                          item.title
                        }
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
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
