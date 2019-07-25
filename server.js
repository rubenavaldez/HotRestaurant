// express npm packages 

var express = require("express");
var path = require("path");
// Setting up  express server

var app = express();

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
  uniqueID: "7B2222"
}];

// Assign port for listener
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

app.get("/", function(req, res) {
  // Serves Homepage
  res.sendFile(path.join(__dirname, "index.html"));
  //res.sendFile(path.join(__dirname, "style.css")); just an example of how to server css to the browser
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

  app.get("/reservation", function(req, res) {
    var chosen = req.params.reservation;
  

  for (var i = 0; i < reservation.length; i++) {
    if (chosen === reservation[i].name) {
      return res.json(reservation[i]);
    }
  }
  
res.json(false);
});

// Create New reservation - takes in JSON input
app.post("/api/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newreservation = req.body;

  console.log(newreservation);

  // We then add the json the user sent to the character array
  reservation.push(newreservation);

  // We then display the JSON to the users
  res.json(newresvation);
});



  

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);



// LISTENER


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
  