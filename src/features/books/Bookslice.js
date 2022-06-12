import { createSlice } from "@reduxjs/toolkit";

const initialStoreBook = {
  books: [
    { id: 1, name: "bangla", author: "tamal Mallick" },
    { id: 2, name: "English", author: "tamal Mallick" },
    { id: 3, name: "History", author: "tamal Mallick" },
    { id: 4, name: "Physice", author: "tamal Mallick" },
    { id: 5, name: "Chemistry", author: "tamal Mallick" },
  ],
};

export const bookSlice = createSlice({
  name: "bookstore",
  initialState: initialStoreBook,
  reducers: {
    showBook: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { showBook, addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
