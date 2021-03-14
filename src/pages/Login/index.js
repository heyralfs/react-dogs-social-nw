import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../../components/Login/LoginForm";
import LoginCreate from "../../components/Login/LoginCreate";
import LoginPasswordLost from "../../components/Login/LoginPasswordLost";
import LoginPasswordReset from "../../components/Login/LoginPasswordReset";
import { UserContext } from "../../contexts/UserContext";
import styles from "./style.module.css";
import NotFound from "../NotFound";

const Login = () => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/dogs-app/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
