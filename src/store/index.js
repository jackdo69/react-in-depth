import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book.js';
import userReducer from './user.js';

export const store = configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer,
  },
});
