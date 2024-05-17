import  { useEffect, useState } from "react";
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
  const handleCategoryClick = async (category: any) => {
    setSelectedCategory(category);
    try {
      await fetchSubcategories({ method: "GET", url: `/gifts/baskets/tags/` });
    } catch (error) {
      console.error("Ошибка при загрузке подкатегорий:", error);
    }
  };

  const handleSubcategoryClick = (subcategory: any) => {
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
                className={`cursor-pointer font-bold h-[40px] text-fs_8  flex items-center justify-center  px-16  rounded-3xl uppercase  ${
                  selectedCategory === category
                    ? " bg-redPrimary text-white"
                    : "bg-white text-[#666666]"
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
                  /* @ts-expect-error: This */
                  (subcategory) =>subcategory.tag_category === selectedCategory.id
                )
                .map((subcategory) => (
                  <li
                    key={subcategory.id}
                    onClick={() => handleSubcategoryClick(subcategory)}
                    className={`cursor-pointer flex items-center justify-center h-[70px] border border-lightSecondary hover:text-white hover:bg-redPrimary hover:font-bold rounded-xl px-4 text-center ${
                      selectedSubcategory === subcategory
                      ? "font-bold bg-redPrimary text-white"
                      : "bg-[#fff]"
                  }`}
                    style={{ width: "18%" }}
                  >
                    {subcategory.name}
                  </li>
                ))}
          </ul>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default TagList;
