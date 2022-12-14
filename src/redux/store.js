import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './slices/sliderSlice';
import productsReducer from './slices/productsSlice';
import basketReducer from './slices/basketSlice';
import favoriteReducer from './slices/favoriteSlice';
import storage from 'redux-persist/lib/storage';
import filteredReducer from './slices/filteredSlice';

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
    persistedSlider,
    persistedBasket,
    persistedFavorite,
    persistedProducts,
    filteredReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
