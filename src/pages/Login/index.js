import React from "react";
import { Route, Routes } from "react-router";
import LoginForm from "../../components/Login/LoginForm";
import LoginCreate from "../../components/Login/LoginCreate";
import LoginPasswordLost from "../../components/Login/LoginPasswordLost";
import LoginPasswordReset from "../../components/Login/LoginPasswordReset";

export default function Login() {
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
}
