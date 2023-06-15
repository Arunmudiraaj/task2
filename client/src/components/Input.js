import React, { useState } from "react";
import styles from "./Input.module.css";
const Input = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addItem = () => {
    if (title === "" || description === "") {
      alert("Enter all fields");
      return;
    }
    let currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Note: Months are zero-based, so we add 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const timestamp = `${day}/${month}/${year} - ${hours}:${minutes}`;

    const item = {
      id: Math.random(),
      title: title,
      desc: description,
      timestamp: timestamp,
    };
    setTitle("");
    setDescription("");
    props.addNote(item);
  };
  return (
    <>
      <div className={styles.container}>
        <input
          value={title}
          className={styles.title}
          type="text"
          placeholder="Add title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className={styles.input}
          type="text"
          placeholder="Take a note..."
        />
        <button onClick={addItem} className={styles.addBtn}>
          Add
        </button>
      </div>
    </>
  );
};

export default Input;
