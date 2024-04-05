import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from "@material-tailwind/react";
import accordionIcon from "../../assets/icons/accordion-icon.png";
import { SliderProduct } from "../../components";
import GiftBanner from "../../assets/gift_builder_banner.png";
import ProductCart from "../../assets/images/machine.png";
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";
  
const BuildSet = () => {
  const [open, setOpen] = useState<number>(0);
  // @ts-ignore
  const [buildCart, setBuildCart] = useState([]);
  const [quantityVisible, setQuantityVisible] = useState<boolean>(false);
  // @ts-ignore
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <div className="">
      <div className="grid grid-cols-10">
        <div className="col-span-10 lg:col-span-8">
          <div className="bg-greenPrimary h-[75px] flex items-center justify-center ">
            <h1 className=" text-[22px] lg:text-[30px] text-[#fff]">
              Создайте идеальный подарок
            </h1>
          </div>
          <div className="w-full">
            <Accordion
              className=" border border-l-0 px-5 border-lightPrimary my-4"
              open={open === 1}
              icon={
                <img
                  className={`${
                    open === 1 ? "rotate-180" : ""
                  } transition-transform w-[18px]`}
                  src={accordionIcon}
                />
              }
              placeholder={<div />}
            >
              <AccordionHeader
                className="border-0  p-4"
                onClick={() => handleOpen(1)}
                placeholder={<div />}
              >
                <h2 className="font-helvetica tracking-wide text-fs_6 font-normal text-greenPrimary ">
                  1. Ежедневники
                </h2>
              </AccordionHeader>
              <AccordionBody className="p-4" placeholder={<div />}>
                <SliderProduct />
              </AccordionBody>
            </Accordion>
            <Accordion
              className=" border border-l-0 border-lightPrimary px-5 my-4"
              open={open === 2}
              icon={
                <img
                  className={`${
                    open === 2 ? "rotate-180" : ""
                  } transition-transform w-[18px]`}
                  src={accordionIcon}
                />
              }
              placeholder={<div />}
            >
              <AccordionHeader
                className="border-0  p-4"
                onClick={() => handleOpen(2)}
                placeholder={<div />}
              >
                <h2 className="font-helvetica tracking-wide text-fs_6 font-normal text-greenPrimary ">
                  2. Термокружки
                </h2>
              </AccordionHeader>
              <AccordionBody className="p-4" placeholder={<div />}>
                <SliderProduct />
              </AccordionBody>
            </Accordion>
            <Accordion
              className=" border border-l-0 border-lightPrimary px-5 my-4"
              open={open === 3}
              icon={
                <img
                  className={`${
                    open === 3 ? "rotate-180" : ""
                  } transition-transform w-[18px]`}
                  src={accordionIcon}
                />
              }
              placeholder={<div />}
            >
              <AccordionHeader
                className="border-0  p-4"
                onClick={() => handleOpen(3)}
                placeholder={<div />}
              >
                <h2 className="font-helvetica tracking-wide text-fs_6 font-normal text-greenPrimary ">
                  3. Гаджеты
                </h2>
              </AccordionHeader>
              <AccordionBody className="p-4" placeholder={<div />}>
                <SliderProduct />
              </AccordionBody>
            </Accordion>
            <Accordion
              className=" border border-l-0 border-lightPrimary px-5 my-4"
              open={open === 4}
              icon={
                <img
                  className={`${
                    open === 4 ? "rotate-180" : ""
                  } transition-transform w-[18px]`}
                  src={accordionIcon}
                />
              }
              placeholder={<div />}
            >
              <AccordionHeader
                className="border-0  p-4"
                onClick={() => handleOpen(4)}
                placeholder={<div />}
              >
                <h2 className="font-helvetica tracking-wide text-fs_6 font-normal text-greenPrimary ">
                  4. Добавьте еще что-то
                </h2>
              </AccordionHeader>
              <AccordionBody className="p-4" placeholder={<div />}>
                <SliderProduct />
              </AccordionBody>
            </Accordion>
            <Accordion
              className=" border border-l-0 border-lightPrimary px-5 my-4"
              open={open === 5}
              icon={
                <img
                  className={`${
                    open === 5 ? "rotate-180" : ""
                  } transition-transform w-[18px]`}
                  src={accordionIcon}
                />
              }
              placeholder={<div />}
            >
              <AccordionHeader
                className="border-0  p-4"
                onClick={() => handleOpen(5)}
                placeholder={<div />}
              >
                <h2 className="font-helvetica tracking-wide text-fs_6 font-normal text-greenPrimary ">
                  5. Выберите упаковку
                </h2>
              </AccordionHeader>
              <AccordionBody className="p-4" placeholder={<div />}>
                <SliderProduct />
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <div className="col-span-2 mb-6 hidden lg:block">
          {buildCart.length < 0 ? (
            <div>
              <img className="w-full" src={GiftBanner} alt="img" />
              <h2 className="p-[20px] text-center text-fs_3 font-extrabold">
                Создайте свой <br />
                подарочный <span className="text-greenPrimary">набор</span>
              </h2>
            </div>
          ) : (
            <div className="ps-6">
              <div className="heading my-4">
                <h2 className="text-[22px] font-medium text-greenPrimary">
                  Собери свой набор
                </h2>
                <span className="text-darkSecondary">
                  минимальный тираж от 30 шт.
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {[0, 0].map(() => (
                  <div className="group grid grid-cols-12  py-5 border-b border-darkSecondary">
                    <div className="col-span-3 h-full">
                      <img
                        src={ProductCart}
                        className="w-full h-full object-contain"
                        alt=""
                      />
                    </div>
                    <div className="col-span-6 h-full w-full text-fs_8 flex flex-col justify-between ">
                      <h4 className="font-medium">Инновационный очиститель</h4>
                      <p className="font-normal">15 185.55 ₽</p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 duration-300 col-span-3 h-full flex justify-end">
                      <div className="flex w-full flex-col justify-between items-end h-full text-darkSecondary ">
                        <IoCloseSharp
                          className="cursor-pointer"
                          onClick={() => setIsDelete(true)}
                        />
                        {!quantityVisible && (
                          <IoAddSharp
                            className="cursor-pointer"
                            onClick={() => setQuantityVisible(true)}
                          />
                        )}
                        {quantityVisible && (
                          <input className="w-[50px] px-2 text-black border border-black rounded-lg focus: outline-none" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-between font-bold">
                <h4 className="text-fs_8 uppercase">Итоговая стоимость:</h4>
                <h4 className="text-base ">14 619,00 ₽</h4>
              </div>
              <div className="w-full flex flex-col">
                <Button
                  placeholder={<button />}
                  className="my-2 hover:shadow-none tracking-wider mt-6 bg-greenPrimary h-[50px] text-fs_7 text-[#fff] shadow-none rounded-lg p-2 w-full"
                >
                  оформить
                </Button>
                <div className="flex justify-between text-darkSecondary">
                  <button className="text-[10px] tracking-wider rounded-md border border-darkSecondary px-[10px] py-[5px]">
                    Поделиться корзиной
                  </button>
                  <button className="text-[10px] tracking-wider rounded-md border border-darkSecondary px-[10px] py-[5px]">
                    создать кп
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildSet;
