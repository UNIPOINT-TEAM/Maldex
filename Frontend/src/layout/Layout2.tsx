import { Outlet } from "react-router-dom";
import { Navbar, SaleSlider } from "../components";

const Layout2 = () => {
  return (
    <div className="font-Helvetica-Neue">
      <Navbar />
      <SaleSlider />
      <main className="w-100 container_xxl">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout2;
