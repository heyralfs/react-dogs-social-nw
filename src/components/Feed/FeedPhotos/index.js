import { useEffect } from "react";
import FeedPhotosItem from "../FeedPhotosItem";
import useFetch from "../../../hooks/useFetch";
import { PHOTOS_GET } from "../../../api";
import Error from "../../Helper/Error";
import Loading from "../../Helper/Loading";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page: page, total, user });
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
        {data && !data.length > 0 && (
          <div className={styles.noPhotosYet}>
            <h1>Ops!</h1>
            <h3>Parece que você ainda não possui fotos.</h3>
            <p>
              <Link to="/dogs-app/conta/postar">Poste uma foto</Link> para
              visualizá-la aqui ou{" "}
              <Link to="/dogs-app/">continue navegando pelo feed</Link> e
              interaja com publicações de outros usuários.
            </p>
          </div>
        )}
      </>
    );
  else return null;
};

export default FeedPhotos;
