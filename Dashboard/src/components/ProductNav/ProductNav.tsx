import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { GetProduct } from '../../services/main';
import {
  GetHitCategory,
  GetHitNewCategory,
  GetMainCatalog,
} from '../../services/maincatalog';
import { Link } from 'react-router-dom';

interface ProductNavProps {
  title: string;
  color: 'green' | 'red' | 'gray';
}

const ProductNav: React.FC<ProductNavProps> = ({
  title,
  color,
  updateState,
  categoryId,
  path,
  type,
}) => {
  let titleStyle = 'text-4xl traking-wide';
  const [selectedItem, setSelectedItem] = useState(2);
  const [categories, setCategories] = useState([]);

  if (color === 'green') {
    titleStyle +=
      ' font-medium text-[30px] lg:text-[40px] border-b-2 lg:border-0 border-green-primary text-green-primary';
  } else if (color === 'red') {
    titleStyle += ' font-medium text-[30px] lg:text-[40px] text-red-primary';
  } else if (color === 'gray') {
    titleStyle += ' font-medium text-base lg:text-[28px] text-darkSecondary';
  }

  useEffect(() => {
    GetHitNewCategory(type).then((res) => {
      setCategories(res);
    });
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const [addProduct, setAddProduct] = useState<SliderProduct[]>([]);
  useEffect(() => {
    GetProduct().then((res) => {
      setAddProduct(res);
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
    handleOpen(); // Закрыть диалоговое окно
  };

  return (
    <div className="mb-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className={titleStyle}>{title}</h2>
        {/* <button className="mx-3 uppercase text-fs_8 font-medium p-[6px] tracking-wide  border border-red-primary rounded-lg text-red-primary block ss:hidden">
          добавить
        </button> */}
        <Link to={'/categories'}>
          <button
            onClick={handleOpen}
            className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
          >
            Добавить новых товаров
          </button>
        </Link>
      </div>
      <div className="border border-lightSecondary rounded-xl  uppercase text-darkSecondary font-semibold tracking-wider">
        <div className="flex justify-between items-center px-3 lg:px-7 py-0">
          <div className="overflow-x-auto product-nav">
            <ul className="flex gap-5 whitespace-nowrap">
              {categories.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-medium text-[10px] lg:text-fs_8 py-4 border-b-2 ${
                    selectedItem === item.id
                      ? 'border-red-primary text-red-primary'
                      : 'border-transparent hover:text-red-primary '
                  }`}
                  onClick={() => {
                    setSelectedItem(item.id),
                      updateState(item.id ? item.id : 1);
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="uppercase text-[10px] font-bold tracking-wide h-7  px-3 border border-red-primary rounded-[8px] text-red-primary hidden ss:block">
              Все топ-товары
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
