import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { DesignEditorProvider } from "./context/DesignEditor";
import { Provider as ScenifyProvider } from "@layerhub-io/react";
import { Provider } from "react-redux";
import { router } from "./routes/routes";
import store from "./store";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <Provider store={store}>
      <DesignEditorProvider>
        <ScenifyProvider>
          <RouterProvider router={router}></RouterProvider>
        </ScenifyProvider>
      </DesignEditorProvider>
    </Provider>
  );
}

export default App;
