import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Tshirt from "../../assets/t-shirt.svg";
import { ProductColor } from "../../mock/data";
import ProductSize from "./ProductSize";
import { IoClose } from "react-icons/io5";
const btnSize = [
  { id: 1, size: "XS" },
  { id: 2, size: "S" },
  { id: 3, size: "M" },
  { id: 4, size: "L" },
  { id: 5, size: "XL" },
];
const FreeSample = () => {
  const [open, setOpen] = React.useState(false);
  const [productColor, setproductColor] = useState<number>(0);
  const [btnActiveSize, setbtnActiveSize] = useState<number>(1);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-[9px] font-bold lg:text-[10px] text-[#666666] shadow-none opacity-100 border bg-transparent border-[#666666] px-[2px] lg:px-4 py-[6px] rounded-lg uppercase"
      >
        бесплатный образец
      </button>
      {open && (
        <div className="fixed w-full h-full top-0 left-0 bg-[#00000050] z-[9]"></div>
      )}
      {open && (
        <div className="absolute w-full h-full  top-0 left-0 z-[99] flex items-start justify-end">
          <div className="bg-[#fff] shadow-md max-w-[830px] p-5 rounded-lg pb-10">
            <div className="flex-col items-start">
              <div className="flex justify-between">
                <div>
                  <span className="border tracking-normal  text-redPrimary border-redPrimary py-[2px] px-1 me-1 rounded-[15px] text-[12px] font-bold ">
                    NEW
                  </span>
                  <span className="border tracking-normal border-greenPrimary text-greenPrimary py-[2px] px-[6px]  rounded-[15px] text-[12px] font-bold">
                    HIT
                  </span>
                </div>
                <button className="text-black" onClick={() => setOpen(false)}>
                  <IoClose size={"25px"} />
                </button>
              </div>
              <div className="flex my-4 gap-[75px] text-black">
                <div className="text-base ">
                  <h2 className="font-bold">Футболка женская</h2>
                  <span className="font-light">T-bolka Lady</span>
                </div>
                <div className="text-base">
                  <h2 className="font-bold">15 185.55</h2>
                  <span className="font-light text-fs_8 line-through">
                    16 564
                  </span>
                </div>
                <div className="">
                  <h2 className="text-base font-light"> Выбор цвета:</h2>
                  <div className="flex  gap-2">
                    {ProductColor.map((item) => (
                      <input
                        onClick={() => setproductColor(item.id)}
                        type="radio"
                        name="input"
                        style={{
                          accentColor: item.color,
                          background: item.color,
                        }}
                        className={`w-4 lg:w-5 h-4 lg:h-5 bg-[${item.color}] ${
                          productColor !== item.id && "appearance-none"
                        } rounded-full  cursor-pointer`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex w-full gap-[70px]">
                <img src={Tshirt} alt="" className="h-[300px]" />
                <div className="">
                  <h2 className="text-base font-light text-black">
                    Выбор размера:
                  </h2>
                  <div className="flex space-x-2">
                    {btnSize.map((item, i) => (
                      <ProductSize
                        {...item}
                        onActiveSize={setbtnActiveSize}
                        btnActiveSize={btnActiveSize}
                        key={i}
                      />
                    ))}
                  </div>
                  <form action="" className="mt-5">
                    <input
                      type="text"
                      placeholder="Название компании"
                      className="border-0 border-b w-full border-black py-2 placeholder:text-black tracking-wide"
                    />
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Телефон*"
                        className="border-0 border-b w-full border-black py-2 placeholder:text-black tracking-wide"
                      />
                      <input
                        type="text"
                        placeholder="Почта*"
                        className="border-0 border-b w-full border-black py-2 placeholder:text-black tracking-wide"
                      />
                    </div>
                    <Button placeholder={<button />} className="mt-4 w-full">
                      получить Дизайн макет
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FreeSample;
