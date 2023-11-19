import { Outlet, Navigate } from "react-router-dom";

const RouteProtector = () => {
  const token = localStorage.getItem("apollo-token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export { RouteProtector };
