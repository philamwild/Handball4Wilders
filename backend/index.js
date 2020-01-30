const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("Bienvenue sur Express");
});

app.get("/product", (req, res) => {
  response.send("liste des produits");
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }

  console.log(`Server is listening on ${port}`);
});
