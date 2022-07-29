import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import activeTab from "./components/features/activeTabSlice";
import authSlice from "./components/features/authSlice";
import changeTheme from "./components/features/themeSlice";

const store = configureStore({
  reducer: {
    activeTab: activeTab,
    authSlice: authSlice,
    changeTheme: changeTheme,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
