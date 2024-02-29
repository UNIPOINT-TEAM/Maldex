// Assuming CardCatalog.tsx
import React from "react";
import { Catalog } from "../../types/types";

interface CardCatalogProps {
    item: Catalog;
}

const CardCatalog: React.FC<CardCatalogProps> = ({ item }) => {
    const { title, description, price, img, id, money, index1, index2 } = item;

    return (
        <div className="catalog">
            <div className="relative h-3/5 w-full catalogImgBox">
                <img className="mb-2 h-full w-full" src={img} alt="" />
                <div className="catalogabout absolute w-3/5 h-full bg-[#00B6BA] top-0 px-3 right-[0] overflow-hidden py-2">
                    <p className="text-xs ml-3 mb-3 text-white">В наборе:</p>
                    <p className="text-xs ml-3 mb-3 text-white">
                        Ручка-роллер Deluxe <br /> Metal — черная
                    </p>
                    <p className="text-xs ml-3 mb-3 text-white">
                        Керамическая кружка <br />
                        Black Palm Desert
                    </p>
                    <p className="text-xs ml-3 mb-8 text-white">
                        Подарок содержит <br /> еще 2 предмета
                    </p>
                    <button className="w-full border text-white py-2 rounded-lg">
                        подробнее
                    </button>
                </div>
                <div className="catalogabout w-[30px] h-[30px] bg-[#00B6BA] absolute top-[30px] rotate-[45deg] right-[145px] z-10"></div>
            </div>
            <p className="text-black text-lg mb-2">{title}</p>
            <p className="text-gray-400 text-sm mb-2">{description}</p>
            <div className="relative mb-2">
                <p className="text-xl">
                    {price}{" "}
                    <span className="text-xs absolute top-0">{index1}</span>
                    <span className="ml-4 mr-1">{money}</span>
                    <span className="text-xs absolute top-0 line-through text-redPrimary">
                        {index2}
                    </span>
                </p>
            </div>
            <div className="flex justify-between catalog_btns">
                <button className="bg-redPrimary px-4 py-2 text-white rounded-lg">
                    + В корзину
                </button>
                <button className="bg-gray-300 px-3 py-1 flex justify-center items-center rounded-lg text-gray-700">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    );
};

export default CardCatalog;
