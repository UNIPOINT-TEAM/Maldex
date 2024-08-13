import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TemplateData } from "../../types";
import { CarouselState, updateItem } from "../../store/carouselReducer";

const DefaultTemplate: React.FC<TemplateData> = ({ data, background }) => {
  const { items, activeCaruselIndex, status } = useSelector(
    (state: { carousel: CarouselState }) => state.carousel
  );

  const dispatch = useDispatch();
  const [textareaHeights, setTextareaHeights] = useState<{
    [key: string]: string;
  }>({});
  const textareaRefs = useRef<{ [key: string]: HTMLTextAreaElement | null }>(
    {}
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;

    const updatedItem = {
      ...items[activeCaruselIndex],
      data: {
        ...items[activeCaruselIndex]?.data,
        [name]: value,
      },
    };
    dispatch(updateItem(updatedItem));

    adjustTextareaHeight(name);
  };

  const adjustTextareaHeight = (name: string) => {
    const textarea = textareaRefs.current[name];
    if (textarea) {
      setTextareaHeights((prevHeights) => ({
        ...prevHeights,
        [name]: "auto",
      }));

      setTextareaHeights((prevHeights) => ({
        ...prevHeights,
        [name]: `${textarea.scrollHeight}px`,
      }));
    }
  };

  useEffect(() => {
    Object.keys(textareaRefs.current).forEach((name) => {
      adjustTextareaHeight(name);
    });
  }, [data]);

  const inputStyle =
    "bg-transparent font-medium p-[6px] rounded-lg focus:outline outline-[#e99125]";

  return (
    <div
      style={{
        background: background?.bg_color,
        color: background?.text_color,
      }}
      className="wrapper w-full h-[650px] border px-5 py-10 rounded-lg "
    >
      <div className="grid grid-cols-2 gap-8 w-full h-full">
        <div className="flex flex-col">
          <div className="main-data bg-[#FFFFFF1A] p-5 rounded-[20px]">
            <textarea
              name="name"
              value={data?.name}
              onChange={handleInputChange}
              className={`${inputStyle} resize-none w-full text-base font-bold`}
              style={{ height: textareaHeights["name"] || "auto" }}
              ref={(el) => (textareaRefs.current["name"] = el)}
            ></textarea>
            {status.prices_visible && (
              <h2 className="text-fs_7 font-medium my-3">
                Цена: {data?.price} {data?.price_type}
              </h2>
            )}
            {status.codeArticle_visible && (
              <p className="text-fs_9 font-normal">Артикул {data?.article}</p>
            )}
          </div>
          <div className="h-full">
            {status.characteristic_visible && (
              <ul className="text-fs_9 font-normal flex flex-col gap-2 p-5 mt-8 ">
                <li>
                  <span className="font-bold">Размеры : </span>
                  {data?.product_size}
                </li>
                <li>
                  <span className="font-bold">Материал : </span>
                  {data?.material}
                </li>
                <li>
                  <span className="font-bold">Вес (1 шт.) : </span>
                  {data?.weight}
                </li>
                <li>
                  <span className="font-bold">Доступное нанесение : </span>
                  {data?.printing}
                </li>
                <li>
                  <div className="flex items-center flex-wrap gap-1 ">
                    {data?.colors?.map((color, i) => (
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
              <textarea
                name="description"
                value={data?.description}
                onChange={handleInputChange}
                className={`${inputStyle} resize-none w-full text-fs_9 font-normal h-[55%]  px-5`}
              ></textarea>
            )}
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="h-[65%]">
            <img
              className=" h-full object-contain"
              src={data?.images_set[0]?.image || data?.images_set[0]?.image_url}
              alt=""
            />
          </div>
          <div className="flex flex-1 items-center gap-3">
            {data?.images_set.slice(1, 3).map((image, i) => (
              <div key={i} className="flex-1 h-[100px]">
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
  );
};

export default DefaultTemplate;
