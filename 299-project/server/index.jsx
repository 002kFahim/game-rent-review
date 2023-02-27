const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log("Running"));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "gamefixdb",
});

app.get("/api/reviewI", (req, res) => {
  const sqlSelect = "Select * From review";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
