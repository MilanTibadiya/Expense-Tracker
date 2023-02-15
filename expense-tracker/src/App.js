import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./store/Auth-context";

import Header from './components/Header/Header'
import AuthForm from "./components/Auth/AuthForm";
import Home from "./components/Pages/Home/Home";
import CompleteProfile from "./components/Pages/CompleteProfile/CompleteProfile";
import VarifyEmail from "./components/Auth/VarifyEmail";
import PrivateRoute from "./components/Pages/PrivateRoute";
import ForgotPassword from "./components/Auth/ForgotPassword";

const router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: "/", element: <AuthForm/> },
      { path: "/home", element: <PrivateRoute><Home/></PrivateRoute> },
      { path: "/completeprofile", element: <CompleteProfile/> },
      { path: "/varifyemail", element: <VarifyEmail/> },
      { path: "/forgotpassword", element: <ForgotPassword/> },
    ],
  },
]);
function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
