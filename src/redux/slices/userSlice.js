import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  userIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    newUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    logIn: state => {
      state.userIn = true;
    },
    logOut: state => {
      state.userIn = false;
    },
  },
});

export const { logIn, logOut, newUser } = userSlice.actions;

export default userSlice.reducer;
