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
import { DesignEditorProvider } from "./context/DesignEditor";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <Provider store={store}>
      <DesignEditorProvider>
        <RouterProvider router={router}></RouterProvider>
      </DesignEditorProvider>
    </Provider>
  );
}

export default App;
