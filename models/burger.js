const orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(newName, cb) {
    orm.insertOne("burgers", "burger_name", newName, function(res) {
      cb(res);
    });
  }


};

module.exports = burger;
