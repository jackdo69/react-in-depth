import { createSlice } from '@reduxjs/toolkit';
import data from '../resources/data.json';

const initialState = {
  list: data.books,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
