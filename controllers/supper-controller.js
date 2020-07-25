var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var meal = require("../models/meal.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  meal.all(function(data) {
    var hbsObject = {
      meals: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/meals", function(req, res) {
  meal.create(["title", "eaten"], [req.body.title, req.body.eaten], function(result) {
    // Send back the ID of the new meal
    res.json({ id: result.insertId });
  });
});

router.delete("/api/meals/:id", function(req,res) {
  var condition = "id = " + req.params.id;

  meal.delete( condition, function (result) {
    res.json({ id: result.insertId });
  })

});

router.put("/api/meals/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  meal.update(
    {
      eaten: req.body.eaten
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
