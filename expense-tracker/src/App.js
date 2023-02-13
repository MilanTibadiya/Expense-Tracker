import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from './components/Header/Header'
import AuthForm from "./components/Auth/AuthForm";
import Home from "./components/Pages/Home/Home";
import CompleteProfile from "./components/Pages/CompleteProfile/CompleteProfile";

var router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: "/", element: <AuthForm/> },
      { path: "/home", element: <Home/> },
      { path: "/completeprofile", element: <CompleteProfile/> },
    ],
  },
]);
function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
