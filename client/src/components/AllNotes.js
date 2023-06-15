import React from "react";
import Note from "./Note";
import styles from "./AllNotes.module.css";
const AllNotes = (props) => {
  // const notesArr = JSON.parse(props.allNotes);
  const del = (id) => {
    props.removeNote(id);
  };
  return (
    <div className={styles.container}>
      {props.allNotes.map((item) => (
        <Note
          title={item.title}
          description={item.desc}
          id={item.id}
          deleteHandler={del}
          timestamp={item.timestamp}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default AllNotes;
