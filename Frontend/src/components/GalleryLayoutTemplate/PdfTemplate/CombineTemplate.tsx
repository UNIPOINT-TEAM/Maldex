import React from "react";
import { Product } from "../../../types";
import { useSelector } from "react-redux";
import { CarouselState } from "../../../store/carouselReducer";
interface TemplateData {
  data?: Product[];
  background?: {
    text_color: string;
    bg_color: string;
    image: string;
    currentSlide: boolean;
    allSlider: boolean;
  };
  applying?: {
    image: string;
  };
}

const CombineTemplate: React.FC<TemplateData> = ({ data, background }) => {
  const { status } = useSelector(
    (state: { carousel: CarouselState }) => state.carousel
  );
  return (
    <div
      style={{
        background: background?.bg_color,
        color: background?.text_color,
      }}
      className="w-full  border rounded-lg  gap-16  py-10  overflow-y-auto scrollbar-custom-presentation "
    >
      <div className="heading grid grid-cols-2 items-start gap-16 px-5 border-0 border-b">
        <div className="h-full flex flex-col">
          <div className="main-data max-h-[165px] h-full bg-[#FFFFFF1A] p-4 rounded-[20px]">
            <h1 className="text-base font-bold">{data[0]?.name}</h1>
            {status.prices_visible && (
              <h2 className="text-fs_7 font-medium my-2">
                Цена: {data[0]?.price} {data[0]?.price_type}
              </h2>
            )}
            {status.codeArticle_visible && (
              <p className="text-fs_9 font-normal">
                Артикул {data[0]?.article}
              </p>
            )}
          </div>
          <div className="images grid grid-rows-12 h-full my-3">
            <div className="row-span-8 h-full">
              <div className="w-full h-[300px]">
                <img
                  className=" h-full object-contain"
                  src={
                    data[0]?.images_set[0]?.image ||
                    data[0]?.images_set[0]?.image_url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="row-span-4 flex items-center">
              {data[0]?.images_set?.slice(1, 3)?.map((image, i) => (
                <div key={i} className="flex-1 h-[130px]">
                  <img
                    src={image?.image || image?.image_url}
                    alt="product-image"
                    className="h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full flex flex-col">
          <div className="main-data max-h-[165px] bg-[#FFFFFF1A] p-5 rounded-[20px] text-end">
            <h1 className="text-base font-bold">{data[1]?.name}</h1>
            {status.prices_visible && (
              <h2 className="text-fs_7 font-medium my-2">
                Цена: {data[1]?.price} {data[1]?.price_type}
              </h2>
            )}
            {status.codeArticle_visible && (
              <p className="text-fs_9 font-normal">
                Артикул {data[1]?.article}
              </p>
            )}
          </div>
          <div className="images grid grid-rows-12 h-full my-3">
            <div className="row-span-8 h-full">
              <div className="w-full h-[300px]">
                <img
                  className=" h-full object-contain"
                  src={
                    data[1]?.images_set[0]?.image ||
                    data[1]?.images_set[0]?.image_url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="row-span-4  flex items-center">
              {data[1]?.images_set?.slice(1, 3)?.map((image, i) => (
                <div key={i} className="flex-1 h-[130px]">
                  <img
                    src={image?.image || image?.image_url}
                    alt="product-image"
                    className="h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="body grid grid-cols-2 items-start gap-16 px-5 ">
        <div className="h-full">
          <div className="h-full">
            {status.characteristic_visible && (
              <ul className="text-fs_9 font-normal flex flex-col gap-2 mt-8 ">
                <li>
                  <span className="font-bold">Размеры : </span>
                  {data[0]?.product_size}
                </li>
                <li>
                  <span className="font-bold">Материал : </span>
                  {data[0]?.material}
                </li>
                <li>
                  <span className="font-bold">Вес (1 шт.) : </span>
                  {data[0]?.weight}
                </li>
                <li>
                  <span className="font-bold">Доступное нанесение : </span>
                  {data[0]?.printing}
                </li>
                <li>
                  <div className="flex items-center flex-wrap gap-1 h-[15px]">
                    {data[0]?.colors?.map((color, i) => (
                      <div
                        key={i}
                        style={{ backgroundColor: color?.hex }}
                        className={`min-w-[15px] h-[15px] rounded-full shadow-[0_5px_5px_1px] shadow-[#00000079] ${
                          color.hex === "white" && "border border-darkSecondary"
                        }`}
                      ></div>
                    ))}
                  </div>
                </li>
              </ul>
            )}
            {status.description_visible && (
              <p className="text-fs_9 font-normal mt-6">
                {data[0]?.description}
              </p>
            )}
          </div>
        </div>
        <div className="h-full">
          <div className="h-full">
            {status.characteristic_visible && (
              <ul className="text-fs_9 font-normal flex flex-col gap-2 mt-8 ">
                <li>
                  <span className="font-bold">Размеры : </span>
                  {data[1]?.product_size}
                </li>
                <li>
                  <span className="font-bold">Материал : </span>
                  {data[1]?.material}
                </li>
                <li>
                  <span className="font-bold">Вес (1 шт.) : </span>
                  {data[1]?.weight}
                </li>
                <li>
                  <span className="font-bold">Доступное нанесение : </span>
                  {data[1]?.printing}
                </li>
                <li>
                  <div className="flex items-center flex-wrap gap-1 h-[15px]">
                    {data[1]?.colors?.map((color, i) => (
                      <div
                        key={i}
                        style={{ backgroundColor: color?.hex }}
                        className={`min-w-[15px] h-[15px] rounded-full shadow-[0_5px_5px_1px] shadow-[#00000079] ${
                          color.hex === "white" && "border border-darkSecondary"
                        }`}
                      ></div>
                    ))}
                  </div>
                </li>
              </ul>
            )}
            {status.description_visible && (
              <p className="text-fs_9 font-normal mt-6">
                {data[1]?.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombineTemplate;
