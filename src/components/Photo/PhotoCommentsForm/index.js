import React, { useState } from "react";
import { ReactComponent as Enviar } from "../../../assets/enviar.svg";
import useFetch from "../../../hooks/useFetch";
import { COMMENT_POST } from "../../../api";
import Error from "../../Helper/Error";
import styles from "./style.module.css";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState("");

  const { request, error, loading } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();

    const token = window.localStorage.getItem("token");
    const { url, options } = COMMENT_POST(id, { comment }, token);

    const { response, json } = await request(url, options);

    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment("");
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          id="comment"
          name="comment"
          placeholder="Comentário..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        {loading ? (
          <button className={styles.button} disabled>
            <Enviar />
          </button>
        ) : (
          <button className={styles.button}>
            <Enviar />
          </button>
        )}
        {error && <Error error={error} />}
      </form>
    </>
  );
};

export default PhotoCommentsForm;
