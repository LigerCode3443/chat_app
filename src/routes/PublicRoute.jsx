import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = false;
  return isLoggedIn ? (
    <Navigate to={location?.state || "/"} replace />
  ) : (
    children
  );
};
export default PublicRoute;
