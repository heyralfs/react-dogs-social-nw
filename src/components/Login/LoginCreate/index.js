import React, { useContext } from "react";
import useForm from "../../../hooks/useForm";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import Error from "../../Helper/Error";
import { USER_POST } from "../../../api";
import { UserContext } from "../../../contexts/UserContext";
import useFetch from "../../../hooks/useFetch";
import Head from "../../Helper/Head";

export default function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm(); // mudar para 'password' o argumento

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleCreate(e) {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);

    console.log(response);
  }

  return (
    <section className="animeLeft">
      <Head title="Cadastre-se" />

      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleCreate}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}
