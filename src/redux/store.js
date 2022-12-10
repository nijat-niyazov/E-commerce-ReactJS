// import { configureStore } from '@reduxjs/toolkit';

// import sliderReducer from '../redux/slices/sliderSlice';
// import productsReducer from '../redux/slices/productsSlice';
// import basketReducer from '../redux/slices/basketSlice';
// import favoriteReducer from './slices/favoriteSlice';

// export const store = configureStore({
//   reducer: {
//     sliders: sliderReducer,
//     productsReducer,
//     basketReducer,
//     favoriteReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';

import sliderReducer from './slices/sliderSlice';
import productsReducer from './slices/productsSlice';
import basketReducer from './slices/basketSlice';
import favoriteReducer from './slices/favoriteSlice';

import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedSlider = persistReducer(persistConfig, sliderReducer);
const persistedBasket = persistReducer(persistConfig, basketReducer);
const persistedFavorite = persistReducer(persistConfig, favoriteReducer);
const persistedProducts = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    slider: persistedSlider,
    basket: persistedBasket,
    favorite: persistedFavorite,
    product: persistedProducts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
