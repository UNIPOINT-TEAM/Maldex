import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Dialog } from '@material-tailwind/react';

import './SliderProduct.css';
import { GetProduct } from '../../services/main';
import { GetProductNew } from '../../services/product';
import { ProductNav } from '..';

const SliderProduct = () => {
  const [defaultProduct, setDefaultProduct] = useState(true);
  const [addCard, setAddCard] = useState(false);
  const [newProduct, setNewProduct] = useState([]);
  const [size, setSize] = useState(null);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    GetProductNew(categoryId).then((res) => {
      setNewProduct(res.data.results);
    });
  }, [categoryId]);

  const updateState = (newState: any) => {
    setCategoryId(newState);
  };

  // useEffect(() => {
  //   fetchData({ method: "GET", url: "/product/" });
  // }, []);

  const changeStatus = () => {
    setDefaultProduct(!defaultProduct);
  };

  // const [addProduct, setAddProduct] = useState<SliderProduct[]>([]);
  // useEffect(() => {
  //   GetProduct().then((res) => {
  //     setAddProduct(res);
  //   });
  // }, []);
  // @ts-ignore
  const handleOpen = (value: string) => setSize(value);

  return (
    <div>
      <div className="  mt-10">
        <ProductNav
          type={"new"}
          categoryId={categoryId}
          updateState={updateState}
          title="new!"
          color="red"
        />
      </div>
      <div className="container_xxl relative px-3">
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
          {newProduct?.map((item) => (
            <SwiperSlide className="w-full" key={item.id}>
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
                        item.name.length > 30
                          ? //@ts-ignore
                            item.name.substring(0, 40) + '...'
                          : //@ts-ignore
                            item.name
                      }
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
                    <button
                      onClick={changeStatus}
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
        <div className="hidden lg:flex prev text-black  hover:text-white">
          <FaArrowLeftLong />
        </div>
        <div className="hidden lg:flex next text-black hover:text-white">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};
export default SliderProduct;
