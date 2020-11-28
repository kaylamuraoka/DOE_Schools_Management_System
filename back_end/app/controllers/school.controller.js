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
    active_project: req.body.active_project,
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

// Find a single School with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  School.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving School with id: ${id}.`,
      });
    });
};

// Update a School identified by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  School.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "School was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update School with id: ${id}. Maybe School was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Tutorial with id: ${id}.`,
      });
    });
};

// Delete a School with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  School.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "School was deleted successfully.",
        });
      } else {
        res.send({
          message: `Cannot delete School with id: ${id}. Maybe School was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete School with id: ${id}.`,
      });
    });
};

// Delete all Schools from the database.
exports.deleteAll = (req, res) => {
  School.destroy({
    where: {},
    truncate: flase,
  })
    .then((nums) => {
      res.send({ message: `${nums} Schools were deleted successfully.` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while removing all schools.",
      });
    });
};

// Find all Schools with Active Repairs/Construction (active_project = true)
exports.findAllActiveProjects = (req, res) => {
  School.findAll({ where: { active_project: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving schools.",
      });
    });
};
