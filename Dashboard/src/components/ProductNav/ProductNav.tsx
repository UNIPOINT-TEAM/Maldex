import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';

interface ProductNavProps {
  title: string;
  color: 'green' | 'red' | 'gray';
}

const ProductNav: React.FC<ProductNavProps> = ({ title, color }) => {
  let titleStyle = 'text-4xl traking-wide';
  const [selectedItem, setSelectedItem] = useState(0);

  if (color === 'green') {
    titleStyle +=
      ' font-medium text-[30px] lg:text-[40px] border-b-2 lg:border-0 border-greenPrimary text-greenPrimary';
  } else if (color === 'red') {
    titleStyle += ' font-medium text-[30px] lg:text-[40px] text-redPrimary';
  } else if (color === 'gray') {
    titleStyle += ' font-medium text-base lg:text-[28px] text-darkSecondary';
  }

  const items = [
    'Одежда',
    'Сумки, портфели, рюкзаки',
    'Ручки',
    'Кухня и бар',
    'Гаджеты',
    'Новый год и рождество',
  ];

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="mb-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className={titleStyle}>{title}</h2>
        {/* <button className="mx-3 uppercase text-fs_8 font-medium p-[6px] tracking-wide  border border-redPrimary rounded-lg text-redPrimary block ss:hidden">
          добавить
        </button> */}
        <button
          onClick={handleOpen}
          className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
        >
          Добавить новых товаров
        </button>
      </div>
      <div className="border border-lightSecondary rounded-xl  uppercase text-darkSecondary font-semibold tracking-wider">
        <div className="flex justify-between items-center px-3 lg:px-7 py-0">
          <div className="overflow-x-auto product-nav">
            <ul className="flex gap-5 whitespace-nowrap">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-medium text-[10px] lg:text-fs_8 py-4 border-b-2 ${
                    selectedItem === index
                      ? 'border-redPrimary text-redPrimary'
                      : 'border-transparent hover:text-redPrimary '
                  }`}
                  onClick={() => setSelectedItem(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="uppercase text-[10px] font-bold tracking-wide h-7  px-3 border border-redPrimary rounded-[8px] text-redPrimary hidden ss:block">
              Все топ-товары
            </button>
          </div>
        </div>
      </div>

      <div>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>Its a simple dialog.</DialogHeader>
          <DialogBody>
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductNav;
