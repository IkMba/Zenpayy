import React, { useEffect } from "react";
import { useIsLoggedIn } from "./api/MyUserApi";
import { Navigate, Outlet } from "react-router-dom";
import { get } from "react-hook-form";
import { getIsAuthenticated } from "./utils/registerSlice";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
    const isAuthenticated = useSelector (getIsAuthenticated)

console.log(isAuthenticated)
  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
}
