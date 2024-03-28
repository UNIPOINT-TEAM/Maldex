import { useState } from 'react';
import { EditDishes } from '..';
import Product1 from '../../assets/images/product1.png';
import Product2 from '../../assets/images/product2.png';
import Product3 from '../../assets/images/product3.png';
import Product4 from '../../assets/images/product4.png';

const Dishes = () => {
  const [items, setItems] = useState([
    { number: 160, name: 'Графины' },
    { number: 42, name: 'Наборы ложек' },
    { number: 28, name: 'Наборы столовых приборов' },
    { number: 40, name: 'Ножи и наборы ножей' },
    { number: 67, name: 'Подставки для бутылок' },
    { number: 67, name: 'Сервизы' },
    { number: 27, name: 'Тарелки' },
  ]);
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl ">посуда</h3>
        <EditDishes />
      </div>
      <div className="w-full mb-[80px]">
        <div className="grid grid-rows-3 h-[360px] grid-cols-12 grid-flow-col gap-4">
          <div className="col-span-12 lg:col-span-9 h-full row-span-3">
            <div className="grid grid-cols-5 md:grid-cols-11 h-full gap-[10px]">
              <div className="col-span-3 bg-white flex items-center justify-center">
                <img src={Product3} alt="" />
              </div>
              <div className="col-span-2 lg:col-span-4">
                <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 h-full gap-[10px]">
                  <div className="bg-white flex items-center justify-center">
                    <img src={Product2} alt="" />
                  </div>
                  <div className="bg-white flex items-center justify-center">
                    <img src={Product4} alt="" />
                  </div>
                  <div className="bg-white items-center justify-center hidden lg:flex">
                    <img src={Product4} alt="" />
                  </div>
                  <div className="bg-white items-center justify-center hidden lg:flex">
                    <img src={Product2} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-4 bg-white  items-center justify-center hidden md:flex">
                <img src={Product1} alt="" />
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-3 hidden lg:block">
            <div className="grid grid-rows-2 grid-cols-1 gap-4 h-full">
              <div className="row-span-1 col-span-1 flex flex-col gap-[3px]">
                {items.map((i, index) => (
                  <p className="text-[14px] text-black font-medium">
                    {i.name}
                    <b className="text-sm text-red-500 ms-1 font-medium">
                      {i.number}
                    </b>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dishes;
