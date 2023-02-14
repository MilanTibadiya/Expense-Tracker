import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
    let token = localStorage.getItem('idToken');

    return token ? props.children : <Navigate to='/login' />
};

export default PrivateRoute;