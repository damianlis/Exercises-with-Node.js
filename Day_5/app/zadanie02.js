const express = require("express");
const app = express();

let name = "";

app.get("/name/set/:imie", (req, res) => {
  name = req.params.imie;
  res.send(`Użytkowniku podałeś imię ${name}`);
});
app.get("/name/show", (req, res) => {
  res.send(`Podane wcześniej imię to ${name}`);
});
app.get("/name/check", (req, res) => {
  if (name !== "") {
    res.send(`Imię zostało zapisane w programie i jest to ${name}`);
  } else {
    res.send("Imienia nie zapisano jeszcze w programie");
  }
});

app.listen(3000, () => {
  console.log("Serwer uruchomiony na porcie 3000");
});
