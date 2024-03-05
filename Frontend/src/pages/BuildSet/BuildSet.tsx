import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import accordionIcon from "../../assets/icons/accordion-icon.png";
import { ProductCard } from "../../components";

const BuildSet = () => {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-9">
        <div className="bg-greenPrimary h-[75px] flex items-center justify-center ">
          <h3 className="text-[30px] text-[#fff]">
            Создайте идеальный подарок
          </h3>
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
              <h3 className="font-helvetica -tracking-tighter text-fs_4 text-greenPrimary ">
                1. Ежедневники
              </h3>
            </AccordionHeader>
            <AccordionBody className="p-4" placeholder={<div />}>
              <ProductCard />
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
              <h3 className="font-helvetica -tracking-tighter text-fs_4 text-greenPrimary ">
                2. Термокружки
              </h3>
            </AccordionHeader>
            <AccordionBody className="p-4" placeholder={<div />}>
              Content
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
              <h3 className="font-helvetica -tracking-tighter text-fs_4 text-greenPrimary ">
                3. Гаджеты
              </h3>
            </AccordionHeader>
            <AccordionBody className="p-4" placeholder={<div />}>
              Content
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
              <h3 className="font-helvetica -tracking-tighter text-fs_4 text-greenPrimary ">
                4. Добавьте еще что-то
              </h3>
            </AccordionHeader>
            <AccordionBody className="p-4" placeholder={<div />}>
              Content
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
              <h3 className="font-helvetica -tracking-tighter text-fs_4 text-greenPrimary ">
                5. Выберите упаковку
              </h3>
            </AccordionHeader>
            <AccordionBody className="p-4" placeholder={<div />}>
              Content
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className="col-span-3">
        <img
          className="w-full"
          src="https://s3-alpha-sig.figma.com/img/847a/d843/177d5e0d0f6d6b28e49f3ac745be1657?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ALnudwGeqbF4p1Fscwnwv1YVMSuGJDQ841RwmWkLFhCe2R~ZZhNswAFfRef41KPdLmH-eCqrXFYvkTAHetzZYlkJZAKKLr5q8QQ9E6GxD3rMhxwN095gikCsHuO~CYVP71xNWC2f0fFXYxYtTATexDkajz3UK9CYu3QuUwX9qFu7DZMmCTKL7-qwKaORklnY-4qxD-T3vwdKeHSqKMHpyap2eQG-A9N31gwHwPHk7qGec9Si2i6HAH0xVIPdR-hmAjiWxEDnKTV9mcKXI-2TzQSvYTYXO6xLvfVmUxFNuR~ZWnFYdq8h0OqWjKusC9Tb07XGNdY76fq3UNyxk-ShYQ__"
          alt=""
        />
        <h3 className="p-[20px] text-center text-fs_3 font-extrabold">
          Создайте свой <br />
          подарочный <span className="text-greenPrimary">набор</span>
        </h3>
      </div>
    </div>
  );
};

export default BuildSet;
