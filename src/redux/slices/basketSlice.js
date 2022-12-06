import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  quantity: 1,
  ordered: false,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    addProduct: (state, action) => {
      // state.products = [action.payload, ...state.products];
      state.ordered = true;
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        product => product.id !== action.payload
      );
    },
    clearBasket: (state, action) => {
      state.products = [];
    },
    increaseQuantity: state => {
      state.numbers = state.numbers + 1;
    },
    decreaseQuantity: state => {
      if (state.number === 0) return;
      else {
        state.numbers = state.numbers - 1;
      }
    },
    closeModal: state => {
      state.ordered = false;
    },
  },
});

export const {
  addProduct,
  clearBasket,
  deleteProduct,
  increaseQuantity,
  decreaseQuantity,
  closeModal,
} = basketSlice.actions;

export default basketSlice.reducer;
