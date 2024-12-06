import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction');
  const data = await response.json();
  return data.items;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    cart: [], // Add cart to the state
    loading: false,
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    addToCart: (state, action) => {
      const book = state.books.find((book) => book.id === action.payload);
      if (book && !state.cart.find((cartItem) => cartItem.id === book.id)) {
        state.cart.push(book);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, addToCart, removeFromCart } = bookSlice.actions;
export default bookSlice.reducer;
