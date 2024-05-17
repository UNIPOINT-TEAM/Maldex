import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  quantity: number;
  price: number;
  totalPrice: number;
  stock: number;
  discountedPrice: number;
  article: number;
  discount_price: number;
  discountPercent: number;
  images_set: {
    id: number;
    image_url: string;
    image: string;
  }[];
}
interface CartState {
  carts: CartItem[];
  itemsCount: number;
  totalAmount: number;
  isCartMessageOn: boolean;
  totalQuantity: number;
}

const fetchFromLocalStorage = (): CartItem[] => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart) as CartItem[];
  } else {
    return [];
  }
};

const storeInLocalStorage = (data: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState: CartState = {
  carts: fetchFromLocalStorage(),
  itemsCount: 0,
  totalAmount: 0,
  totalQuantity: 0,
  isCartMessageOn: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const isItemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            const tempQty = item.quantity + action.payload.quantity;
            const tempTotalPrice = tempQty * item.price;

            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
      } else {
        state.carts.push(action.payload);
      }
      storeInLocalStorage(state.carts);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },

    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal + cartItem.totalPrice;
      }, 0);
      state.itemsCount = state.carts.length;
    },
    getAllQuantity: (state) => {
      state.totalQuantity = state.carts.reduce(
        (cartTotalQuantity, cartItem) => {
          return cartTotalQuantity + cartItem.quantity;
        },
        0
      );
    },

    toggleCartQty: (
      state,
      action: PayloadAction<{ id: number; type: "INC" | "DEC" }>
    ) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;

          if (action.payload.type === "INC") {
            tempQty++;
            if (tempQty > item.stock) tempQty = item.stock;
            tempTotalPrice = tempQty * item.discountedPrice;
          }

          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.discount_price;
          }
          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    updateCart: (state, action: PayloadAction<CartItem>) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, ...action.payload };
        } else {
          return item;
        }
      });
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
  },
});

export const {
  addToCart,
  setCartMessageOff,
  setCartMessageOn,
  getCartTotal,
  getAllQuantity,
  toggleCartQty,
  clearCart,
  removeFromCart,
  updateCart, // Bu yerda export qilishni unutmang
} = cartSlice.actions;
export const getAllCarts = (state: { cart: CartState }) => state.cart.carts;
export const getCartItemsCount = (state: { cart: CartState }) =>
  state.cart.itemsCount;
export const getCartMessageStatus = (state: { cart: CartState }) =>
  state.cart.isCartMessageOn;
export default cartSlice.reducer;
