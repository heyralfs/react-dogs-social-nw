import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../../api";
import useForm from "../../../hooks/useForm";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";
import { UserContext } from "../../../contexts/UserContext";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  async function handleLogin(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />

        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastrar</Link>
    </section>
  );
}
