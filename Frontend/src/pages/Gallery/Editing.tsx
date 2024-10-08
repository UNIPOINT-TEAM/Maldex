import { Checkbox } from "@material-tailwind/react";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../store/carouselReducer";
import defaultBg from "../../assets/Gallery/default-bg.jpg";

const colors = [
  { bg_color: "#fff", text_color: "#000" },
  { bg_color: "#583E26", text_color: "#fff" },
  { bg_color: "#77201A", text_color: "#fff" },
  { bg_color: "#787878", text_color: "#fff" },
  { bg_color: "#262626", text_color: "#fff" },
];
const buttons = [
  "В-Шелкография на тек...",
  "DTF-Полноцвет с тран...",
  "DTG-Полноцвет по тек...",
  "D-Шелкография с тран...",
  "F1-Флекс",
  "F2-Флекс",
  "I-Вышивка",
];
const Editing = () => {
  // @ts-expect-error: This
  const items = useSelector((state) => state.carousel.items);
  const dispatch = useDispatch();
  // @ts-expect-error: This
  const activeIndex = useSelector((state) => state.carousel.activeCaruselIndex);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const updatedItem = {
      ...items[activeIndex],
      data: {
        ...items[activeIndex]?.data,
        [event.target.name]: event.target.value,
      },
    };
    dispatch(updateItem(updatedItem));
  };

  return (
    <div className="px-5 col-span-4 py-3 h-full min-h-screen  border-0 border-r border-lightSecondary">
      <div className="text-darkPrimary text-[9px] font-medium  rounded-lg px-3 py-2 flex items-center justify-between">
        <input
          name="name"
          onChange={handleInputChange}
          value={items[activeIndex]?.data?.name}
          className="border text-[14px] w-[165px] px-[14px] py-2 border-lightSecondary  rounded-lg"
        />
        <button className="border text-[9px] text-darkSecondary h-[26px] font-bold px-[14px] pt-[3px] border-darkSecondary uppercase rounded-lg">
          сохранить
        </button>
      </div>
      <div className="body mt-4">
        <div className="flex flex-wrap gap-y-4 gap-x-16">
          <div>
            <h3 className="text-darkSecondary text-[10px] font-medium mb-1 uppercase">
              Фото товара
            </h3>
            <div className="card relative group py-1 border-2 rounded-xl border-lightSecondary hover:border-redPrimary duration-300 hover:bg-[#d9d9d9] w-[120px] h-[64px]">
              {items[activeIndex]?.data?.images_set && (
                <img
                  src={
                    items[activeIndex]?.data?.images_set[0]?.image ||
                    items[activeIndex]?.data?.images_set[0]?.image_url
                  }
                  alt="slider-img"
                  className="h-full w-full object-contain object-center mix-blend-multiply"
                />
              )}

              <label
                htmlFor="cover"
                className="flex absolute top-0 left-0 col-span-1 w-full h-full cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-medium  hover:bg-opacity-90 "
              >
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  className="sr-only"
                  onChange={(e) => {
                    dispatch(
                      updateItem({
                        ...items[activeIndex],
                        data: {
                          ...items[activeIndex]?.data,

                          images_set: {
                            ...items[activeIndex]?.data?.images_set,
                            [0]: {
                              image_url: URL.createObjectURL(e.target.files[0]),
                            },
                          },
                        },
                      })
                    );
                  }}
                />
                <div className="group-hover:opacity-100 duration-300 opacity-0 rounded-full bg-redPrimary flex items-center justify-center w-8 h-8">
                  <MdOutlineAdd className="text-xl text-[#fff] p-0" />
                </div>
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-darkSecondary text-[10px] font-medium mb-1 uppercase">
              галерея
            </h3>
            <div className="card border-2 rounded-xl border-redPrimary bg-[#d9d9d9] w-[120px] h-[64px]">
              <label
                htmlFor="applying"
                className="flex  relative col-span-1 w-full h-full cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-medium  hover:bg-opacity-90 "
              >
                <input
                  type="file"
                  name="applying"
                  id="applying"
                  className="sr-only"
                  onChange={(e) => {
                    dispatch(
                      updateItem({
                        ...items[activeIndex],
                        applying: {
                          ...items[activeIndex]?.applying,
                          /*@ts-expect-error: This */
                          image: URL.createObjectURL(e.target.files[0]),
                        },
                      })
                    );
                  }}
                />
                <div className="rounded-full bg-redPrimary flex items-center justify-center w-8 h-8">
                  <MdOutlineAdd className="text-xl text-[#fff] p-0" />
                </div>
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-darkSecondary text-[10px] font-medium mb-1 uppercase">
              преимущества
            </h3>
            <div className="card border-2 rounded-xl border-redPrimary bg-[#d9d9d9] w-[120px] h-[64px]">
              <label
                htmlFor="upload-bg-url"
                className="flex  relative col-span-1 w-full h-full cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-medium  hover:bg-opacity-90 "
              >
                <input
                  type="file"
                  name="upload-bg-url"
                  id="upload-bg-url"
                  className="sr-only"
                  onChange={(e) => {
                    dispatch(
                      updateItem({
                        ...items[activeIndex],
                        background: {
                          ...items[activeIndex]?.applying,
                          /*@ts-expect-error: This */
                          image: URL.createObjectURL(e.target.files[0]),
                        },
                      })
                    );
                  }}
                />
                <div className="rounded-full bg-redPrimary flex items-center justify-center w-8 h-8">
                  <MdOutlineAdd className="text-xl text-[#fff] p-0" />
                </div>
              </label>
            </div>
          </div>
          <div>
            <h3 className="text-darkSecondary opacity-0 text-[10px] font-medium mb-1 uppercase">
              Фото товара
            </h3>
            <div
              onClick={() =>
                dispatch(
                  updateItem({
                    ...items[activeIndex],
                    background: {
                      ...items[activeIndex]?.background,
                      image: defaultBg,
                    },
                  })
                )
              }
              className="card border-2 cursor-pointer rounded-xl border-lightSecondary  w-[120px] h-[64px]"
            >
              <img
                src={defaultBg}
                alt="slider-img"
                className="h-full w-full object-cover rounded-xl object-center"
              />
            </div>
          </div>
        </div>
        <h2 className="text-[10px] uppercase pb-1 mt-5 font-bold text-darkSecondary">
          фон
        </h2>
        <div className="flex gap-2 flex-wrap">
          {colors.map((item, i) => (
            <button
              key={i}
              style={{ background: item.bg_color, color: item.text_color }}
              onClick={() =>
                dispatch(
                  updateItem({
                    ...items[activeIndex],
                    background: {
                      ...items[activeIndex]?.background,
                      bg_color: item.bg_color,
                      text_color: item.text_color,
                      image: "",
                    },
                  })
                )
              }
              className={`${
                item.bg_color == items[activeIndex]?.background?.bg_color
                  ? "border-redPrimary"
                  : "border-[#eeede9]"
              } border-2 w-14 h-14 duration-200 hover:border-redPrimary  rounded-[11px]`}
            ></button>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <span className="text-[11px] uppercase font-medium">
              для текущего слайда
            </span>
            <Checkbox
              crossOrigin={""}
              ripple={false}
              onChange={() => {
                dispatch(
                  updateItem({
                    ...items[activeIndex],
                    background: {
                      ...items[activeIndex]?.background,
                      allSlider: false,
                      currentSlide: true,
                    },
                  })
                );
              }}
              checked={items[activeIndex]?.background?.currentSlide}
              className="h-4 w-4 rounded border-darkSecondary bg-[#fff] checked:bg-redPrimary checked:border-redPrimary transition-all h hover:before:opacity-0"
            />
          </div>
          <div className="flex items-center">
            <span className="text-[11px] uppercase font-medium">для всех</span>
            <Checkbox
              crossOrigin={""}
              ripple={false}
              className="h-4 w-4 rounded border-darkSecondary bg-[#fff] checked:bg-redPrimary checked:border-redPrimary transition-all h hover:before:opacity-0"
              checked={items[activeIndex]?.background?.allSlider}
              onChange={() => {
                dispatch(
                  updateItem({
                    ...items[activeIndex],
                    background: {
                      ...items[activeIndex]?.background,
                      allSlider: true,
                      currentSlide: false,
                    },
                  })
                );
              }}
            />
          </div>
        </div>
        <h2 className="text-[10px] uppercase pb-1 mt-5 font-medium text-darkSecondary">
          описание
        </h2>
        <textarea
          name="description"
          onChange={handleInputChange}
          value={items[activeIndex]?.data?.description}
          className="border-2 border-redPrimary w-full rounded-xl resize-none p-2 outline-0"
          cols={30}
          rows={5}
        ></textarea>
      </div>
      <div className="text-[10px]">
        <h2 className="uppercase pb-1 mt-5 font-medium text-darkSecondary">
          характеристики
        </h2>
        <div className="grid gap-2 grid-cols-2">
          <div className="flex col-span-1">
            <label htmlFor="material" className="font-medium uppercase me-2">
              материал
            </label>
            <input
              id="material"
              name="material"
              onChange={handleInputChange}
              value={items[activeIndex]?.data?.material}
              className="w-auto h-4 px-1 border border-lightSecondary outline-0 rounded-[10px]"
            />
          </div>
          <div className="flex col-span-1">
            <label htmlFor="material" className="font-medium uppercase me-2">
              размер
            </label>
            <input
              id="size"
              name="product_size"
              onChange={handleInputChange}
              value={items[activeIndex]?.data?.product_size}
              className="w-auto px-1 h-4 border border-lightSecondary outline-0 rounded-[10px]"
            />
          </div>
          <div className="flex col-span-1">
            <label htmlFor="material" className="font-medium uppercase me-2">
              вес
            </label>
            <input
              id="weight"
              name="weight"
              onChange={handleInputChange}
              value={items[activeIndex]?.data?.weight}
              className="w-[66px] px-1 h-4 border border-lightSecondary outline-0 rounded-[10px]"
            />
          </div>
          <div className="flex col-span-1">
            <label htmlFor="material" className="font-medium uppercase me-2">
              артикул
            </label>
            <input
              id="article"
              name="article"
              onChange={handleInputChange}
              value={items[activeIndex]?.data?.article}
              className="w-[66px] px-1 h-4 border border-lightSecondary outline-0 rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex mt-5 gap-6 w-3/4 flex-wrap">
          <div>
            <h2 className="uppercase pb-1 font-medium text-darkSecondary">
              цена
            </h2>
            <input
              id="price"
              name="price"
              onChange={handleInputChange}
              value={items[activeIndex]?.data?.price}
              className="w-[110px] text-fs_8 h-[26px] px-1 border border-lightSecondary outline-0 rounded-[10px]"
            />
          </div>
          <div>
            <h2 className="uppercase pb-1 font-medium text-darkSecondary">
              тираж
            </h2>
            <input
              id="quantity"
              name="quantity"
              onChange={handleInputChange}
              value={items[activeIndex]?.data?.quantity}
              className="w-[110px] text-fs_8 h-[26px] px-1 border border-lightSecondary outline-0 rounded-[10px]"
            />
          </div>
          <div>
            <h2 className="uppercase pb-1 font-medium text-darkSecondary">
              итоговая цена
            </h2>
            <input
              value={items[activeIndex]?.data?.totalPrice}
              id="material"
              type="text"
              className="w-[110px] text-fs_8 h-[26px] px-1 border border-lightSecondary outline-0 rounded-[10px]"
            />
          </div>
          <div>
            <h2 className="uppercase pb-1 font-medium text-darkSecondary">
              цвета
            </h2>
            <input
              id="material"
              type="text"
              className="w-[110px] text-fs_8 h-[26px] px-1 border border-lightSecondary outline-0 rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex mb-16 flex-wrap items-start mt-5 gap-3">
          {buttons.map((item, i) => (
            <Link to={""} key={i}>
              <button className="bg-transparent transform-none text-greenPrimary py-[6px] px-4 shadow-none hover:shadow-none border font-normal rounded-full border-greenPrimary">
                <span className="text-fs_8 tracking-wider">{item}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editing;
