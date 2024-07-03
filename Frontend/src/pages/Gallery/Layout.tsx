import { LuListFilter } from "react-icons/lu";
import { debounce } from "lodash";
import { LayoutSideCard, MoreFilter } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { addNewFilledItem, updateItem } from "../../store/carouselReducer";
import DefaultTemplate from "../../components/GalleryLayoutTemplate/DefaultTemplate";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils";
import AddProductModal from "../../components/Gallery/AddProductModal";
import CombineTemplate from "../../components/GalleryLayoutTemplate/CombineTemplate";

const FilterBtn: React.FC<{ filterCount?: number }> = ({ filterCount }) => {
  return (
    <button className="flex items-center gap-2 border text-darkSecondary border-lightSecondary h-[34px] rounded-lg font-normal px-3">
      Все фильтры {filterCount > 0 && `(${filterCount})`}
      <LuListFilter />
    </button>
  );
};
const Layout = () => {
  const { ref, items, activeCaruselIndex } = useSelector(
    (state) => state.carousel
  );
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [combine, setCombine] = useState(false);
  const [combineSellectItem, setCombineSellectItem] = useState(null);

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
        const [productResponse] = await Promise.all([
          axios.get(`${BASE_URL}/product/?search=${searchTerm}`),
        ]);

        setProducts(productResponse.data.results);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    }, 200),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const handleFilter = (query: string) => {
    axios.get(`${BASE_URL}/product/${query}`).then((res) => {
      setProducts(res.data.results);
    });
  };

  const addNewItem = async (item: any) => {
    if (combine) {
      setCombineSellectItem(item);
    } else {
      await dispatch(
        addNewFilledItem({
          data: { ...item, quantity: 1, totalPrice: item.price },
          template: <DefaultTemplate />,
          background: {
            color: "",
            image: "",
            allSlider: false,
            currentSlide: true,
          },
        })
      );
      const lastIndex = items.length;
      if (ref?.current) {
        await ref.current?.swiper?.slideTo(lastIndex);
      }
    }
  };
  console.log(items[activeCaruselIndex]);
  const handleCombine = () => {
    // setCombine(false);
    // setCombineSellectItem(null);
    const combineItem = {
      data: [items[activeCaruselIndex].data, combineSellectItem],
      template: <CombineTemplate />,
    };
    dispatch(updateItem(combineItem));
  };
  return (
    <div className="px-5 relative py-3 h-full min-h-screen  border-0 border-r border-lightSecondary">
      <div className="heading">
        <div className="border text-darkSecondary text-[9px] font-bold border-lightSecondary rounded-lg px-3 py-2 flex justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setCombine((prev) => !prev)}
              className={`border px-[14px] py-2 uppercase rounded-lg ${
                combine
                  ? "border-redPrimary text-redPrimary"
                  : "border-darkSecondary text-darkSecondary"
              }`}
            >
              объединить
            </button>
            <AddProductModal setProducts={setProducts} />
          </div>
          <button className="border px-[14px] py-2 border-darkSecondary uppercase rounded-lg">
            сохранить
          </button>
        </div>
        <div className="grid grid-cols-5">
          <div className="pt-2 col-span-3 relative text-darkSecondary">
            <input
              className="border text-base  border-lightSecondary  placeholder:text-darkSecondary h-[34px] ps-8  rounded-lg font-normal focus:outline-none"
              name="search"
              placeholder="Поиск"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="absolute left-0 top-0 mt-[17px] ps-3 "
            >
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
          <div className="col-span-2  pt-2 flex items-center justify-end">
            <MoreFilter
              FilterBtn={<FilterBtn />}
              type={"ALL_FILTR"}
              onFilter={handleFilter}
              presentation={true}
            />
          </div>
        </div>
      </div>
      <div className="body grid grid-cols-2 gap-y-8 mt-4 overflow-y-auto ">
        {products?.map((item, index) => (
          <div
            className={`flex  items-center justify-center`}
            onClick={() => addNewItem(item)}
            key={index}
          >
            <LayoutSideCard
              onCombine={handleCombine}
              {...item}
              loading={loading}
              combine={combine}
              combineSellectItem={combineSellectItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
