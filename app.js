express =  require("express");
app = express();
var PORT = 3000;


$("body").on("click",".btn", function(){



    app.get(this.val(), function(req, res) {
      });
      
      app.get("/yoda", function(req, res) {
        res.json(yoda);
      });
      
      app.get("/darthmaul", function(req, res) {
        res.json(darthmaul);
      });
      
      app.get("/Obi Wan Kenobi", function(req,res){
        res.json(obiwan)
      })



 path = $(this).val();
 console.log(path);
 queryURL = "https://localhost:3000" + path;




 switch(path){
    case "/tables":
        console.log("/tables")
            goThere();
            getInfo();
        break;
    case"/reservation":
    console.log("/reservation")
            goThere();
        break;
    case"/index":
    console.log("/index")
            goThere();
        break;
    case "submit":
            console.log("submit")
            makeRes();
        break;
    default:
        console.log("What happening?");
        break;

 }
 
});

function makeRes(){



    $.ajax ({

        method: "PUSH",
        url:queryURL
    
    }) .then(function(response){
    
        console.log(response);
    
    }) 

}

function getInfo(){

    $.ajax ({
    
        method: "GET",
        url:queryURL
    
    }) .then(function(response){
    
        console.log(response);

        for (i = 0; i < response.length; i++ ){
        $(".results").append("<p>"+response+"<p>");
    }
    
    }) 
    
    }

function goThere(){

    
    $.ajax ({
    
        method: "GET",
        url:queryURL
    
    }) .then(function(response){
    
      
    
    }) 
    
    }



