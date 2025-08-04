// src/components/ProtectedRoute.jsx

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  // Get user role from Redux or localStorage
  const role =
    user?.role?.toLowerCase() ||
    JSON.parse(localStorage.getItem("user"))?.role?.toLowerCase();

  // If user not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }



  // Access granted
  return children;
};

export default ProtectedRoute;
