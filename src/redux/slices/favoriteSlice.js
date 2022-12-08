import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = [action.payload, ...state.favorites];
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload
      );
    },
  },
});

export const { setFavorites, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
