import { useEffect, useState } from "react";
import searchIcon from "../../assets/images/search.svg";
import SearchCategory from "./SearchCategory";
import { Spinner } from "@material-tailwind/react";
import { useFetchHook } from "../../hooks/UseFetch";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils";

const SearchModal = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchCategory, setSearchCategory] = useState<any[]>([]);
  const { fetchData, response, isLoading } = useFetchHook();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    setSearchQuery(e.target.value);
    fetchData({ method: "GET", url: `product/?search=${e.target.value}` });
    if (e.target.value) {
      axios
        .get(`${BASE_URL}/product/categories/?search=${e.target.value}`)
        .then((res) => {
          setSearchCategory(res.data);
        });
    } else {
      setSearchCategory([]);
    }
  };
  useEffect(() => {
    if (response && searchQuery) {
      {/* @ts-expect-error: This */}
      setSearchProduct(response.results && response.results.slice(0, 5));
    }
  }, [searchQuery, response]);
  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalVisible]);

  const handleSearch = () => {};
  return (
    <>
      <div className="hidden lg:flex items-center w-full rounded-xl bg-redPrimary h-[36px] relative">
        <div className="rounded-xl w-full h-full px-2 bg-[#fff] flex items-center border-2 border-redPrimary gap-2">
          <p className="font-medium text-fs_9 lg:text-fs_7">Поиск</p>
          <input
            className="rounded-xl w-full h-full text-darkPrimary focus:outline-none font-medium text-fs_9 lg:text-fs_7 tracking-wide"
            id="search"
            type="text"
            placeholder="(Например: термоноски)"
            onChange={handleInputChange}
            onFocus={() => setModalVisible(true)}
          />
        </div>

        <span>
          <button
            className="text-white rounded-r-lg p-2 focus:outline-none w-auto lg:w-16  h-8 flex items-center justify-center"
            onClick={handleSearch}
          >
            <img src={searchIcon} alt="search-icon" />
          </button>
        </span>
        {modalVisible && (
          <>
            <div className="absolute left-0 max-w-[855px] w-full  bg-[#fff] top-[40px] z-[999] border border-darkSecondary rounded-lg p-6">
              <div className="flex flex-col gap-3  font-medium">
                {isLoading && <Spinner />}
                {searchProduct?.length > 0 ? (
                  searchProduct.map((item) => (
                    <Link
                      onClick={() => setModalVisible(false)}
                      /* @ts-expect-error: This */
                      to={`/category/${item.id}`}
                      className="hover:text-redPrimary text-darkSecondary"
                    >{/* @ts-expect-error: This */}
                      <h2 className="text-fs_6 tracking-wide ">{item?.name}</h2>
                    </Link>
                  ))
                ) : (
                  <h2 className="text-fs_6 text-center tracking-wide text-darkPrimary">
                    Ничего не найдено
                  </h2>
                )}
              </div>
              <div className="w-full h-[1px] bg-lightSecondary my-6"></div>
              <div className=" tracking-wide ">
                <h3 className="font-bold text-fs_8 uppercase">Категории</h3>
                <div className="gift-category container_xxl py-3 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-6 gap-6 ">
                  {searchCategory.map((item) => (
                    <div
                      key={item?.id}
                      className="w-full flex items-center justify-center"
                    >
                      <SearchCategory {...item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              onClick={() => setModalVisible(false)}
              className="bg-[#00000058] w-full h-full top-[120px]  left-0 z-[9] fixed"
            ></div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchModal;
