import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Button from "../../Forms/Button";
import Input from "../../Forms/Input";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  function handleLogin(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
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
