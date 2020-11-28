// file creating a connection to the database using configuration from ../config/db.config.js
const dbConfig = require("../config/db.config.js");
//  import the sequelize module
const Sequelize = require("sequelize");
// create a connection to the database using the username and password from your MySQL database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.schools = require("./school.model.js")(sequelize, Sequelize);

module.exports = db;
