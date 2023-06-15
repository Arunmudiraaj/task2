import React from "react";
import styles from "./Note.module.css";
import { AiFillDelete } from "react-icons/ai";
const Note = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>{props.title}</div>
        <div>{props.description}</div>
      </div>
      <div className={styles.actions}>
        <span className={styles.timestamp}>{props.timestamp}</span>
        <AiFillDelete
          onClick={() => {
            props.deleteHandler(props.id);
          }}
        />
      </div>
    </div>
  );
};

export default Note;
