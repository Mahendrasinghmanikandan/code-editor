import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "buttom-nav-activeTab",
  initialState: {
    value: { tabId: Number(localStorage.getItem("active-tab")) || 1 },
  },
  reducers: {
    changeTab: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeTab } = tabSlice.actions;
export default tabSlice.reducer;
