/*
This file sets up Express web server
Author: Kayla Muraoka
*/

// import express, body-parser and cors modules:
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create an Express app
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// Add body-parser middlewares using app.use() method
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// simple GET route for test
app.get("/", (req, res) => {
  res.json({ message: "Welcome to fainc application." });
});

// include routes in server.js
require("./app/routes/school.routes.js")(app);

// listen on port 8080 for incoming requests.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
