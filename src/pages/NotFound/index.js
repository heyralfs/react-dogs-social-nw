import React from "react";
import Head from "../../components/Helper/Head";

const NotFound = () => {
  return (
    <div className="container mainContainer">
      <Head title="Erro 404" />
      <h1 className="title">Ops!</h1>
      <h2 style={{ margin: "2rem 0 1rem 0" }}>Página não encontrada :(</h2>
      <p>Erro: 404</p>
    </div>
  );
};

export default NotFound;
