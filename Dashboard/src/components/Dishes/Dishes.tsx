import { useEffect, useState } from 'react';

import { GetSubSubCatalog, PostData } from '../../services/maincatalog';
import { BASE_URL } from '../../utils/BaseUrl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Option,
  Select,
} from '@material-tailwind/react';
import { GetProductSearch } from '../../services/product';

const Dishes = () => {
  const [categories, setCategories] = useState(null);
  const [subCategories, setSubcategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [allcategory, setAllCategory] = useState(null);
  const [status, setStatus] = useState(true);
  const [size, setSize] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [statusCategory, setStatusCategory] = useState(false);
  const [addProduct, setAddProduct] = useState([]);

  useEffect(() => {
    GetSubSubCatalog(BASE_URL + `/product/home-category/`).then((res) => {
      setCategory(res), setCategories(res?.children?.slice(0, 8));
    });
    
    GetSubSubCatalog(
      BASE_URL + `/product/categories/get_subcategories/${categoryId}`,
    ).then((res) => {
      setSubcategories(res);
    });
    GetProductSearch('', '', '', categoryId).then((res) => {
      setAddProduct(res.data.results);
    });
  }, [status, categoryId]);

  const postCategory = (id: any) => {
    PostData(BASE_URL + `/product/home-category/`, { id: id }).then(() =>
      setStatus(!status),
    );
  };

  const handleOpen = (value) => setSize(value);

  return (
    <>
      <Dialog
        open={
          size === 'xs' ||
          size === 'sm' ||
          size === 'md' ||
          size === 'lg' ||
          size === 'xl' ||
          size === 'xxl'
        }
        size={size || 'md'}
        handler={handleOpen}
      >
        <DialogBody className="h-[600px]">
          <div className="w-full flex gap-5 items-start">
            <div className="w-1/2">
              <Select label="Выберите категорию">
                {// @ts-ignore
                allcategory?.map((i) => (
                  <Option onClick={() => setCategoryId(i?.id)}>
                    {i?.name}
                  </Option>
                ))}
              </Select>
            </div>
            <div className="w-1/2 ">
              <button
                onClick={() => setStatusCategory(!statusCategory)}
                className="bg-blue-400 py-1 px-5 text-white rounded-md"
              >
                Выберите подкатегории
              </button>
              {statusCategory && (
                <div className="mt-2">
                  <ul className="h-full">
                    {subCategories?.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-5 py-5 h-[350px] overflow-y-scroll">
            {addProduct?.map((item) => (
              <div
                key={item.id}
                className={`w-1/6 shadow-4 p-2 rounded-sm h-[300px] `}
              >
                <div className="catalog ">
                  <div className="relative swiper-top-container h-[200px] mb-4 bg-gray-200">
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
                  </div>
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
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl ">
          {category != null
            ? // @ts-ignore
              category?.name
            : ''}
        </h3>
        <div className="w-1/5">
          <button
            className="w-[250px] h-[40px] bg-blue-400 text-white rounded-md"
            onClick={() => handleOpen('xl')}
          >
            изменять
          </button>
        </div>
      </div>
      <div className="w-full mb-[80px]">
        <div className="grid grid-rows-3 h-[360px] grid-cols-12 grid-flow-col gap-4">
          <div className="col-span-12 lg:col-span-9 h-full row-span-3">
            <div className="grid grid-cols-5 md:grid-cols-11 h-full gap-[10px]">
              <div className="col-span-3 bg-white flex items-center justify-center h-[360px]">
                <img
                  // @ts-ignore
                  src={category?.products[0]?.images_set[0]?.image_url}
                  alt=""
                />
              </div>
              <div className="col-span-2 lg:col-span-4">
                <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 h-full gap-[10px]">
                  <div className="bg-white flex items-center justify-center h-[170px]">
                    <img
                      // @ts-ignore
                      src={category?.products[1]?.images_set[0]?.image_url}
                      alt=""
                      className="h-full"
                    />
                  </div>
                  <div className="bg-white flex items-center justify-center h-[170px]">
                    <img
                      // @ts-ignore
                      src={category?.products[2]?.images_set[0]?.image_url}
                      alt=""
                      className="h-full"
                    />
                  </div>
                  <div className="bg-white items-center justify-center hidden lg:flex h-[175px]">
                    <img
                      // @ts-ignore
                      src={category?.products[3]?.images_set[0]?.image_url}
                      alt=""
                      className="h-full"
                    />
                  </div>
                  <div className="bg-white items-center justify-center hidden lg:flex h-[175px]">
                    <img
                      // @ts-ignore
                      src={category?.products[4]?.images_set[0]?.image_url}
                      alt=""
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 bg-white  items-center justify-center hidden md:flex h-[360px]">
                <img
                  // @ts-ignore
                  src={category?.products[5]?.images_set[0]?.image_url}
                  alt=""
                  className="h-full"
                />
              </div>
            </div>
          </div>
          <div className="row-span-3 col-span-3 hidden lg:block">
            <div className="grid grid-rows-2 grid-cols-1 gap-4 h-full">
              <div className="row-span-1 col-span-1 flex flex-col gap-[3px]">
                {// @ts-ignore
                categories?.map((i) => (
                  <p className="text-[14px] text-black font-medium">
                    {i?.name}
                    <b className="text-sm text-red-500 ms-1 font-medium">
                      {i?.count}
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
