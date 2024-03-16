// features/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    showCounter: true
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    increaseBy: (state, action) => {
      state.value += action.payload;
    },
    toggleCounter: state => {
      state.showCounter = !state.showCounter;
    }
  }
});

export const { increment, decrement, increaseBy, toggleCounter } = counterSlice.actions;

export default counterSlice.reducer;
