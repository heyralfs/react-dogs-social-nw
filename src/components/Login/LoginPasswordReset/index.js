import React, { useEffect, useState } from "react";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { PASSWORD_RESET } from "../../../api";
import Error from "../../Helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../../Helper/Head";

export default function LoginPasswordReset() {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");

  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam = params.get("key");
    const loginParam = params.get("login");

    if (keyParam) setKey(keyParam);
    if (loginParam) setLogin(loginParam);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);

      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft" style={{ marginTop: "20vh" }}>
      <Head title="Recuperar senha" />

      <h1 className="title">Redefina sua senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      {error && <Error error={error} />}
    </section>
  );
}
