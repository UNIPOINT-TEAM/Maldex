import { useEffect, useState, useCallback } from "react";
import { debounce } from "lodash";
import searchIcon from "../../assets/images/search.svg";
import SearchCategory from "./SearchCategory";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils";

type Product = {
  id: number;
  name: string;
};

type Category = {
  id: number;
  name: string;
};

const SearchModal = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchCategory, setSearchCategory] = useState<Category[]>([]);
  const [searchProducts, setSearchProducts] = useState<Product[]>([]);

  const debouncedSearch = useCallback(
    debounce(async (searchTerm: string) => {
      if (searchTerm) {
        try {
          const [categoryResponse, productResponse] = await Promise.all([
            axios.get(`${BASE_URL}/product/categories/?search=${searchTerm}`),
            axios.get(`${BASE_URL}/product/?search=${searchTerm}`),
          ]);

          setSearchCategory(categoryResponse.data);
          setSearchProducts(productResponse.data.results.slice(0, 5));
        } catch (error) {
          console.error("Error fetching search results", error);
        }
      } else {
        setSearchCategory([]);
        setSearchProducts([]);
      }
    }, 1000),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    document.body.style.overflow = modalVisible ? "hidden" : "auto";
  }, [modalVisible]);

  return (
    <div className="hidden lg:flex items-center w-full rounded-xl bg-redPrimary h-[36px] relative">
      <div className="rounded-xl w-full h-full px-2 bg-[#fff] flex items-center border-2 border-redPrimary gap-2">
        <p className="font-medium text-fs_9 lg:text-fs_7">Поиск</p>
        <input
          className="rounded-xl w-full h-full text-darkPrimary focus:outline-none font-normal   tracking-wide placeholder:text-fs_8"
          id="search"
          type="text"
          placeholder="(Например: термоноски)"
          onChange={handleInputChange}
          onFocus={() => setModalVisible(true)}
        />
      </div>

      <button
        className="text-white rounded-r-lg p-2 focus:outline-none w-auto lg:w-16 h-8 flex items-center justify-center"
        onClick={() => setModalVisible(true)}
      >
        <img src={searchIcon} alt="search-icon" />
      </button>

      {modalVisible && (
        <>
          <div className="absolute left-0 max-w-[855px] w-full bg-white top-[40px] z-[999] border border-darkSecondary rounded-lg p-6">
            <div className="flex flex-col gap-3 font-medium">
              {searchProducts.length > 0 ? (
                searchProducts.map((product) => (
                  <Link
                    key={product.id}
                    onClick={() => setModalVisible(false)}
                    to={`/category/${product.id}`}
                    className="hover:text-redPrimary text-darkSecondary"
                  >
                    <h2 className="text-fs_6 tracking-wide">{product.name}</h2>
                  </Link>
                ))
              ) : (
                <h2 className="text-fs_6 text-center tracking-wide text-darkPrimary">
                  Ничего не найдено
                </h2>
              )}
            </div>
            <div className="w-full h-[1px] bg-lightSecondary my-6"></div>
            <div className="tracking-wide">
              <h3 className="font-bold text-fs_8 uppercase">Категории</h3>
              <div className="gift-category container_xxl py-3 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-6 gap-6">
                {searchCategory.map((category) => (
                  <div
                    key={category.id}
                    className="w-full flex items-center justify-center"
                  >
                    <SearchCategory {...category} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={() => setModalVisible(false)}
            className="bg-[#00000058] w-full h-full top-[120px] left-0 z-[9] fixed"
          ></div>
        </>
      )}
    </div>
  );
};

export default SearchModal;
