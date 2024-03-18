// store.ts
// @ts-ignore
import { createSlice, configureStore } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState: CartState = {
  items: loadState()?.items || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // @ts-ignore
    addItem(state, action) {
      const newItem: CartItem = action.payload;
      // @ts-ignore
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      saveState(state);
    },
    // @ts-ignore
    removeItem(state, action) {
      const idToRemove = action.payload;
      // @ts-ignore
      state.items = state.items.filter((item) => item.id !== idToRemove);
      saveState(state);
    },
    // @ts-ignore
    clearCart(state) {
      state.items = [];
      saveState(state);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCartItems = (state: { cart: CartState }) => state.cart.items;

export const selectTotalPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

export const selectDiscountedPrice = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => {
    let discount = 0;
    if (item.price >= 30 && item.price < 100) {
      discount = 0.03;
    } else if (item.price >= 100 && item.price < 300) {
      discount = 0.05;
    } else if (item.price >= 300) {
      discount = 0.07;
    }
    return total + item.price * item.quantity * (1 - discount);
  }, 0);

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
