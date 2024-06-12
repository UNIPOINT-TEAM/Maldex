import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetchHook } from "../../hooks/UseFetch";

const MainCategory = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/product/categories/?is_available=true" });
  }, []);

  return (
    <>
      <div className="w-full py-3 flex flex-wrap gap-2 justify-between items-center">
        {response.map((category) => (
          <div
            key={category.id}
            className="w-1/6 h-[180px] py-5 relative content hover:bg-redPrimary"
          >
            <img
              className="w-[50px] object-cover mb-5"
              src={category.icon}
              alt=""
            />
            <h2 className="text-lg mb-2 font-medium">{category?.name}</h2>
            {category?.children && category?.children?.length > 0 && (
              <>
                <p className="text-fs_7 tracking-wide">
                  {category?.children[0]?.name}
                </p>
                <p className="text-fs_7 font-normal">
                  {category?.children[1]?.name}
                </p>
              </>
            )}
            <div className="absolute w-full py-3 min-h-[400px] bg-[#fff] shadow-lg shadow-gray-400 top-0 left-0 right-0 moreContent p-3">
              <img
                className="w-[60px] object-cover mb-5 ps-2"
                src={category?.icon}
                alt="category-img"
              />
              <Link
                to={`catalog/?category_id=${category?.id}`}
                className="text-lg mb-2 font-medium px-2"
              >
                {category?.name}
              </Link>
              {/* @ts-expect-error: This */}
              {category?.children && category?.children.map((childCategory) => (
                  <div
                    key={childCategory.id}
                    className="rounded px-2 hover:bg-greenPrimary hover:text-white py-1 "
                  >
                    <Link to={`catalog/?category_id=${childCategory.id}`}>
                      <p className="text-fs_7 font-normal">
                        {childCategory.name}
                      </p>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCategory;