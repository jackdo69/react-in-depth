import { createSlice } from '@reduxjs/toolkit';
import data from '../resources/data.json';

const initialState = {
  list: data.users,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
