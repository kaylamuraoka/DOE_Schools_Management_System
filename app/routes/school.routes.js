// When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), this sets up routes to determine how the server will respond.

module.exports = (app) => {
  const schools = require("../controllers/school.controller.js");

  // Create a new School
  app.post("/schools", schools.create);

  // Retrieve all School
  app.get("/schools", schools.findAll);

  // Retrieve a single School with schoolId
  app.get("/schools/:schoolId", schools.findOne);

  // Update a School with schoolId
  app.put("/schools/:schoolId", schools.update);

  // Delete a School with schoolId
  app.delete("/schools/:schoolId", schools.delete);

  // Create a new School
  app.delete("/schools", schools.deleteAll);
};
