import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isNavOpen: true,
  },
  reducers: {
    toogleMenu: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    closeMenu: (state) => {
      state.isNavOpen = false;
    },
  },
});

export const { toogleMenu , closeMenu } = navSlice.actions;
export default navSlice.reducer;
