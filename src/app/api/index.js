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
  res.json(data);
});

app.post("/test", function async(req, res) {
  let currentData = [];

  try {
    const dataBuffer = fs.readFileSync("./src/data/data.json", {
      encoding: "utf8",
    });

    if (dataBuffer.length > 0) {
      currentData = JSON.parse(dataBuffer.toString());
    }
  } catch (err) {
    console.error("Błąd podczas odczytu pliku:", err);
  }

  const newData = {
    id: req.body.data.id,
    role: req.body.data.role,
    content: req.body.data.content,
  };

  if (
    newData.role !== "system" &&
    !currentData.some((obj) => obj.id === newData.id)
  ) {
    currentData.push(newData);
  }

  try {
    fs.writeFileSync(
      "./src/data/data.json",
      JSON.stringify(currentData, null, 2)
    );
    res.send("Pomyślnie dodano nowe dane do pliku.");
  } catch (err) {
    console.error("Błąd podczas zapisu do pliku:", err);
    res.status(500).send("Wystąpił błąd podczas zapisu do pliku.");
  }
});

app.listen(port, () => console.log(`Serwer zaczał pracę na porcie ${port}`));
