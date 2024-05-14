/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import { MoreFilter } from "..";
import SearchModal from "../SearchModal/SearchModal";
import searchIcon from "../../assets/images/search.svg";
import NavbarModal from "./NavbarModal";
import { useFetchHook } from "../../hooks/UseFetch";
import { useEffect } from "react";

const Navbar = () => {
  const { fetchData, response } = useFetchHook();
  useEffect(() => {
    fetchData({ method: "GET", url: "product/counts/" });
  }, []);

  return (
    <header className="lg:px-0">
      <Topbar />
      <nav className="container_xxl px-3">
        <div className="flex justify-between items-center py-2 gap-0 lg:gap-5">
          <div className="flex justify-around gap-5 ">
            <NavbarModal />
            <MoreFilter />
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
