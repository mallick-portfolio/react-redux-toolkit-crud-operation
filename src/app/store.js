import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/Bookslice.js";
const store = configureStore({
  reducer: {
    bookReducer: bookReducer,
  },
});


export default store