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
      state.basket = [action.payload, ...state.basket];
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
      state.quantity += 1;
    },
    decreaseQuantity: state => {
      if (state.number === 0) return;
      else {
        state.quantity -= 1;
      }
    },
    openModaL: (state, action) => {
      state.ordered = true;
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
  openModaL,
} = basketSlice.actions;

export default basketSlice.reducer;
