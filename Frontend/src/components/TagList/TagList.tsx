import React, { useState } from "react";

const TagList = () => {
  // Состояние для хранения выбранной категории
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Список категорий и их соответствующих подкатегорий
  const categories = {
    "Для неё": [
      "Care Package",
      "Подкатегория1-2",
      "Подкатегория1-3",
      "Подкатегория1-4",
      "Подкатегория1-5",
      "Подкатегория1-6",
    ],
    "Для него": ["Подкатегория2-1", "Подкатегория2-2", "Подкатегория2-3"],
    "Для детей": ["Подкатегория3-1", "Подкатегория3-2", "Подкатегория3-3"],
    "Для дома": ["Подкатегория4-1", "Подкатегория4-2", "Подкатегория4-3"],
    "Для офиса": ["Подкатегория6-1", "Подкатегория6-2", "Подкатегория6-3"],
    "Для учёбы": ["Подкатегория5-1", "Подкатегория5-2", "Подкатегория5-3"],
  };

  // Обработчик клика по категории
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container_xxl">
      <div>
        <div className="flex flex-col ">
          {/* Блок категорий */}
          <div className="">

            {/* Desktop */}
            <ul className="mt-10 mb-6 justify-around hidden lg:flex">
              {Object.keys(categories).map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`cursor-pointer py-2 px-10 border rounded-3xl   ${
                    selectedCategory === category
                      ? "font-bold bg-redPrimary text-white"
                      : "bg-white"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>

            {/* Mobile */}
            <ul className="mt-7 flex flex-wrap justify-around block lg:hidden">
              {Object.keys(categories).map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`cursor-pointer py-2 px-10 border rounded-3xl mb-4 ${
                    selectedCategory === category
                      ? "font-bold bg-redPrimary text-white"
                      : "bg-white"
                  }`}
                  style={{ flexBasis: "calc(50% - 20px)" }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Блок подкатегорий */}

          {/* Desktop */}
          <div className="">
            <ul className="mb-10 flex flex-wrap gap-y-5 justify-between hidden lg:flex">
              {selectedCategory &&
                categories[selectedCategory].map((subcategory, index) => (
                  <li
                    key={subcategory}
                    className="cursor-pointer py-2 border rounded-xl px-4 text-center"
                    style={{ width: "18%" }}
                  >
                    {subcategory}
                  </li>
                ))}
            </ul>

            {/* Mobile */}
            <ul className="mb-10 flex flex-wrap gap-y-3 justify-around  lg:hidden ">
              {selectedCategory &&
                categories[selectedCategory].map((subcategory, index) => (
                  <li
                    key={subcategory}
                    className="cursor-pointer py-2 border rounded-xl px-4 text-center"
                    style={{ width: "40%" }}
                  >
                    {subcategory}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagList;
