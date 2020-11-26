/*
This file sets up Express web server
Author: Kayla Muraoka
*/

// import express and body-parser modules
const express = require("express");
const bodyParser = require("body-parser");

// create an Express app
const app = express();

// Add body-parser middlewares using app.use() method
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple GET route for test
app.get("/", (req, res) => {
  res.json({ message: "Welcome to fainc application." });
});

// set port to 3000, listen for incomming requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
