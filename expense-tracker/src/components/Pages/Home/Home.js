import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Home.module.css';

const Home = () => {
    return (
        <>
        <div className={classes.welcome}>
        <div className={classes.heading}>
        <p>Welcome to Expense Tracker App</p>
        </div>
        <div className={classes.profilelink}>
            Your profile is incomplete.<NavLink to='/completeprofile'>Complete now</NavLink>
        </div>
    </div>
    </>
    );
};

export default Home;