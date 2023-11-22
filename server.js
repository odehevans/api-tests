const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my Evans' backend application");
});

app.get("/evans", (req, res) => {
  res.send("Hello Evans!");
});

app.listen(3000, () => {
  console.log("Listening");
});