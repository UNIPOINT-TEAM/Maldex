import React, { useEffect, useState } from "react";
import {
  MainProductFilter,
  MoreFilter,
  News,
  QuestForm,
  SaleSlider,
} from "../../components";
import Filter from "../../assets/icons/filtr.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Accordion } from "../../components";
import { useFetchHook } from "../../hooks/UseFetch";
import { useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import Pagination from "../../components/Pagination/Pagination";
import ProductsCard from "../../components/MainProductFilter/ProductsCard";
import { deleteFilter } from "../../store/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import { generateQueryString } from "../../utils/generateQueryString";

const FilterBtn: React.FC<{ filterCount?: number }> = ({ filterCount }) => {
  return (
    <div className="flex items-center gap-2 min-h-[40px] justify-center min-w-[180px] border border-darkPrimary rounded-[6px] px-3 font-bold">
      Все фильтры {filterCount > 0 && `(${filterCount})`}
      <img src={Filter} alt="" />
    </div>
  );
};

const Catalog = () => {
  const { search } = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filter);
  const { fetchData, response, isLoading } = useFetchHook();
  const { fetchData: fetchCategoryFilter, response: categoryFilter } =
    useFetchHook();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  useEffect(() => {
    const filterQuery = generateQueryString(filterData);
    console.log(filterQuery);
    fetchData({
      method: "GET",
      url: `/product/?page=${currentPage}&${
        search && search.replace("?", "")
      }&${filterQuery && filterQuery}`,
    });
    !isLoading && window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [search, currentPage, filterData]);

  useEffect(() => {
    fetchCategoryFilter({ method: "GET", url: `/product/filters` });
  }, []);

  const handleFilter = (query: string) => {
    fetchData({ method: "GET", url: `/product/${query}` });
  };
  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleDeleteFilter = (
    filterCategory: string,
    filterKey: string | null = null
  ) => {
    dispatch(deleteFilter({ filterCategory, filterKey }));
  };
  return (
    <div className="home px-2 md:px-0">
      <div className="w-full h-full">
        <div className="card container_xxl px-3 my-0 sm:my-10">
          <h1 className="text-3xl mb-5 mt-5 md:mt-0">
            {response && response?.name}
          </h1>

          <div className="flex justify-between items-center md:border-b-[1px] pb-2 mb-3">
            <div className="flex items-start gap-3">
              <MoreFilter FilterBtn={<FilterBtn />} type={"ALL_FILTR"} />
              <div className="flex flex-wrap gap-2">
                {Object.keys(filterData).map((item) => (
                  <>
                    {["materials", "brands"].includes(item) && (
                      <div className="flex gap-1">
                        {Object.keys(filterData[item]).map((key) => (
                          <div className=" bg-white flex items-center justify-between h-[36px] px-3 gap-1 rounded-md text-darkPrimary text-base capitalize">
                            {key}
                            <button
                              onClick={() => handleDeleteFilter(item, key)}
                            >
                              <IoClose className="text-fs_4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    {item === "price" && (
                      <div className="">
                        {filterData?.price?.min_price &&
                          filterData?.price?.max_price && (
                            <div className=" bg-white flex items-center justify-between h-[36px] px-3 gap-1 rounded-md text-darkPrimary text-base capitalize">
                              {filterData.price?.min_price} -{" "}
                              {filterData.price?.max_price}
                              <button onClick={() => handleDeleteFilter(item)}>
                                <IoClose className="text-fs_4" />
                              </button>
                            </div>
                          )}
                      </div>
                    )}
                    {!["materials", "brands", "price"].includes(item) &&
                      filterData[item] && (
                        <div className=" bg-white flex items-center justify-between h-[36px] px-3 gap-1 rounded-md text-darkPrimary text-base capitalize">
                          {filterData[item]}
                          <button onClick={() => handleDeleteFilter(item)}>
                            <IoClose className="text-fs_4" />
                          </button>
                        </div>
                      )}
                  </>
                ))}
              </div>
            </div>
            <div className="relative">
              <button
                className="text-xl px-4 py-2 rounded-md flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <p>Популярные &nbsp;</p>
                {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </button>
              {isDropdownOpen && (
                <div className="absolute capitalize flex flex-col items-end text-darkPrimary font-medium right-0 mt-2 w-48 bg-white z-[999] border border-gray-200 rounded-md shadow-lg">
                  <button
                    onClick={() => handleFilter(`${search}&is_popular=true`)}
                    className="block px-4 py-2 capitalize hover:bg-gray-200"
                  >
                    популярные
                  </button>
                  <button
                    onClick={() => handleFilter(`${search}&is_new=true`)}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Новинки
                  </button>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Сначала дешевые
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Сначала дорогие
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    По размеру скидки
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Высокий рейтинг
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex w-100 overflow-scroll md:overflow-hidden sm:flex sm:flex-wrap items-center py-2 gap-2">
            {categoryFilter.map((item) => (
              <button
                key={item.id}
                onClick={() => handleFilter(`?filter_id=${item.id}`)}
                className="border-[1px] border-gray-400 px-2 text-[12px] text-gray-500 min-w-[300px] sm:min-w-0 py-1 rounded"
              >
                {item?.title}
              </button>
            ))}

            <button
              onClick={() => handleFilter("?is_new=true")}
              className="border border-redPrimary text-[10px] text-redPrimary h-[22px] rounded-xl px-2 flex items-center"
            >
              NEW
            </button>
            <button
              onClick={() => handleFilter("?is_hit=true")}
              className="border border-greenPrimary text-[10px] text-greenPrimary rounded-xl px-2 h-[22px] flex items-center"
            >
              HIT
            </button>
          </div>

          {isLoading && (
            <div>
              <Spinner className="h-14 w-14 mx-auto" />
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-2 mt-3">
            {response?.results?.length > 0
              ? response.results?.map((item) => (
                  <div className="w-full mb-[40px]" key={item.id}>
                    <ProductsCard item={item} />
                  </div>
                ))
              : !isLoading && (
                  <div className="w-full col-span-2 md:col-span-3 rounded-md lg:col-span-5 bg-white h-[300px] flex items-center justify-center mb-[40px]">
                    <h2 className="text-gray-500 text-fs_3">
                      Товаров пока нет:)
                    </h2>
                  </div>
                )}
          </div>
          <div className="">
            <Pagination
              totalItems={response?.count || 0}
              itemsPerPage={40}
              onPageChange={handlePageChange}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className="mb-3">
          <SaleSlider />
        </div>

        <div className="faq container_xxl flex flex-col md:flex-row px-3 mb-10">
          <h3 className="section-title">FAQ</h3>
          <Accordion />
        </div>
        <div className="container_xxl px-3">
          <MainProductFilter status="hit" />
        </div>
        <div className="md:hidden mb-5">
          <News title="новинки" />
        </div>
      </div>
      <QuestForm />
    </div>
  );
};

export default Catalog;
