/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperCore from "swiper";
import deleteIcon from "../../assets/icons/Delete.svg";
import "swiper/css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  copyItem,
  deleteItem,
  getSlideRef,
  onActiveCarusel,
} from "../../store/carouselReducer";
import html2canvas from "html2canvas";
import GalleryThumb from "./GalleryThumbs";

const Galleryslider = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.carousel.items);
  const activeIndex = useSelector((state) => state.carousel.activeCaruselIndex);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const swiperRef = React.useRef(null);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const containerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const generateThumbnails = async () => {
      const newThumbnails = await Promise.all(
        items.map(async (_item, i) => {
          const container = containerRefs.current[i];
          if (!container) return "";
          const canvas = await html2canvas(container);
          const blob = await new Promise<Blob | null>((resolve) =>
            canvas.toBlob(resolve)
          );
          if (blob) {
            const url = URL.createObjectURL(blob);
            return url;
          }
          return "";
        })
      );
      setThumbnails(newThumbnails);
      if (swiperRef) {
        dispatch(getSlideRef(swiperRef));
      }
    };

    const timeoutId = setTimeout(generateThumbnails, 1000);
    return () => clearTimeout(timeoutId);
  }, [items]);
  const handleChangeItem = async () => {
    await dispatch(addItem());
    const lastIndex = items.length;
    console.log(lastIndex);
    if (swiperRef?.current) {
      await swiperRef.current?.swiper?.slideTo(lastIndex);
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="flex mt-4 w-full">
        <div className="flex gap-3">
          <span className="border border-darkPrimary px-3 rounded-lg font-medium">
            {activeIndex + 1}/{items.length}
          </span>
          <button onClick={handleChangeItem}>
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
          <button onClick={() => dispatch(copyItem(activeIndex))} className="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.167 2.5h6.666c.92 0 1.667.746 1.667 1.667v.416h-1.25v-.416a.417.417 0 0 0-.417-.417H4.167a.417.417 0 0 0-.417.417V12.5c0 .23.187.417.417.417H6.25v1.25H4.167c-.92 0-1.667-.746-1.667-1.667V4.167c0-.92.746-1.667 1.667-1.667Zm5 4.583a.417.417 0 0 0-.417.417v8.333c0 .23.187.417.417.417h6.666c.23 0 .417-.186.417-.417V7.5a.417.417 0 0 0-.417-.417H9.167Zm6.666-1.25H9.167c-.92 0-1.667.747-1.667 1.667v8.333c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.746 1.667-1.667V7.5c0-.92-.746-1.667-1.667-1.667Z"
                fill="currentColor"
              ></path>
              <path
                d="M12.5 9.167a.625.625 0 0 0-.625.625v1.25h-1.25a.625.625 0 1 0 0 1.25h1.25v1.25a.625.625 0 0 0 1.25 0v-1.25h1.25a.625.625 0 0 0 0-1.25h-1.25v-1.25a.625.625 0 0 0-.625-.625Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          <button onClick={() => dispatch(deleteItem())}>
            <img src={deleteIcon} alt="delete-icon" className="w-[20px]" />
          </button>
        </div>
      </div>

      <div className="mt-8 relative h-[500px] mb-52">
        {items.length == 0 ? (
          <div className="w-full h-[500px] bg-[#eaebea] rounded-lg flex items-center justify-center"></div>
        ) : (
          <Swiper
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            navigation={{
              prevEl: ".prev-arrow-g",
              nextEl: ".next-arrow-g",
            }}
            ref={swiperRef}
            simulateTouch={false}
            onSlideChange={(swiper) =>
              dispatch(onActiveCarusel(swiper?.activeIndex))
            }
            modules={[FreeMode, Navigation, Thumbs, Controller]}
            className="w-full  bg-[#fff] rounded-lg border-none"
          >
            {items.map((item, i) => (
              <SwiperSlide
                key={i}
                className=" w-full  cursor-pointer gallery-slide rounded-lg bg-[#fff]"
              >
                <div
                  className="w-full relative "
                  ref={(el) => (containerRefs.current[i] = el)}
                >
                  {item.template &&
                    React.cloneElement(item.template, { ...item })}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {thumbnails.length > 0 && (
          <>
            <Swiper
              spaceBetween={20}
              onSwiper={setThumbsSwiper}
              freeMode={true}
              slidesPerView={5.5}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full cursor-pointer border relative border-lightSecondary my-4 rounded-lg p-4"
            >
              {items.map((item, i) => (
                <SwiperSlide
                  key={i}
                  className="h-[100px] rounded-lg border flex justify-center p-1"
                >
                  <GalleryThumb
                    containerRef={containerRefs.current[i]}
                    item={item}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="navigation-box absolute z-[9] flex items-center gap-2 font-medium">
              <button className="prev-arrow-g flex justify-center items-center w-[40px] h-[40px] border border-darkPrimary hover:bg-redPrimary hover:text-[#fff] hover:border-redPrimary rounded-[10px] duration-200">
                <FaArrowLeft className="text-fs_8 lg:text-fs_7" />
              </button>
              <p className="text-fs_6">
                <span className="text-redPrimary">{activeIndex + 1}</span> из{" "}
                {items.length}
              </p>
              <button className="next-arrow-g flex justify-center items-center w-[40px] h-[40px] border border-darkPrimary hover:bg-redPrimary hover:text-[#fff] hover:border-redPrimary rounded-[10px] duration-200">
                <FaArrowRight className="text-fs_8 lg:text-fs_7" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Galleryslider;
