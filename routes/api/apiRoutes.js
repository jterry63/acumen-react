const router = require("express").Router();
const surveyController = require("../../controllers/surveyController");

router.get('/users', function(req, res, next) {
  res.locals.connection.query("SELECT * FROM vle2lt3dz5ogjgdk.members", function (error, results, fields) {
   if(error) throw error;
   res.send(JSON.stringify(results));
 });
});


  module.exports = router;


