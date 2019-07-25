express =  require("express");
app = express();
var PORT = 3000;


$("body").on("click",".btn", function(){



    app.get(this.val(), function(req, res) {
      });
      
      app.get("/tables", function(req, res) {
        res.json(waitList);
        $(".results").append("<p>"+res+"<p>");
      });

    // Question: What does this code do?
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var newTable = {
          name: $("#userName").val().trim(),
          phone: $("#userNumber").val().trim(),
          email: $("#userEmail").val().trim(),
          uniqueID: $("#userID").val().trim()
        };
  
        // Question: What does this code do??
        $.post("submit", newTable)
          .then(function(data) {
            console.log("reservation.html", data);
            alert("Adding...");
          });
      });

 })


