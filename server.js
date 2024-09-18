const { log } = require("console");
//Mongose use for connect your DataBase
const mongoose = require("mongoose");
// URL
const express = require("express");
// Body se data transfer krta
const bodyParser = require("body-parser");
// Connect with Database URL
require("dotenv").config();
const app = express();
app.use(express.json());
const db = process.env.mongoURL;
// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDb Connect Successfully"))
  .catch((err) => {
    console.log("MongoDB connnection Error!", err);
  });
app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/",(req,res)=>{
  res.send("You in Home")
})
const port = 5000;
app.listen(port, () => {
  console.log("Server is Running on Port " + port);
});
