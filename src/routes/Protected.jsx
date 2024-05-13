import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ isSignedIn }) => {
  if (!isSignedIn) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default Protected;
