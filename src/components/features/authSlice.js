import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth-Status",
  initialState: {
    value: { status: localStorage.getItem("auth-Status") || false },
  },
  reducers: {
    changeAuth: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;
