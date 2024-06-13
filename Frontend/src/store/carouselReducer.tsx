/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import DefaultTemplate from "../components/GalleryLayoutTemplate/DefaultTemplate";
import PdfDefault from "../components/GalleryLayoutTemplate/PdfTemplate/DefaultTemplate";
const products = JSON.parse(localStorage.getItem("cart") || "[]");

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
  items:
    products.map((product) => ({
      data: product,
      template: <DefaultTemplate />,
      pdfTemplate: <PdfDefault />,
      background: {
        color: "",
        image: "",
        currentSlide: true,
        allSlider: false,
      },
      applying: {
        image: "",
      },
    })) || [],
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
      state.items.push({
        template: null,
        background: "",
        data: {
          name: "",
          price: "",
          circulation: "",
          total: "",
          description: "",
          characteristics: {
            vendor_code: "",
            size: "",
            material: "",
            width: "",
            available_application: "",
          },
          image: "",
        },
      });
    },
    updateItem: (state, action: PayloadAction<any>) => {
      const { activeCaruselIndex } = state;
      const { background } = action.payload;
      state.items[activeCaruselIndex] = action.payload;
      if (background?.allSlider) {
        state.items.forEach((item) => {
          item.background = { ...background };
        });
      } else {
        state.items[activeCaruselIndex].background = { ...background };
      }
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
    clearItems: (state) => {
      state.items = [];
    },
    updateTemplate: (state, action: PayloadAction<JSX.Element>) => {
      const { activeCaruselIndex } = state;
      state.items[activeCaruselIndex].template = action.payload;
    },
    onActiveCarusel: (state, action: PayloadAction<number>) => {
      state.activeCaruselIndex = action.payload;
    },
    updateStatus: (
      state,
      action: PayloadAction<{
        name: keyof CarouselState["status"];
        isChacked: boolean;
      }>
    ) => {
      const { name, isChacked } = action.payload;
      state.status[name] = isChacked;
    },
  },
});

export const {
  addItem,
  deleteItem,
  updateTemplate,
  onActiveCarusel,
  copyItem,
  updateStatus,
  updateItem,
  clearItems,
} = carouselSlice.actions;

export default carouselSlice.reducer;
