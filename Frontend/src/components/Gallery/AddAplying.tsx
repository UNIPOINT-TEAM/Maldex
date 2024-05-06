import React, { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { IoAddOutline } from "react-icons/io5";
import { Product } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../store/carouselReducer";
import { Rnd } from "react-rnd";

const AddAplying: React.FC<Product> = ({ productData }) => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  // @ts-expect-error: This
  const items = useSelector((state) => state.carousel.items);
  // @ts-expect-error: This
  const activeIndex = useSelector((state) => state.carousel.activeCaruselIndex);

  const handleOpen = () => setOpen(!open);
  const handleChangeitem = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    const updatedItem = {
      ...items[activeIndex],
      applying: {
        ...items[activeIndex]?.applying,
        image: URL.createObjectURL(files[0]),
      },
    };
    dispatch(updateItem(updatedItem));
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
          <div className="col-span-8 border border-[#9d9c98] flex justify-center items-center h-full rounded-md">
            <div className="absolute">
              <div className="relative w-[100px] h-[100px]">
                <Rnd>
                  <img
                    src={items[activeIndex]?.applying?.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </Rnd>
              </div>
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

            <label htmlFor="upload-url" className="relative  w-full h-full ">
              <span className="text-[10px] uppercase font-medium tracking-wide">
                Загрузка файла
              </span>
              <input
                type="file"
                name="upload-url"
                id="upload-url"
                className="sr-only"
                onChange={handleChangeitem}
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
            <div className="">
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
                className="w-full text-[11px] text-darkPrimary font-normal h-[100px] border border-gray-400 rounded-xl resize-none p-2 outline-0"
              ></textarea>
            </div>
            <div className="">
              <label
                htmlFor="text"
                className="text-[10px] uppercase font-medium tracking-wide"
              >
                Добавить
              </label>
              <div className="grid"></div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddAplying;
