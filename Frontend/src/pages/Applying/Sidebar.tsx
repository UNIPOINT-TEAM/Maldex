import { NavLink, Outlet } from "react-router-dom";
import { useFetchHook } from "../../hooks/UseFetch";
import { useEffect, useState } from "react";
import Filtr from "../../assets/icons/filtr.svg";

const Sidebar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const { fetchData: fetchPrinting, response: responsePrint } = useFetchHook();
  useEffect(() => {
    fetchPrinting({
      method: "GET",
      url: `/print-categories/`,
    });
  }, []);

  const handleToggleCategory = () => setIsCategoryOpen(!isCategoryOpen);

  return (
    <div className="container_xxl flex apply-sidebar flex-col md:flex-row">
      <div
        className={`bg-[#ffff] sticky top-0  z-[99] h-screen md:static w-full ${
          isCategoryOpen ? "block" : "hidden md:block"
        }`}
      >
        <div
          className={` md:py-5 w-full md:min-w-[280px] px-3   overflow-y-scroll max-h-[80vh]  `}
        >
          <h2 className="text-[28px]">Категории</h2>
          <div className="sidenavs mt-5">
            {responsePrint.map((print) => (
              <NavLink
                onClick={() => setIsCategoryOpen(false)}
                key={print.id}
                to={`/applying-type/${print.id}`}
                className="hover:bg-gray-200 p-2 rounded-md block font-bold"
              >
                {print.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:min-w-[80%] py-5 md:ps-10">
        <button
          onClick={handleToggleCategory}
          className="p-[10px] md:hidden text-base mb-3 font-medium flex gap-2 items-center capitalize rounded-md border border-darkPrimary mx-2"
        >
          категории
          <img src={Filtr} alt="filtr-icon" className="mx-auto" />
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
