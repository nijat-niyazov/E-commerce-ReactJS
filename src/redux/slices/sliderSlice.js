import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sliderItems: [],
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setSlider: (state, action) => {
      state.sliderItems = action.payload;
    },
  },
});

export const { setSlider } = sliderSlice.actions;

export default sliderSlice.reducer;
