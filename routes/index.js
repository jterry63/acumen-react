const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/apiRoutes");

// API Routes
// router.use("./api/apiRoutes", apiRoutes);
// router.use(express.static("client/build"));

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;