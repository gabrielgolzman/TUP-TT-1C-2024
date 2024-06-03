import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthenticationContext } from "../services/authentication/authentication.context";

const Protected = () => {
  const { user } = useContext(AuthenticationContext);

  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default Protected;
