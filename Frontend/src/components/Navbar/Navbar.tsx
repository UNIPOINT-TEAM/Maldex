<<<<<<< HEAD
<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
=======
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// @ts-ignore
import { Categories, Product, SubCategories } from "../../mock/data";
// import filtr from "../../assets/icons/filtr.png";
import menu from "../../assets/icons/menu.png";
>>>>>>> db87467 (restart branch 3)
import Topbar from "./Topbar";
import { MoreFilter } from "..";
import SearchModal from "../SearchModal/SearchModal";
import searchIcon from "../../assets/images/search.svg";
import NavbarModal from "./NavbarModal";
import { useFetchHook } from "../../hooks/UseFetch";
import { useEffect } from "react";
import Filtr from "../../assets/icons/filtr.svg";
const FiltrBtn = () => {
  return (
    <>
      <div className="w-[30px] px-2  h-[34px] flex items-center rounded-[6px] border border-darkPrimary">
        <img src={Filtr} alt="filtr-icon" className="mx-auto" />
      </div>
      <div className=" hidden md:block w-[70px] h-[30px] border border-gray-400 z-50 absolute bg-white rounded-lg shadow-md top-[45px] left-0 filter-opac">
        <span className="w-[20px] h-[20px] bg-white border border-gray-400 rotate-45 top-[-4px] left-[5px] absolute"></span>
        <div className="absolute w-full h-full bg-white rounded-lg flex justify-center items-center ">
          <p className="text-[12px]">Фильтры</p>
        </div>
      </div>
    </>
  );
};
=======
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import mobile from "../../assets/icons/mobile.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import filtr from "../../assets/icons/filtr.png";
<<<<<<< HEAD
>>>>>>> bf64a73 (navbar100)

