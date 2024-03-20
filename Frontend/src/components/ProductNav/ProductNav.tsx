import React from "react";

interface ProductNavProps {
  title: string;
  color: "green" | "red" | "gray";
}

const ProductNav: React.FC<ProductNavProps> = ({ title, color }) => {
  let titleStyle = "text-4xl";

  // Добавляем стили в зависимости от типа бейджа
  if (color === "green") {
    titleStyle += "font-medium text-[40px]  text-greenPrimary";
  } else if (color === "red") {
    titleStyle += "font-medium text-[40px] text-redPrimary";
  } else if (color === "gray") {
    titleStyle += "font-medium text-[32px] text-darkSecondary";
  }

  return (
    <div className="">
      <div className="mb-5 flex justify-between">
        <p className={titleStyle}>{title}</p>
        <button className="mx-3 uppercase font-extrabold tracking-wider p-[6px] border border-redPrimary rounded-md text-redPrimary block ss:hidden">
          Все проекты
        </button>
      </div>
      <div className="border border-darkSecondary rounded-md text-fs_8 uppercase text-darkSecondary font-semibold tracking-wider">
        <div className="flex justify-between items-center px-7 py-0">
          <div className="overflow-auto">
            <ul className="flex gap-5 whitespace-nowrap">
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Одежда
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Сумки, портфели, рюкзаки
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Ручки
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Кухня и бар
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Гаджеты
              </li>
              <li className="cursor-pointer py-4 border-b-2 border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary">
                Новый год и рождество
              </li>
            </ul>
          </div>
          <div>
            <button className="uppercase font-semibold tracking-wide p-[6px] border border-redPrimary rounded-md text-redPrimary hidden ss:block">
              Все топ-товары
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNav;
