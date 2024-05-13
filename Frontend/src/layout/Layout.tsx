import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar, RunningText, SaleSlider } from "../components";
import { useEffect } from "react";

const Layout = () => {
  const { location } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
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
