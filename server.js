const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static("public"));
}
app.use(routes);


app.listen(PORT, function() {
  console.log(
    `🌎 ==> API Server now listening on PORT http//localhost:${PORT}`
  );
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("==> Connected to JawsDB as id " + connection.threadId);
});

module.exports = app;
