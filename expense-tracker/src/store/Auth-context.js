import React, { useState } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {

    let initialToken = localStorage.getItem('idToken')

    const [token, setToken] = useState(initialToken);

    const loginHandler = () => {};

    const logoutHandler = () => {};

    const contextValue = {
        token: null,
        isLoggedIn: !!token,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <AuthContextProvider value={contextValue}>
            {props.children}
        </AuthContextProvider>
    );
};

export default AuthContext;