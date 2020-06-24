const connection = require("./connection.js");
const orm = {
    selectAll: function(table) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(table, colName, newValue) {
      var queryString = "INSERT INTO ?? (??) VALUES (?);";
      console.log(queryString);
      connection.query(queryString, [table, colName, newValue], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(table, colName, newValue, id) {
      var queryString =
       "UPDATE ?? SET ?? = ? WHERE id = ?;";
  
      connection.query(
        queryString,
        [table, colName, newValue, id],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;