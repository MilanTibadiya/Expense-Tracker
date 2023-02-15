import React, { useEffect, useState } from "react";

const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(null);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        setToken(localStorage.getItem('idToken'));
    }, [setToken]);

    const loginHandler = () => {};

    const logoutHandler = () => {};

    const contextValue = {
        token: token,
        setToken: setToken,
        isLoggedIn: !!token,
        login: loginHandler,
        logout: logoutHandler,
        isLogin: isLogin,
        setIsLogin: setIsLogin,

    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;