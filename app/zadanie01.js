const MY_PWD_HASH = "5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e";
const crypto = require("crypto");

const tablePasswords = [
  "??TegoHasła",
  "CodersLab",
  "Node.js Szyfruje Pliki",
  "Zaźółć Gęślą Jaźń",
  "Moje Haslo 1@3!",
  "111#$((@)n",
  "Dzisiaj Szyfruje 83"
];

tablePasswords.forEach(password => {
  if (crypto.createHmac("sha256", password).digest("hex") === MY_PWD_HASH) {
    console.log(`To jest to hasło ${password} i z algorytmem funkcji "sha256"`);
  } else if (
    crypto.createHmac("sha512", password).digest("hex") === MY_PWD_HASH
  ) {
    console.log(`To jest to hasło ${password} i z algorytmem funkcji "sha512"`);
  } else if (crypto.createHmac("md5", password).digest("hex") === MY_PWD_HASH) {
    console.log(`To jest to hasło ${password} i z algorytmem funkcji "md5"`);
  } else if (
    crypto.createHmac("rmd160", password).digest("hex") === MY_PWD_HASH
  ) {
    console.log(`To jest to hasło ${password} i z algorytmem funkcji "rmd160"`);
  }
});
