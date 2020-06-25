const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let output = {
      burger: data
    };
    //console.log(output);
    res.render("index", output);
  });
});

router.post("/api/add-burger", function(req, res) {
  burger.insertOne( [req.body.name], function(data) {
//console.log(data);
  });
});





module.exports = router;
