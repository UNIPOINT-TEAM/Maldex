// src/redux/slices/filterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  materials: {},
  brands: {},
  colors: "",
  size: "",
  price: {
    min_price: "",
    max_price: "",
  },
  location: "",
  quantity: null,
  gender: "",
  print_type: "",
};
const removeNestedProperty = (obj, keyToRemove) => {
  const { [keyToRemove]: removed, ...rest } = obj;
  return rest;
};
const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilterState,
  reducers: {
    setFilterData(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilters(state) {
      return initialFilterState;
    },
    
    deleteFilter(state, action) {
      const { filterCategory, filterKey } = action.payload;
      if (filterKey) {
        if (state[filterCategory]) {
          const { [filterKey]: removed, ...rest } = state[filterCategory];
          return {
            ...state,
            [filterCategory]: rest,
          };
        }
      } else {
        const { [filterCategory]: removed, ...rest } = state;
        return rest;
      }
    },
  },
});

export const { setFilterData, resetFilters, deleteFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
