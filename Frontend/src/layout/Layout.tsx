import { Outlet } from "react-router-dom";
import {
  Footer,
  Navbar,
  QuestForm,
  RunningText,
  SaleSlider,
} from "../components";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <SaleSlider />
      <main className="w-100">
        <Outlet />
      </main>
      <QuestForm />
      <RunningText />
      <Footer />
    </div>
  );
};

export default Layout;
