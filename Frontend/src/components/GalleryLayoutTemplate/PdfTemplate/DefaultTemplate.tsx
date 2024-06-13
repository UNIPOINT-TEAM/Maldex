import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Rnd } from "react-rnd";
import { TemplateData } from "../../../types";
const DefaultTemplate: React.FC<TemplateData> = ({
  data,
  background,
  applying,
}) => {
  const {
    landscape_visible,
    prices_visible,
    description_visible,
    characteristic_visible,
    total_visible,
    circulationAmount_visible,
    codeArticle_visible,
    // @ts-expect-error: This
  } = useSelector((state) => state.carousel.status);
  const [productData, setProductData] = useState({
    name: data?.name,
    price: data?.price,
    circulation: data?.quantity,
    total: data?.totalPrice,
    description: data?.description,
    characteristics: data?.characteristics,
    image: data?.images_set[0].image_url || data?.images_set[0].image,
  });
  const defaultRef = React.useRef(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };
  const inputStyle =
    "bg-transparent font-medium p-[6px] rounded-lg focus:outline outline-[#e99125]";

  return (
    <div
      ref={defaultRef}
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className={`grid ${
        landscape_visible ? "w-full" : "w-[400px]"
      }  grid-cols-7 bg-cover bg-center  h-full border p-3 rounded-lg border-darkSecondary 
      }]`}
    >
      {applying?.image && (
        <div className="absolute top-0 z-[99]">
          <div className="relative w-[200px] h-[200px]">
            <Rnd style={{ backgroundColor: background?.color }}>
              <img
                src={applying?.image}
                className={` object-contain object-center w-full h-full`}
                alt="applying-image"
              />
            </Rnd>
          </div>
        </div>
      )}
      <div
        className={`${
          landscape_visible ? "col-span-3" : "col-span-7"
        } p-8 flex relative justify-center items-center w-full`}
      >
        <img
          src={data?.images_set[0].image_url || data?.images_set[0].image}
          width={landscape_visible ? 450 : 100}
          height={landscape_visible ? 450 : 100}
          alt="slider-img"
          className={`${
            landscape_visible ? "w-[450px]" : "w-[100px]"
          } object-contain object-center h-[200px]`}
        />
      </div>
      <div
        className={`${
          landscape_visible ? "col-span-4" : "col-span-7"
        } flex flex-col`}
      >
        <textarea
          name="name"
          onChange={handleInputChange}
          value={data?.name}
          className={`${inputStyle} ${
            landscape_visible ? "text-[22px]" : "text-base"
          }`}
        />
        <div className="grid grid-cols-12 gap-4 w-full my-2">
          <div className="col-span-3">
            {prices_visible && (
              <>
                <h3 className="text-[#222220] text-[12px] opacity-70 font-medium mb-2">
                  Цена (руб)
                </h3>
                <input
                  name="price"
                  value={productData.price}
                  onChange={handleInputChange}
                  className={`${inputStyle} text-fs_4 w-full`}
                />
              </>
            )}
          </div>
          <div className="col-span-3">
            {circulationAmount_visible && (
              <>
                <h3 className="text-[#222220] text-[12px] opacity-70 font-medium mb-2">
                  Тираж (шт)
                </h3>
                <input
                  name="circulation"
                  value={productData.circulation}
                  className={`${inputStyle} text-fs_4 w-full`}
                  onChange={handleInputChange}
                />
              </>
            )}
          </div>
          <div className="col-span-6 flex flex-col items-end">
            {total_visible && (
              <div>
                <h3 className="text-[#222220] text-[12px] opacity-70 font-medium mb-2">
                  Итого
                </h3>
                <input
                  name="circulation"
                  value={productData.total + "₽"}
                  className={`${inputStyle} text-fs_4 w-[150px]`}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        </div>

        <div className="relative w-full h-[150px]">
          <Rnd>
            {codeArticle_visible && (
              <div className="flex items-center gap-1">
                <label htmlFor="vendor-code">Артикул:</label>
                <input
                  id="vendor-code"
                  name="vendor-code"
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.article}
                />
              </div>
            )}
            {characteristic_visible && (
              <>
                <div className="flex items-center gap-1">
                  <label htmlFor="size">Размер:</label>
                  <input
                    id="size"
                    name="size"
                    className={
                      "outline-[#e99125] px-2 rounded-xl bg-transparent"
                    }
                    value={0}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="material">Материал:</label>
                  <input
                    id="material"
                    name="material"
                    className={
                      "outline-[#e99125] px-2 rounded-xl bg-transparent"
                    }
                    value={0}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="color">Вес:</label>
                  <input
                    id="color"
                    name="color"
                    className={
                      "outline-[#e99125] px-2 rounded-xl bg-transparent"
                    }
                    value={0}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="color">Доступное нанесение:</label>
                  <input
                    id="available_application"
                    name="available_application"
                    className={
                      "outline-[#e99125] px-2 rounded-xl bg-transparent"
                    }
                    value={""}
                  />
                </div>
              </>
            )}
          </Rnd>
        </div>

        {description_visible && landscape_visible! && (
          <div className="relative w-full">
            <Rnd>
              <textarea
                name="description"
                value={data?.description}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-transparent mt-2 resize-none rounded-lg max-h-[300px] font-normal p-[6px] overflow-hidden leading-tight focus:outline outline-[#e99125]"
              />
            </Rnd>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultTemplate;
