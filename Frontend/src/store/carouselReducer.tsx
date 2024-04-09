import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarouselState {
  items: JSX.Element[];
}

const initialState: CarouselState = {
  items: [],
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    pushItem: (state, action: PayloadAction<JSX.Element>) => {
      state.items.push(action.payload);
    },
  },
});

export const { pushItem } = carouselSlice.actions;

export default carouselSlice.reducer;
