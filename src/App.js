import React from "react";
import BottomNav from "./components/buttomNav/BottomNav";
import Index from "./components/Editor";
import Navbar from "./components/navBar/Navbar";
import { useSelector } from "react-redux";
const App = () => {
  const getTheme = useSelector((theme) => theme.changeTheme.value.status);

  return (
    <div data-theme={getTheme}>
      <Navbar />
      <Index />
      <BottomNav />
    </div>
  );
};

export default App;
