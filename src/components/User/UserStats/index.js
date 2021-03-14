import React, { useEffect } from "react";
import Head from "../../Helper/Head";
import useFetch from "../../../hooks/useFetch";
import { STATS_GET } from "../../../api";
import Loading from "../../Helper/Loading";
import Error from "../../Helper/Error";

//lazy import
const UserStatisGraphs = React.lazy(() => import("../UserStatsGraphs"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);

      request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data && data.length > 0)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatíticas" />
        <UserStatisGraphs data={data} />
      </React.Suspense>
    );
  else
    return (
      <div>
        <h4>Poste fotos para começar a ver suas estatísticas.</h4>
      </div>
    );
};

export default UserStats;
