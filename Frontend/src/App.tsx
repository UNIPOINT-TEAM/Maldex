import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import { router } from "./routes/routes";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
