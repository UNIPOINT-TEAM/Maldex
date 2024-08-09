import { useEffect, useState } from "react";
import { useFetchHook } from "../../hooks/UseFetch";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { TfiMenu } from "react-icons/tfi";
interface IProps {
  setProducts: any;
  setLoading?: any;
}
const AddProductCatalog: React.FC<IProps> = ({ setProducts, setLoading }) => {
  const [isOpen, setisOpen] = useState<boolean>();
  const { fetchData, response } = useFetchHook();
  const [subCategory, setSubCategory] = useState([]);
  const [showSubCategory, setShowSubCategory] = useState<boolean>(false);

  useEffect(() => {
    fetchData({ method: "GET", url: "/product/categories/?is_available=true" });
  }, []);
  const handleAddFilter = (query: string) => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/product/${query}`)
      .then((res) => {
        setProducts(res.data.results);
        console.log(res.data.results);
      })
      .finally(() => setLoading(false));
    setShowSubCategory(false);
    setisOpen(false);
  };

  const handleSubCategory = (id: number) => {
    const activeCategory = response.find((i) => i?.id === Number(id));
    setSubCategory(activeCategory?.children);
    setShowSubCategory(true);
  };

  return (
    <>
      <button
        onClick={() => setisOpen(!isOpen)}
        className="flex items-center gap-2 border text-darkSecondary border-lightSecondary h-[34px] rounded-lg font-normal px-3"
      >
        <TfiMenu /> Каталог
      </button>
      {isOpen && (
        <>
          <div className="">
            <div className="w-[300px] shadow-md shadow-blue-gray-100 top-14 right-0 z-[9999]  absolute bg-[#fff] border ms-5">
              <div className="w-full py-3 px-3 flex flex-col items-start ">
                {response.map((i) => (
                  <button
                    key={i?.id}
                    onClick={() => handleSubCategory(i?.id)}
                    className={`flex p-1.5 gap-[15px] w-full items-center rounded-[8px] mb-[15px] px-3`}
                  >
                    <img className="w-[24px] h-[24px]" src={i?.icon} alt="" />
                    <p className="text-fs_7 font-medium tracking-wide text-darkSecondary hover:text-darkPrimary">
                      {i?.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
            {showSubCategory && (
              <div className="w-[250px]  top-36 right-[300px] z-20 absolute bg-[#fff] border ms-5">
                <div className="w-full py-3 px-3 flex flex-col items-start ">
                  {subCategory.map((item) => (
                    <h3
                      key={item?.id}
                      onClick={() =>
                        handleAddFilter(`?category_id=${item?.id}`)
                      }
                      className="text-fs_7 font-medium py-1 tracking-wide text-darkPrimary cursor-pointer"
                    >
                      {item?.name}
                    </h3>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => setisOpen(false)}
            className="w-full top-0 left-0 z-10 h-full fixed"
          ></div>
        </>
      )}
    </>
  );
};

export default AddProductCatalog;
