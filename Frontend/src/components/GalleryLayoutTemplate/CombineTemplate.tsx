import React, { useEffect, useState } from "react";
import { Product } from "../../types";

interface TemplateData {
  data?: Product[];
  background?: {
    color: string;
    image: string;

    currentSlide: boolean;
    allSlider: boolean;
  };
  applying?: {
    image: string;
  };
}

const CombineTemplate: React.FC<TemplateData> = ({
  data,
  background,
  applying,
}) => {
  const product = {
    title: "Футболка унисекс PAINT TEE",
    article: "14667.50",
    image: "/path/to/image1.jpg", // Update with the correct image path
    colors: ["#FFFFFF"], // Add colors as needed
    description:
      "Футболка Paint Tee из гладкого хлопчатобумажной ткани, отлично подходит для сублимационной печати",
    sizes: ["46-56"],
    price: "380,00",

    title2: "Плед флисовый COPY",
    article2: "14667.60",
    image2: "/path/to/image2.jpg", // Update with the correct image path
    colors2: ["#00FF00"], // Add colors as needed
    description2:
      "Мягкий, приятный на ощупь флисовый плед отлично удерживает тепло и обладает высокой износостойкостью",
    size2: "125 х 150 см",
    price2: "1080,00",
  };
  const [images, setImages] = useState([]);
  const handleFilterImage = () => {};
  useEffect(() => {
    handleFilterImage();
  }, []);

  return (
    <div className="grid grid-cols-2  bg-cover bg-center h-full border p-3 rounded-lg border-darkSecondary">
      {/* Left Section */}
      <div className="col-span-1 flex gap-8 px-12">
        <div>
          <h2 className="text-xl font-medium text-gray-900">{data[0].name}</h2>
          <p className="text-darkPrimary text-fs_8">
            Артикул {data[0].article}
          </p>
          <div className="">
            <img
              src={
                data[0]?.images_set[0].image_url || data[0]?.images_set[0].image
              }
              alt={product.title}
              className="mt-4 h-[200px]"
            />
          </div>
          <div className="flex items-center gap-2 mt-4 ">
            <p className="text-fs_8">Цвет:</p>
            <div
              className={`w-4 h-4 rounded-full`}
              style={{ backgroundColor: "red" }}
            ></div>
          </div>
          <p className="mt-4 text-darkPrimary text-fs_8 leading-none">
            {data[0]?.description.slice(0, 200)}
          </p>
          <p className="mt-2 text-darkPrimary text-fs_8">Размеры:</p>
          <p className="mt-2 text-darkPrimary text-fs_8">
            Цена: {data[0]?.price} р
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-end mb-16">
          {data[0].images_set.slice(0, 3).map((image) => (
            <div className="w-[70px] h-[70px] rounded-full bg-red-50">
              <img
                src={image?.image_url}
                alt="asdf"
                className="w-full h-full object-cover  rounded-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="col-span-1 flex gap-8 px-12 text-right">
        <div className="flex flex-col gap-3 justify-end mb-16">
          {data[1].images_set.slice(0, 3).map((image) => (
            <div className="w-[70px] h-[70px] rounded-full bg-red-50">
              <img
                src={image?.image_url}
                alt="asdf"
                className="w-full h-full object-cover  rounded-full"
              />
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-fs_5 font-medium text-gray-900">
            {data[1].name}
          </h2>
          <p className="text-darkPrimary text-fs_8">
            Артикул {data[1].article}
          </p>
          <div className="">
            <img
              src={
                data[1]?.images_set[0].image_url || data[1]?.images_set[0].image
              }
              alt={product.title}
              className="mt-4 h-[200px]"
            />
          </div>
          <div className="flex items-center justify-end gap-2 mt-4 ">
            <p className="text-fs_8">Цвет:</p>
            <div
              className={`w-4 h-4 rounded-full`}
              style={{ backgroundColor: "red" }}
            ></div>
          </div>
          <p className="mt-4 text-darkPrimary text-fs_8">
            {data[1].description}
          </p>
          <p className="mt-2 text-darkPrimary text-fs_8">Размеры:</p>
          <p className="mt-2 text-darkPrimary text-fs_8">
            Цена: {data[1]?.price} р
          </p>
        </div>
      </div>
    </div>
  );
};

export default CombineTemplate;
