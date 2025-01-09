import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  let location = useLocation();

  return isAuth ? element : <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedRoute;
