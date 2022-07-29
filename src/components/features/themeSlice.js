import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme-Status",
  initialState: {
    value: { status: localStorage.getItem("theme") || "cupcake" },
  },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
