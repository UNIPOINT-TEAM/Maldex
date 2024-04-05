import { Checkbox } from "@material-tailwind/react";
import { Galleryslider } from "../../components";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Editing = () => {
  const buttons = [
    "В-Шелкография на тек...",
    "DTF-Полноцвет с тран...",
    "DTG-Полноцвет по тек...",
    "D-Шелкография с тран...",
    "F1-Флекс",
    "F2-Флекс",
    "I-Вышивка",
  ];
  return (
    <div className="grid grid-cols-12 h-full">
      <div className="px-5 col-span-4 py-3 h-full min-h-screen  border-0 border-r border-lightSecondary">
        <div className="text-darkPrimary text-[9px] font-medium  rounded-lg px-3 py-2 flex items-center justify-between">
          <div className="border text-[14px] w-[165px] px-[14px] py-2 border-lightSecondary  rounded-lg">
            <h2>Любое название</h2>
          </div>
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
              <div className="card border-2 rounded-xl border-redPrimary bg-[#d9d9d9] w-[120px] h-[64px]">
                <label
                  htmlFor="cover"
                  className="flex  relative col-span-1 w-full h-full cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-medium  hover:bg-opacity-90 "
                >
                  <input
                    type="file"
                    name="cover"
                    id="cover"
                    className="sr-only"
                  />
                  <div className="rounded-full bg-redPrimary flex items-center justify-center w-8 h-8">
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
                  htmlFor="cover"
                  className="flex  relative col-span-1 w-full h-full cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-medium  hover:bg-opacity-90 "
                >
                  <input
                    type="file"
                    name="cover"
                    id="cover"
                    className="sr-only"
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
                  htmlFor="cover"
                  className="flex  relative col-span-1 w-full h-full cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-medium  hover:bg-opacity-90 "
                >
                  <input
                    type="file"
                    name="cover"
                    id="cover"
                    className="sr-only"
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
              <div className="card border-2 rounded-xl border-lightSecondary  w-[120px] h-[64px]"></div>
            </div>
          </div>
          <h2 className="text-[10px] uppercase pb-1 mt-5 font-bold text-darkSecondary">
            фон
          </h2>
          <div className="flex gap-2 flex-wrap">
            <button className="border-2 w-14 h-14 duration-200 hover:border-redPrimary border-[#eeede9] rounded-[11px]"></button>
            <button className="border-2 w-14 h-14 duration-200 hover:border-redPrimary border-[#eeede9] rounded-[11px] bg-[#bfedee]"></button>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center">
              <span className="text-[11px] uppercase font-medium">
                для текущего слайда
              </span>
              <Checkbox
                ripple={false}
                className="h-4 w-4 rounded border-darkSecondary bg-[#fff] checked:bg-redPrimary checked:border-redPrimary transition-all h hover:before:opacity-0"
                defaultChecked
              />
            </div>
            <div className="flex items-center">
              <span className="text-[11px] uppercase font-medium">
                для всех
              </span>
              <Checkbox
                ripple={false}
                className="h-4 w-4 rounded border-darkSecondary bg-[#fff] checked:bg-redPrimary checked:border-redPrimary transition-all h hover:before:opacity-0"
                defaultChecked
              />
            </div>
          </div>
          <h2 className="text-[10px] uppercase pb-1 mt-5 font-medium text-darkSecondary">
            описание
          </h2>
          <textarea
            name=""
            className="border-2 border-redPrimary w-full rounded-xl resize-none p-2 outline-0"
            cols={30}
            rows={4}
          ></textarea>
        </div>
        <div className="text-[10px]">
          <h2 className="uppercase pb-1 mt-5 font-medium text-darkSecondary">
            характеристики
          </h2>
          <div className="grid gap-2 grid-cols-2">
            <div className="flex col-span-1">
              <label htmlFor="material" className=" font-medium uppercase me-2">
                материал
              </label>
              <input
                id="material"
                type="text"
                className="w-[66px] h-4 px-1 border border-lightSecondary outline-0 rounded-[10px]"
              />
            </div>
            <div className="flex col-span-1">
              <label htmlFor="material" className=" font-medium uppercase me-2">
                размер
              </label>
              <input
                id="material"
                type="text"
                className="w-[66px] px-1 h-4 border border-lightSecondary outline-0 rounded-[10px]"
              />
            </div>
            <div className="flex col-span-1">
              <label htmlFor="material" className=" font-medium uppercase me-2">
                вес
              </label>
              <input
                id="material"
                type="text"
                className="w-[66px] px-1 h-4 border border-lightSecondary outline-0 rounded-[10px]"
              />
            </div>
            <div className="flex col-span-1">
              <label htmlFor="material" className=" font-medium uppercase me-2">
                вес
              </label>
              <input
                id="material"
                type="text"
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
                id="material"
                type="text"
                className="w-[110px] text-fs_8 h-[26px] px-1 border border-lightSecondary outline-0 rounded-[10px]"
              />
            </div>
            <div>
              <h2 className="uppercase pb-1 font-medium text-darkSecondary">
                тираж
              </h2>
              <input
                id="material"
                type="text"
                className="w-[110px] text-fs_8 h-[26px] px-1 border border-lightSecondary outline-0 rounded-[10px]"
              />
            </div>
            <div>
              <h2 className="uppercase pb-1 font-medium text-darkSecondary">
                итоговая цена
              </h2>
              <input
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
      <div className="p-3 flex-1 col-span-8">
        <Galleryslider />
      </div>
    </div>
  );
};

export default Editing;
