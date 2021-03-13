import React from "react";
import Feed from "../../components/Feed";
import Head from "../../components/Helper/Head";

export default function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Feed" description="Home do site Dogs" />
      <Feed />
    </section>
  );
}
