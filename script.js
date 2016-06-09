
$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var myData = {
    
      't': $('input[name=t]').val()
    }
         $.ajax({  
          url: "http://www.omdbapi.com/?",
          data: myData,
             dataType: "json", 
           success: function(response){
            var pictureUrl = response.poster;
           $("#movie-title").html(response.title);
           $("#poster").attr("src",response.Poster);
                console.log(response);} 
    });