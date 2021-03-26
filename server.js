const express = require("express");
const bodyParser = require("body-parser");
// var connection = require("./client/connection.js")
const routes = require("./routes");
const mysql = require('mysql');
const path = require('path');
var cors = require('cors');


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 4007;
app.use(cors());







var connection = mysql.createConnection({
  use_env_variable: "JAWSDB_URL",
  user: 'xtzk6cvsnpsc4s9z',
  password: 'ku5yu5p1h0c2fi4c',
  port: 3306,
  dialect: 'mysql',
  host: 'y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com'

});

app.get("/users", function (req, res) {
  var dbQuery = "SELECT * FROM vle2lt3dz5ogjgdk.members";

  connection.query(dbQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/users/new', function(req, res, next) {
  connection.query(`insert into vle2lt3dz5ogjgdk.members(name, surname, email) values('${req.body.name}', '${req.body.surname}', '${req.body.email}')`, function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static("public"));
// app.use(express.static("client/build"));


// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function () {

// app.use(routes);

// require("./routes/api/apiRoutes")(app);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("==> Connected to JawsDB as id " + connection.threadId);
});


app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});


