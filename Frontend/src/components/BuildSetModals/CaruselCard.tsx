/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import Badge from "../Badge/Badge";
import { Product } from "../../types";
import { IoMdAdd } from "react-icons/io";
import { formatPrice } from "../../utils/FormatPrice";
import { IoCheckmarkSharp } from "react-icons/io5";
interface CaruselCardProps {
  item: Product;
  setBuildCart: any;
  buildCart: any;
}
const CaruselCard: React.FC<CaruselCardProps> = ({
  item,
  setBuildCart,
  buildCart,
}) => {
  const [defaultCard, setDefaultCard] = useState<boolean>(true);
  const [addToCartVisible, setaddToCartVisible] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [productItem, setproductItem] = useState<Product>({
    size: null,
    quantity: 1,
    color: item?.colorID?.name,
    warehouse: item.warehouse,
    name: item.name,
    images_set:
      item.images_set.length > 5
        ? item.images_set.slice(0, 5)
        : item.images_set,
    article: item.article,
    id: item.id,
    is_liked: item.is_liked,
    price: item?.price,
    discount_price: item?.discount_price,
    is_hit: item.is_hit,
    is_new: item.is_new,
    description: item.description,
    characteristics: item.characteristics,
    price_type: item.price_type,
    colorID: item.colorID,
    sizes: item.sizes,
    circulation: item.circulation,
  });
  const isInCart = buildCart?.some(
    (cartItem: Product) => cartItem?.id === item?.id
  );
  const increaseQuantity = () => {
    setproductItem({ ...productItem, quantity: productItem.quantity + 1 });
  };

  const decreaseQuantity = () => {
    if (productItem.quantity <= 1) return;
    setproductItem({ ...productItem, quantity: productItem.quantity - 1 });
  };
  const handleFiltreColor = (item: Product) => {
    setproductItem({
      ...productItem,
      id: item?.id,
      name: item?.name,
      color: item?.colorID?.name,
      article: item?.article,
      images_set: item?.images_set,
      warehouse: item?.warehouse,
      is_liked: item?.is_liked,
      price: item?.price,
      is_hit: item?.is_hit,
      is_new: item?.is_new,
      description: item?.description,
      characteristics: item?.characteristics,
      price_type: item?.price_type,
      discount_price: item?.discount_price,
      colorID: item?.colorID,
      sizes: item?.sizes,
      circulation: item?.circulation,
      colors: item?.colors,
    });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = carouselRef?.current?.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    const newIndex = Math.floor(percentage * productItem.images_set.length);
    if (newIndex >= 0) setCurrentIndex(newIndex);
  };
  const handleAddBuildCart = () => {
    setBuildCart((prev) => [...prev, productItem]);
    setDefaultCard(true);
  };

  return (
    <div className="catalog group ">
      <div
        ref={carouselRef}
        onMouseMove={handleMouseMove}
        className="relative swiper-top-container h-[180px] md:h-[250px] cursor-pointer mb-4 bg-white hover:bg-[#fff]"
      >
        {isInCart && (
          <button className="w-7 h-7 text-[#fff] top-2 right-2 absolute z-[9] bg-redPrimary flex items-center justify-center rounded-md">
            <IoCheckmarkSharp />
          </button>
        )}

        <div className="w-full h-full">
          <div className="relative w-full h-full">
            <div className="flex w-full justify-center items-center  h-full mix-blend-multiply">
              <img
                className="mb-2 w-[75%] md:h-[75%] h-[65%] object-contain  "
                src={
                  productItem.images_set[currentIndex]?.image_url
                    ? productItem.images_set[currentIndex]?.image_url
                    : productItem.images_set[currentIndex]?.image
                }
                alt={`product-image-${currentIndex}`}
                loading="lazy"
              />
            </div>
            <div className=" group-hover:block hidden w-full h-2 bottom-4 left-0 absolute">
              <div className="w-full h-2 flex gap-1 justify-center items-center">
                {productItem.images_set.map((_item, index) => (
                  <div
                    key={index}
                    className={`max-w-4 w-full h-[3px] rounded-md ${
                      index === currentIndex
                        ? "bg-red-500"
                        : " bg-darkSecondary"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  z-[9999] bottom-[25px] right-[15px] flex flex-col justify-center items-center gap-1 swiper-opacity">
          {item?.colors?.length > 0 &&
            item?.colors?.map((el) => (
              <button
                key={el.id}
                onMouseOver={() => handleFiltreColor(el.product)}
                style={{
                  backgroundColor: el.hex ? el.hex : "#000000",
                }}
                className={` rounded-full ${
                  productItem?.id === el.product.id
                    ? "min-h-[10px] min-w-[10px]"
                    : "w-[8px] h-[8px]"
                }`}
              ></button>
            ))}
        </div>
        <div className="absolute z-[999] top-2 left-2  gap-2 hidden md:flex">
          {productItem.is_new && <Badge name="NEW" type="NEW" />}
          {productItem.is_hit && <Badge name="HIT" type="HIT" />}
        </div>
      </div>
      {defaultCard ? (
        <div className=" min-h-[180px] flex flex-col justify-between">
          <div className="min-h-[100px]">
            <h2 className="text-black text-fs_7 mb-2 font-medium">
              {productItem?.name}
            </h2>
            <div className="hidden group-hover:block">
              {productItem?.warehouse?.length > 0 &&
                productItem?.warehouse?.map((item, i) => (
                  <p key={i} className="text-fs_8 opacity-70 font-medium ">
                    {item?.name}: {item.quantity}
                  </p>
                ))}
              <p className="opacity-70 text-fs_8">
                <span className="font-medium">Артикул: </span>
                {productItem?.article}
              </p>
            </div>
          </div>
          <p className="text-[16px] font-medium md:text-fs_4 relative">
            {productItem?.discount_price > 0
              ? formatPrice(productItem?.discount_price)
              : formatPrice(productItem?.price)}
            <span className="ml-4 mr-1">{productItem?.price_type}</span>
            <span className="text-xs absolute top-0 line-through text-redPrimary">
              {productItem?.discount_price > 0 && productItem?.price}
            </span>
          </p>
          <div className="flex justify-between catalog_btns gap-2 mt-2">
            <button
              disabled={isInCart}
              onClick={() => setDefaultCard(!defaultCard)}
              className="bg-redPrimary disabled:opacity-60 disabled:cursor-not-allowed uppercase font-medium flex items-center justify-center gap-1 py-2  text-white tracking-wider rounded-lg text-fs_8 mdtext-sm w-[130px]"
            >
              <MdAdd className="text-fs_4" /> В корзину
            </button>
            <button className="bg-white px-2 md:px-3 py-1 rounded-lg text-gray-700">
              <Link
                to={`/category/${productItem?.id}`}
                className="w-full h-full flex justify-center items-center"
              >
                <CiSearch className="text-fs_4" />
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-[180px] flex flex-col justify-between">
          <div className="flex flex-col items-start mb-3">
            <p className="text-fs_9 text-darkSecondary mb-2 uppercase">
              Количество:
            </p>
            <div className="flex text-darkPrimary font-medium justify-around items-center gap-2 rounded-xl p-2 border border-gray-400 mb-2">
              <button onClick={decreaseQuantity}>-</button>
              <p className="text-fs_7 font-medium">{productItem?.quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            {item?.sizes?.length > 0 && item?.sizes[0]?.size && (
              <div className="">
                <p className="text-lg text-gray-600 mb-2">Размер:</p>
                <div className="flex justify-start items-center flex-wrap gap-1">
                  {item.sizes.map((size) => (
                    <button className="min-w-[33px] h-[33px] border border-gray-400 rounded-[17px] font-bold text-[10px]  hover:border-redPrimary hover:text-redPrimary">
                      {size?.name?.replace(/размер/g, "")}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          {addToCartVisible ? (
            <div className="flex justify-between catalog_btns">
              <button
                onClick={handleAddBuildCart}
                className=" bg-redPrimary px-3 py-3 text-white rounded-lg "
              >
                <FaCheck />
              </button>
              <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
                <Link
                  to={`category/${item.id}`}
                  className="w-full h-full flex justify-center items-center"
                >
                  <CiSearch />
                </Link>
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center catalog_btns">
              <button
                onClick={() => {
                  setaddToCartVisible(true);
                }}
                className="bg-redPrimary justify-center gap-2 uppercase font-bold flex  items-center text-white rounded-lg text-fs_7 w-[140px] h-[40px]"
              >
                <IoMdAdd className="text-fs_3" /> добавить
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CaruselCard;
