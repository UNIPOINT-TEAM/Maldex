import { Outlet } from "react-router-dom";
import { Footer, Navbar, RunningText, SaleSlider } from "../components";

const Layout = () => {
  return (
    <div className="font-Helvetica-Neue">
      <Navbar />
      <SaleSlider />
      <main className="w-100">
        <Outlet />
      </main>
      <RunningText />
      <Footer />
    </div>
  );
};

export default Layout;
