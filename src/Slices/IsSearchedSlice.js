import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearched: false,
};

export const isSearchedSlice = createSlice({
  name: 'isSearched',
  initialState,
  reducers: {
    isSearched: (state, action) => {
      state.isSearched = action.payload;
    },
  },
});

export const { isSearched } = isSearchedSlice.actions;

export default isSearchedSlice.reducer;