const express = require("express");
const app = express();

app.get("/:firstnumber/:secondnumber", (req, res) => {
  const firstNumber = parseInt(req.params.firstnumber);
  const secondNumber = parseInt(req.params.secondnumber);
  res.send(
    `Drogi użytowniku suma podanych przez Ciebie liczb to: ${firstNumber +
      secondNumber}`
  );
});

app.listen(3000, () => {
  console.log("Serwer uruchomiony na porcie 3000");
});
