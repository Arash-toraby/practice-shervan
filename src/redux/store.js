import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice/userSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
  },
});

export default store;
