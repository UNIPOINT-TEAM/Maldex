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

  return (
    <div
      ref={defaultRef}
      style={{
        backgroundColor: background?.color,
        backgroundImage: `url(${background?.image})`,
      }}
      className={`grid ${
        landscape_visible ? "w-full" : "w-[400px]"
      }  grid-cols-7 bg-cover bg-center  h-full border px-5  border-darkSecondary 
      }]`}
    >
      {applying?.image && (
        <div className="absolute top-0 z-[99]">
          <div className="relative w-[200px] h-[200px]">
            <img
              src={applying?.image}
              className={` object-contain object-center w-full h-full`}
              alt="applying-image"
            />
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
          alt="slider-img"
          className={`${
            landscape_visible ? "w-[350px]" : "w-[100px]"
          } object-contain object-center h-[350px]`}
        />
      </div>
      <div
        className={`${
          landscape_visible ? "col-span-4" : "col-span-7"
        } flex flex-col`}
      >
        <h1
          className={`leading-tight tracking-tight ${
            landscape_visible ? "text-[50px]" : "text-[40px]"
          }`}
        >
          {data?.name}
        </h1>
        <div className="grid grid-cols-12 gap-4 w-full mt-4 my-2 relative">
          <div className="col-span-3">
            {prices_visible && (
              <>
                <h3 className="text-[#222220] text-[20px] opacity-70 font-medium mb-2">
                  Цена (руб)
                </h3>
                <h4 className="text-fs_3">{productData.price}</h4>
              </>
            )}
          </div>
          <div className="col-span-3">
            {circulationAmount_visible && (
              <>
                <h3 className="text-[#222220] text-[20px] opacity-70 font-medium mb-2">
                  Тираж (шт)
                </h3>
                <h4 className="text-fs_3">{productData.circulation}</h4>
              </>
            )}
          </div>
          <div className="col-span-6 flex flex-col items-end">
            {total_visible && (
              <div>
                <h3 className="text-[#222220] text-[20px] opacity-70 font-medium mb-2">
                  Итого
                </h3>
                <h4 className="text-fs_3">{productData.total}</h4>
              </div>
            )}
          </div>
        </div>

        <div className="relative w-full h-[150px]">
          <Rnd>
            {codeArticle_visible && (
              <div className="flex items-center gap-1">
                <label htmlFor="vendor-code">Артикул:</label>
                <h4>{data?.article}</h4>
              </div>
            )}
            {characteristic_visible && (
              <>
                <div className="flex items-center gap-1">
                  <label htmlFor="size">Размер:</label>
                  <h4>{data?.size || 0}</h4>
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="material">Материал:</label>
                  <h4>{data?.material || 0}</h4>
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="color">Вес:</label>
                  <h4>{data?.weight || 0}</h4>
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="color">Доступное нанесение:</label>
                  <h4>{data?.applying || ""}</h4>
                </div>
              </>
            )}
          </Rnd>
        </div>
        {description_visible && landscape_visible! && (
          <div className="relative w-full mt-3">
            <Rnd>
              <p cl>{data?.description}</p>
            </Rnd>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultTemplate;
