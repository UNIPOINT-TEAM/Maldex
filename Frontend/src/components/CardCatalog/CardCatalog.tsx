// Assuming CardCatalog.tsx
import React from "react";
import { Catalog } from "../../types";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const CardCatalog: React.FC<Catalog> = ({
  name,
  price,
  price_type,
  article,
  images_set,
}) => {
  return (
    <div className="catalog">
      <div className="relative w-full catalogImgBox">
        <img
          className="mb-2 h-[255px] w-full object-contain"
          src={images_set[0]?.image_url}
          alt="category-img"
        />
      </div>
      <h2 className="text-black text-fs_7 mb-2 font-medium">{name}</h2>
      <p className="opacity-70 text-fs_8">{article}</p>
      <div className="mb-2">
        <p className="text-xl font-medium">{price + " " + price_type}</p>
      </div>
      <div className="flex justify-between catalog_btns">
        <button className="bg-redPrimary px-4 py-2 text-white rounded-lg text-sm w-[120px]">
          + В корзину
        </button>
        <button className="bg-gray-300 px-3 py-1 rounded-lg text-gray-700">
          <Link
            to={"category/1"}
            className="w-full h-full flex justify-center items-center"
          >
            <CiSearch />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CardCatalog;
