import React from "react";
import Home from "../home";
import { Navigate, Outlet } from "react-router";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "../firebase";


function MainLayout() {
  
    const [user, isLoading]= useAuthState(auth)
    if(isLoading) {
        return <h1>Loading...</h1>
    }

  if (!user) {
    return <Navigate to="/signIn" replace />;
  }
  return <Outlet />;
}

export default MainLayout;
