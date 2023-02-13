import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from './components/Header/Header'
import AuthForm from "./components/Auth/AuthForm";
import Expenses from "./components/Pages/Expenses/Expenses";

var router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: "/", element: <AuthForm/> },
      { path: "/expenses", element: <Expenses/> },
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
