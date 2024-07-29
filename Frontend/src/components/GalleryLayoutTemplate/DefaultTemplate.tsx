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
  const [isFocus, setIsFocus] = useState({ title: false, description: false });
  const { items, activeCaruselIndex } = useSelector((state) => state.carousel);
  const dispatch = useDispatch();

  const [position, setPosition] = useState({
    x: 400,
    y: items[activeCaruselIndex]?.applying[0]?.imagePosition.y || 0,
  });

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

  const handleDragStop = (e, d) => {
    setPosition({ x: d.x, y: d.y });
    const updatedItem = {
      ...items[activeCaruselIndex],
      applying: [
        {
          ...items[activeCaruselIndex]?.applying[0],
          imagePosition: {
            ...items[activeCaruselIndex]?.applying[0]?.imagePosition,
            x: d.x,
            y: d.y,
          },
        },
      ],
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
      }  grid-cols-7 h-full bg-cover bg-center border p-3 rounded-lg border-darkSecondary 
      }]`}
    >
      <div
        className={`${
          landscape_visible ? "col-span-3 p-8" : "col-span-7 h-[160px] p-3"
        }  group flex relative   justify-center items-center w-full`}
      >
        <div className="bg-red-600 relative">
          <div className="relative w-full h-full top-0 left-0 z-[99]">
            <Rnd
              size={{
                width:
                  items[activeCaruselIndex]?.applying[0]?.imagePosition.width,
                height:
                  items[activeCaruselIndex]?.applying[0]?.imagePosition.height,
              }}
              position={{
                x: items[activeCaruselIndex]?.applying[0]?.imagePosition.x || 0,
                y: items[activeCaruselIndex]?.applying[0]?.imagePosition.y || 0,
              }}
              enableResizing={{
                top: false,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${items[activeCaruselIndex]?.applying[0]?.image})`,
                }}
              ></div>
            </Rnd>
            <Rnd
              size={{
                width:
                  items[activeCaruselIndex]?.applying[0]?.textPosition.width,
                height:
                  items[activeCaruselIndex]?.applying[0]?.textPosition.height,
              }}
              position={{
                x: items[activeCaruselIndex]?.applying[0]?.textPosition.x || 0,
                y: items[activeCaruselIndex]?.applying[0]?.textPosition.y || 0,
              }}
              enableResizing={{
                top: false,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
            >
              <span
                className="text-darkPrimary"
                style={{
                  fontFamily:
                    items[activeCaruselIndex]?.applying[0]?.content.fontFamily,
                  fontSize:
                    items[activeCaruselIndex]?.applying[0]?.content.fontSize,
                  textAlign:
                    items[activeCaruselIndex]?.applying[0]?.content.textAlign,
                  fontWeight: items[
                    activeCaruselIndex
                  ]?.applying[0]?.content.fontWeight.includes("bold")
                    ? "bold"
                    : "normal",
                  fontStyle: items[
                    activeCaruselIndex
                  ]?.applying[0]?.content.fontWeight.includes("italic")
                    ? "italic"
                    : "normal",
                  textDecoration: items[
                    activeCaruselIndex
                  ]?.applying[0]?.content.fontWeight
                    .filter((weight) =>
                      ["underline", "line-through"].includes(weight)
                    )
                    .join(" "),
                }}
              >
                {items[activeCaruselIndex]?.applying[0]?.content.text}
              </span>
            </Rnd>
          </div>
          <div className="group-hover:block absolute top-[50%] hidden z-[99999]">
            <AddAplying
              productData={
                data?.images_set[0].image_url || data?.images_set[0].image
              }
            />
          </div>
          <img
            src={data?.images_set[0].image_url || data?.images_set[0].image}
            alt="slider-img"
            className={`${
              landscape_visible ? "w-full h-[300px]" : "w-[150px] h-full"
            } object-contain object-center `}
          />
        </div>
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
          rows={landscape_visible ? 0 : 1}
          value={
            isFocus.title
              ? data?.name
              : `${data?.name?.slice(0, landscape_visible ? 40 : 20)}${
                  data?.name?.length > 40 ? "..." : ""
                }`
          }
          className={`leading-tight resize-none ${inputStyle} ${
            landscape_visible ? "text-[36px]" : "text-[28px] text-center"
          }`}
        />
        <div className="grid grid-cols-12 gap-4  w-full my-2">
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
                  className={`${inputStyle} ${
                    landscape_visible ? "text-fs_4" : "text-fs_6"
                  } w-full`}
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
                  className={`${inputStyle} ${
                    landscape_visible ? "text-fs_4" : "text-fs_6"
                  } w-full`}
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
                  className={`${inputStyle} ${
                    landscape_visible ? "text-fs_4" : "text-fs_6"
                  } w-[150px]`}
                />
              </div>
            )}
          </div>
        </div>

        <div
          className={`w-full ${
            landscape_visible ? "text-[16px]" : "text-fs_7"
          } `}
        >
          {codeArticle_visible && (
            <div className="flex items-center gap-1">
              <label htmlFor="vendor-code">Артикул:</label>
              <p>{data?.article}</p>
            </div>
          )}
          {characteristic_visible && (
            <>
              <div className="flex items-center gap-1">
                <p>{data?.product_size}</p>
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="material">Материал:</label>
                <p>{data?.material}</p>
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="color">Вес:</label>
                <p>{data?.weight}</p>
              </div>
              <div className="flex items-center gap-1">
                <label htmlFor="color">Доступное нанесение:</label>
                <p>{data?.available_application}</p>
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
                className="w-full bg-transparent resize-none rounded-lg max-h-[300px] font-normal p-[6px]  leading-tight focus:outline outline-[#e99125]"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DefaultTemplate;
