import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import PhotoCommentsForm from "../PhotoCommentsForm";
import styles from "./style.module.css";

const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);

  const { isLogged } = useContext(UserContext);

  useEffect(() => {
    const commentsSectionHeight = commentsSection.current.scrollHeight;
    commentsSection.current.scrollTop = commentsSectionHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${
          props.single ? styles.singlePhoto : ""
        }`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {isLogged && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
};

export default PhotoComments;
