import { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';

import {
  GetFilters,
  GetProductIsHit,
  GetProductIsNew,
  GetProductSearch,
} from '../../services/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
} from '@material-tailwind/react';
import { GetMainCatalogactive, PutData } from '../../services/maincatalog';
import PaginationCard from '../../components/Pagination/Pagination';
import { GetActiveCategory, GetNewCategory } from '../../services/main';

const Product = () => {
  const [addProduct, setAddProduct] = useState([]);
  const [receiveId, setReceiveId] = useState(null);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterId, setFilterId] = useState('');
  const [filter, setFilter] = useState([]);
  const [isNew, setIsNew] = useState(false);
  const [isHit, setIsHit] = useState(false);
  const [newProduct, setNewProduct] = useState([]);
  const [hitProduct, setHitProduct] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    GetProductSearch(search, currentPage, filterId, categoryId).then((res) => {
      setAddProduct(res.data.results);
      const residual = res.data.count % 10;
      const pages = (res.data.count - residual) / 10;
      setTotalPages(pages % 2 == 0 && pages === 1 ? pages : pages + 1);
    });
    GetActiveCategory().then((res) => setFilterCategories(res));
    GetProductIsNew().then((res) => {
      setNewProduct(res.data.results);
    });
    GetProductIsHit().then((res) => {
      setHitProduct(res.data.results);
    });
    GetMainCatalogactive().then((res) => {
      setAvailableCategories(res);
    });
    GetFilters().then((res) => {
      setFilter(res.data);
    });
  }, [search, currentPage, filterId, categoryId]);

  const fillCheckedProducts = (id) => {
    const isAlreadyChecked = checkedProducts.some(
      (product) => product.id === id,
    );

    if (isAlreadyChecked) {
      const updatedProducts = checkedProducts.filter(
        (product) => product.id !== id,
      );
      setCheckedProducts(updatedProducts);
    } else {
      const clickedProduct = addProduct.find((item) => item.id === id);
      if (clickedProduct) {
        setCheckedProducts((prevProducts) => [...prevProducts, clickedProduct]);
      }
    }
  };

  const changeCategory = () => {
    const formdata = new FormData();
    formdata.append('categoryId', receiveId);
    for (let i of checkedProducts) {
      PutData(`/product/${i.id}/`, formdata).then(() =>
        window.location.reload(),
      );
    }
  };

  const handleOpen = (id) => {
    setOpen(!open);
  };

  return (
    <DefaultLayout>
      <Dialog
        open={open}
        handler={handleOpen}
        size="xl"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>переместить категорию сюда</DialogHeader>
        <DialogBody>
          <div className="w-full h-[500px] flex gap-2 overflow-x-scroll">
            {availableCategories.map((item) => (
              <div key={item.id} className="h-full">
                <p
                  onClick={() => setReceiveId(item.id)}
                  className={`w-[200px] text-xl mb-5 ${
                    receiveId == item.id
                      ? 'bg-red-400 text-white rounded-md p-1'
                      : ''
                  }`}
                >
                  {item?.name.length > 20
                    ? item?.name.slice(0, 25) + '...'
                    : item?.name}
                </p>
                <div>
                  {item.children.map((i) => (
                    <p
                      className={`${
                        receiveId == i.id
                          ? 'bg-red-400 text-white rounded-md p-1'
                          : ''
                      }`}
                      onClick={() => setReceiveId(i.id)}
                      key={i.id}
                    >
                      {i.name}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>отмена</span>
          </Button>
          <Button variant="gradient" color="green" onClick={changeCategory}>
            <span>переместить</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <div className="container_xxl relative px-3 py-5">
        <Input
          label="поиск продукта"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-wrap gap-2 pt-5">
          <button
            onClick={() => {
              setIsNew(true), setIsHit(false);
            }}
            className={`border rounded-md px-2 py-1 ${
              isNew && ' border-red-400 text-red-400'
            }`}
          >
            новые продукты
          </button>
          <button
            onClick={() => {
              setIsHit(true), setIsNew(false);
            }}
            className={`border rounded-md px-2 py-1 ${
              isHit && ' border-red-400 text-red-400'
            }`}
          >
            hit продукты
          </button>
          <div className="w-72">
            <Select label="Выберите категорию">
              {filterCategories?.map((category) => (
                <Option onClick={() => setCategoryId(category?.id)}>
                  {category?.name}
                </Option>
              ))}
            </Select>
          </div>
          {filter?.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterId(item.id)}
              className={`border rounded-md px-2 py-1 ${
                item.id == filterId && ' border-red-400 text-red-400'
              }`}
            >
              {item.title}
            </button>
          ))}
          <button
            onClick={() => {
              setFilterId(''),
                setIsNew(false),
                setIsHit(false),
                setCategoryId(null);
            }}
            className={`border rounded-md px-2 py-1 border-red-400 text-red-400`}
          >
            очистить фильтр
          </button>
        </div>

        <div className="flex justify-end py-5 gap-3">
          {checkedProducts.length > 0 ? (
            <>
              <button
                onClick={handleOpen}
                className="bg-green-400 text-white px-5 py-2 rounded-md"
              >
                изменить категорию этих товаров
              </button>
              <button className="bg-red-400 text-white px-5 py-2 rounded-md">
                удалить эти продукты
              </button>
            </>
          ) : (
            ''
          )}
          <Link to={'/product/add'}>
            <button className="bg-blue-400 text-white px-5 py-2 rounded-md">
              добавить товар
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {/* @ts-ignore */}
          {isNew ? (
            <>
              {newProduct?.map((item) => (
                <div
                  onClick={() => fillCheckedProducts(item.id)}
                  key={item.id}
                  className={`w-1/6 shadow-4 p-2 rounded-sm ${
                    checkedProducts.some((product) => product.id === item.id)
                      ? 'bg-blue-200'
                      : ''
                  }`}
                >
                  <div className="catalog ">
                    <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="  h-full"
                      >
                        {item.images_set.map((i) => (
                          <SwiperSlide key={i.id} className="w-full h-full">
                            <div className="relative  h-full">
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
                    </div>

                    <div className="default">
                      <div className="mb-2 md:mb-5  min-h-[70px] ">
                        <p className="text-fs_7 tracking-wide">
                          {
                            //@ts-ignore
                            item.name.length > 30
                              ? //@ts-ignore
                                item.name.substring(0, 30) + '...'
                              : //@ts-ignore
                                item.name
                          }
                        </p>
                      </div>
                      <p className="text-red-400 text-sm">{item.site}</p>
                      <div className="relative mb-2">
                        <p className="text-[16px] md:text-fs_4">
                          {item.price}
                          <span className="text-xs absolute top-0">
                            {item.discount_price}
                          </span>
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
            </>
          ) : isHit ? (
            <>
              {hitProduct?.map((item) => (
                <div
                  onClick={() => fillCheckedProducts(item.id)}
                  key={item.id}
                  className={`w-1/6 shadow-4 p-2 rounded-sm ${
                    checkedProducts.some((product) => product.id === item.id)
                      ? 'bg-blue-200'
                      : ''
                  }`}
                >
                  <div className="catalog ">
                    <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="  h-full"
                      >
                        {item.images_set.map((i) => (
                          <SwiperSlide key={i.id} className="w-full h-full">
                            <div className="relative  h-full">
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
                    </div>

                    <div className="default">
                      <div className="mb-2 md:mb-5  min-h-[70px] ">
                        <p className="text-fs_7 tracking-wide">
                          {
                            //@ts-ignore
                            item.name.length > 30
                              ? //@ts-ignore
                                item.name.substring(0, 30) + '...'
                              : //@ts-ignore
                                item.name
                          }
                        </p>
                      </div>
                      <p className="text-red-400 text-sm">{item.site}</p>
                      <div className="relative mb-2">
                        <p className="text-[16px] md:text-fs_4">
                          {item.price}
                          <span className="text-xs absolute top-0">
                            {item.discount_price}
                          </span>
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
            </>
          ) : (
            <>
              {addProduct?.map((item) => (
                <div
                  onClick={() => fillCheckedProducts(item.id)}
                  key={item.id}
                  className={`w-1/6 shadow-4 p-2 rounded-sm ${
                    checkedProducts.some((product) => product.id === item.id)
                      ? 'bg-blue-200'
                      : ''
                  }`}
                >
                  <div className="catalog ">
                    <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                      <Swiper
                        pagination={{ clickable: true }}
                        modules={[Navigation, Pagination]}
                        className="  h-full"
                      >
                        {item.images_set.map((i) => (
                          <SwiperSlide key={i.id} className="w-full h-full">
                            <div className="relative  h-full">
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
                    </div>

                    <div className="default">
                      <div className="mb-2 md:mb-5  min-h-[70px] ">
                        <p className="text-fs_7 tracking-wide">
                          {
                            //@ts-ignore
                            item.name.length > 30
                              ? //@ts-ignore
                                item.name.substring(0, 30) + '...'
                              : //@ts-ignore
                                item.name
                          }
                        </p>
                      </div>
                      <p className="text-red-400 text-sm">{item.site}</p>
                      <div className="relative mb-2">
                        <p className="text-[16px] md:text-fs_4">
                          {item.discount_price > 0
                            ? item.discount_price
                            : item.price}

                          <span className="ml-4 mr-1">{item?.price_type}</span>
                          <span className="text-xs absolute top-0 line-through text-red-primary">
                            {item.discount_price > 0 ? item.price : ''}
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
            </>
          )}
        </div>
        <PaginationCard
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </DefaultLayout>
  );
};

export default Product;
