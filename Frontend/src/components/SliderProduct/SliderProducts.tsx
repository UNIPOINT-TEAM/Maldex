import { useState } from 'react';

import './SliderProducts.css';

import { CiHeart } from 'react-icons/ci';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { GoPlus } from 'react-icons/go';

const SliderProducts = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [sizes, setSizes] = useState(false);

  return (
    <div className='relative'>
      <Swiper
        className='w-full'
        spaceBetween={50} //
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div
            onMouseEnter={() => setShowHeart(true)}
            onMouseLeave={() => setShowHeart(false)}
            className='max-w-sm rounded overflow-hidden flex flex-wrap relative product-card'
          >
            <div>
              <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-redPrimary font-bold text-redPrimary px-2'>
                NEW
              </span>
              <span className='absolute top-0 m-2 left-16 rounded-full border-2 border-black font-bold text-black px-2'>
                HIT
              </span>
            </div>

            <img
              className='w-full h-64 object-cover'
              src='https://via.placeholder.com/150'
              alt='Placeholder'
            />
            {showHeart && (
              <div
                className={`absolute top-0 right-0 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl`}
              >
                <CiHeart />
              </div>
            )}
            <div
              className='px-2 py-2 flex flex-col gap-4'
              // style={{ minHeight: 'calc(100% - 64px)' }}
            >
              <div className='font-bold text-md mb-2'>
                Маска для лица многоразовая из хлопка, анатомической формы
              </div>
              <div>
                <p className='text-[20px] font-bold'>
                  45.00 ₽
                  <sup className='text-redPrimary line-through ml-4'>7 545</sup>
                </p>

                <button
                  onClick={() => setSizes(true)}
                  className='bg-redPrimary hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg flex items-center mt-2 cart-button'
                >
                  <div className='flex items-center'>
                    <GoPlus className='text-2xl' /> <span>В корзину</span>
                  </div>
                </button>
              </div>
              {sizes && (
                <div>
                  <button>x</button>
                  <button>s</button>
                  <button>m</button>
                  <button>l</button>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            onMouseEnter={() => setShowHeart(true)}
            onMouseLeave={() => setShowHeart(false)}
            className='max-w-sm rounded overflow-hidden flex flex-wrap  relative product-card'
          >
            <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-redPrimary font-bold text-redPrimary px-2'>
              NEW
            </span>
            <span className='absolute top-0 m-2 left-16 rounded-full border-2 border-black font-bold text-black px-2'>
              HIT
            </span>

            <img
              className='w-full h-64 object-cover'
              src='https://via.placeholder.com/150'
              alt='Placeholder'
            />
            {showHeart && (
              <div
                className={`absolute top-0 right-0 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl`}
              >
                <CiHeart />
              </div>
            )}
            <div
              className='px-2 py-2 flex flex-col gap-4'
              // style={{ minHeight: 'calc(100% - 64px)' }}
            >
              <div className='font-bold text-md mb-2'>
                Маска для лица многоразовая из хлопка, анатомической формы
              </div>
              <div>
                <p className='text-[20px] font-bold'>
                  45.00 ₽
                  <sup className='text-redPrimary line-through ml-4'>7 545</sup>
                </p>

                <button className='bg-redPrimary hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg flex items-center mt-2 cart-button'>
                  <div className='flex items-center'>
                    <GoPlus className='text-2xl' /> <span>В корзину</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onMouseEnter={() => setShowHeart(true)}
            onMouseLeave={() => setShowHeart(false)}
            className='max-w-sm rounded overflow-hidden flex flex-wrap  relative product-card'
          >
            <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-redPrimary font-bold text-redPrimary px-2'>
              NEW
            </span>
            <span className='absolute top-0 m-2 left-16 rounded-full border-2 border-black font-bold text-black px-2'>
              HIT
            </span>

            <img
              className='w-full h-64 object-cover'
              src='https://via.placeholder.com/150'
              alt='Placeholder'
            />
            {showHeart && (
              <div
                className={`absolute top-0 right-0 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl`}
              >
                <CiHeart />
              </div>
            )}
            <div
              className='px-2 py-2 flex flex-col gap-4'
              // style={{ minHeight: 'calc(100% - 64px)' }}
            >
              <div className='font-bold text-md mb-2'>
                Маска для лица многоразовая из хлопка, анатомической формы
              </div>
              <div>
                <p className='text-[20px] font-bold'>
                  45.00 ₽
                  <sup className='text-redPrimary line-through ml-4'>7 545</sup>
                </p>

                <button className='bg-redPrimary hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg flex items-center mt-2 cart-button'>
                  <div className='flex items-center'>
                    <GoPlus className='text-2xl' /> <span>В корзину</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onMouseEnter={() => setShowHeart(true)}
            onMouseLeave={() => setShowHeart(false)}
            className='max-w-sm rounded overflow-hidden flex flex-wrap  relative product-card'
          >
            <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-redPrimary font-bold text-redPrimary px-2'>
              NEW
            </span>
            <span className='absolute top-0 m-2 left-16 rounded-full border-2 border-black font-bold text-black px-2'>
              HIT
            </span>

            <img
              className='w-full h-64 object-cover'
              src='https://via.placeholder.com/150'
              alt='Placeholder'
            />
            {showHeart && (
              <div
                className={`absolute top-0 right-0 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl`}
              >
                <CiHeart />
              </div>
            )}
            <div className='px-2 py-2 flex flex-col gap-4'>
              <div className='font-bold text-md mb-2'>
                Маска для лица многоразовая из хлопка, анатомической формы
              </div>
              <div>
                <p className='text-[20px] font-bold'>
                  45.00 ₽
                  <sup className='text-redPrimary line-through ml-4'>7 545</sup>
                </p>

                <button
                  onClick={() => setSizes(true)}
                  className='bg-redPrimary hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg flex items-center mt-2 cart-button'
                >
                  <div className='flex items-center'>
                    <GoPlus className='text-2xl' /> <span>В корзину</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onMouseEnter={() => setShowHeart(true)}
            onMouseLeave={() => setShowHeart(false)}
            className='max-w-sm rounded overflow-hidden flex flex-wrap  relative product-card'
          >
            <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-redPrimary font-bold text-redPrimary px-2'>
              NEW
            </span>
            <span className='absolute top-0 m-2 left-16 rounded-full border-2 border-black font-bold text-black px-2'>
              HIT
            </span>

            <img
              className='w-full h-64 object-cover'
              src='https://via.placeholder.com/150'
              alt='Placeholder'
            />
            {showHeart && (
              <div
                className={`absolute top-0 right-0 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl`}
              >
                <CiHeart />
              </div>
            )}
            <div className='px-2 py-2 flex flex-col gap-4'>
              <div className='font-bold text-md mb-2'>
                Маска для лица многоразовая из хлопка, анатомической формы
              </div>
              <div>
                <p className='text-[20px] font-bold'>
                  45.00 ₽
                  <sup className='text-redPrimary line-through ml-4'>7 545</sup>
                </p>

                <button className='bg-redPrimary hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg flex items-center mt-2 cart-button'>
                  <div className='flex items-center'>
                    <GoPlus className='text-2xl' /> <span>В корзину</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onMouseEnter={() => setShowHeart(true)}
            onMouseLeave={() => setShowHeart(false)}
            className='max-w-sm rounded overflow-hidden flex flex-wrap  relative product-card'
          >
            <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-redPrimary font-bold text-redPrimary px-2'>
              NEW
            </span>
            <span className='absolute top-0 m-2 left-16 rounded-full border-2 border-black font-bold text-black px-2'>
              HIT
            </span>

            <img
              className='w-full h-64 object-cover'
              src='https://via.placeholder.com/150'
              alt='Placeholder'
            />
            {showHeart && (
              <div
                className={`absolute top-0 right-0 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl`}
              >
                <CiHeart />
              </div>
            )}
            <div className='px-2 py-2 flex flex-col gap-4'>
              <div className='font-bold text-md mb-2'>
                Маска для лица многоразовая из хлопка, анатомической формы
              </div>
              <div>
                <p className='text-[20px] font-bold'>
                  45.00 ₽
                  <sup className='text-redPrimary line-through ml-4'>7 545</sup>
                </p>

                <button className='bg-redPrimary hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg flex items-center mt-2 cart-button'>
                  <div className='flex items-center'>
                    <GoPlus className='text-2xl' /> <span>В корзину</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className='swiper-pagination'></div>
    </div>
  );
};

export default SliderProducts;