const Navbar = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "product/counts/" });
  }, []);

  return (
<<<<<<< HEAD
    <header className="lg:px-0">
      <Topbar />
      <nav className="container_xxl px-3">
        <div className="flex justify-between items-center py-2 gap-0 lg:gap-5">
          <div className="flex justify-around gap-5 ">
            <NavbarModal />
            <MoreFilter FilterBtn={<FiltrBtn />} type={"LESS_FILTER"} />
          </div>
          <SearchModal />
          <div className="flex lg:hidden items-center w-full rounded-xl bg-redPrimary h-[36px] relative">
            <div className="rounded-xl w-full h-full px-2 bg-[#fff] flex items-center border-2 border-redPrimary gap-2">
              <p className="font-medium text-fs_9">Поиск</p>
              <input
                className="rounded-xl w-full h-full text-darkPrimary focus:outline-none font-medium text-fs_9 tracking-wide"
                id="search"
                type="text"
                placeholder="(Например: термоноски)"
              />
            </div>
            <span>
              <button className="text-white rounded-r-lg p-2 focus:outline-none w-auto lg:w-16  h-8 flex items-center justify-center">
                <img src={searchIcon} alt="search-icon" />
              </button>
            </span>
          </div>
          <div className="items-center justify-between text-fs_3 gap-5 hidden md:flex font-medium">
            <Link to={"catalog/?is_new=true"} className="text-redPrimary ">
              <span className="underline mr-2">new</span>
              {/* @ts-expect-error: This */}
              <sup className="font-bold text-fs_7">{response?.new}</sup>
            </Link>
            <Link to={"catalog/?is_hit=true"} className="text-greenPrimary ">
              <span className="underline mr-2">hits</span>
              {/* @ts-expect-error: This */}
              <sup className="font-bold text-fs_7">{response?.hit}</sup>
            </Link>
          </div>
=======
    <header className="">
      <nav className="   border-b border-gray-300">
        {/* Logo and Contact Info */}
        <div className="container_xxl py-4 px-10 flex justify-between items-center">
=======
import { useState } from "react";
import { Categories, Product, SubCategories } from "../../mock/data";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [activeCategoryItem, setActiveCategoryItem] = useState(null);

  const modalToggle = () => {
    setModal(!modal);
    if (modal !== true) {
      setActiveItem(null);
      setActiveCategoryItem(null);
    }
  };
  //@ts-ignore
  const handleCategoryClick = (id: number) => {
    //@ts-ignore
    setActiveItem(id);
  };
  const handleCategoryItemClick = (id: number) => {
    //@ts-ignore
    setActiveCategoryItem(id);
  };

  return (
    <div className="relative">
      <header className="container_xxl">
        <nav className="py-4 px-10 flex justify-between items-center  border-b border-gray-300">
          {/* Logo and Contact Info */}
>>>>>>> 89fc5ef (product card 20% _ gift page 10%)
          <div className="flex items-center">
            <img src={logo} alt="maldex-logo" className="mr-5" />

            <div className="flex items-center gap-5">
              <div className="flex items-center">
                <img src={mobile} className="mr-2" />
                <span className="text-darkPrimary text-fs_8 tracking-wider font-bold ">
                  8-800-333-6784
                </span>
              </div>

              <div className="flex items-center">
                <img src={mail} className="mr-2" />
                <span className="text-darkPrimary text-fs_8 tracking-wider font-bold">
                  info@madex.ru
                </span>
              </div>

<<<<<<< HEAD
              <div className="flex items-center">
                <img src={location} className="mr-2" />
                <span className="text-darkPrimary text-fs_8 tracking-wider font-bold">
                  Москва
                </span>
              </div>
            </div>
          </div>
=======
    return (
        <div className="relative">
            <header>
                <Topbar />
                <nav className="container_xxl ">
                    <div className="flex justify-between items-center py-2 px-3 gap-3 lg:gap-5">
                        <div className="flex justify-around gap-5">
                            <button
                                onClick={modalToggle}
                                className="px-3 h-[36px] w-auto lg:w-[125px] bg-redPrimary rounded-lg flex items-center gap-2"
                            >
                                <img
                                    src={menu}
                                    alt="bars-btn"
                                    className="min-w-[17px]"
                                />
                                <span className="text-white tracking-widest hidden lg:block font-helvetica-neue">
                                    Каталог
                                </span>
                            </button>
                            <MoreFilter />
                        </div>
                        <SearchModal />
                        <div className="items-center justify-between text-fs_3 gap-5 hidden md:flex font-medium">
                            <Link
                                to={"category/1"}
                                className="text-redPrimary "
                            >
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
>>>>>>> db87467 (restart branch 3)

          {/* City and Minimum Order Info */}
          <div className="text-darkSecondary hidden md:block">
            <span className="ml-4">Минимальный тираж от 30 шт.</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-darkPrimary text-fs_8 tracking-wider font-bold hover:text-redPrimary px-2"
            >
              Доставка
            </a>
            <a
              href="#"
              className="text-darkPrimary text-fs_8 tracking-wider font-bold hover:text-redPrimary px-2"
            >
              Оплата
            </a>
            <a
              href="#"
              className="text-darkPrimary text-fs_8 tracking-wider font-bold hover:text-redPrimary px-2"
            >
              Контакты
            </a>

            {/* Shopping Cart */}
            <div className=" ml-4 flex items-center bg-white w-[118px] h-[36px] rounded-full">
              <span className=" bg-redPrimary text-white text-fs_8 h-[36px] w-[38px] rounded-full text-center ">
                <div className="py-2">3</div>
              </span>
              <span className="text-darkPrimary text-fs_8 font-bold ml-1">14 619,00 ₽</span>
            </div>
          </div>
        </nav>
        <nav className="container_xxl ">
        <div className="flex justify-between items-center py-2  gap-14 mx-10">
          <div className=" flex justify-around gap-5 ">
            <button onClick={modalToggle} className="px-3 py-1 bg-redPrimary text-white focus:outline-none rounded-lg">
              ☰ Каталог
            </button>
            <button className="px-2 py-0 text-darkSecondary focus:outline-none border border-gray-300 rounded-lg">
              <img src={filtr} alt="" />
            </button>
          </div>

          <div className="inline-flex w-[900px]">
            <input
              className="rounded-l-lg  border-[2px] border-redPrimary py-1 px-2 w-[100%]  text-darkSecondary leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Поиск (Например: термоноски)"
            />
            <span>
              <button className="bg-redPrimary text-white rounded-r-lg p-2 focus:outline-none w-16   h-8 flex items-center justify-center">
                <img src={search} alt="" />
              </button>
            </span>
          </div>

          <div className="flex items-center justify-between text-[24px]  gap-5">
            <div>
              <span className="text-redPrimary font-semibold underline mr-2">
                new
              </span>
              <sup className="text-redPrimary font-bold text-fs_7">243</sup>
            </div>
            <div>
              <span className="text-greenPrimary font-semibold underline mr-2">
                hits
              </span>
              <sup className="text-greenPrimary font-bold text-fs_7">243</sup>
            </div>
          </div>
<<<<<<< HEAD
>>>>>>> bf64a73 (navbar100)
=======
          </div>
        </nav>
      </header>
      {modal ? (
        <div className="modal absolute h-[115vh] w-full  bg-[#00000074] z-20 flex">
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
            <div className="w-[35%] bg-[#fff]  px-3 py-1 flex flex-wrap overflow-y-scroll scrollbar-custom">
              {SubCategories.map((i) => (
                <div key={i.id} className={`w-1/2 p-1.5 gap-2  items-center `}>
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
                <div className="w-full h-[60%] bg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer">
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
                <div className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer">
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
                <div className="w-full h-[30%]  hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer">
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
                <div className="w-full h-[30%] bbg-slate-100 hover:bg-[#fff] flex justify-center items-center relative productCatalog cursor-pointer">
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
                <div className="w-full h-[30%] bg-slate-100 hover:bg-[#fff] p-4 flex flex-col justify-between cursor-pointer">
                  <p className="text-2xl font-bold text-redPrimary">
                    просмотреть <br /> все <br /> продукты
                  </p>
                  <div className="w-full">
                    <button className="float-end">
                      <i className="fa-solid fa-arrow-right text-redPrimary rotate-45 text-2xl"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
>>>>>>> 89fc5ef (product card 20% _ gift page 10%)
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
