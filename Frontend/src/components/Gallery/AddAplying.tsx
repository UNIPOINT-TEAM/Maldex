import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { IoAddOutline } from "react-icons/io5";
import { Product } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../store/carouselReducer";
import { Rnd } from "react-rnd";

/*@ts-expect-error: This */
const AddAplying: React.FC<Product> = ({ productData }) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [fontFamily, setFontFamily] = useState("Times New Roman");
  const [fontSize, setFontSize] = useState("11px");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  const dispatch = useDispatch();
  // @ts-expect-error: This
  const items = useSelector((state) => state.carousel.items);
  // @ts-expect-error: This
  const activeIndex = useSelector((state) => state.carousel.activeCaruselIndex);

  const handleOpen = () => setOpen(!open);
  const handleChangeItem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const updatedItem = {
      ...items[activeIndex],
      applying: {
        ...items[activeIndex]?.applying,
        /*@ts-expect-error: This */
        image: URL.createObjectURL(files[0]),
      },
    };
    dispatch(updateItem(updatedItem));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleFontFamilyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFontFamily(event.target.value);
  };

  const handleFontSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFontSize(event.target.value);
  };

  const handleBoldChange = () => {
    setBold(!bold);
  };

  const handleItalicChange = () => {
    setItalic(!italic);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="bg-greenPrimary flex items-center tracking-wide gap-1 px-2 py-1 font-bold text-white rounded-[5px] uppercase text-[12px]"
      >
        <IoAddOutline className="text-fs_6 font-bold" /> Добавить нанесение
      </button>
      <Dialog
        size="xl"
        className="h-[550px] p-6"
        placeholder={""}
        open={open}
        handler={handleOpen}
      >
        <div className="grid grid-cols-12 gap-5 h-full">
          <div className="col-span-8 border border-[#9d9c98] flex justify-center items-center h-full rounded-md relative">
            <div className="absolute top-0 left-0">
              <Rnd>
                <img
                  src={items[activeIndex]?.applying?.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </Rnd>
            </div>
            <div className="absolute top-0 left-0">
              <Rnd>
                <div
                  style={{
                    fontFamily,
                    fontSize,
                    fontWeight: bold ? "bold" : "normal",
                    fontStyle: italic ? "italic" : "normal",
                  }}
                >
                  {text}
                </div>
              </Rnd>
            </div>
            <img
              src={productData?.image}
              alt="product-image"
              className="w-[300px] object-contain"
            />
          </div>
          <div className="col-span-4">
            <div className="">
              <h2 className="text-black text-[28px] font-medium">Нанесение</h2>
            </div>

            <label htmlFor="upload-url" className="relative w-full h-full ">
              <span className="text-[10px] uppercase font-medium tracking-wide">
                Загрузка файла
              </span>
              <input
                type="file"
                name="upload-url"
                id="upload-url"
                className="sr-only"
                onChange={handleChangeItem}
              />
              <div className="h-[40px] rounded-lg w-full border gap-2 flex justify-center items-center border-greenPrimary">
                <img
                  width={20}
                  height={20}
                  className="object-contain"
                  src="https://s3-alpha-sig.figma.com/img/8b16/1e05/b9ab666cf2620a1ff302292956c7f087?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pSCyTnQ0B0mWKDg8McYo4fbXNs1d8ef4RVLgD4uO6Z~cYftWySAUFh2qsZ2wXhQSMfedNMAPpE-MQbFcvRHTOhnHdES5cE7r4GkuwakQ-NofLesYn0FX0yzgOV9GxLm4OsJlATO6BdLEP0P~rDVlu~zvTytqWkKzV5Xm64Ll6Mn3uAZ6Bc0imcUIEYpd~38Vn9vj~6VtT-WHWSfB9pVQtj2WRXdg82OsaBUbv~m2ABn2Rrfmc~kPShVmvhfvrppOoWP6QeEysMjIUwU4ZNqbqltXRq1-58BIDXjQi7Y7YZivccoz5I3WbypQrvrX3003E6fM1wuNdMBlI2bcxsPcVQ__"
                  alt="upload-input-img"
                />
                <span className="text-[10px] tracking-wider text-greenPrimary font-medium uppercase">
                  загрузить картинку
                </span>
              </div>
            </label>
            <div className="mt-4">
              <label
                htmlFor="text"
                className="text-[10px] uppercase font-medium tracking-wide"
              >
                Добавление текста
              </label>
              <textarea
                name="text"
                id="text"
                placeholder="Введите текст..."
                value={text}
                onChange={handleTextChange}
                className="w-full text-[11px] text-darkPrimary font-normal h-[100px] border border-gray-400 rounded-xl resize-none p-2 outline-0"
              ></textarea>
            </div>
            <div className="mt-4">
              <label
                htmlFor="font-family"
                className="text-[10px] uppercase font-medium tracking-wide"
              >
                Шрифт
              </label>
              <select
                id="font-family"
                value={fontFamily}
                onChange={handleFontFamilyChange}
                className="w-full border border-gray-400 rounded-xl p-2"
              >
                <option value="Times New Roman">Times New Roman</option>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
              </select>
            </div>
            <div className="mt-4">
              <label
                htmlFor="font-size"
                className="text-[10px] uppercase font-medium tracking-wide"
              >
                Размер шрифта
              </label>
              <select
                id="font-size"
                value={fontSize}
                onChange={handleFontSizeChange}
                className="w-full border border-gray-400 rounded-xl p-2"
              >
                <option value="11px">11 px</option>
                <option value="14px">14 px</option>
                <option value="18px">18 px</option>
              </select>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <label className="text-[10px] uppercase font-medium tracking-wide">
                <input
                  type="checkbox"
                  checked={bold}
                  onChange={handleBoldChange}
                  className="mr-2"
                />
                Ж
              </label>
              <label className="text-[10px] uppercase font-medium tracking-wide">
                <input
                  type="checkbox"
                  checked={italic}
                  onChange={handleItalicChange}
                  className="mr-2"
                />
                К
              </label>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddAplying;
