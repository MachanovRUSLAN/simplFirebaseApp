import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/signIn";
import MainLayout from "../MainLayout";
import AuthLayout from "../AuthLayout";
import Home from "../home";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },

      ]
    },
    {
      path: "/",
      element: <AuthLayout/>,
      children: [
        {
          path: "/signUp",
          element: <SignUp/>,
        },
        {
          path: "/signIn",
          element: <SignIn/>,
        },
      ]
    },
  
  ]);

