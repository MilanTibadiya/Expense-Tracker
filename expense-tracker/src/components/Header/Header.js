import React, { useCallback, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import AuthContext from "../../store/Auth-context";
import classes from "./Header.module.css";

const MainNavigation = () => {
  const Authctx = useContext(AuthContext);
  console.log("aaaa", Authctx);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <NavLink to="/a">
          <div className={classes.logo}>Expense Tracker</div>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink>Expanses</NavLink>
            </li>
            <li>
              <NavLink>About US</NavLink>
            </li>
            <li>
              {!Authctx.isLoggedIn ? (
                <NavLink to="/">
                  {" "}
                  <button>Login</button>
                </NavLink>
              ) : (
                <NavLink to="/">
                  {" "}
                  <button
                    onClick={() => {
                      localStorage.removeItem("idToken");
                      localStorage.removeItem("userEmail");
                      Authctx.setIdToken(null);
                    }}
                  >
                    logout
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
