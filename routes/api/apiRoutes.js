const router = require("express").Router();
const surveyController = require("../../controllers/surveyController");
router
  .route("/api/data")
  .get(surveyController.getAll)

  module.exports = router;


