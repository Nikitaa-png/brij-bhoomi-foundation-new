import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ portal }) {
  const isAdmin = portal === "admin";
  const isLoggedIn = isAdmin 
    ? !!localStorage.getItem("brij_admin_session") 
    : !!localStorage.getItem("brij_volunteer_session");

  if (!isLoggedIn) {
    return <Navigate to={isAdmin ? "/admin/login" : "/volunteer/login"} replace />;
  }

  return <Outlet />;
}
