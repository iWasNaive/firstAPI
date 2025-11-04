const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("WEEElcome");
});

app.listen(process.env.PORT, () => {
  console.log("Back Start");
});
