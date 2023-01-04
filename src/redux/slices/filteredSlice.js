import { createSlice } from '@reduxjs/toolkit';

const initialState = { filtered: [], query: '' };

const filteredSlice = createSlice({
  name: 'filtered',
  initialState,
  reducers: {
    setFiltered(state, action) {
      state.filtered = action.payload;
    },
    searchQuery(state, action) {
      state.query = action.payload;
    },
    clearQuery(state) {
      state.query = '';
    },
  },
});

export const { setFiltered, searchQuery, clearQuery } = filteredSlice.actions;
export default filteredSlice.reducer;
