// express npm packages 

var express = require("express");
var path = require("path");
// Setting up  express server

var app = express();

// Assign port for listener
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

app.get("/", function(req, res) {
  // Serves Homepage
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

  // app.get("/reservation", function(req, res) {
  //   var chosen = req.params.reservation;
  // });


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// OBJECT ARRAY

var reservation = [{
    name: "Will Berring",
    phone: "520-555-1212",
    email: "will@example.com",
    uniqueID: "1A2000"
  }];

  var waitList = [{
    name: "Ruben Valdez",
    phone: "520-555-8000",
    email: "ruben@example.com",
    uniqueID: "7BA2222"
  }];

// LISTENER


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
  