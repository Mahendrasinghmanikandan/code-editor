/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRightFromBracket,
  faCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  signInWithGoogle,
  signOutWithGoogle,
} from "../../firebase/firebaseConfig";
import { navItems } from "../../helper/bottom-nav-helper";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { changeAuth } from "../features/authSlice";
import { changeTheme } from "../features/themeSlice";

const Navbar = () => {
  const getData = useSelector((result) => result.authSlice.value.status);
  const getTheme = useSelector((theme) => theme.changeTheme.value.status);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState(getData);
  const [user, setUser] = useState(
    (localStorage.getItem("user") !== "" &&
      JSON.parse(localStorage.getItem("user"))) ||
      []
  );

  const handleLogin = async () => {
    await signInWithGoogle(setAuth, setUser);
    dispatch(changeAuth({ status: true }));
  };
  const handleLogOut = async () => {
    signOutWithGoogle(setAuth, setUser);
    dispatch(changeAuth({ status: false }));
  };

  const handleTheme = (data) => {
    localStorage.setItem("theme", data);
    dispatch(changeTheme({ status: data }));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <FontAwesomeIcon icon={faGear} />
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-30"
            >
              <li>
                <p
                  onClick={() => handleTheme("luxury")}
                  className={
                    getTheme === "luxury" ? "text-black bg-white" : undefined
                  }
                >
                  Dark
                </p>
              </li>
              <li>
                <p
                  onClick={() => handleTheme("cupcake")}
                  className={
                    getTheme === "cupcake" ? "text-white  bg-black" : undefined
                  }
                >
                  Light
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <h1
            style={{ fontFamily: "Imprint MT Shadow" }}
            className="btn btn-ghost normal-case text-xl font-ImprintMTShadow"
          >
            DEV-MSM Code Play
          </h1>
        </div>
        <div className="navbar-end flex gap-4">
          {auth ? (
            <button
              className="btn btn-ghost  flex gap-1"
              onClick={handleLogOut}
            >
              Logout
              <FontAwesomeIcon icon={faCircleUp} />
            </button>
          ) : (
            <button className="btn btn-ghost  flex gap-1" onClick={handleLogin}>
              Login
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          )}
          <img
            className="btn-circle w-8 h-8"
            src={
              !_.isEmpty(user)
                ? _.get(user, "user.photoURL", "")
                : _.get(navItems, "[3].logo_url", "")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
