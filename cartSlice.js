// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the book already exists in the cart
      const existingBook = state.cart.find(book => book.id === action.payload.id);
      if (!existingBook) {
        state.cart.push(action.payload); // Add book to cart if it doesn't exist
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(book => book.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
