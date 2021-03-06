import React from "react";
import styles from "./style.module.css";

export default function Button({ children, ...props }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
