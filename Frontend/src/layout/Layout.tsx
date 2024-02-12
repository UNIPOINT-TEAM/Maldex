import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="w-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
