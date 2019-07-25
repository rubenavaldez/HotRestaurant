$("body").on("click",".btn", function(){







 path = $(this).val();
 console.log(path);
 queryURL = "https://localhost:3000" + path;

 switch(path){
    case "/tables":
        console.log("/tables")
            getInfo()
        break;
    case"/reservation":
    console.log("/reservation")
            goThere()
        break;
    case"/index":
    console.log("/index")
            goThere()
        break;
    case "submit":
            console.log("submit")
            makeRes()
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
        $(".results").append("<p>"+response+"<p>");
    
    }) 
    
    }

function goThere(){

    
    $.ajax ({
    
        method: "GET",
        url:queryURL
    
    }) .then(function(response){
    
      
    
    }) 
    
    }



