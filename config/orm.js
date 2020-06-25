const connection = require("./connection.js");
let mysql = require("mysql");
const orm = {
  selectAll: function (table, cb) {
    let queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, colName, newValue, cb) {
    let queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, colName, newValue], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, colName, newValue, id, cb) {
    let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [table, colName, newValue, id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;