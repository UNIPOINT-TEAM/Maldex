import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breadcrumbs: [],
};

const breadcrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    addBreadcrumb: (state, action) => {
      state.breadcrumbs.push(action.payload);
    },
    resetBreadcrumbs: (state) => {
      state.breadcrumbs = [];
    },
  },
});

export const { addBreadcrumb, resetBreadcrumbs } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
