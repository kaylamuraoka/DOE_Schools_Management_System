// file creating a connection to the database using configuration from ../config/db.config.js

//  import the mysql module
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// create a connection to the database using the username and password from your MySQL database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
