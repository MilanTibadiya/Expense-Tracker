import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import classes from './Header.module.css';

const MainNavigation = () => {

  return (
    <React.Fragment>
    <header className={classes.header}>
    <NavLink to='/a'>
        <div className={classes.logo}>Expense Tracker</div>
      </NavLink>
      <nav>
        <ul>
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink>Expanses</NavLink></li>
          <li><NavLink>About US</NavLink></li>
          <li><NavLink to='/'>
            <button>Login</button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
    <Outlet/>
    </React.Fragment>
  );
};

export default MainNavigation;