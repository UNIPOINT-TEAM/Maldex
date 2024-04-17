import React, { useEffect, useState } from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import axios from 'axios';
import { AddWithFormData, GetProduct } from '../../services/product';
import { Swiper, SwiperSlide } from 'swiper/react';
// import CarouselImg from "../../assets/images/carouselImg.png";
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom';
// import Close from "../../assets/icons/close.png";
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaArrowRightLong } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { FaCheck } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import { Dialog } from '@material-tailwind/react';
// import { useFetchHook } from "../../hooks/UseFetch";
import { MdDelete, MdEdit, MdOutlineAdd } from 'react-icons/md';
import { CgSearch } from 'react-icons/cg';

const Product = () => {
  const [addProduct, setAddProduct] = useState([]);
  useEffect(() => {
    GetProduct().then((res) => {
      setAddProduct(res.data.results);
    });
  }, []);

  return (
    <DefaultLayout>
      <div className="container_xxl relative px-3">
        <div className="flex flex-wrap justify-center gap-5 py-5">
          {/* @ts-ignore */}
          {addProduct?.map((item) => (
            <div className="w-1/6 shadow-4 p-2 rounded-sm">
              <div className="catalog ">
                <div className="relative swiper-top-container h-[220px] mb-4 bg-gray-200">
                  <Swiper
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="  h-full"
                  >
                    <SwiperSlide className="w-full h-full">
                      <div
                        onClick={() => handleOpen('xl')}
                        className="relative  h-full"
                      >
                        <div className="flex justify-center items-center h-full">
                          {item.images_set.map((i) => (
                            <img
                              className="mb-2 w-[50px] h-[50px] object-contain product-img"
                              src={i.image_url}
                              alt=""
                            />
                          ))}
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="w-full h-full">
                      <div
                        onClick={() => handleOpen('xl')}
                        className="relative  h-full"
                      >
                        <div className="flex justify-center items-center h-full">
                          <img
                            className="mb-2 w-[50px] h-[50px] object-contain product-img"
                            src={item.image}
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
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
                    <Link to={'/product/add'}>
                      <button className="bg-red-primary flex justify-center items-center uppercase  p-2 text-white rounded-lg font-bold tracking-wider text-fs_8 lg:text-sm gap-1 lg:w-[180px]">
                        узнать больше
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Product;
