/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
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

const Navbar = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "product/counts/" });
  }, []);

  return (
    <header className="lg:px-0">
      <Topbar />
      <nav className="container_xxl px-3 flex items-center  my-2">
        <div className="flex justify-between  items-center py-2 gap-0 lg:gap-5 w-full">
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
          <div className="items-center justify-between text-fs_3 gap-5 hidden md:flex font-normal">
            <Link
              to={"catalog/?is_new=true"}
              className="text-redPrimary an_btn"
            >
              <span className="border-b-2 border-redPrimary mr-2 text-fs_3">
                new
              </span>
              <sup className="font-light text-fs_6">{response?.new}</sup>
            </Link>
            <Link
              to={"catalog/?is_hit=true"}
              className="text-greenPrimary  an_btn"
            >
              <span className="border-b-2 border-greenPrimary mr-2">hits</span>
              <sup className="font-light text-fs_6">{response?.hit}</sup>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
