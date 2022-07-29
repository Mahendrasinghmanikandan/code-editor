/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { navItems } from "../../helper/bottom-nav-helper";
import "./bottom-nav.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../features/activeTabSlice";
const BottomNav = () => {
  const dispatch = useDispatch();
  const getActiveTab = useSelector((res) => res.activeTab.value.tabId);
  const [activeTab, setActiveTab] = useState(getActiveTab);
  const handleClick = (item) => {
    setActiveTab(item);
    dispatch(changeTab({ tabId: item }));
    localStorage.setItem("active-tab", item);
  };

  return (
    <div>
      <div className="btm-nav">
        {navItems.map((item) => {
          return (
            <button
              key={item.id}
              className={activeTab === item.id ? "bg-secondary" : undefined}
              onClick={() => {
                handleClick(item.id);
              }}
            >
              <img src={item.logo_url} className="logo" />
              <span className="btm-nav-label">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
