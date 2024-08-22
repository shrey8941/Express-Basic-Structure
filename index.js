const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const product = require("./data.json");
console.log(product);

app.get("/", (req, res) => {
  console.log(product);
  res.send(product);
  res.send("<h1>Start</h1>");
});

// server.listen(, () => {
//   console.log("Server Start 3000", 3000);
// });

app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log("Server listening on PORT", 3000);
});
