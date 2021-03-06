import React from "react";
import { useParams } from "react-router-dom";
import Feed from "../../components/Feed";
import Head from "../../components/Helper/Head";

const Profile = () => {
  const { user } = useParams();

  return (
    <section className="container mainContainer">
      <Head title="Perfil" />

      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default Profile;
