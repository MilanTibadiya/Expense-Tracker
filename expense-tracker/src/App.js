import { useSelector } from "react-redux";
import './App.css';

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from './components/Header/Header'
import AuthForm from "./components/Auth/AuthForm";
import Home from "./components/Pages/Home/Home";
import CompleteProfile from "./components/Pages/CompleteProfile/CompleteProfile";
import VarifyEmail from "./components/Auth/VarifyEmail";
import PrivateRoute from "./components/Pages/PrivateRoute";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Expenses from "./components/Pages/Expenses/Expanses";
import About from "./components/Pages/About/About";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
      { path: '/expanses', element: <PrivateRoute><Expenses/></PrivateRoute>},
      { path: '/about', element: <About/> },
      { path: "*", element: <AuthForm/> },
    ],
  },
]);

function App() {
  const darkTheme = useSelector((state) => state.theme.dark);

  return (
    <>
    <div
      style={{ height: '100vh' }}
      id={darkTheme ? 'dark' :'light'}
      className="App">
      <RouterProvider router={router} />
      </div>
      </>
  );
}

export default App;
