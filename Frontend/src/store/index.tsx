import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselReducer";
import cartSlice from "./cartSlice";
import breadcrumbReducer from "./breadcrumbSlice";
import filterSlice from "./filterSlice";

export default configureStore({
  reducer: {
    carousel: carouselReducer,
    cart: cartSlice,
    breadcrumbs: breadcrumbReducer,
    filter: filterSlice,
  },
});
