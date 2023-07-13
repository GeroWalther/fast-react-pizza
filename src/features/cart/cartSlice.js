import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Parma e Ruccula",
  //     quantity: 2,
  //     unitePrice: 18,
  //     totalPrice: 36,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => action.payload !== item.pizzaId);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((i) => i.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((i) => i.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action); // calls other reduser from inside here
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export const {
  addToCart,
  deleteItem,
  clearCart,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// selector functions to read the state
export const getCart = (state) => state.cart.cart;
export const getTotalCartAmount = (s) =>
  s.cart.cart.reduce((sum, curEl) => sum + curEl.quantity, 0);
export const getTotalCartPrice = (s) =>
  s.cart.cart.reduce((sum, curEl) => sum + curEl.totalPrice, 0);
export const getCurrentQuantityByID = (id) => (s) =>
  s.cart.cart.find((i) => i.pizzaId === id)?.quantity ?? 0;
