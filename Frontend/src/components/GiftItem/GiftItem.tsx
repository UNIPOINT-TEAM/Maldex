import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetchHook } from "../../hooks/UseFetch";

const GiftItem = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({
      method: "GET",
      url: "/product/categories/?new_category=true",
    });
  }, []);

  return (
    <div className="gift-category container_xxl py-3 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 ">
      {response.map((item) => (
        <div className="w-full flex items-center justify-center">
          <Link
            to={"/catalog"}
            className=" flex items-center flex-col justify-center "
          >
            <div className="border w-[70px] h-[70px] border-lightPrimary p-3 rounded-xl">
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-full object-contain "
              />
            </div>
            <p className="text-center px-1 text-fs_8 font-semibold">
              {item.name}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GiftItem;
