import React, { useState } from "react";

interface ProductNavProps {
  title: string;
  color: "green" | "red" | "gray";
}

const ProductNav: React.FC<ProductNavProps> = ({ title, color }) => {
  let titleStyle = "text-4xl traking-wide";
  const [selectedItem, setSelectedItem] = useState(0);

  if (color === "green") {
    titleStyle +=
      " font-medium text-[30px] lg:text-[40px] border-b-2 lg:border-0 border-greenPrimary text-greenPrimary";
  } else if (color === "red") {
    titleStyle += " font-medium text-[30px] lg:text-[40px] text-redPrimary";
  } else if (color === "gray") {
    titleStyle += " font-medium text-base lg:text-[28px] text-darkSecondary";
  }

  const items = [
    "Одежда",
    "Сумки, портфели, рюкзаки",
    "Ручки",
    "Кухня и бар",
    "Гаджеты",
    "Новый год и рождество",
  ];

  return (
    <div className="mb-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className={titleStyle}>{title}</h2>
        <button className="mx-3 uppercase text-fs_8 font-medium p-[6px] tracking-wide  border border-redPrimary rounded-lg text-redPrimary block ss:hidden">
          Все топ-товары
        </button>
      </div>
      <div className="border border-lightSecondary rounded-xl  uppercase text-darkSecondary font-semibold tracking-wider">
        <div className="flex justify-between items-center px-3 lg:px-7 py-0">
          <div className="overflow-x-auto product-nav">
            <ul className="flex gap-5 whitespace-nowrap">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-medium text-[10px] lg:text-fs_8 py-4 border-b-2 ${
                    selectedItem === index
                      ? "border-redPrimary text-redPrimary"
                      : "border-transparent hover:text-redPrimary "
                  }`}
                  onClick={() => setSelectedItem(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className="uppercase text-[10px] font-bold tracking-wide h-7  px-3 border border-redPrimary rounded-[8px] text-redPrimary hidden ss:block">
              Все топ-товары
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
