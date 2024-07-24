import React, { useEffect, useState } from 'react';
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Select,
  Option,
} from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { GetFilters, GetProductSearch } from '../../../services/product';
import PaginationCard from '../../../components/Pagination/Pagination';
import { GetActiveCategory } from '../../../services/main';
import { GetMainCatalogactive } from '../../../services/maincatalog';

const ProductDialog = ({ open, handleOpen, setOpen, handleCheckboxChange }) => {
  const [products, setProducts] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterId, setFilterId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [filter, setFilter] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    GetProductSearch(inputVal, currentPage, filterId, categoryId).then(
      (res) => {
        setProducts(res.data.results);
        const residual = res.data.count % 10;
        const pages = (res.data.count - residual) / 10;
        setTotalPages(pages % 2 == 0 && pages === 1 ? pages : pages + 1);
      },
    );
    GetFilters().then((res) => {
      setFilter(res.data);
    });
    GetActiveCategory().then((res) => {
      setFilterCategories(res);
    });
    GetMainCatalogactive().then((res) => {
      setAvailableCategories(res);
    });
  }, [inputVal, currentPage, filterId, categoryId]);

  return (
    <Dialog
      size="xl"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full font-satoshi">
        <CardBody className="flex flex-col gap-4">
          <p>поиск нужного товара</p>
          <div className="w-full flex items-center justify-between">
            <div className="w-[25%]">
              <Input
                className=""
                label="что-нибудь"
                onChange={(e) => setInputVal(e.target.value)}
              />
            </div>
            <div className="w-[25%]">
              <Select label="Выберите категорию">
                {filterCategories?.map((category) => (
                  <Option
                    onClick={() => {
                      setCategoryId(category?.id), setCurrentPage(1);
                    }}
                  >
                    <span>{category?.name} / </span>
                    <span className="text-blue-400">{category?.count} / </span>
                    <span className="text-red-400 text-xs">
                      {category?.site}{' '}
                    </span>
                  </Option>
                ))}
              </Select>
            </div>
            <div className="w-1/6">
              {filter?.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setFilterId(item.id), setCurrentPage(1);
                  }}
                  className={`border rounded-md px-2 py-1 ${
                    item.id == filterId && ' border-red-400 text-red-400'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="w-1/6">
              {' '}
              <PaginationCard
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </div>
            <button
              onClick={() => {
                setCategoryId(''), setFilterId(''), setCurrentPage(1);
              }}
              className="bg-red-primary text-white px-2 h-[40px] rounded-md"
            >
              clear filter
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-5 py-5 overflow-y-scroll h-[400px]">
            {/* @ts-ignore */}
            {products.map((item) => (
              <div className="w-1/6 shadow-4 p-2 rounded-sm h-[400px]">
                <div className="catalog ">
                  <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                    <Swiper
                      pagination={{ clickable: true }}
                      modules={[Navigation, Pagination]}
                      className="  h-full"
                    >
                      {item?.images_set?.map((i) => (
                        <SwiperSlide className="w-full h-full">
                          <div
                            onClick={() => handleOpen('xl')}
                            className="relative  h-full"
                          >
                            <div className="flex justify-center items-center h-full">
                              <img
                                className="mb-2  object-contain product-img"
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

                    {item?.is_new ? (
                      <div className="absolute z-[999] top-2 left-2 flex gap-2">
                        <div className="border border-red-primary text-[10px] text-red-primary rounded-lg px-1">
                          NEW
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  {/* {defaultProduct ? ( */}
                  <div className="default">
                    <div className="mb-2 md:mb-5  min-h-[70px] ">
                      <p className="text-fs_7 tracking-wide">
                        {
                          //@ts-ignore
                          item?.name?.length > 30
                            ? //@ts-ignore
                              item?.name?.substring(0, 40) + '...'
                            : //@ts-ignore
                              item?.name
                        }
                      </p>
                    </div>
                    <p className="mb-2 text-gray-600 text-fs_8">
                      {item?.vendor_code}
                    </p>
                    <div className="relative mb-2 flex items-center justify-between">
                      <p className="text-[16px] md:text-fs_4">
                        {item?.price}
                        <span className="text-xs absolute top-0">12</span>
                        <span className="ml-4 mr-1">{item?.price_type}</span>
                        <span className="text-xs absolute top-0 line-through text-red-primary">
                          234
                        </span>
                      </p>
                      <Checkbox
                        defaultChecked={false}
                        color="blue"
                        onChange={() => handleCheckboxChange(item?.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
        <CardFooter className="pt-0 font-satoshi flex justify-end gap-4">
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="inline-flex items-center justify-center rounded-md border text-danger border-danger py-2 px-10 text-center font-medium  hover:bg-opacity-90 "
          >
            Отмена
          </button>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            form="form-post"
            className="inline-flex tracking-wide items-center justify-center rounded-md bg-success py-2 px-6 text-center font-medium text-white hover:bg-opacity-90 "
          >
            Сохранять
          </button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default ProductDialog;
