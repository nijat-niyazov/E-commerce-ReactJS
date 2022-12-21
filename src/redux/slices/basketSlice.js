import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  ordered: false,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    addProduct: (state, action) => {
      state.basket = [action.payload, ...state.basket];
    },
    deleteProduct: (state, action) => {
      state.basket = state.basket.filter(
        product => product.id !== action.payload
      );
    },
    clearBasket: state => {
      state.basket = [];
    },

    openModaL: state => {
      state.ordered = true;
    },
    closeModal: state => {
      state.ordered = false;
    },
    editQuantity: (state, action) => {
      state.basket = state.basket.map(product => {
        if (action.payload.id === product.id) {
          product.quantity = action.payload.quantity;
        }
        return;
      });
    },
  },
});

export const {
  addProduct,
  clearBasket,
  deleteProduct,
  closeModal,
  openModaL,
  editQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
