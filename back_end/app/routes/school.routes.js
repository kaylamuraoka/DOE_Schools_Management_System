// When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), this sets up routes to determine how the server will respond.

module.exports = (app) => {
  const schools = require("../controllers/school.controller.js");

  var router = require("express").Router();

  // Create a new School
  router.post("/", schools.create);

  // Retrieve all Schools
  router.get("/", schools.findAll);

  // Retrieve all schools with active projects
  router.get("/active", schools.findAllActiveProjects);

  // Retrieve a single School with id
  router.get("/:id", schools.findOne);

  // Update a single School with id
  router.get("/:id", schools.update);

  // Delete a School with id
  router.delete("/:id", schools.delete);

  // Delete all Schools
  router.delete("/:id", schools.deleteAll);

  app.use("/api/schools", router);
};
