import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
// import { GetProduct } from '../../../services/main';
// import { GetGiftsCategory } from '../../../services/gifts';
import { Link } from 'react-router-dom';
import { GetGiftsCategory } from '../../../services/services';
// import { GetProduct } from '../../services/main';

interface GiftsNavProps {
  title: string;
  color: 'green' | 'red' | 'gray';
  subcategories : any[];
}

const GiftsNav: React.FC<GiftsNavProps & { onSubCategoryClick: (subcategory: any) => void }> = ({ title, color, subcategories, onSubCategoryClick }) => {
  let titleStyle = 'text-4xl traking-wide';
  const [selectedItem, setSelectedItem] = useState(0);

  if (color === 'green') {
    titleStyle +=
      ' font-medium text-[30px] lg:text-[40px] border-b-2 lg:border-0 border-green-primary text-green-primary';
  } else if (color === 'red') {
    titleStyle += ' font-medium text-[30px] lg:text-[40px] text-red-primary';
  } else if (color === 'gray') {
    titleStyle += ' font-medium text-base lg:text-[28px] text-darkSecondary';
  }



  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [addProduct, setAddProduct] = useState<SliderProduct[]>([1]);
  // useEffect(() => {
  //   GetProduct().then((res) => {
  //     console.log(res);
  //     setAddProduct(res);
  //   });
  // }, []);

  const [giftCategory, setGiftCategory] = useState('')



  useEffect(() => {
    GetGiftsCategory()
      .then((res) => {
        setGiftCategory(res);
        console.log(res);
      })
      .catch((error) => {
        console.error('Error fetching FAQ data:', error);
      });
  }, []);

  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const handleCheckboxChange = (index: number) => {
    if (selectedProducts.includes(index)) {
      setSelectedProducts(selectedProducts.filter((item) => item !== index));
    } else {
      setSelectedProducts([...selectedProducts, index]);
    }
  };

  const handleConfirm = () => {
    // Здесь вы можете использовать selectedProducts для дальнейшей обработки
    console.log('Selected products:', selectedProducts);
    handleOpen(); // Закрыть диалоговое окно
  };

  return (
    <div className="mb-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className={titleStyle}>{title}</h2>

      </div>
      <div className="border border-lightSecondary rounded-xl  uppercase text-darkSecondary font-semibold tracking-wider">
        <div className="flex justify-between items-center px-3 lg:px-7 py-0">
          <div className="overflow-x-auto product-nav">
            <ul className="flex gap-5 whitespace-nowrap">
            {subcategories.map((sub, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-medium text-[10px] lg:text-fs_8 py-4 border-b-2 ${
                    selectedItem === index
                      ? 'border-redPrimary text-red-primary'
                      : 'border-transparent hover:text-red-primary'
                  }`}
                  onClick={() => {
                    setSelectedItem(index);
                    onSubCategoryClick(sub);
                  }}
                >
                  {sub.name}
                </li>
              ))}
            </ul>
          </div>
          <button className="uppercase text-[10px] font-bold tracking-wide h-7  px-3 border border-red-primary rounded-[8px] text-red-primary hidden ss:block">
            Все топ-товары
          </button>
        </div>
      </div>


    </div>
  );
};

export default GiftsNav;
