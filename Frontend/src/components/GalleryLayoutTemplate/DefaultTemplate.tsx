import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TemplateData } from "../../types";
import AddAplying from "../Gallery/AddAplying";
import { updateItem } from "../../store/carouselReducer";
import { Rnd } from "react-rnd";

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
  console.log(data, applying);
  const [isFocus, setIsFocus] = useState({ title: false, description: false });
  const { items, activeCaruselIndex } = useSelector((state) => state.carousel);
  const dispatch = useDispatch();
  const [apllyingData, setApllyingData] = useState({
    imagePosition: { x: 0, y: 0, width: 200, height: 200 },
    textPosition: { x: 0, y: 0, width: 200, height: 100 },
    content: {
      text: "",
    },
  });

  useEffect(() => {
    if (items[activeCaruselIndex]?.applying?.image_1) {
      setApllyingData(items[activeCaruselIndex].applying.image_1);
    }
  }, [activeCaruselIndex, items]);

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

  const handleApplyingChange = (image, name, updatedData = null) => {
    const updatedItem = {
      ...items[activeCaruselIndex],
      applying: {
        ...items[activeCaruselIndex]?.applying,
        [name]: updatedData || image,
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
      }  grid-cols-7 bg-cover bg-center   border p-3 rounded-lg border-darkSecondary 
      }]`}
    >
      {items[activeCaruselIndex]?.applying?.image_1 && (
        <div className="absolute top-0 left-0 z-[99]">
          <Rnd
            size={{
              width: apllyingData.imagePosition?.width,
              height: apllyingData.imagePosition?.height,
            }}
            position={{
              x: apllyingData.imagePosition?.x - 160,
              y: apllyingData.imagePosition?.y,
            }}
            onDragStop={(e, d) => {
              const newPosition = {
                ...apllyingData.imagePosition,
                x: d.x,
                y: d.y,
              };
              setApllyingData((prev) => ({
                ...prev,
                imagePosition: newPosition,
              }));
              handleApplyingChange(null, "image_1", {
                ...apllyingData,
                imagePosition: newPosition,
              });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              const newPosition = {
                ...apllyingData.imagePosition,
                width: ref.style.width,
                height: ref.style.height,
                ...position,
              };
              setApllyingData((prev) => ({
                ...prev,
                imagePosition: newPosition,
              }));
              handleApplyingChange(null, "image_1", {
                ...apllyingData,
                imagePosition: newPosition,
              });
            }}
            enableResizing={{
              top: true,
              right: true,
              bottom: true,
              left: true,
              topRight: true,
              bottomRight: true,
              bottomLeft: true,
              topLeft: true,
            }}
            className="min-w-[200px] min-h-[200px] border border-[#9d9c98]"
          >
            <img
              src={items[activeCaruselIndex].applying.image_1?.image}
              alt="aplying-img"
              className="w-full object-contain"
            />
          </Rnd>
        </div>
      )}
      <div
        className={`${
          landscape_visible ? "col-span-3" : "col-span-7"
        } p-8 group flex relative justify-center items-center w-full`}
      >
        <div className="group-hover:block absolute top-[50%] hidden z-[99999]">
          <AddAplying
            name={"image_1"}
            onChange={handleApplyingChange}
            productData={
              data?.images_set[0].image_url || data?.images_set[0].image
            }
          />
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
          onFocus={() => setIsFocus({ title: true })}
          onBlur={() => setIsFocus({ title: false })}
          onChange={handleInputChange}
          value={
            isFocus.title
              ? data?.name
              : `${data?.name?.slice(0, 40)}${
                  data?.name?.length > 40 ? "..." : ""
                }`
          }
          className={`leading-tight resize-none ${inputStyle} ${
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

        <div className=" w-full">
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
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.product_size}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="material">Материал:</label>
                <input
                  id="material"
                  name="material"
                  onChange={handleInputChange}
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.material}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="color">Вес:</label>
                <input
                  id="weight"
                  name="weight"
                  onChange={handleInputChange}
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={data?.weight}
                />
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="color">Доступное нанесение:</label>
                <input
                  id="available_application"
                  name="available_application"
                  className={"outline-[#e99125] px-2 rounded-xl bg-transparent"}
                  value={""}
                />
              </div>
            </>
          )}
        </div>
        {description_visible && landscape_visible! && (
          <div className="w-full mt-2 -ms-2">
            {data?.description && (
              <textarea
                onFocus={() => setIsFocus({ description: true })}
                onBlur={() => setIsFocus({ description: false })}
                name="description "
                value={
                  isFocus.description
                    ? data?.description
                    : `${data.description.slice(0, 330)}${
                        data?.description?.length > 330 ? "..." : ""
                      }`
                }
                onChange={handleInputChange}
                rows={7}
                className="w-full  bg-[#fff]  resize-none rounded-lg max-h-[300px] font-normal p-[6px]  leading-tight focus:outline outline-[#e99125]"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultTemplate;
