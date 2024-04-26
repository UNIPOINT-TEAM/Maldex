import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarouselState {
  items: JSX.Element[];
  status: {
    landscape: boolean;
    standard: boolean;
    prices: boolean;
    sender: boolean;
    codeArticle: boolean;
    characteristic: boolean;
    description: boolean;
    circulationAmount: boolean;
    total: boolean;
  };
  activeCaruselIndex: number;
}

const initialState: CarouselState = {
  items: [{}],
  status: {
    landscape: false,
    standard: false,
    prices: false,
    sender: false,
    codeArticle: false,
    characteristic: false,
    description: false,
    circulationAmount: false,
    total: false,
  },
  activeCaruselIndex: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    addItem: (state) => {
      state.items.push({});
    },
    updateItem: (state, action: PayloadAction<JSX.Element>) => {
      state.items[state.activeCaruselIndex] = action.payload;
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
