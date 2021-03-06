import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { ReactComponent as Dogs } from "../../assets/dogs.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link to="/login" className={styles.login}>
          Login | Cadastro
        </Link>
      </nav>
    </header>
  );
}
