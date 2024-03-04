const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

const mainPath = "./data/books.json";
const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", function (req, res) {
  const data = fs.readFileSync("./src/data/data.json", { encoding: "utf8" });
  res.send(data);
});

app.post("/test", function async(req, res) {
  res.send("Test");
});

app.listen(port, () => console.log(`Serwer zaczał pracę na porcie ${port}`));
