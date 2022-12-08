import { configureStore } from '@reduxjs/toolkit';

import sliderReducer from '../redux/slices/sliderSlice';
import productsReducer from '../redux/slices/productsSlice';
import basketReducer from '../redux/slices/basketSlice';
import favoriteReducer from './slices/favoriteSlice';

export const store = configureStore({
  reducer: {
    sliders: sliderReducer,
    productsReducer,
    basketReducer,
    favoriteReducer,
  },
});
