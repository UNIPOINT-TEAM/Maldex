import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import React, { useState } from "react";
import Tshirt from "../../assets/t-shirt.svg";
import { ProductColor } from "../../mock/data";
import ProductSize from "./ProductSize";
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
        className="text-[9px] lg:text-[10px] shadow-none opacity-100 border bg-transparent border-darkSecondary px-2 lg:px-4 py-[6px] rounded-lg uppercase"
      >
        бесплатный образец
      </button>
      <Dialog
        placeholder={<div />}
        open={open}
        handler={handleOpen}
        className="bg-[#fff] place-content-start p-5"
      >
        <DialogHeader
          placeholder={<div />}
          className="flex-col items-start w-[1000px]"
        >
          <div>
            <span className="border tracking-normal  text-redPrimary border-redPrimary py-[2px] px-1 me-1 rounded-[15px] text-[12px] font-bold ">
              NEW
            </span>
            <span className="border tracking-normal border-greenPrimary text-greenPrimary py-[2px] px-[6px]  rounded-[15px] text-[12px] font-bold">
              HIT
            </span>
          </div>
          <div className="flex mt-2 gap-10">
            <div className="text-base ">
              <h2>Футболка женская</h2>
              <span className="font-light">T-bolka Lady</span>
            </div>
            <div className="text-base">
              <h2 className="">15 185.55</h2>
              <span className="font-light text-fs_8 line-through">16 564</span>
            </div>
            <div className="">
              <h2 className="text-base font-light"> Выбор цвета:</h2>
              <div className="flex  gap-2">
                {ProductColor.map((item) => (
                  <input
                    onClick={() => setproductColor(item.id)}
                    type="radio"
                    name="input"
                    style={{ accentColor: item.color, background: item.color }}
                    className={`w-4 lg:w-5 h-4 lg:h-5 bg-[${item.color}] ${
                      productColor !== item.id && "appearance-none"
                    } rounded-full  cursor-pointer`}
                  />
                ))}
              </div>
            </div>
          </div>
        </DialogHeader>
        <DialogBody placeholder={<div />}>
          <div className="flex w-full gap-[70px]">
            <img src={Tshirt} alt="" />
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
                <Button className="mt-4 w-full">получить Дизайн макет</Button>
              </form>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default FreeSample;
