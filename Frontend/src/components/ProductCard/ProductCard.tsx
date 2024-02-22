// ProductCard.jsx
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ModalProduct from "./ModalProduct";

const ProductCard = () => {
  const [showHeart, setShowHeart] = useState(false);
  const [showCartButton, setShowCartButton] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [showQuant, setShowQuant] = useState(false);
  const [open, setOpen] = useState(false);
  const [showTitle, setShowTitle] = useState(true); // Add state for title visibility

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <div
      onMouseEnter={() => {
        setShowHeart(true);
        setShowCartButton(true);
      }}
      onMouseLeave={() => {
        setShowHeart(false);
        setShowCartButton(false);
        setShowSizes(false);
        setShowQuant(false);
      }}
      className="max-w-sm rounded overflow-hidden flex flex-wrap relative product-card"
    >
      <div className="z-10">
        <span className="absolute top-0 m-2 left-0 rounded-full border-2 border-redPrimary font-bold text-redPrimary px-2">
          NEW
        </span>
        <span className="absolute top-0 m-2 left-16 rounded-full border-2 border-black font-bold text-black px-2">
          HIT
        </span>
      </div>

      <Swiper
        className="w-full"
        slidesPerView={1}
        navigation={true}
        onClick={handleOpenModal} // Open modal on click
      >
        <SwiperSlide>
          <img
            className="w-full h-64 object-cover"
            src="https://loremflickr.com/150/150/id1"
            alt="Placeholder"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 object-cover"
            src="https://loremflickr.com/150/150/id2"
            alt="Placeholder"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 object-cover"
            src="https://loremflickr.com/150/150/id3"
            alt="Placeholder"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 object-cover"
            src="https://loremflickr.com/150/150/id4"
            alt="Placeholder"
          />
        </SwiperSlide>
        {/* Add more slides here */}
      </Swiper>

      {showHeart && (
        <div
          className={`absolute top-0 right-0 opacity-100 ease-in-out delay-150 rounded-full font-bold p-2 text-3xl z-10`}
        >
          <CiHeart />
        </div>
      )}

      <div className="px-2 py-2 flex flex-col gap-4">
        {showTitle && ( // Check if showTitle state is true
          <div className="font-bold text-md mb-2">
            Маска для лица многоразовая из хлопка, анатомической формы
          </div>
        )}
        <div>
          <p className="text-[20px] font-bold">
            45.00 ₽
            <sup className="text-redPrimary line-through ml-4">7 545</sup>
          </p>

          {showQuant && (
            <div>
              <div>
                <div>
                  <h1 className="text-left">Количество</h1>
                </div>
                <div className="border border-darkSecondary rounded-lg   py-2">
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </div>
              </div>
            </div>
          )}

          {showSizes && (
            <div>
              <div>
                <h1 className="text-left">размеры</h1>
                <div className="flex gap-1">
                  <button className="border border-darkSecondary rounded-full px-1">XS</button>
                  <button className="border border-darkSecondary rounded-full px-1">S</button>
                  <button className="border border-darkSecondary rounded-full px-1">M</button>
                  <button className="border border-darkSecondary rounded-full px-1">L</button>
                  <button className="border border-darkSecondary rounded-full px-1">XL</button>
                  <button className="border border-darkSecondary rounded-full px-1">2XL</button>
                </div>
              </div>
            </div>
          )}
          {showCartButton && (
            <button
              onClick={() => {
                setShowSizes(!showSizes); // Toggle showSizes state
                setShowQuant(!showQuant); // Toggle showQuant state
                setShowTitle(false);
              }}
              className="bg-redPrimary hover:bg-red-700 text-white font-bold py-2 px-2 rounded-lg flex items-center mt-2 cart-button"
            >
              <div className="flex items-center">
                <GoPlus className="text-2xl" />{" "}
                <span>{showQuant ? "Добавить" : "В корзину"}</span>{" "}
              </div>
            </button>
          )}
        </div>
      </div>

      <ModalProduct open={open} handleClose={handleCloseModal} />
    </div>
  );
};

export default ProductCard;
