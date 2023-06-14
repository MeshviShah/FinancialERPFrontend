import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ role }) => {
    console.log(role)
  const isAuthenticated = localStorage.getItem("accessToken") ? true : false;
  const userRole = localStorage.getItem("role");
  console.log(userRole,"dvd")
  return isAuthenticated ? (
    userRole === role ? (
      <Outlet />
    ) : (
      <Navigate to="/home" />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminRoute