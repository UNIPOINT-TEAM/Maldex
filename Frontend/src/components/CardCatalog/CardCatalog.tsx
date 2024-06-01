// Assuming CardCatalog.tsx
import React from "react";
import { Catalog } from "../../types";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { formatPrice } from "../../utils/FormatPrice";

/*@ts-expect-error: This */
const CardCatalog: React.FC<Catalog> = ({ item }) => {
  const dispatch = useDispatch();
  const addToCartHandler = (product: any) => {
    const totalPrice =
      item?.discount_price > 0 ? item?.discount_price : item?.price;
    dispatch(addToCart({ ...product, quantity: 1, totalPrice }));
  };

  return (
    <div className="group  min-h-[500px] cursor-pointer">
      <div className="relative w-full catalogImgBox bg-white duration-200 group-hover:bg-[#fff]">
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
      <div className="min-h-[100px]">
        <h2 className="text-black text-fs_7 mb-2 font-medium">{item?.name}</h2>
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
          onClick={() => addToCartHandler(item)}
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
  );
};

export default CardCatalog;
