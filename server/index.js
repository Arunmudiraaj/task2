const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "lonewarrior70951",
});
db.getConnection((err, connection) => {
  if (err) {
    console.log("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
  connection.release();
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO notes (title, description) VALUES ('cook food', 'make lunch');";
  db.query(sqlInsert, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send("Hello wj");
  });
});
app.listen(3001, () => {
  console.log("Running on port 3001");
});
