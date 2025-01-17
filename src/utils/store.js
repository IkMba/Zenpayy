import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "@/utils/registerSlice";

const store = configureStore({
  reducer: {
    register: registerSlice,
  },
});

export default store;
