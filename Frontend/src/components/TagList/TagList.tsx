import React, { useEffect, useState } from "react";
import { useFetchHook } from "../../hooks/UseFetch";

const TagList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Для неё");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const { fetchData, response: categories } = useFetchHook();
  const { fetchData: fetchSubcategories, response: subcategories } =
    useFetchHook();

  useEffect(() => {
    fetchData({ method: "GET", url: `/gifts/baskets/tag/category/` });
  }, []);
// @ts-expect-error "error"
  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    try {
      await fetchSubcategories({ method: "GET", url: `/gifts/baskets/tags/` });
    } catch (error) {
      console.error("Ошибка при загрузке подкатегорий:", error);
    }
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className="container_xxl">
      <div className="flex flex-col">
        <div>
          <ul className="mt-10 mb-6 mx-10 mx justify-around hidden lg:flex">
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer py-2 px-10 border rounded-3xl uppercase  ${
                  selectedCategory === category
                    ? "font-bold bg-redPrimary text-white"
                    : "bg-white"
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="mb-10 flex flex-wrap gap-y-5 justify-between hidden lg:flex">
            {selectedCategory &&
              subcategories
                .filter(
                  (subcategory) =>
                    subcategory.tag_category === selectedCategory.id
                )
                .map((subcategory) => (
                  <li
                    key={subcategory.id}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className={`cursor-pointer py-2 border rounded-xl px-4 text-center ${
                      selectedSubcategory === subcategory
                        ? "font-bold bg-redPrimary text-white"
                        : "bg-white"
                    }`}
                    style={{ width: "18%" }}
                  >
                    {subcategory.name}
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TagList;
