/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CART } from "../constants/Cart";

interface CarouselState {
  items: any[];
  status: {
    landscape_visible: boolean;
    standard_visible: boolean;
    prices_visible: boolean;
    sender_visible: boolean;
    codeArticle_visible: boolean;
    characteristic_visible: boolean;
    description_visible: boolean;
    circulationAmount_visible: boolean;
    total_visible: boolean;
  };
  activeCaruselIndex: number;
}

const initialState: CarouselState = {
  items: CART,
  status: {
    landscape_visible: true,
    standard_visible: false,
    prices_visible: true,
    sender_visible: false,
    codeArticle_visible: true,
    characteristic_visible: true,
    description_visible: true,
    circulationAmount_visible: true,
    total_visible: true,
  },
  activeCaruselIndex: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    addItem: (state) => {
      state.items.push({ template: null, background: "", data: {} });
    },
    updateItem: (state, action: PayloadAction<JSX.Element>) => {
      const { activeCaruselIndex } = state;
      state.items[activeCaruselIndex] = action.payload;
    },
    deleteItem: (state) => {
      state.items.splice(state.activeCaruselIndex, 1);
    },
    copyItem: (state, action: PayloadAction<number>) => {
      state.items.splice(
        state.activeCaruselIndex + 1,
        0,
        state.items[action.payload]
      );
    },
    onActiveCarusel: (state, action: PayloadAction<number>) => {
      state.activeCaruselIndex = action.payload;
    },
    clearItems: (state) => {
      state.items = [];
    },
    updateStatus: (state, action: PayloadAction<CarouselState["status"]>) => {
      const { name, isChacked } = action.payload;
      state.status[name] = isChacked;
    },
  },
});

export const {
  addItem,
  deleteItem,
  updateItem,
  onActiveCarusel,
  copyItem,
  updateStatus,
} = carouselSlice.actions;

export default carouselSlice.reducer;
