import { NavLink, Outlet } from "react-router-dom";

const sidebarNavLinks = [
  { path: "apply", label: "Уф печать " },
  { path: "engraving", label: "Гравировка" },
  { path: "fabric-printing", label: "Печать по ткани " },
  // { path: "", label: "Тиснение" },
  // { path: "", label: "Тиснение фольгой" },
  // { path: "", label: "Деколь сублимация" },
  { path: "pad-printing", label: "Тампопечать" },
  // { path: "", label: "Шильды" },
  // { path: "", label: "Шуберы попсокеты" },
  // { path: "", label: "Дэйджи ленты" },
];

const Sidebar = () => {
  return (
    <div className="container_xxl flex apply-sidebar ">
      <div className="py-5 max-w-[20%] w-full ">
        <h2 className="text-[28px]">Категории</h2>
        <div className="sidenavs mt-5">
          {sidebarNavLinks.map((navLink) => (
            <NavLink
              key={navLink.path}
              to={navLink.path}
              className="hover:bg-gray-200 p-2 rounded-md block font-bold"
            >
              {navLink.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="min-w-[80%] py-5 ps-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
