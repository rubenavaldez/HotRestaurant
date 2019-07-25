





$("body").on("click",".btn", function(){

 var path = $(".btn").val();

 var queryURL = "https://localhost:3000" + path;

 switch(path){
    case "/tables":
            getInfo()
        break;
    case"/reservation":
            makeRes()
        break;
    case"/index":
            getInfo()
        break;
        


 }
 
function getInfo(){

$.ajax ({

    method: "GET",
    url:queryURL

}) .then(function(response){

    console.log(response);

}) 

}

function makeRes(){

    $.ajax ({

        method: "PUSH",
        url:queryURL
    
    }) .then(function(response){
    
        console.log(response);
    
    }) 

}

});