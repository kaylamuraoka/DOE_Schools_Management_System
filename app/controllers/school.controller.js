const db = require("./../models");
const School = db.schools;
const Op = db.Sequelize.Op;

// Create and Save a new School
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a School
  const school = {
    name: req.body.name,
    address: req.body.address,
    district: req.body.district,
    complex_area: req.body.complex_area,
    complex: req.body.complex_area,
    last_renovated: req.body.last_renovated,
  };

  // Save School in the database
  School.create(school)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding the School.",
      });
    });
};

// Retrieve all Schools from the database - find by name from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  School.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving schools.",
      });
    });
};

// Find a single School with a schoolId
exports.findOne = (req, res) => {
  School.findById(req.params.customerId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found School with id ${req.params.customerId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving School with id " + req.params.schoolId,
        });
      }
    } else res.send(data);
  });
};

// Update a School identified by the schoolId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  School.updateById(req.params.schoolId, new School(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found School with id ${req.params.schoolId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating School with id " + req.params.schoolId,
        });
      }
    } else res.send(data);
  });
};

// Delete a School with the specified schoolId in the request
exports.delete = (req, res) => {
  School.remove(req.params.schoolId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found School with id ${req.params.schoolId}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete School with id " + req.params.schoolId,
        });
      }
    } else res.send({ message: `School was deleted successfully!` });
  });
};

// Delete all Schools from the database.
exports.deleteAll = (req, res) => {
  School.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all schools.",
      });
    else res.send({ message: `All Schools were deleted successfully!` });
  });
};
