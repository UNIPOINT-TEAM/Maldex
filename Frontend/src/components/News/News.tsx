import React, { useEffect } from "react";
import { GoArrowDownRight } from "react-icons/go";
import { Badge } from "..";
import image3 from "../../assets/article-bg-3.png";
import image4 from "../../assets/article-bg-4.png";
import { Link } from "react-router-dom";
import { useFetchHook } from "../../hooks/UseFetch";
import EmptyContant from "../EmptyContant/EmptyContant";

const News: React.FC<{ title: string }> = ({ title }) => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/articles/" });
  }, []);

  return (
    <div className="articles container_xxl py-5 px-3  md:mb-[100px]">
      <h3 className="section-title ">{title}</h3>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <Link
            to={"/articles"}
            className="bg-cover overflow-hidden text-white h-[180px] sm:h-[340px]"
            style={{
              backgroundImage: `url(${response[0]?.image})`,
            }}
          >
            {response[0] ? (
              <div className="p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                  {response[0]?.title}
                </h3>
                <div
                  className="text-fs_7 lg:text-fs_3 leading-tight font-medium mt-2"
                  dangerouslySetInnerHTML={{ __html: response[0]?.body }}
                />

                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>

          <Link
            to={"/articles"}
            className=" overflow-hidden bg-cover text-white h-[180px] sm:h-[340px]"
            style={{
              backgroundImage: `url(${response[1]?.image})`,
            }}
          >
            {response[1] ? (
              <div className=" p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">
                  {response[1]?.title}
                </h3>

                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 h-[180px] sm:h-[340px]">
          <Link
            to={"/articles"}
            className=" bg-cover text-white hidden lg:block h-full"
            style={{
              backgroundImage: `url(${response[3]?.image})`,
            }}
          >
            {response[3] ? (
              <div className="p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">2.10</h3>
                <h2 className="text-fs_7 font-medium leading-tight mt-2">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>
          <Link
            to={"/articles"}
            className=" bg-cover text-white hidden lg:block h-full"
            style={{
              backgroundImage: `url(${response[3]?.image})`,
            }}
          >
            {response[3] ? (
              <div className="p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">2.10</h3>
                <h2 className="text-fs_7 font-medium leading-tight mt-2">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>
          <Link
            to={"/articles"}
            className=" bg-cover text-white hidden lg:block h-full"
            style={{
              backgroundImage: `url(${response[3]?.image})`,
            }}
          >
            {response[3] ? (
              <div className="p-3 lg:p-5">
                <h3 className="text-fs_6 lg:text-fs_3 opacity-50">2.10</h3>
                <h2 className="text-fs_7 font-medium leading-tight mt-2">
                  Маска для лица многоразовая из хлопка, анатомической формы
                </h2>
                <Badge name="NEW" />
                <Badge name="HIT" />
              </div>
            ) : (
              <EmptyContant />
            )}
          </Link>
          <Link
            to={"/articles"}
            className="group p-3 lg:p-5 h-full flex flex-col justify-between bg-white hover:bg-redPrimary cursor-pointer duration-300"
          >
            <h2 className="group-hover:text-[#fff] mt-7 text-fs_6 lg:text-[28px] leading-tight font-medium tracking-wide text-redPrimary">
              Все <br /> статьи
            </h2>
            <div className="flex justify-end">
              <button className="bg-redPrimary w-[40px] h-[40px] flex items-center justify-center p-1 rounded-xl group-hover:bg-[#fff]">
                <GoArrowDownRight className="text-fs_6 text-[#fff] group-hover:text-redPrimary" />
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
