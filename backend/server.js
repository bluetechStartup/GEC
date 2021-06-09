const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();

const connectDB = require("./config/db.js");

dotenv.config();

connectDB();

app.get("/", (req, res, next) => {
  res.json("Karibu muri system ya Gestion des courrier !!");
});
const PORT = process.env.PORT || 3005;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
);
