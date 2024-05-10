import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselReducer";
import cartSlice from "./cartSlice";
export default configureStore({
  reducer: {
    carousel: carouselReducer,
    cart: cartSlice,
  },
});
