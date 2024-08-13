/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CarouselState {
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
  ref: any;
}

const initialState: CarouselState = {
  items: [],
  status: {
    landscape_visible: false,
    standard_visible: true,
    prices_visible: true,
    sender_visible: false,
    codeArticle_visible: true,
    characteristic_visible: true,
    description_visible: true,
    circulationAmount_visible: true,
    total_visible: true,
  },
  activeCaruselIndex: 0,
  ref: null,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload;
    },
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
    addNewFilledItem: (state, action: PayloadAction<any>) => {
      state.items.push(action.payload);
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
    getSlideRef: (state, action: PayloadAction<any>) => {
      state.ref = action.payload;
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
  getItems,
  addNewFilledItem,
  getSlideRef,
} = carouselSlice.actions;

export default carouselSlice.reducer;
