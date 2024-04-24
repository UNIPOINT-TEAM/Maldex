import { NavLink, Outlet } from 'react-router-dom';

const sidebarNavLinks = [
  { path: '/print/apply', label: 'Уф печать ' },
  { path: '/engraving', label: 'Гравировка' },
  { path: '/fabric-printing', label: 'Печать по ткани ' },
  // { path: "", label: "Тиснение" },
  // { path: "", label: "Тиснение фольгой" },
  // { path: "", label: "Деколь сублимация" },
  { path: '/print/pad-printing', label: 'Тампопечать' },
  // { path: "", label: "Шильды" },
  // { path: "", label: "Шуберы попсокеты" },
  // { path: "", label: "Дэйджи ленты" },
];

const SidebarPrint = () => {
  return (
    <div className="flex apply-sidebar ">
      <div className="py-5 w-full ">
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
    </div>
  );
};

export default SidebarPrint;
