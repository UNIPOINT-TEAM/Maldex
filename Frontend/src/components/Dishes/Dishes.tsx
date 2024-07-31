import { useEffect, useState } from "react";
import { getData } from "../../services/services";
import { useFetchHook } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";

const Dishes = () => {
  const [detail, setDetail] = useState<any>(null);
  useEffect(() => {
    getData("product/home-category").then((res) => {
      setDetail(res);
    });
  }, []);
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/product/home-category" });
  }, []);

  return (
    <div className="w-full mb-[80px]">
      <div className="flex items-center justify-between">
        <h3 className="section-title">{response?.category}</h3>
        <button className="mx-3 uppercase text-fs_8 font-bold p-[6px] tracking-wide  border border-redPrimary rounded-lg text-redPrimary block ss:hidden">
          Все товары
        </button>
      </div>
      <div className="grid grid-rows-3  grid-cols-12  gap-4">
        <div className="col-span-12  lg:col-span-9 h-[360px] row-span-3">
          <div className="grid grid-cols-5 md:grid-cols-11 h-full gap-[10px]">
            <Link
              to={`${
                detail?.products[0] && `category/${detail?.products[0]?.id}`
              }`}
              className="col-span-3 group  bg-white flex flex-col items-center cursor-pointer hover:bg-[#fff] duration-150"
            >
              <h2 className="text-fs_7 my-2 line-clamp-1 hidden md:block font-medium text-white group-hover:text-darkPrimary">
                {detail?.products[0]?.name}
              </h2>
              <div
                style={{ mixBlendMode: "multiply" }}
                className="flex-1 flex justify-center items-center"
              >
                <img
                  src={
                    detail?.products &&
                    detail?.products[0]?.images_set[0]?.image_url
                  }
                  alt=""
                  className="h-[220px] object-contain"
                />
              </div>
            </Link>
            <div className="col-span-2 lg:col-span-4">
              <div className="grid grid-rows-2 grid-cols-1 lg:grid-cols-2 h-full gap-[10px]">
                <Link
                  to={`${
                    detail?.products[1] && `category/${detail?.products[1]?.id}`
                  }`}
                  className="bg-white group  flex flex-col items-center  cursor-pointer hover:bg-[#fff] duration-150"
                >
                  <h2 className="text-fs_7 my-2 line-clamp-1 hidden md:block font-medium text-white group-hover:text-darkPrimary">
                    {detail?.products[1]?.name.slice(0, 20)}
                  </h2>
                  <div
                    style={{ mixBlendMode: "multiply" }}
                    className="flex-1 flex justify-center items-center"
                  >
                    <img
                      src={
                        detail?.products &&
                        detail?.products[1]?.images_set[0]?.image_url
                      }
                      alt=""
                      className="w-[140px] object-contain"
                    />
                  </div>
                </Link>
                <Link
                  to={`${
                    detail?.products[2] && `category/${detail?.products[2]?.id}`
                  }`}
                  className="bg-white relative group flex flex-col items-center justify-center cursor-pointer  hover:bg-[#fff] duration-150"
                >
                  <h2 className="text-fs_7 my-2 line-clamp-1 hidden md:block font-medium text-white group-hover:text-darkPrimary">
                    {detail?.products[2]?.name.slice(0, 20)}
                  </h2>
                  <div
                    style={{ mixBlendMode: "multiply" }}
                    className="flex-1 flex justify-center items-center py-1"
                  >
                    <img
                      src={
                        detail?.products &&
                        detail?.products[2]?.images_set[0]?.image_url
                      }
                      alt=""
                      className="w-[140px] object-contain"
                    />
                  </div>
                </Link>
                <Link
                  to={`${
                    detail?.products[3] && `category/${detail?.products[3]?.id}`
                  }`}
                  className="bg-white flex-col group items-center justify-center hidden lg:flex cursor-pointer  hover:bg-[#fff] duration-150"
                >
                  <h2 className="text-fs_7 my-2 line-clamp-1 hidden md:block font-medium text-white group-hover:text-darkPrimary">
                    {detail?.products[3]?.name.slice(0, 20)}
                  </h2>
                  <div
                    style={{ mixBlendMode: "multiply" }}
                    className="flex-1 flex justify-center items-center"
                  >
                    <img
                      src={
                        detail?.products &&
                        detail?.products[3]?.images_set[0]?.image_url
                      }
                      alt=""
                      className="w-[140px] object-contain"
                    />
                  </div>
                </Link>
                <Link
                  to={`${
                    detail?.products[4] && `category/${detail?.products[4]?.id}`
                  }`}
                  className="bg-white flex-col group items-center justify-center hidden lg:flex cursor-pointer  hover:bg-[#fff] duration-150"
                >
                  <h2 className="text-fs_7 flec my-2 line-clamp-1 hidden md:block font-medium text-white group-hover:text-darkPrimary">
                    {detail?.products[4]?.name.slice(0, 20)}
                  </h2>
                  <div
                    style={{ mixBlendMode: "multiply" }}
                    className="flex-1 flex justify-center items-center"
                  >
                    <img
                      src={
                        detail?.products &&
                        detail?.products[4]?.images_set[0]?.image_url
                      }
                      alt=""
                      className="w-[140px] object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <Link
              to={`${
                detail?.products[5] && `category/${detail?.products[5]?.id}`
              }`}
              className="col-span-4 group bg-white flex-col  items-center justify-center hidden md:flex cursor-pointer  hover:bg-[#fff] duration-150"
            >
              <h2 className="text-fs_7 my-2 line-clamp-1 text-start hidden md:block font-medium text-white group-hover:text-darkPrimary">
                {detail?.products[5]?.name.slice(0, 40)}
              </h2>
              <div
                style={{ mixBlendMode: "multiply" }}
                className="flex-1 flex justify-center items-center"
              >
                <img
                  src={
                    detail?.products &&
                    detail?.products[5]?.images_set[0]?.image_url
                  }
                  alt=""
                  className="w-[300px] object-contain"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="row-span-3 col-span-3 hidden lg:block">
          <div className="grid grid-rows-2 grid-cols-1 gap-4 ">
            <div className="row-span-2 col-span-1 flex flex-col gap-[3px] ">
              {detail?.children &&
                detail?.children.map((i) => (
                  <Link
                    to={`catalog/?category_id=${i?.id}`}
                    key={i.id}
                    className="text-[14px] font-medium an_btn hover:text-darkSecondary"
                  >
                    {i.name}
                    <b className="text-sm text-redPrimary ms-1 font-medium">
                      {i.count}
                    </b>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dishes;
