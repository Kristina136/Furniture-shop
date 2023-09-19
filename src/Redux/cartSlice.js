import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const timeId = new Date().getTime()
      state.cartItems.push({
        itemId: action.payload.e.id,
        itemImg: action.payload.e.img,
        quantity: action.payload.quantity,
        ///////////////////////////////////////////////////////////////
        totalPrice: action.payload.quantity * action.payload.e.price,
        id: timeId
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems=state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const getSelectedCategory = (state) => state.items.selectedCategory;
export const getCartItems = (state) => state.cart.cartItems;
export const getTotalPrice = (state) =>
  state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total;
  }, 0);
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
