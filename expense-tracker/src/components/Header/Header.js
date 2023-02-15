import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import AuthContext from "../../store/Auth-context";
import classes from "./Header.module.css";

const MainNavigation = () => {
  const Authctx = useContext(AuthContext);
  // console.log("header auth", Authctx);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <NavLink><div className={classes.logo}>Expense Tracker</div></NavLink>
        <nav>
          <ul>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink to='/expanses'>Expanses</NavLink>
            </li>
            <li>
              <NavLink to='about'>About US</NavLink>
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
