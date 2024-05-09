import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,

} from '@material-tailwind/react';
import { Reorder } from 'framer-motion'; 
import accordionIcon from '../../assets/icons/accordion-icon.png';

import DefaultLayout from '../../layout/DefaultLayout';
import { MdDelete, MdEdit } from 'react-icons/md';
import { DelGiftSet, GetGiftSet } from '../../services/buildset';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

const FilterCatalog = () => {
  const [open, setOpen] = useState<number>(0);
  const [accordionCount, setAccordionCount] = useState<number>(5);

  const [accordionData, setAccordionData] = useState<any[]>([]);

  const [order, setOrder] = useState(() => [...Array(accordionCount).keys()]); 

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  const handleReorder = (newOrder: number[]) => {
    const newAccordionData = newOrder.map((index) => accordionData[index]);
    setAccordionData(newAccordionData);
    setOrder(newOrder);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const giftSetData = await GetGiftSet();
        console.log(giftSetData);

        setAccordionData(giftSetData);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, []);

  const deleteAccordion = async (id: number) => {
    try {
      await DelGiftSet(id);

      setAccordionData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Ошибка при удалении аккордеона:', error);
    }
  };

  return (
    <DefaultLayout>
      <div className="">
        <div className="grid grid-cols-10">
          <div className="col-span-10 lg:col-span-10">
            <div className="bg-greenPrimary h-[75px] flex items-center justify-center ">
              <h1 className="text-[22px] lg:text-[30px] text-red-primary">
                Создайте идеальный подарок
              </h1>
            </div>
            <div className="w-[96%]">
              <Reorder.Group
                axis="y"
                values={order}
                onReorder={handleReorder}
                className="mt-10 mb-6 justify-around flex flex-col"
              >
                {accordionData.map((item, index) => (
                  <Reorder.Item key={index} value={index} className="relative">
                    <div className="flex item-center">
                      <Accordion
                        className="border border-lightPrimary px-5 my-4"
                        open={open === index + 1}
                        icon={
                          <img
                            className={`${
                              open === index + 1 ? 'rotate-180' : ''
                            } transition-transform w-[18px]`}
                            src={accordionIcon}
                          />
                        }
                      >
                        <AccordionHeader
                          className="border-0 p-4"
                          onClick={() => handleOpen(index + 1)}
                        >
                          <h2 className="font-helvetica tracking-wide text-fs_6 font-normal text-greenPrimary">
                            {item.title || `${index + 1}. Заголовок аккордеона`}
                          </h2>
                        </AccordionHeader>
                        <AccordionBody className="p-4" placeholder={<div />}>
                          <div className="mb-4">
                            <Swiper
                              slidesPerView={2}
                              spaceBetween={10}
                              pagination={{
                                clickable: true,
                              }}
                              scrollbar={{ draggable: true }}
                              navigation={{
                                prevEl: '.prev',
                                nextEl: '.next',
                              }}
                              breakpoints={{
                                640: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 4,
                                  spaceBetween: 40,
                                },
                                1024: {
                                  slidesPerView: 5,
                                  spaceBetween: 50,
                                },
                              }}
                              // @ts-ignore
                              scrollbar={{ draggable: true }}
                              modules={[Navigation, Scrollbar]}
                              className=" w-full overscroll-x-auto h-[430px] md:h-[500px]"
                            >
                              {/* @ts-ignore */}
                              {item.product_sets.map((productSet, setIndex) => (
                                <SwiperSlide className="w-full" key={item.id}>
                                  <div className="catalog ">
                                    <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                                      <Swiper
                                        pagination={{ clickable: true }}
                                        modules={[Navigation, Pagination]}
                                        className="  h-full"
                                      >
                                        {productSet?.product_sets.images_set?.map(
                                          (i) => (
                                            <SwiperSlide className="w-full h-full">
                                              <div
                                                // onClick={() => handleOpen('xl')}
                                                className="relative  h-full"
                                              >
                                                <div className="flex justify-center items-center h-full">
                                                  <img
                                                    className="mb-2  object-contain product-img"
                                                    src={i.image_url}
                                                    alt=""
                                                  />
                                                </div>
                                              </div>
                                            </SwiperSlide>
                                          ),
                                        )}
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

                                      <div className="absolute z-[999] top-2 left-2 flex gap-2">
                                        <div className="border border-red-primary text-[10px] text-red-primary rounded-lg px-1">
                                          NEW
                                        </div>
                                      </div>
                                    </div>
                                    {/* {defaultProduct ? ( */}
                                    <div className="default">
                                      <div className="mb-2 md:mb-5  min-h-[70px] ">
                                        <p className="text-fs_7 tracking-wide">
                                          {
                                            //@ts-ignore
                                            productSet.product_sets.name
                                              .length > 30
                                              ? //@ts-ignore
                                                productSet.product_sets.name.substring(
                                                  0,
                                                  40,
                                                ) + '...'
                                              : //@ts-ignore
                                                productSet.product_sets.name
                                          }
                                        </p>
                                      </div>
                                      <p className="mb-2 text-gray-600 text-fs_8">
                                        {productSet.product_sets.vendor_code}
                                      </p>
                                      <div className="relative mb-2">
                                        <p className="text-[16px] md:text-fs_4">
                                          {productSet.product_sets.price}
                                          <span className="text-xs absolute top-0">
                                            12
                                          </span>
                                          <span className="ml-4 mr-1">
                                            {productSet.product_sets.price_type}
                                          </span>
                                          <span className="text-xs absolute top-0 line-through text-red-primary">
                                            234
                                          </span>
                                        </p>
                                      </div>
                                      <div className="flex justify-between catalog_btns">
                                        <button
                                          // onClick={changeStatus}
                                          className="bg-red-primary flex justify-center items-center uppercase  p-2 text-white rounded-lg font-bold tracking-wider text-fs_8 lg:text-sm gap-1 lg:w-[130px]"
                                        >
                                          Удалить
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </AccordionBody>
                      </Accordion>
                      <div className="flex flex-col justify-center mt-2">
                        <Link to={`/build-set-edit/${item.id}`}>
                          <Button
                            buttonType="filled"
                            size="regular"
                            rounded={false}
                            block={false}
                            iconOnly={true}
                            ripple="light"
                            className="bg-yellow-400"
                          >
                            <MdEdit />
                          </Button>
                        </Link>
                        <Button
                          color="red"
                          buttonType="filled"
                          size="regular"
                          rounded={false}
                          block={false}
                          iconOnly={true}
                          ripple="light"
                          onClick={() => deleteAccordion(item.id)}
                        >
                          <MdDelete />
                        </Button>
                      </div>
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>

              <div className="flex justify-end mt-4">
                <Link to="/build-set-add">
                  <Button
                    color="green"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                  >
                    Добавить
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FilterCatalog;
