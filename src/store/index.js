import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter-slice";
import authSlice from "./slices/auth-slice";

const store = configureStore({
  reducer: {
    counterSlice,
    authSlice,
  },
});

export default store;
