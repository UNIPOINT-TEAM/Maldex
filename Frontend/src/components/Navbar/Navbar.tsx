import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Categories, Product, SubCategories } from "../../mock/data";
// import filtr from "../../assets/icons/filtr.png";
import menu from "../../assets/icons/menu.png";
import Topbar from "./Topbar";
import { MoreFilter } from "..";
import { useFetchHook } from "../../hooks/UseFetch";
import SearchModal from "../SearchModal/SearchModal";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState(false);
  const [activeCategoryItem, setActiveCategoryItem] = useState<number | null>(
    null
  );
  const navigation = useNavigate();
  const handleCategoryClick = (id: number) => setActiveItem(id);
  const handleCategoryItemClick = (id: number) => setActiveCategoryItem(id);
// @ts-ignore
  const [filter, setFilter] = useState(false);
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "/product/categories/" });
  }, []);

  console.log(response);

  const modalToggle = () => {
    setModal(!modal);
    if (modal !== true) {
      setActiveItem(null);
      setActiveCategoryItem(null);
    }
  };

  const changeMobileModal = () => {
    setActiveMobileItem(!activeMobileItem);
  };

  const productDetail = () => {
    setModal(false);
    navigation("category/1");
  };

  return (
    <div className="relative">
      <header>
        <Topbar />
        <nav className="container_xxl ">
          <div className="flex justify-between items-center py-2 gap-3 lg:gap-5">
            <div className="flex justify-around gap-5">
              <button
                onClick={modalToggle}
                className="px-3 h-[36px] w-auto lg:w-[125px] bg-redPrimary rounded-lg flex items-center gap-2"
              >
                <img src={menu} alt="bars-btn" className="min-w-[17px]" />
                <span className="text-white tracking-widest hidden lg:block font-helvetica-neue">
                  Каталог
                </span>
              </button>
              <MoreFilter />
            </div>
            <SearchModal />
            <div className="items-center justify-between text-fs_3 gap-5 hidden md:flex font-medium">
              <Link to={"category/1"} className="text-redPrimary ">
                <span className="underline mr-2">new</span>
                <sup className="font-bold text-fs_7">243</sup>
              </Link>
              <div className="text-greenPrimary">
                <span className="underline mr-2">hits</span>
                <sup className="font-bold text-fs_7">243</sup>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {modal ? (
        <>
          <div className="modal absolute h-[115vh] w-full  bg-[#00000074] z-20  hidden md:flex">
            <div className="w-[25%] bg-white px-3 py-1">
              {Categories.map((i) => (
                <div
                  className={`w-[50%] flex p-1.5 gap-2 items-center hover:bg-red-300 hover:text-white rounded ${
                    activeItem === i.id
                      ? "bg-redPrimary text-white"
                      : "hover:bg-redPrimary hover:text-white"
                  }`}
                  onClick={() => handleCategoryClick(i.id)}
                >
                  <i className="fa-solid fa-pen-fancy"></i>
                  <p className="text-lg font-bold">{i.name}</p>
                </div>
              ))}
            </div>
            {activeItem !== null ? (
              <div className="w-[35%] bg-[#fff] px-3 py-1 flex flex-wrap overflow-y-scroll scrollbar-custom">
                {SubCategories.map((i) => (
                  <div
                    key={i.id}
                    className={`w-1/2 p-1.5 gap-2  items-center `}
                  >
                    <p className="text-lg font-bold mb-1">{i.categoryName}</p>
                    <div>
                      {i.categoryItem.map((category) => (
                        <p
                          className={`text-sm font-bold mb-1 hover:text-red-400 cursor-pointer ${
                            activeCategoryItem === category.id
                              ? "text-redPrimary"
                              : ""
                          }`}
                          onClick={() => handleCategoryItemClick(category.id)}
                        >
                          {category.name}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {activeCategoryItem !== null ? (
              <div className="w-[40%] bg-gray-200 h-[115vh] px-3 py-1 flex">
                <div className="h-full w-1/2 flex flex-col">
                  <div
                    onClick={productDetail}
                    className="w-full h-[60%] bg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer"
                  >
                    <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                      {Product[0].name}
                    </p>
                    <img src={Product[0].img} alt="" />
                    <div className="w-full absolute bottom-5 right-5">
                      <button className="float-end">
                        <button className="py-1 px-3 rounded bg-slate-100 btnProductCatalog">
                          <i className="fa-solid fa-arrow-right text-slate-100 rotate-45 text-2xl iconProductCatalog"></i>
                        </button>
                      </button>
                    </div>
                  </div>
                  <div
                    onClick={productDetail}
                    className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer"
                  >
                    <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                      {Product[3].name}
                    </p>
                    <img
                      className="w-[60%] h-[60%] object-contain"
                      src={Product[3].img}
                      alt=""
                    />
                    <div className="w-full absolute bottom-5 right-5">
                      <button className="float-end">
                        <button className="py-1 px-3 rounded bg-slate-100 btnProductCatalog">
                          <i className="fa-solid fa-arrow-right text-slate-100 rotate-45 text-2xl iconProductCatalog cursor-pointer"></i>
                        </button>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-full w-1/2 flex flex-col">
                  <div
                    onClick={productDetail}
                    className="w-full h-[30%]  hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer"
                  >
                    <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                      {Product[2].name}
                    </p>
                    <img
                      className="w-[60%] h-[60%] object-contain"
                      src={Product[2].img}
                      alt=""
                    />
                    <div className="w-full absolute bottom-5 right-5">
                      <button className="float-end">
                        <button className="py-1 px-3 rounded bg-slate-100 btnProductCatalog">
                          <i className="fa-solid fa-arrow-right text-slate-100 rotate-45 text-2xl iconProductCatalog"></i>
                        </button>
                      </button>
                    </div>
                  </div>
                  <div
                    onClick={productDetail}
                    className="w-full h-[30%] bbg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer"
                  >
                    <p className="absolute top-5 left-5 text-lg nameProductCatalog text-slate-100">
                      {Product[1].name}
                    </p>
                    <img
                      className="w-[50%] h-[50%]"
                      src={Product[1].img}
                      alt=""
                    />
                    <div className="w-full absolute bottom-5 right-5">
                      <button className="float-end">
                        <button className="py-1 px-3 rounded bg-slate-100 btnProductCatalog">
                          <i className="fa-solid fa-arrow-right text-slate-100 rotate-45 text-2xl iconProductCatalog"></i>
                        </button>
                      </button>
                    </div>
                  </div>
                  <Link
                    onClick={modalToggle}
                    to={"/catalog"}
                    className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] p-4 flex flex-col justify-between cursor-pointer"
                  >
                    <div className="text-start">
                      <p className="text-2xl font-bold text-redPrimary">
                        просмотреть <br /> все <br /> продукты
                      </p>
                    </div>
                    <div className="w-full">
                      <button className="float-end">
                        <i className="fa-solid fa-arrow-right text-redPrimary rotate-45 text-2xl"></i>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="md:hidden absolute h-[115vh] w-full  bg-[#00000074] z-20">
            <div className={`w-full bg-white py-1 flex items-start`}>
              <div className={`w-[${activeMobileItem ? "10%" : "100%"}]`}>
                {Categories.map((i) => (
                  <div className={`flex`}>
                    <button
                      onClick={changeMobileModal}
                      className={`w-full
                                    } flex p-3 gap-2 items-center hover:text-white h-[40px] ${
                                      activeItem === i.id
                                        ? "bg-redPrimary text-white"
                                        : "hover:bg-redPrimary hover:text-white"
                                    }`}
                    >
                      <i className="fa-solid fa-pen-fancy"></i>
                      {!activeMobileItem && (
                        <p className="text-lg font-bold">{i.name}</p>
                      )}
                    </button>
                  </div>
                ))}
              </div>
              <div className={`${activeMobileItem ? "w-[90%]" : "hidden"}`}>
                {SubCategories.map((i) => (
                  <div key={i.id} className={`w-1/2 px-3 gap-2  items-center `}>
                    <p className="text-lg font-bold mb-1">{i.categoryName}</p>
                    <div>
                      {i.categoryItem.map((category) => (
                        <p
                          className={`text-sm font-bold mb-1 ${
                            activeCategoryItem === category.id
                              ? "text-redPrimary"
                              : ""
                          }`}
                          onClick={() => handleCategoryItemClick(category.id)}
                        >
                          {category.name}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
