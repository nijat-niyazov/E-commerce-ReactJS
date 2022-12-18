import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user = true;
    },
    logOut: (state, action) => {
      state.user = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
