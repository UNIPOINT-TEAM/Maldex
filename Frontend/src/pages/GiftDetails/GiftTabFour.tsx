import SearchIcon from "../../assets/icons/searchIcon.png";
import MenuIcon from "../../assets/icons/menuIcon.png";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils";
import GiftProductCard from "./GiftProductCard";
import { debounce } from "lodash";
import { MoreFilter } from "../../components";
import { LuListFilter } from "react-icons/lu";
import AddProductCatalog from "./AddProductCatalog";

const FilterBtn: React.FC<{ filterCount: number }> = ({ filterCount }) => {
  return (
    <button className="flex items-center gap-2 border text-darkSecondary border-lightSecondary h-[34px] rounded-lg font-normal px-3">
      <LuListFilter /> Все фильтры {filterCount > 0 && `(${filterCount})`}
    </button>
  );
};
interface TabDescriptionProps {
  setCardSetproduct: React.Dispatch<React.SetStateAction<any>>;
}

const GiftTabFour: React.FC<TabDescriptionProps> = ({ setCardSetproduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/product/`)
      .then((res) => {
        setProducts(res.data.results.slice(0, 20));
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);
  const debouncedSearch = useCallback(
    debounce(async (searchTerm: string) => {
      try {
        setLoading(true);
        const [productResponse] = await Promise.all([
          axios.get(`${BASE_URL}/product/?search=${searchTerm}`),
        ]);
        setProducts(productResponse.data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }, 400),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };
  const handleFilter = (query: string) => {
    console.log(query);
  };
  return (
    <div className="">
      <div>
        <div className="flex mb-5">
          <div className="w-full flex flex-col md:flex-row gap-5 justify-between">
            <div className="w-full md:w-[70%] border border-lightSecondary h-[35px] rounded-lg p-1 flex">
              <div className="h-full w-[30px] flex justify-center items-center">
                <img src={SearchIcon} alt="" />
              </div>
              <input
                className="w-[95%] outline-0 font-normal"
                placeholder="Поиск"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex items-center md:w-[30%] gap-5">
              <div className="">
                <AddProductCatalog
                  setProducts={setProducts}
                  setLoading={setLoading}
                />
              </div>
              <div className="">
                <MoreFilter
                  FilterBtn={<FilterBtn />}
                  type={"ALL_FILTR"}
                  onFilter={handleFilter}
                  presentation={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {products.map((item) => (
          <GiftProductCard
            key={item.id}
            item={item}
            loading={loading}
            setCardSetproduct={setCardSetproduct}
          />
        ))}
      </div>
    </div>
  );
};

export default GiftTabFour;
``;
