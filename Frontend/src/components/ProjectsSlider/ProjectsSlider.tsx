import { useRef, useState } from "react";
import Slider from "react-slick";

import prev from "../../assets/icons/projectPrev.svg";
import next from "../../assets/icons/projectNext.svg";
import project1 from "../../assets/project 1.png";
import project2 from "../../assets/project 2.png";
import project3 from "../../assets/project 3.png";

function ProjectsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.21,
    slidesToScroll: 1,
    arrows: false,
  };

  const slider = useRef(null);


  return (
    <>
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
      <div className="container_xxl">
        <div className="mx-10">
          <div>
            <h1 className="text-darkSecondary uppercase text-[28px] font-black">
              Проекты
            </h1>
          </div>
          <div className=" border  border-darkSecondary rounded-md text-fs_8 uppercase text-darkSecondary font-extrabold tracking-wider">
            <div className="flex justify-between items-center px-7 py-0">
              <div className="">
                <ul className="flex gap-5 ">
                  <li className="cursor-pointer py- hover:text-redPrimary hover:border-b-2 border-redPrimary">
                    Одежда
                  </li>                                       
                  <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                    Сумки, портфели, рюкзаки
                  </li>
                  <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                    Ручки
                  </li>
                  <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                    Кухня и бар
                  </li>
                  <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                    Гаджеты
                  </li>
                  <li className="cursor-pointer py-4 hover:text-redPrimary hover:border-b-2 border-redPrimary">
                    Новый год и рождество
                  </li>
                </ul>
              </div>
              <div>
                <button className="uppercase font-extrabold tracking-wider p-[6px] border  border-redPrimary rounded-md text-redPrimary">
                  Все проекты
                </button>
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="flex">
              <button
                className="absolute z-50 -ml-[20px] my-[8%]"
                onClick={() => slider?.current?.slickPrev()}
              >
                <img src={prev} alt="" />
              </button>

              <Slider className=" w-full   " ref={slider} {...settings}>
                <div className="">
                  <div>
                    <img src={project1} alt="" />
                  </div>
                </div>
                <div className="">
                  <div>
                    <img src={project2} alt="" />
                  </div>
                </div>
                <div className="">
                  <div>
                    <img src={project3} alt="" />
                  </div>
                </div>
                <div className="">
                  <div>
                    <img src={project1} alt="" />
                  </div>
                </div>
                <div className="">
                  <div>
                    <img src={project3} alt="" />
                  </div>
                </div>
                <div className="">
                  <div>
                    <img src={project1} alt="" />
                  </div>
                </div>
              </Slider>
              <button
                className="absolute z-50 ml-[1340px] my-[8%]"
                onClick={() => slider?.current?.slickNext()}
              >
                <img src={next} alt="" />
              </button>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}

export default ProjectsSlider;
