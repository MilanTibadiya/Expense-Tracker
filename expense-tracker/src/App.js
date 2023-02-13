import React, { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "./components/Auth/Signup";
import Header from './components/Header/Header'

var router = createBrowserRouter( [
  {
    path: '/',
    element: <Header/>,
    children: [
      { path: "/", element: <Signup/> },
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
