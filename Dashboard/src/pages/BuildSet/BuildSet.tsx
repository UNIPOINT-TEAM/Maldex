import { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
} from '@material-tailwind/react';
import accordionIcon from '../../assets/icons/accordion-icon.png';
import { SliderProduct } from '../../components';
// import GiftBanner from '../../assets/gift_builder_banner.png';
import ProductCart from '../../assets/images/machine.png';
import { IoAddSharp, IoCloseSharp } from 'react-icons/io5';
import DefaultLayout from '../../layout/DefaultLayout';

const BuildSet = () => {
  const [open, setOpen] = useState<number>(0);
  // @ts-ignore
  const [buildCart, setBuildCart] = useState([]);
  const [quantityVisible, setQuantityVisible] = useState<boolean>(false);
  // @ts-ignore
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
    <DefaultLayout>
      <div className="">
        <div className="grid grid-cols-10">
          <div className="col-span-10 lg:col-span-10">
            <div className="bg-greenPrimary h-[75px] flex items-center justify-center ">
              <h1 className=" text-[22px] lg:text-[30px] text-red-primary">
                Создайте идеальный подарок
              </h1>
            </div>
            <div className="w-full">
              <Accordion
                className=" border px-5 border-lightPrimary my-4"
                open={open === 1}
                icon={
                  <img
                    className={`${
                      open === 1 ? 'rotate-180' : ''
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
                className=" border  border-lightPrimary px-5 my-4"
                open={open === 2}
                icon={
                  <img
                    className={`${
                      open === 2 ? 'rotate-180' : ''
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
                className=" border  border-lightPrimary px-5 my-4"
                open={open === 3}
                icon={
                  <img
                    className={`${
                      open === 3 ? 'rotate-180' : ''
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
                className=" border  border-lightPrimary px-5 my-4"
                open={open === 4}
                icon={
                  <img
                    className={`${
                      open === 4 ? 'rotate-180' : ''
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
                className=" border  border-lightPrimary px-5 my-4"
                open={open === 5}
                icon={
                  <img
                    className={`${
                      open === 5 ? 'rotate-180' : ''
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

        </div>
      </div>
    </DefaultLayout>
  );
};

export default BuildSet;
