const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

async function start() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/wikiDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

start();





//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});