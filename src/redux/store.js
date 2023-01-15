import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './slices/basketSlice';
import favoriteReducer from './slices/favoriteSlice';
import filteredReducer from './slices/filteredSlice';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/userSlice';
import productsReducer from './slices/productsSlice';

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

const persistedBasket = persistReducer(persistConfig, basketReducer);
const persistedFavorite = persistReducer(persistConfig, favoriteReducer);
const persistedUsers = persistReducer(persistConfig, userReducer);
const persistedProducts = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    favorite: persistedFavorite,
    basket: persistedBasket,
    filtered: filteredReducer,
    users: persistedUsers,
    products: persistedProducts,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import sliderReducer from './slices/sliderSlice';
// import productsReducer from './slices/productsSlice';
// import basketReducer from './slices/basketSlice';
// import favoriteReducer from './slices/favoriteSlice';
// import filteredReducer from './slices/filteredSlice';
// import storage from 'redux-persist/lib/storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';
// import { combineReducers } from 'redux';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = combineReducers({
//   slider: sliderReducer,
//   products: productsReducer,
//   basket: basketReducer,
//   favorite: favoriteReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: { persistedReducer, filtered: filteredReducer },
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],
// });
// export const persistor = persistStore(store);
