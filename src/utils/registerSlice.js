import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {},
  step: 1,
  user:{},
  isAuthenticated:false
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addDetails(state, action) {
    //   state.userDetails.push(action.payload);
    state.userDetails = {...state.userDetails,...action.payload}
    },
    resetUserDetails(state){
      state.userDetails = {}
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
    resetStep(state){
      state.step = 1
    },
    setCurrentUser(state,action){
      state.user = action.payload
    },
    setIsAuthenticated(state,action){
      state.isAuthenticated = action.payload
    }
  },
});

export const { addDetails,resetUserDetails, prev, next,resetStep,setCurrentUser,setIsAuthenticated } = registerSlice.actions;

export default registerSlice.reducer;

export const getRegisterDetails = (state) => state.register.userDetails;
export const getStep = (state) => state.register.step;
export const getUser = (state) => state.register.user;
export const getIsAuthenticated = (state) => state.register.isAuthenticated;

// export const getTotalCartQuantity = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);