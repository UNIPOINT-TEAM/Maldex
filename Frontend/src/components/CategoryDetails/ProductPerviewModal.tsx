import React, { useLayoutEffect, useRef, useState } from "react";
import { Card, Dialog, DialogBody } from "@material-tailwind/react";
import sliderImg from "../../assets/images/T-shirt-preview.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SwiperCore from "swiper";

const ProductPerviewModal = () => {
  const [open, setOpen] = React.useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const swiper1Ref = useRef<React.MutableRefObject<null>>(null);
  const swiper2Ref = useRef();
  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      // @ts-ignore
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div>
      <Card
        className="h-64 w-96 border-0 shadow-none cursor-pointer overflow-hidden "
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-full w-full object-contain object-center"
          src={sliderImg}
        />
      </Card>
      <Dialog size="xxl" open={open} handler={handleOpen} className="bg-[#fff]">
        <DialogBody className="p-0  bg-[#fff]">
          <div className="z-[999] container_xxl relative px-5">
            <Swiper
              loop
              navigation={{
                prevEl: ".prev-arrow-description",
                nextEl: ".next-arrow-description",
              }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs, Controller]}
              className="w-full h-screen "
            >
              <SwiperSlide>
                <img
                  src={sliderImg}
                  alt="slider-img"
                  className="w-full object-contain object-center h-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={sliderImg}
                  alt="slider-img"
                  className="w-full object-contain object-center h-full"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              freeMode={true}
              slidesPerView={2}
              watchSlidesProgress={true}
              direction="vertical"
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-auto min-h-[100px] absolute left-0 top-0 flex flex-col bg-[#fff]"
            >
              <div className="">
                <SwiperSlide className="">
                  <img
                    src={sliderImg}
                    alt="slider-img"
                    className="w-[50px] object-contain object-center h-full"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={sliderImg}
                    alt="slider-img"
                    className="w-[50px] object-contain object-center h-full"
                  />
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="absolute top-[50%] left-0 text-black w-full flex justify-between -translate-y-[50%] z-[9999]">
              <button className="prev-arrow-description  bg-white rounded-xl w-[50px] h-[50px] border border-black flex items-center justify-center">
                <FaArrowLeft className="text-fs_8 lg:text-fs_4" />
              </button>
              <button className="next-arrow-description  bg-white rounded-xl w-[50px] h-[50px] border border-black flex items-center justify-center">
                <FaArrowRight className="text-fs_8 lg:text-fs_4" />
              </button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ProductPerviewModal;
