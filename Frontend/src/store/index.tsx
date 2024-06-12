import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselReducer";
import cartSlice from "./cartSlice";
import breadcrumbReducer from "./breadcrumbSlice";
export default configureStore({
  reducer: {
    carousel: carouselReducer,
    cart: cartSlice,
    breadcrumbs: breadcrumbReducer,
  },
});
