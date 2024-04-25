import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import prev from '../../assets/icons/projectPrev.svg';
import next from '../../assets/icons/projectNext.svg';
import project1 from '../../assets/project 1.png';
import project2 from '../../assets/project 2.png';
import { Link } from 'react-router-dom';
import { Scrollbar } from 'swiper/modules';
import { GetProjects, GetTags } from '../../services/maincatalog';

function ProjectsSlider() {
  const swiperRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);

  const goNext = () => {
    // @ts-ignore
    if (swiperRef.current && swiperRef.current.swiper) {
      // @ts-ignore
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    GetProjects(selectedItem).then((res) => {
      setProjects(res);
    });
    GetTags().then((res) => {
      setTags(res);
      if (selectedItem == 0) {
        setSelectedItem(res[0].id);
      } else {
        setSelectedItem(selectedItem);
      }
    });
  }, [selectedItem]);

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
        <div className="mb-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className={''}></h2>
            {/* <button className="mx-3 uppercase text-fs_8 font-medium p-[6px] tracking-wide  border border-red-primary rounded-lg text-red-primary block ss:hidden">
          добавить
        </button> */}
            <Link to={'/create-project'}>
              <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 ">
                Добавить новых товаров
              </button>
            </Link>
          </div>
          <div className="border border-lightSecondary rounded-xl  uppercase text-darkSecondary font-semibold tracking-wider">
            <div className="flex justify-between items-center px-3 lg:px-7 py-0">
              <div className="overflow-x-auto product-nav">
                <ul className="flex gap-5 whitespace-nowrap">
                  {tags?.map((item) => (
                    <li
                      key={item.id}
                      className={`cursor-pointer font-medium text-[10px] lg:text-fs_8 py-4 border-b-2 ${
                        selectedItem === item.id
                          ? 'border-red-primary text-red-primary'
                          : 'border-transparent hover:text-red-primary '
                      }`}
                      onClick={() => {
                        setSelectedItem(item.id);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <button className="uppercase text-[10px] font-bold tracking-wide h-7  px-3 border border-red-primary rounded-[8px] text-red-primary hidden ss:block">
                  Все топ-товары
                </button>
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
              {projects?.map((item) => (
                <SwiperSlide>
                  <Link to={`/portfolio/${item.id}`}>
                    <div className="relative">
                      <img
                        src={item.images_set[0]}
                        className=" w-full h-[400px] object-cover"
                        alt=""
                      />
                      <p className="z-[999999] text-fs_6 left-0 ps-5 absolute bottom-2 text-[#fff]">
                        {item.description}
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
