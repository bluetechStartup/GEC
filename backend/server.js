const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const app = express();
const userRoutes=require("./routes/userRoutes.js")
const connectDB = require("./config/db.js");
const cors=require('cors')
dotenv.config();
connectDB();
app.use(express.json())
app.use(cors())
app.get("/", (req, res, next) => {
  res.json("Karibu muri system ya Gestion des courrier !!");
});

const PORT = process.env.PORT || 3005;
app.use('/api/users',userRoutes)
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold
  )
);
