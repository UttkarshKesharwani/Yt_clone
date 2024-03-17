import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navSlice"

const Store = configureStore({
  reducer: {
    nav : navSlice ,
  },
});

export default Store;
