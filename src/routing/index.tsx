import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import routes from "./routes";
import Login from "../screens/login/Login";
import useAuth from "../hooks/useAuth";
import ProtectedLayout from "../layouts/ProtectedLayout";
import ForgotPassword from "../screens/forgot-password/ForgotPassword";
// import Demo from '../components/FlightSearch/Demo';

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  useAuth();
  return <ProtectedLayout>{element}</ProtectedLayout>;
};

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route key={14} path="/login" element={<Login />} />
        <Route key={14} path="/forgot-password" element={<ForgotPassword />} />
        {routes.map((route) => (
          <Route key={route.id} path={route.path} element={<ProtectedRoute element={route.element as JSX.Element}  />}  />
        ))}

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
