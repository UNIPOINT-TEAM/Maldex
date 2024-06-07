import React, { useLayoutEffect, useRef, useState } from "react";
import { Card, Dialog, DialogBody } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SwiperCore from "swiper";
import { IoClose } from "react-icons/io5";

interface ProductPerviewModalProps {
  images: {
    id: number;
    image: string;
    image_url: string;
  }[];
}
const ProductPerviewModal: React.FC<ProductPerviewModalProps> = ({
  images,
}) => {
  const [open, setOpen] = React.useState(false);
  const [thumbsSwiper] = useState<SwiperCore>();
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
        placeholder={<div />}
        className="h-full bg-transparent w-full lg:w-96 border-0 shadow-none cursor-pointer overflow-hidden "
        onClick={handleOpen}
        style={{ mixBlendMode: "multiply" }}
      >
        <img
          alt="nature"
          className="h-[400px] w-[200px] lg:w-full object-contain object-center"
          src={(images && images[0]?.image) || (images && images[0]?.image_url)}
        />
      </Card>
      <Dialog
        size="xxl"
        open={open}
        handler={handleOpen}
        className="bg-[#fff]"
        placeholder={<div />}
      >
        <DialogBody className="p-0 relative bg-[#fff]" placeholder={<div />}>
          <button
            className="absolute border-0 text-black top-6 right-6"
            onClick={handleOpen}
          >
            <IoClose size={"25px"} />
          </button>
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
              className="w-full h-screen py-14"
            >
              {images &&
                images.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img
                      src={item.image_url || item.image}
                      alt="slider-img"
                      className="w-full object-contain object-center h-full"
                    />
                  </SwiperSlide>
                ))}
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
