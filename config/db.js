const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.connectionString;

mongoose
  .connect(url)
  .then(console.log("Nice"))
  .catch((err) => {
    throw err;
  });
