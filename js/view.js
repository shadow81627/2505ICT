 /**
 * Displays a given set of photos.
 */
view.displayThumb = function(result) {
    var htmlStr = '<div class="card"><div class="card-block text-xs-center"><h4 class="card-title">Create a Post</h4><i class="fa fa-plus-square-o fa-5x" aria-hidden="true"></i> <form class="form-inline float-xs-right"><input class="form-control" type="text" placeholder="Write you post here"><button class="btn btn-outline-success" type="submit">Create</button></form></div></div>';
    for (var i = 0; i < 4; i++){

        htmlStr += '<div class="card"><img class="card-img-top img-fluid" src="' + result[i].thumbnail +  '" alt="' + result[i].description + '"><div class="card-block"><h4 class="card-title">' + result[i].description + '</h4></div></div>'
        
    }
    $("#thumbnails").html(htmlStr);
}


view.displayUser = function(username){
   $('#login-btn').replaceWith($('<p id="login-btn">' + username + '</p>'));
}