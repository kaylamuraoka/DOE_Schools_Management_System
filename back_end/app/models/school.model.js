/* This file defines the constructor for School object here, and use the database connection (./db.js) to write CRUD functions
- add a new school
- find a School by id
- get all Schools
- update a School by id
- remove a School
- remove all Schools
*/

// School model is simple, it contains fields: name, address, district, complex_area, complex, last_renovated
module.exports = (sequelize, Sequelize) => {
  const School = sequelize.define("school", {
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    district: {
      type: Sequelize.STRING,
    },
    complex_area: {
      type: Sequelize.STRING,
    },
    complex: {
      type: Sequelize.STRING,
    },
    active_project: {
      type: Sequelize.BOOLEAN,
    },
    last_renovated: {
      type: Sequelize.DATEONLY,
    },
  });

  return School;
};

// // Constructor
// const School = (school) => {
//   this.name = school.name;
//   this.address = school.address;
//   this.district = school.district;
//   this.complex_area = school.complex_area;
//   this.complex = school.complex;
//   this.last_renovated = school.last_renovated;
// };

// School.create = (newSchool, result) => {
//   sql.query("INSERT INTO schools SET ?", newSchool, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("Added school: ", { id: res.insertId, ...newSchool });
//     result(null, { id: res.insertId, ...newSchool });
//   });
// };

// School.findById = (schoolId, result) => {
//   sql.query(`SELECT * FROM schools WHERE id = ${schoolId}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("Found school: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found School with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// School.getAll = (result) => {
//   sql.query("SELECT * FROM schools", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("schools: ", res);
//     result(null, res);
//   });
// };

// School.updateById = (id, school, result) => {
//   sql.query(
//     "UPDATE schools SET name = ?, address = ?, district = ?, complex_area = ?, complex = ?, last_renovated = ? WHERE id = ?",
//     [
//       school.name,
//       school.address,
//       school.district,
//       school.complex_area,
//       school.complex,
//       school.last_renovated,
//     ],
//     (err, res) => {
//       if (err) {
//         console.log("error ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found School with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("Updated school: ", { id: id, ...school });
//       result(null, { id: id, ...school });
//     }
//   );
// };

// School.remove = (id, result) => {
//   sql.query("DELETE FROM schools WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found School with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("Deleted school with id: ", id);
//     result(null, res);
//   });
// };

// School.removeAll = (result) => {
//   sql.query("DELETE FROM schools", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`Deleted ${res.affectedRows} schools`);
//     result(null, res);
//   });
// };

// module.exports = School;
