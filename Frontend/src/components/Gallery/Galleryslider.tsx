import React, { useLayoutEffect, useRef, useState } from "react";
import sliderImg from "../../assets/cap.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import deleteIcon from "../../assets/icons/Delete.svg";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Galleryslider = () => {
  const [products, setProducts] = useState({
    name: "Бейсболка «Poly»",
    price: "45.00 ₽",
    circulation: 25,
    total: "1 125.00",
    characteristics:
      "Артикул: 47583957 <br/> Размеры: 20х25х10 см <br/> Материал: сатин, картон, 120 г/м2 <br/> Вес (1 шт.): 39,04 г <br/> Доступное нанесение: DTF-Полноцвет с трансфером, SH-Шелкография (не более 1 цвета)",
    description:
      "Если вы думаете о s'mores как о чем-то, что нельзя отправить по почте, подумайте еще раз! Этот подарочный набор превращает всеми любимую закуску у костра в изысканную форму искусства, и он не для случайных любителей. Конечно, потребуется некоторая сборка, но все знают, что это часть удовольствия.",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
  const swiper2Ref = useRef();
  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      // @ts-ignore
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);
  const handleTextareaResize = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };
  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setProducts((prev) => ({ ...prev, [name]: value }));
    handleTextareaResize(event);
  };
  return (
    <div className="">
      <div className="flex mt-4 w-full">
        <div className="flex gap-3">
          <span className="border border-darkPrimary px-3 rounded-lg font-medium">
            1/15
          </span>
          <button>
            <svg
              width="27"
              height="27"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.875 10.208a.625.625 0 1 0 1.25 0v-3.75h3.75a.625.625 0 1 0 0-1.25h-3.75v-3.75a.625.625 0 1 0-1.25 0v3.75h-3.75a.625.625 0 0 0 0 1.25h3.75v3.75Z"
                fill="currentColor"
              ></path>
              <path
                d="M6.015 3.333H5c-.92 0-1.667.746-1.667 1.667v10c0 .92.746 1.666 1.667 1.666h8.333c.92 0 1.667-.746 1.667-1.666v-2.151h-1.25v2.15c0 .23-.187.417-.417.417H5A.417.417 0 0 1 4.583 15V5c0-.23.187-.417.417-.417h1.015v-1.25Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.167 2.5h6.666c.92 0 1.667.746 1.667 1.667v.416h-1.25v-.416a.417.417 0 0 0-.417-.417H4.167a.417.417 0 0 0-.417.417V12.5c0 .23.187.417.417.417H6.25v1.25H4.167c-.92 0-1.667-.746-1.667-1.667V4.167c0-.92.746-1.667 1.667-1.667Zm5 4.583a.417.417 0 0 0-.417.417v8.333c0 .23.187.417.417.417h6.666c.23 0 .417-.186.417-.417V7.5a.417.417 0 0 0-.417-.417H9.167Zm6.666-1.25H9.167c-.92 0-1.667.747-1.667 1.667v8.333c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667V7.5c0-.92-.746-1.667-1.667-1.667Z"
                fill="currentColor"
              ></path>
              <path
                d="M12.5 9.167a.625.625 0 0 0-.625.625v1.25h-1.25a.625.625 0 1 0 0 1.25h1.25v1.25a.625.625 0 0 0 1.25 0v-1.25h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25a.625.625 0 0 0-.625-.625Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button>
            <img src={deleteIcon} alt="delete-icon" className="w-[20px]" />
          </button>
        </div>
      </div>
      <div className="mt-8 relative h-[500px] ">
        <Swiper
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            prevEl: ".prev-arrow-g",
            nextEl: ".next-arrow-g",
          }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
          className="w-full"
        >
          <SwiperSlide className="h-[500px] w-full">
            <div className="w-auto grid grid-cols-7 h-full border p-3 rounded-lg border-darkSecondary">
              <div className="col-span-3 p-8 flex items-center">
                <img
                  src={sliderImg}
                  alt="slider-img"
                  className="w-[400px] object-contain object-center h-auto"
                />
              </div>
              <div className="col-span-4 flex flex-col justify-center">
                <div className="heading">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={products.name}
                    className="text-[36px] font-medium p-[6px] rounded-lg focus:outline outline-[#e99125]"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 my-2 pe-10">
                  <div className="flex col-span-3 flex-col gap-3">
                    <h3 className="text-[#222220] opacity-70 font-medium">
                      Цена (руб)
                    </h3>
                    <input
                      type="text"
                      name="price"
                      onChange={handleChange}
                      value={products.price}
                      className="text-fs_4 w-auto font-medium  p-[6px] rounded-lg focus:outline outline-[#e99125]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 col-span-3">
                    <h3 className="text-[#222220] opacity-70 font-medium">
                      Тираж (шт)
                    </h3>
                    <input
                      type="text"
                      name="circulation"
                      onChange={handleChange}
                      value={products.circulation}
                      className="text-fs_4 w-auto font-medium  p-[6px] rounded-lg focus:outline outline-[#e99125]"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-3 col-span-6">
                    <h3 className="text-[#222220] opacity-70 font-medium">
                      Итого
                    </h3>
                    <input
                      type="text"
                      name="total"
                      onChange={handleChange}
                      value={products.total}
                      className="text-fs_4 w-auto text-end font-medium  p-[6px] rounded-lg focus:outline outline-[#e99125]"
                    />
                  </div>
                </div>
                <div className="flex my-3">
                  <textarea
                    className="w-full resize-none rounded-lg max-h-[300px] font-normal p-[6px] overflow-hidden leading-tight focus:outline outline-[#e99125]"
                    name="characteristics"
                    onChange={handleChange}
                    rows={6}
                    value={products.characteristics.replace(
                      /<br\s*\/?>/g,
                      "\n"
                    )}
                  ></textarea>
                </div>
                <div>
                  <textarea
                    className="w-full  resize-none rounded-lg max-h-[300px]  font-normal p-[6px] overflow-hidden leading-tight focus:outline outline-[#e99125]"
                    name="description"
                    rows={4}
                    onChange={handleChange}
                    value={products.description}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="h-[500px] w-[300px]">
            <div className="w-auto grid grid-cols-7 h-full border p-3 rounded-lg border-darkSecondary">
              <div className="col-span-3 p-8 flex items-center">
                <img
                  src={sliderImg}
                  alt="slider-img"
                  className="w-[400px] object-contain object-center h-auto"
                />
              </div>
              <div className="col-span-4 flex flex-col justify-center">
                <div className="heading">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={products.name}
                    className="text-[36px] font-medium p-[6px] rounded-lg focus:outline outline-[#e99125]"
                  />
                </div>
                <div className="grid grid-cols-12 gap-4 my-2 pe-10">
                  <div className="flex col-span-3 flex-col gap-3">
                    <h3 className="text-[#222220] opacity-70 font-medium">
                      Цена (руб)
                    </h3>
                    <input
                      type="text"
                      name="price"
                      onChange={handleChange}
                      value={products.price}
                      className="text-fs_4 w-auto font-medium  p-[6px] rounded-lg focus:outline outline-[#e99125]"
                    />
                  </div>
                  <div className="flex flex-col gap-3 col-span-3">
                    <h3 className="text-[#222220] opacity-70 font-medium">
                      Тираж (шт)
                    </h3>
                    <input
                      type="text"
                      name="circulation"
                      onChange={handleChange}
                      value={products.circulation}
                      className="text-fs_4 w-auto font-medium  p-[6px] rounded-lg focus:outline outline-[#e99125]"
                    />
                  </div>
                  <div className="flex flex-col items-end gap-3 col-span-6">
                    <h3 className="text-[#222220] opacity-70 font-medium">
                      Итого
                    </h3>
                    <input
                      type="text"
                      name="total"
                      onChange={handleChange}
                      value={products.total}
                      className="text-fs_4 w-auto text-end font-medium  p-[6px] rounded-lg focus:outline outline-[#e99125]"
                    />
                  </div>
                </div>
                <div className="flex my-3">
                  <textarea
                    className="w-full resize-none rounded-lg max-h-[300px] font-normal p-[6px] overflow-hidden leading-tight focus:outline outline-[#e99125]"
                    name="characteristics"
                    onChange={handleChange}
                    rows={6}
                    value={products.characteristics.replace(
                      /<br\s*\/?>/g,
                      "\n"
                    )}
                  ></textarea>
                </div>
                <div>
                  <textarea
                    className="w-full  resize-none rounded-lg max-h-[300px]  font-normal p-[6px] overflow-hidden leading-tight focus:outline outline-[#e99125]"
                    name="description"
                    rows={4}
                    onChange={handleChange}
                    value={products.description}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={20}
          onSwiper={setThumbsSwiper}
          freeMode={true}
          slidesPerView={5.5}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full border relative border-lightSecondary my-4 rounded-lg p-4"
        >
          <SwiperSlide className="h-[90px] rounded-lg p-2 w-[145px] border">
            <img
              src={sliderImg}
              alt="slider-img"
              className=" object-contain object-center h-full"
            />
          </SwiperSlide>
          <SwiperSlide className="h-[90px] rounded-lg p-2 w-[145px] border">
            <img
              src={sliderImg}
              alt="slider-img"
              className=" object-contain object-center h-full"
            />
          </SwiperSlide>
        </Swiper>
        <div className="navigation-box absolute z-[9] flex items-center gap-2 font-medium">
          <button className="prev-arrow-g flex justify-center items-center w-[40px] h-[40px] border border-darkPrimary hover:bg-redPrimary hover:text-[#fff] hover:border-redPrimary rounded-[10px] duration-200">
            <FaArrowLeft className="text-fs_8 lg:text-fs_7" />
          </button>
          <p className="text-fs_6">
            <span className="text-redPrimary">{activeIndex + 1}</span> из 2
          </p>
          <button className="next-arrow-g flex justify-center items-center w-[40px] h-[40px] border border-darkPrimary hover:bg-redPrimary hover:text-[#fff] hover:border-redPrimary rounded-[10px] duration-200">
            <FaArrowRight className="text-fs_8 lg:text-fs_7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galleryslider;
