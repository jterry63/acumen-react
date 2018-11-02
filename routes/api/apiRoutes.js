const router = require("express").Router();
const surveyController = require("../../controllers/surveyController");

router.get("/api/data", function (req, res) {
  var dbQuery = "SELECT * FROM vle2lt3dz5ogjgdk.surveys";

  connection.query(dbQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
    
  });
});

  module.exports = router;


