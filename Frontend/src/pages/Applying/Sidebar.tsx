import { NavLink, Outlet } from "react-router-dom";

const sidebarNavLinks = [
  { path: "apply", label: "Уф печать " },
  { path: "engraving", label: "Гравировка" },
  { path: "fabric-printing", label: "Печать по ткани " },
  { path: "thermal-transfer", label: "Термотрансфер" },
  { path: "", label: "Шелкография" },
  { path: "", label: "ДТФ печать" },
  { path: "", label: "Тиснение" },
  { path: "", label: "Тиснение фольгой" },
  { path: "", label: "Деколь сублимация" },
  { path: "", label: "Вышивка" },
  { path: "", label: "Шильды" },
  { path: "", label: "Шуберы попсокеты" },
  { path: "", label: "Дэйджи ленты" },
];

const Sidebar = () => {
  return (
    <div className="container_xxl flex ">
      <div className="py-5 w-[300px]">
        <h2 className="text-[28px]">Категории</h2>
        <div className="sidenavs mt-5">
          {sidebarNavLinks.map((navLink) => (
            <NavLink
              key={navLink.path}
              to={navLink.path}
              className="hover:bg-gray-200 p-2 rounded-md block"
            >
              {navLink.label}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full py-5 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
