import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './slices/sliderSlice';
import productsReducer from './slices/productsSlice';
import basketReducer from './slices/basketSlice';
import favoriteReducer from './slices/favoriteSlice';
import filteredReducer from './slices/filteredSlice';
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
    persistedSlider,
    persistedFavorite,
    persistedProducts,
    filteredReducer,
    persistedBasket,
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
// import {
//   persistStore,
//   persistReducer,
//   // FLUSH,
//   // REHYDRATE,
//   // PAUSE,
//   // PERSIST,
//   // PURGE,
//   // REGISTER,
// } from 'redux-persist';
// import thunk from 'redux-thunk';
// import { combineReducers } from 'redux';

// const persistConfig = {
//   key: 'root',
//   storage,
//   // blacklist: ['persistedFiltered'],
// };

// const persistedSlider = persistReducer(persistConfig, sliderReducer);
// const persistedBasket = persistReducer(persistConfig, basketReducer);
// const persistedFavorite = persistReducer(persistConfig, favoriteReducer);
// const persistedProducts = persistReducer(persistConfig, productsReducer);

// // const persistedFiltered = persistReducer(persistConfig, filteredReducer);

// export const store = configureStore({
//   reducer: {
//     persistedSlider,
//     persistedBasket,
//     persistedFavorite,
//     persistedProducts,
//     filteredReducer,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: [thunk],

//   // middleware: getDefaultMiddleware =>
//   //   getDefaultMiddleware({
//   //     serializableCheck: {
//   //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   //     },
//   //   }),
// });

// export const persistor = persistStore(store);

// // const persistConfig = {
// //   key: 'root',
// //   storage,
// // };

// // const rootReducer = combineReducers({
// //   slider: sliderReducer,
// //   products: productsReducer,
// //   basket: basketReducer,
// //   favorite: favoriteReducer,
// // });

// // const persistedReducer = persistReducer(persistConfig, rootReducer);

// // export const store = configureStore({
// //   reducer: { persistedReducer, filteredReducer },
// //   devTools: process.env.NODE_ENV !== 'production',
// //   middleware: [thunk],
// // });
