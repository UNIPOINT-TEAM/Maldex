import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselSlice";

export default configureStore({
  reducer: {
    carousel: carouselReducer,
  },
});
