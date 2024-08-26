import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = false;
  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};
export default PrivateRoute;
