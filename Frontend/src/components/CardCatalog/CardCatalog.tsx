// Assuming CardCatalog.tsx
import React, { useState } from "react";
import { Catalog } from "../../types";
import { Link } from "react-router-dom";
import { CiHeart, CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { formatPrice } from "../../utils/FormatPrice";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

/*@ts-expect-error: This */
const CardCatalog: React.FC<Catalog> = ({ item }) => {
  const dispatch = useDispatch();
  const [defaultCard, setDefaultCard] = useState<boolean>(true);
  const [addToCartVisible, setaddToCartVisible] = useState<boolean>(false);
  const [productItem, setproductItem] = useState({ size: null, quantity: 1 });

  const increaseQuantity = () => {
    setproductItem({ ...productItem, quantity: productItem.quantity + 1 });
  };

  const decreaseQuantity = () => {
    if (productItem.quantity <= 1) return;
    setproductItem({ ...productItem, quantity: productItem.quantity - 1 });
  };
  const addToCartHandler = (product: any) => {
    const totalPrice =
      item?.discount_price > 0 ? item?.discount_price : item?.price;
    dispatch(
      addToCart({ ...product, quantity: productItem.quantity, totalPrice })
    );
  };
  return (
    <div className="group  min-h-[500px] flex flex-col  cursor-pointer">
      <div className="relative f w-full catalogImgBox bg-white duration-200 group-hover:bg-[#fff]">
        <Link to={`/category/${item?.id}`}>
          <img
            className="mb-2 p-3 h-[255px] w-full object-contain"
            style={{ mixBlendMode: "multiply" }}
            src={
              (item?.images_set && item?.images_set[0]?.image) ||
              (item?.images_set && item?.images_set[0]?.image_url)
            }
            alt="category-img"
          />
        </Link>
      </div>
      {defaultCard ? (
        <div className=" min-h-[180px] flex flex-col justify-between">
          <div className="min-h-[100px]">
            <h2 className="text-black text-fs_7 mb-2 font-medium">
              {item?.name}
            </h2>
            <div className="hidden group-hover:block">
              {/*@ts-expect-error: This */}
              {item?.warehouse?.map((item, i) => (
                <p key={i} className="text-fs_8 opacity-70 font-medium ">
                  {item?.name}: {item.quantity}
                </p>
              ))}
              <p className="opacity-70 text-fs_8">{item?.article}</p>
            </div>
          </div>
          <p className="text-[16px] font-medium md:text-fs_4 relative">
            {item?.discount_price > 0
              ? formatPrice(item?.discount_price)
              : formatPrice(item?.price)}
            <span className="ml-4 mr-1">{item?.price_type}</span>
            <span className="text-xs absolute top-0 line-through text-redPrimary">
              {item?.discount_price > 0 && item?.price}
            </span>
          </p>
          <div className="flex justify-between catalog_btns mt-2">
            <button
              // onClick={() => addToCartHandler(item)}
              onClick={() => setDefaultCard(!defaultCard)}
              className="bg-redPrimary uppercase font-medium flex items-center justify-center gap-1 py-2  text-white rounded-lg text-sm w-[130px]"
            >
              <MdAdd className="text-fs_4" /> В корзину
            </button>
            <button className="bg-white px-3 py-1 rounded-lg text-gray-700">
              <Link
                to={`/category/${item?.id}`}
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
              <p className="text-fs_7 font-medium">{productItem.quantity}</p>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p className="text-lg text-gray-600 mb-2">Размер:</p>
            <div className="flex justify-start items-center flex-wrap gap-1">
              {item.sizes &&
                item?.sizes?.map((size) => (
                  <button className="min-w-[33px] h-[33px] border border-gray-400 rounded-[17px] font-bold text-[10px]  hover:border-redPrimary hover:text-redPrimary">
                    {size.name.replace(/размер/g, "")}
                  </button>
                ))}
            </div>
          </div>
          {addToCartVisible ? (
            <div className="flex justify-between catalog_btns">
              <button
                onClick={() => setDefaultCard(!defaultCard)}
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
                  addToCartHandler(item);
                  setaddToCartVisible(true);
                }}
                className="bg-redPrimary justify-center gap-2 uppercase font-bold flex  items-center text-white rounded-lg text-fs_7 w-[140px] h-[40px]"
              >
                <IoMdAdd className="text-fs_3" /> добавить
              </button>
              <button className="px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                <CiHeart />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardCatalog;
