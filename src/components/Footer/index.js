import React from "react";
import styles from "./style.module.css";
import { ReactComponent as Dogs } from "../../assets/dogs-footer.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
      <p>
        Orgulhosamente desenvolvido no curso React Completo da{" "}
        <a href="https://origamid.com" target="_blank" rel="noreferrer">
          Origamid
        </a>
      </p>
    </footer>
  );
}
