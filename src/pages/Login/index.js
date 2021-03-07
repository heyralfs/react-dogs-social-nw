import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import LoginCreate from "../../components/Login/LoginCreate";
import LoginPasswordLost from "../../components/Login/LoginPasswordLost";
import LoginPasswordReset from "../../components/Login/LoginPasswordReset";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/conta" />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
