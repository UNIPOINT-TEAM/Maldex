import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../../layout/DefaultLayout';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from '@material-tailwind/react';
import { GetProduct } from '../../../services/main';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { PostGiftSet } from '../../../services/buildset';

function AddBuildSet() {
  const [addProduct, setAddProduct] = useState<any[]>([]);
  const [setCategoryData, setSetCategoryData] = useState({
    title: '',
    is_available: false,
    product_data: [],
  });

  const handleConfirm = async () => {
    try {
      // Соберите данные для отправки
      const dataToSend = {
        title: 'Название категории', // Замените на ваше значение
        is_available: true, // Замените на ваше значение
        product_data: selectedProductsIds.map((id) => ({
          product_sets: id,
          quantity: quantities[id] || 1, // Замените на ваше значение или на 1
        })),
      };

      // Отправьте данные на сервер
      await PostGiftSet(dataToSend);
      console.log('Data sent successfully:', dataToSend);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const [selectedProductsIds, setSelectedProductsIds] = useState<number[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const handleOpen = () => setOpen(!open);
  const [open, setOpen] = useState(false);

  const handleCheckboxChange = (id: number) => {
    if (selectedProductsIds.includes(id)) {
      setSelectedProductsIds((prevIds) =>
        prevIds.filter((prevId) => prevId !== id),
      );
    } else {
      setSelectedProductsIds((prevIds) => [...prevIds, id]);
    }
  };

  const handleQuantityChange = (id: number, value: string) => {
    const quantityValue = parseInt(value, 10);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: quantityValue,
    }));
  };

  useEffect(() => {
    GetProduct()
      .then((res) => {
        console.log('GetProduct result:', res);
        if (Array.isArray(res)) {
          setAddProduct(res);
        } else if (res.results) {
          setAddProduct(res.results);
        } else {
          console.error('Unexpected response format:', res);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);
  return (
    <DefaultLayout>
      <div>Добавление катгории для сбора наборов</div>
      <div>
        <Input />

        <div className="flex items-center justify-between w-full mb-5">
          <button
            type="button"
            className="w-[200px] h-[40px] bg-blue-400 rounded-md float-end text-white"
            onClick={handleOpen}
          >
            Добавить товар
          </button>
        </div>
        <div>
          <div>Товары в наборы</div>
          <div className="flex flex-wrap">
            {addProduct
              ?.filter((item) => selectedProductsIds.includes(item.id))
              .map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center mb-4 w-1/4"
                >
                  <div>
                    {item.name.length > 30
                      ? item.name.substring(0, 40) + '...'
                      : item.name}
                  </div>
                  <div>
                    <input
                      className="w-13"
                      type="text"
                      name="count"
                      value={quantities[item.id] || ''}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div>
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader>
            Выберете продукт который вы хотите увидеть в списке new!
          </DialogHeader>
          <DialogBody className="h-[400px] flex flex-wrap overflow-y-scroll">
            {addProduct?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-4 w-1/4"
              >
                <input
                  type="checkbox"
                  checked={selectedProductsIds.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                  className="mb-2"
                />
                <div className="w-full p-2 rounded-sm">
                  <div className="catalog relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                    <Swiper className="">
                      {item.images_set.map((i, idx) => (
                        <SwiperSlide key={idx} className="w-full h-full">
                          <div
                            onClick={() => handleOpen('xl')}
                            className="relative  h-full"
                          >
                            <div className="flex justify-center items-center h-full">
                              <img
                                className="mb-2 object-contain product-img"
                                src={i.image_url || i.image}
                                alt=""
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="absolute z-[9999] bottom-[25px] right-[15px] flex flex-col gap-1 swiper-opacity">
                      <button
                        className={`w-[8px] h-[8px] bg-red-primary rounded-[4px]`}
                      ></button>
                      <button
                        className={`w-[8px] h-[8px] bg-orange-600 rounded-[4px]`}
                      ></button>
                      <button
                        className={`w-[8px] h-[8px] bg-green-600 rounded-[4px]`}
                      ></button>
                      <button
                        className={`w-[8px] h-[8px] bg-green-primary rounded-[4px]`}
                      ></button>
                      <button
                        className={`w-[8px] h-[8px] bg-blue-600 rounded-[4px]`}
                      ></button>
                      <button
                        className={`w-[8px] h-[8px] bg-purple-600 rounded-[4px]`}
                      ></button>
                      <button
                        className={`w-[8px] h-[8px] bg-indigo-600 rounded-[4px]`}
                      ></button>
                    </div>
                    {item.is_new ? (
                      <div className="absolute z-[999] top-2 left-2 flex gap-2">
                        <div className="border border-red-primary text-[10px] text-red-primary rounded-lg px-1">
                          NEW
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="default">
                    <div className="mb-2 md:mb-5  min-h-[70px] ">
                      <p className="text-fs_7 tracking-wide">
                        {item.name.length > 30
                          ? item.name.substring(0, 40) + '...'
                          : item.name}
                      </p>
                    </div>
                    <p className="mb-2 text-gray-600 text-fs_8">
                      {item.vendor_code}
                    </p>
                    <div className="relative mb-2">
                      <p className="text-[16px] md:text-fs_4">
                        {item.price}
                        <span className="text-xs absolute top-0">12</span>
                        <span className="ml-4 mr-1">{item.price_type}</span>
                        <span className="text-xs absolute top-0 line-through text-red-primary">
                          234
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between catalog_btns">
                      <Link to={`/product/${item.id}`}>
                        <button className="bg-red-primary flex justify-center items-center uppercase  p-2 text-white rounded-lg font-bold tracking-wider text-fs_8 lg:text-sm gap-1 lg:w-[180px]">
                          узнать больше
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <Button
              variant="gradient"
              color="green"
              onClick={() => {
                handleOpen();
                handleConfirm();
              }}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <Button
        variant="gradient"
        color="green"
        onClick={handleConfirm}
        className="mt-4"
      >
        <span>Сохранить</span>
      </Button>
    </DefaultLayout>
  );
}

export default AddBuildSet;
