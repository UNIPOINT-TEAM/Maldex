import { useEffect, useState } from "react";
import error from "../../assets/images/box404.png";
import { QuestForm } from "../../components";
import { useFetchHook } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";

function NotFound() {
  const [selectedCategory, setSelectedCategory] = useState("Для неё");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const { fetchData, response: categories } = useFetchHook();
  const { fetchData: fetchSubcategories, response: subcategories } =
    useFetchHook();
console.log(subcategories)
  useEffect(() => {
    fetchData({ method: "GET", url: `/link-tags/categories` });
  }, []);
  // @ts-expect-error "error"
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchSubcategories({ method: "GET", url: `/link-tags/` });
  };

  const handleSubcategoryClick = (subcategory: any) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-24 my-10">
          <div className="px-[84px]">
            <img src={error} alt="" />
          </div>
          <div className="text-center lg:text-start">
            <h1 className="text-greenPrimary text-[80px] lg:text-[140px] font-[700]">
              404
            </h1>
            <p className="text-[28px] font-[500] ">такой страницы нет</p>
            <p>Но есть много других полезных страниц</p>
          </div>
        </div>

        <div className="container_xxl">
          <div className="flex flex-col">
            <div>
              <ul className="mt-10 mb-6 mx-auto w-4/5 hidden lg:flex gap-3">
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
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="mb-10  flex-wrap gap-y-5  hidden lg:flex">
                {/* @ts-expect-error: This */}
                {selectedCategory && selectedCategory?.tags?.map((tag) => (
                    <Link
                      to={tag.link}
                      target="_blank"
                      onClick={() => handleSubcategoryClick(tag)}
                      className={`cursor-pointer flex items-center justify-center h-[70px] border border-lightSecondary hover:text-white hover:bg-redPrimary hover:font-bold rounded-xl px-4 text-center ${
                        selectedSubcategory === tag
                          ? "font-bold bg-redPrimary text-white"
                          : "bg-[#fff]"
                      }`}
                      style={{ width: "18%" }}
                    >
                      <li key={tag.id} className="font-medium text-fs_5">
                        {tag.title}
                      </li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <QuestForm />
      </div>
    </div>
  );
}

export default NotFound;