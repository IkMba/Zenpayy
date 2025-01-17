import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
  step: 1,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addDetails(state, action) {
    //   state.userDetails.push(action.payload);
    state.userDetails = {...state.userDetails,...action.payload}
    },
    prev(state) {
      if (state.step > 1) {
        state.step--;
      }
    },
    next(state) {
      if (state.step < 3) {
        state.step++;
      }
    },
  },
});

export const { addDetails, prev, next } = registerSlice.actions;

export default registerSlice.reducer;

export const getRegisterDetails = (state) => state.register.userDetails;
export const getStep = (state) => state.register.step;

// export const getTotalCartQuantity = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);