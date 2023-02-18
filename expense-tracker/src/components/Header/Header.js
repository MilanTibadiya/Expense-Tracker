import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlicer";

import classes from "./Header.module.css";

const MainNavigation = () => {

    const dispatch = useDispatch();
    const IdToken = useSelector(state => state.auth.IdToken);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <NavLink><div className={classes.logo}>Expense Tracker</div></NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/expanses'>Expanses</NavLink>
            </li>
            <li>
              <NavLink to='about'>About US</NavLink>
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
          </ul>
        </nav>
        <div></div>
      </header>
      <Outlet />
    </React.Fragment>
  );
};

export default MainNavigation;
