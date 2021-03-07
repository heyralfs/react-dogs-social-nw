import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import { USER_POST } from "../../../api";
import { UserContext } from "../../../contexts/UserContext";

export default function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm(); // mudar para 'password' o argumento

  const { userLogin } = useContext(UserContext);

  async function handleCreate(e) {
    e.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const response = await fetch(url, options);

    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleCreate}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
}
