import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

const ProtectedRoute = (props) => {
  const { isLogged } = useContext(UserContext);

  if (isLogged === true) return <Route {...props} />;

  if (isLogged === false) return <Navigate to="/login" />;

  return null;
};

export default ProtectedRoute;
