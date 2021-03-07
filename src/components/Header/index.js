import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";
import { UserContext } from "../../contexts/UserContext";

export default function Header() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link to="/conta" className={styles.login}>
              {data.nome}
            </Link>
            <button onClick={() => userLogout()}>Sair</button>
          </>
        ) : (
          <Link to="/login" className={styles.login}>
            Login | Cadastro
          </Link>
        )}
      </nav>
    </header>
  );
}
