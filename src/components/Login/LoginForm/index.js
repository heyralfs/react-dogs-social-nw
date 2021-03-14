import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import { UserContext } from "../../../contexts/UserContext";
import Error from "../../Helper/Error";
import styles from "./style.module.css";
import stylesBtn from "../../Forms/Button/style.module.css";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleLogin} className={styles.form}>
        <Input label="Usuário" type="text" name="username" {...username} />

        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && "Usuário ou senha incorretos."} />
      </form>
      <Link className={styles.lost} to="/login/perdeu">
        Esqueceu sua senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastrar
        </Link>
      </div>
    </section>
  );
}
