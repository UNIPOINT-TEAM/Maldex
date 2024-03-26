import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
