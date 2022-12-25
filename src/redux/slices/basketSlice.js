import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basket: [],
  ordered: false,
  quantity: 1,
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
    increaseQuantity: state => {
      state.quantity++;
    },
    decreaseQuantity: state => {
      state.quantity--;
    },
    openModaL: state => {
      state.ordered = true;
    },
    closeModal: state => {
      state.ordered = false;
      state.quantity = 1;
    },
    editQuantity: (state, action) => {
      state.basket = state.basket.map(product => {
        if (action.payload.id === product.id) {
          product.quantity = action.payload.quantity;
          // console.log(product.quantity, action.payload.quantity);
        }
        return product;
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
  increaseQuantity,
  decreaseQuantity,
} = basketSlice.actions;

export default basketSlice.reducer;
