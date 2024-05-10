import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) {
      return undefined;
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    return undefined;
  }
};
 /*@ts-expect-error: This */

const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem("cart", serializedCart);
  } catch (err) {
    // Ignore write errors
  }
};
 /*@ts-expect-error: This */
const calculateTotalPrice = (cart) => {
   /*@ts-expect-error: This */
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage()?.items || [],
    total: loadCartFromLocalStorage()?.total || 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
       /*@ts-expect-error: This */
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total = calculateTotalPrice(state.items);
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action) => {
       /*@ts-expect-error: This */
      const newState = state.items.filter((item) => item.id !== action.payload);
      state.items = newState;
      state.total = calculateTotalPrice(newState);
      saveCartToLocalStorage(newState);
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
       /*@ts-expect-error: This */
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1 && quantity) {
        state.items[existingItemIndex].quantity = quantity;
        state.total = calculateTotalPrice(state.items);
        saveCartToLocalStorage(state.items);
      } else {
        state.items[existingItemIndex].quantity = 0;
        state.total = 0;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      saveCartToLocalStorage([]);
    },
  },
});

export const { addToCart, removeFromCart, updateCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
