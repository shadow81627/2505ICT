 /**
 * Displays a given set of photos.
 */
view.displayThumb = function(result) {
    var htmlStr = "";
    for (var i = 0; i < 8; i++){

        htmlStr += '<div class="card"><img class="card-img-top img-fluid" src="' + result[i].thumbnail +  '" alt="' + result[i].description + '><div class="card-block"><h4 class="card-title">' + result[i].description + '</h4></div></div>'
        
    }
    $("#thumbnails").html(htmlStr);
}


view.displayUser = function(username){
   $('#login-btn').replaceWith($('<p id="login-btn">' + username + '</p>'));
}