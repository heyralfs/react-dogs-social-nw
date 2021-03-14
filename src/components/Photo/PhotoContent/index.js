import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import Image from "../../Helper/Image";
import PhotoComments from "../PhotoComments";
import PhotoDelete from "../PhotoDelete";
import styles from "./style.module.css";

const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <div className={`${styles.photo} ${single ? styles.singlePhoto : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/dogs-app/perfil/${photo.author}`}>
                @{photo.author}
              </Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/dogs-app/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {photo.idade === "1" ? " ano" : " anos"}
            </li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </div>
  );
};

export default PhotoContent;
