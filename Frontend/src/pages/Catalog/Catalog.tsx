import { useEffect, useState } from "react";
import {
  MainProductFilter,
  MoreFilter,
  News,
  QuestForm,
  SaleSlider,
} from "../../components";
import Close from "../../assets/icons/close.svg";
import Filter from "../../assets/icons/filtr.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Accordion } from "../../components";
import { useFetchHook } from "../../hooks/UseFetch";
import { useLocation } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import Pagination from "../../components/Pagination/Pagination";
import ProductsCard from "../../components/MainProductFilter/ProductsCard";

const FilterBtn: React.FC<{ filterCount?: number }> = ({ filterCount }) => {
  return (
    <div className="flex items-center gap-2 h-[40px] border border-darkPrimary rounded-[6px] px-3 font-bold">
      Все фильтры {filterCount > 0 && `(${filterCount})`}
      <img src={Filter} alt="" />
    </div>
  );
};
const Catalog = () => {
  const { search } = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  const [filterItems, setFilterItems] = useState([
    { id: 1, name: "Белый", count: 2 },
    { id: 2, name: "Желтый", count: 4 },
    { id: 3, name: "Красный", count: 3 },
    { id: 4, name: "Черный", count: 5 },
    { id: 5, name: "Серый", count: 2 },
    { id: 6, name: "Фиолетовый", count: 7 },
    { id: 7, name: "Бирюзовый", count: 1 },
  ]);
  const [activeFilterItems, setActiveFilterItems] = useState([
    { id: 1, name: "Белый" },
    { id: 2, name: "Желтый" },
  ]);

  const addToActive = (i: any) => {
    setActiveFilterItems((prev) => [...prev, i]);
    setFilterItems((prev) => prev.filter((item) => item.id !== i.id));
  };
  const openFilter = () => setFilter(!filter);
  const { fetchData, response, isLoading } = useFetchHook();
  const { fetchData: fetchCategoryFilter, response: categoryFilter } =
    useFetchHook();

  useEffect(() => {
    fetchData({
      method: "GET",
      url: `/product/?page=${currentPage}&${search && search.replace("?", "")}`,
    });
    !isLoading && window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [search, currentPage]);

  useEffect(() => {
    fetchCategoryFilter({ method: "GET", url: `/product/filters` });
  }, []);
  const handleFilter = (query: string) => {
    fetchData({ method: "GET", url: `/product/${query}` });
  };

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="home px-2 md:px-0">
      <div className="w-full h-full">
        <div className="card container_xxl px-3 my-0 sm:my-10 ">
          <h1 className="text-3xl mb-5 mt-5 md:mt-0">
            {response && response?.name}
          </h1>
          <div className="flex justify-between items-center md:border-b-[1px] pb-2 mb-3">
            <MoreFilter FilterBtn={<FilterBtn />} type={"ALL_FILTR"} />
            <div className="relative">
              <button
                className="text-xl px-4 py-2 rounded-md flex items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <p>Популярные &nbsp;</p>
                {isDropdownOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </button>
              {isDropdownOpen && (
                <div className="absolute capitalize flex flex-col items-end text-darkPrimary font-medium right-0 mt-2 w-48  bg-white z-[999] border border-gray-200 rounded-md shadow-lg">
                  <button
                    onClick={() => handleFilter(`${search}&is_popular=true`)}
                    className="block px-4 py-2 capitalize hover:bg-gray-200 "
                  >
                    популярные
                  </button>
                  <button
                    onClick={() => handleFilter(`${search}&is_new=true`)}
                    className="block px-4 py-2 hover:bg-gray-200 "
                  >
                    Новинки
                  </button>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 ">
                    Сначала дешевые
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 ">
                    Сначала дорогие
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 ">
                    По размеру скидки
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200 ">
                    Высокий рейтинг
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="w-full overflow-x-scroll flex flex-wrap relative md:hidden md:overflow-hidden pb-6 mb-2 border-b">
            {activeFilterItems.map((i, index) => (
              <div className="flex" key={i.id}>
                <div
                  key={i.id}
                  className="px-2 py-2 rounded-md bg-gray-100 text-sm border border-l-gray-800 flex gap-2"
                >
                  <p>{i.name}</p>
                  <button>
                    <img className="w-[12px]" src={Close} alt="" />
                  </button>
                </div>
                {index == activeFilterItems.length - 1 && (
                  <div className="relative">
                    <button
                      onClick={openFilter}
                      className="bg-redPrimary text-white px-4 rounded-md absolute h-full"
                    >
                      +
                    </button>
                    {filter && (
                      <div className="w-[200px] h-[350px] border border-gray-500 absolute z-30 top-[-150px] left-[60px]  rounded-md">
                        <div className="w-[20px] h-[20px] z-40 border border-gray-500 bg-white  rotate-45 absolute top-[45%] left-[-6px]"></div>
                        <div className="w-full h-full bg-white z-50 absolute rounded-md flex flex-col justify-start py-5 px-2">
                          <p className="text-xl mb-5">Цвет</p>
                          {filterItems.map((i) => (
                            <button
                              onClick={() => addToActive(i)}
                              className="text-sm mb-2 text-start"
                            >
                              {i.name} &nbsp;
                              <span className="text-gray-500">{i.count}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
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
            {/*@ts-expect-error: This */}
            {response?.results?.length > 0
              ? response &&
                response.results?.map((item) => (
                  <div className="w-full  mb-[40px]" key={item.id}>
                    <ProductsCard item={item} />
                  </div>
                ))
              : !isLoading && (
                  <div className="w-full col-span-2 md:col-span-3 rounded-md  lg:col-span-5 bg-white h-[300px] flex items-center justify-center mb-[40px]">
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

        <div className="faq container_xxl flex flex-col md:flex-row  px-3 mb-10">
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
