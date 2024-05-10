// Assuming CardCatalog.tsx
import React from "react";
import { Catalog } from "../../types";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

interface CardCatalogProps {
  item: Catalog;
}

const CardCatalog: React.FC<CardCatalogProps> = ({ item }) => {
   {/*@ts-expect-error: This */}
  const { name, description, price, img, money, index1, index2 } = item;

  return (
    <div className="catalog">
      <div className="relative w-full catalogImgBox">
        <img className="mb-2 h-[255px] w-full" src={img} alt="category-img" />
        <div className="hidden md:flex flex-col justify-center catalogabout absolute w-3/5 h-full bg-[#00B6BA] top-0 px-3 right-[0] py-5 gap-2 ">
          <p className="text-xs ml-3  text-white">В наборе:</p>
          <p className="text-xs ml-3  text-white">
            Ручка-роллер Deluxe <br /> Metal — черная
          </p>
          <p className="text-xs ml-3  text-white">
            Керамическая кружка <br />
            Black Palm Desert
          </p>
          <p className="text-xs ml-3 text-white">
            Подарок содержит <br /> еще 2 предмета
          </p>
          <button className="w-full border text-white py-2 rounded-lg">
            подробнее
          </button>
          <div className="catalogabout w-[30px] h-[30px] bg-[#00B6BA] absolute top-[30px] rotate-[45deg] left-[-10px]  z-10"></div>
        </div>
      </div>
      <p className="text-black text-fs_7 mb-2 font-medium">{name}</p>
      <p className="text-[#222220] text-sm mb-2 opacity-70 font-medium">
        {description}
      </p>
      <div className="relative mb-2">
        <p className="text-xl font-medium">
          {price}
          <span className="text-xs absolute top-0">{index1}</span>
          <span className="ml-4 mr-1">{money}</span>
          <span className="text-xs absolute top-0 line-through text-redPrimary">
            {index2}
          </span>
        </p>
      </div>
      <div className="flex justify-between catalog_btns">
        <button className="bg-redPrimary px-4 py-2 text-white rounded-lg shadow-lg text-sm shadow-gray-400 w-[120px]">
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
