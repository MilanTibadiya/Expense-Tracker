import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlicer";
import { themeActions } from "../../store/ThemeSlicer";

import classes from "./Header.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const IdToken = useSelector((state) => state.auth.IdToken);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <NavLink>
          <div className={classes.logo}>Expense Tracker</div>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/expanses">Expanses</NavLink>
            </li>
            <li>
              <NavLink to="about">About US</NavLink>
            </li>
            <li>
              {!IdToken ? (
                <NavLink to="/">
                  {" "}
                  <button>Login</button>
                </NavLink>
              ) : (
                <NavLink to="/">
                  {" "}
                  <button
                    onClick={() => {
                      dispatch(authActions.logout());
                    }}
                  >
                    Logout
                  </button>
                </NavLink>
              )}
            </li>
            <div
              style={{ height: "25px" }}
              className="form-check mt-2 ml-3 form-switch"
            >
              <input
                onChange={() => dispatch(themeActions.changeTheme())}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="text-white">Dark mode</label>
            </div>
          </ul>
        </nav>
        <div></div>
      </header>
      <Outlet />
    </React.Fragment>
  );
};

export default MainNavigation;
