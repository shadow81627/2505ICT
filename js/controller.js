var controller = {};
var flickr = {};
var flickrAuth = {};
var view = {};

$(function() {
    
    //flickr.getInteresting(view.displayThumb);
    
    $("#search").submit(function(event){
        event.preventDefault();
        flickr.getSearch();
    });

    $("#login-btn").click(function(){
        flickrAuth.login();
    });
    
    /**
     * When the splash button is clicked the thumbnails will be displayed and 
     * the splash screen button will be hidden.
     *
     */
    $("#rightMenu-btn").click(function(){
        $("#right-sidenav").slideToggle(500);
    });
    
     $(".chat-heading").click(function(){
        $(".chat-body").slideToggle(500);
    });
    
    /**
     * When the back button is pressed the splash screen is displayed and the 
     * thumbnails are hidden.
     *
     */
     $("#back-btn").click(function() {
         $("#splash").show();
         $("#thumbnails").hide(2000);
         $("#back-btn").hide();
     });
     
    
});

controller.getUsername = function(username){
    view.displayUser(username);
}