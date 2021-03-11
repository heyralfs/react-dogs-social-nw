import React from "react";
import { PHOTO_DELET } from "../../../api";
import styles from "./style.module.css";
import useFetch from "../../../hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleDelete() {
    const confirm = window.confirm("Tem certeza que deseja deletar a foto?");

    if (confirm) {
      const token = window.localStorage.getItem("token");
      const { url, options } = PHOTO_DELET(id, token);

      const { response } = await request(url, options);

      if (response.ok) window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button className={styles.delete} onClick={handleDelete}>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
