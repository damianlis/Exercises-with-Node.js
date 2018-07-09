const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static("./public/zadanie01/"));

app.post("/", (req, res) => {
  const { a, b } = req.body;
  if (parseInt(a) % parseInt(b) === 0) {
    res.send("Liczba B jest dzielnikiem liczby A");
  } else {
    res.send("Liczby się nie dzielą :(");
  }
});

app.listen(3000, () => {
  console.log("Serwer uruchomiony na porcie 3000");
});
