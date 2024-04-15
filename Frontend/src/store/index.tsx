import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselReducer";
export default configureStore({
  reducer: {
    carousel: carouselReducer,
  },
});
