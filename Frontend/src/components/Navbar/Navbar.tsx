<<<<<<< HEAD
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
=======
import logo from "../../assets/images/logo.png";
import search from "../../assets/images/search.svg";
import mobile from "../../assets/icons/mobile.svg";
import mail from "../../assets/icons/mail.svg";
import location from "../../assets/icons/location.svg";
import filtr from "../../assets/icons/filtr.png";
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
          <div className="flex items-center">
            <img src={logo} className="mr-5" />

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

              <div className="flex items-center">
                <img src={location} className="mr-2" />
                <span className="text-darkPrimary text-fs_8 tracking-wider font-bold">
                  Москва
                </span>
              </div>
            </div>
          </div>

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
        </div>
      </nav>

      <nav className="container_xxl ">
        <div className="flex justify-between items-center py-2  gap-14 mx-10">
          <div className=" flex justify-around gap-5 ">
            <button className="px-3 py-1 bg-redPrimary text-white focus:outline-none rounded-lg">
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
>>>>>>> bf64a73 (navbar100)
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
