import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rnd } from "react-rnd";
import { TemplateData } from "../../types";
import AddAplying from "../Gallery/AddAplying";
import { updateItem } from "../../store/carouselReducer";
import CustomRnd from "../Gallery/CustomRnd";

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
  } = useSelector((state) => state.carousel.status);

  const { items, activeCaruselIndex } = useSelector((state) => state.carousel);
  const dispatch = useDispatch();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const updatedItem = {
      ...items[activeCaruselIndex],
      data: {
        ...items[activeCaruselIndex]?.data,
        [event.target.name]: event.target.value,
      },
    };
    dispatch(updateItem(updatedItem));
  };
  const inputStyle =
    "bg-transparent font-medium p-[6px] rounded-lg focus:outline outline-[#e99125]";

  return (
    <div
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
        } p-8 group flex relative justify-center items-center w-full`}
      >
        <div className="group-hover:block absolute top-[50%] hidden">
          <AddAplying productData={data} />
        </div>
        <img
          src={data?.images_set[0].image_url || data?.images_set[0].image}
          width={landscape_visible ? 450 : 100}
          height={landscape_visible ? 450 : 100}
          alt="slider-img"
          className={`${
            landscape_visible ? "w-[450px]" : "w-[100px]"
          } object-contain object-center h-[300px]`}
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
            landscape_visible ? "text-[36px]" : "text-[30px]"
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
                  value={data?.price}
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
                  name="quantity"
                  value={data?.quantity}
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
                  value={data?.totalPrice + "₽"}
                  className={`${inputStyle} text-fs_4 w-[150px]`}
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
                  id="article"
                  name="article"
                  onChange={handleInputChange}
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
                    id="product_size"
                    name="product_size"
                    onChange={handleInputChange}
                    className={
                      "outline-[#e99125] px-2 rounded-xl bg-transparent"
                    }
                    value={data?.product_size}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="material">Материал:</label>
                  <input
                    id="material"
                    name="material"
                    onChange={handleInputChange}
                    className={
                      "outline-[#e99125] px-2 rounded-xl bg-transparent"
                    }
                    value={data?.material}
                  />
                </div>
                <div className="flex items-center gap-1">
                  <label htmlFor="color">Вес:</label>
                  <input
                    id="weight"
                    name="weight"
                    onChange={handleInputChange}
                    className={
                      "outline-[#e99125] px-2 rounded-xl bg-transparent"
                    }
                    value={data?.weight}
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
          <div className="relative w-full ">
            {data?.description && (
              <CustomRnd>
                <textarea
                  name="description "
                  value={data?.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full relative bg-transparent mt-2 resize-none rounded-lg max-h-[300px] font-normal p-[6px] overflow-hidden leading-tight focus:outline outline-[#e99125]"
                />
              </CustomRnd>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultTemplate;
