import styles from "./App.module.css";
import Header from "./components/Header";
import Input from "./components/Input";
import AllNotes from "./components/AllNotes";
import { useEffect, useState } from "react";
function App() {
  const [allNotes, setAllNotes] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("notes")) {
      setAllNotes(JSON.parse(localStorage.getItem("notes")));
    } else {
      localStorage.setItem("notes", "[]");
    }
  }, []);

  const add = (item) => {
    let arr = [...allNotes];
    arr.push(item);
    setAllNotes(arr);
    localStorage.setItem("notes", JSON.stringify(arr));
  };

  const deleteNote = (id) => {
    let arr = [...allNotes];
    let newArr = arr.filter((e) => e.id !== id);
    setAllNotes(newArr);
    localStorage.setItem("notes", JSON.stringify(newArr));
  };
  return (
    <div className={styles.container}>
      <Header />
      <Input addNote={add} />
      <AllNotes allNotes={allNotes} removeNote={deleteNote} />
    </div>
  );
}

export default App;
