/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import { MoreFilter } from "..";
import SearchModal from "../SearchModal/SearchModal";
import searchIcon from "../../assets/images/search.svg";

import NavbarModal from "./NavbarModal";

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
    <div className=" lg:px-0">
      <header>
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
                <sup className="font-bold text-fs_7">243</sup>
              </Link>
              <Link to={"catalog/?is_hit=true"} className="text-greenPrimary ">
                <span className="underline mr-2">hits</span>
                <sup className="font-bold text-fs_7">243</sup>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
