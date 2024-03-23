import React, { useState } from "react";

interface ProductNavProps {
  title: string;
  color: "green" | "red" | "gray";
}

const ProductNav: React.FC<ProductNavProps> = ({ title, color }) => {
  let titleStyle = "text-4xl traking-wide";
  const [selectedItem, setSelectedItem] = useState(0); // Добавляем состояние для отслеживания выбранного элемента

  // Добавляем стили в зависимости от цвета
  if (color === "green") {
    titleStyle += " font-medium text-[40px]  text-greenPrimary";
  } else if (color === "red") {
    titleStyle += " font-medium text-[40px] text-redPrimary";
  } else if (color === "gray") {
    titleStyle += " font-medium text-[32px] text-darkSecondary";
  }

  // Массив элементов для упрощения рендера списка
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
      <div className="mb-5 flex justify-between">
        <h2 className={titleStyle}>{title}</h2>
        <button className="mx-3 uppercase font-extrabold tracking-wider p-[6px] border border-redPrimary rounded-md text-redPrimary block ss:hidden">
          Все проекты
        </button>
      </div>
      <div className="border border-darkSecondary rounded-md text-fs_8 uppercase text-darkSecondary font-semibold tracking-wider">
        <div className="flex justify-between items-center px-7 py-0">
          <div className="overflow-auto">
            <ul className="flex gap-5 whitespace-nowrap">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-medium py-4 border-b-2 ${
                    selectedItem === index
                      ? "border-redPrimary text-redPrimary"
                      : "border-transparent hover:text-redPrimary hover:border-b-2 hover:border-redPrimary"
                  }`}
                  onClick={() => setSelectedItem(index)} // Устанавливаем элемент как выбранный при клике
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
