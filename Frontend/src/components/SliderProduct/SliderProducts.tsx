import { useState } from 'react';

import { CiHeart } from 'react-icons/ci';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { GoPlus } from 'react-icons/go';

const SliderProducts = () => {
  const [showHeart, setShowHeart] = useState(false);

  return (
    <Swiper
      className='w-full'
      spaceBetween={50} //
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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
        <div className='max-w-sm rounded overflow-hidden '>
          <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-black font-bold text-black px-2'>
            HIT
          </span>

          <img
            className='w-full h-64 object-cover'
            src='https://via.placeholder.com/150'
            alt='Placeholder'
          />
          <div className='px-1 py-4'>
            <div className='font-bold text-md mb-2'>
              Маска для лица многоразовая из хлопка, анатомической формы
            </div>
            <p className='text-[20px] font-bold'>
              45.00 ₽
              <sup className='text-redPrimary line-through ml-4'>7 545</sup>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          onMouseEnter={() => setShowHeart(true)}
          onMouseLeave={() => setShowHeart(false)}
          className='max-w-sm rounded overflow-hidden  flex flex-wrap relative'
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
          {/* Heart icon */}
          {showHeart && (
            <div
              className={`absolute top-0 right-0 transition-opacity duration-300 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl`}
            >
              <CiHeart />
            </div>
          )}
          <div className=' py-4 w-full'>
            <div className='font-bold text-md mb-2'>
              Маска для лица многоразовая из хлопка, анатомической формы
            </div>
            <p className='text-[20px] font-bold'>
              45.00 ₽
              <sup className='text-redPrimary line-through ml-4'>7 545</sup>
            </p>
            {showHeart && (
              <button className='bg-redPrimary hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg mt-2 flex items-center'>
                <div className='flex items-center'>
                  <GoPlus className='text-2xl mr-1' /> <span>В корзину</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='max-w-sm rounded overflow-hidden'>
          <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-black font-bold text-black px-2'>
            HIT
          </span>

          <img
            className='w-full h-64 object-cover'
            src='https://via.placeholder.com/150'
            alt='Placeholder'
          />
          <div className='px-1 py-4'>
            <div className='font-bold text-md mb-2'>
              Маска для лица многоразовая из хлопка, анатомической формы
            </div>
            <p className='text-[20px] font-bold'>
              45.00 ₽
              <sup className='text-redPrimary line-through ml-4'>7 545</sup>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='max-w-sm rounded overflow-hidden'>
          <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-black font-bold text-black px-2'>
            HIT
          </span>

          <img
            className='w-full h-64 object-cover'
            src='https://via.placeholder.com/150'
            alt='Placeholder'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-md mb-2'>
              Маска для лица многоразовая из хлопка, анатомической формы
            </div>
            <p className='text-[20px] font-bold'>
              45.00 ₽
              <sup className='text-redPrimary line-through ml-4'>7 545</sup>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='max-w-sm rounded overflow-hidden'>
          <span className='absolute top-0 m-2 left-0 rounded-full border-2 border-black font-bold text-black px-2'>
            HIT
          </span>

          <img
            className='w-full h-64 object-cover'
            src='https://via.placeholder.com/150'
            alt='Placeholder'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-md mb-2'>
              Маска для лица многоразовая из хлопка, анатомической формы
            </div>
            <p className='text-[20px] font-bold'>
              45.00 ₽
              <sup className='text-redPrimary line-through ml-4'>7 545</sup>
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          onMouseEnter={() => setShowHeart(true)}
          onMouseLeave={() => setShowHeart(false)}
          className='max-w-sm rounded overflow-hidden flex flex-wrap relative'
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
              className={`absolute top-0 right-0 transition-opacity duration-300 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl`}
            >
              <CiHeart />
            </div>
          )}
          <div className='px-6 py-4 w-full'>
            <div className='font-bold text-md mb-2'>
              Маска для лица многоразовая из хлопка, анатомической формы
            </div>
            <p className='text-[20px] font-bold'>
              45.00 ₽
              <sup className='text-redPrimary line-through ml-4'>7 545</sup>
            </p>
          </div>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default SliderProducts;
