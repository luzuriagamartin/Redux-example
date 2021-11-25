/* A function that accepts an initial state, an object full of reducer functions, 
and a "slice name", and automatically generates action creators and action 
types that correspond to the reducers and state. */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    deleteBook(state, action) {
      state.books = state.books.filter(
        (books) => books.id !== action.payload.id
      );
    },
  },
});

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
