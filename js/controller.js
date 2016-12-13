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
    
     $("#mark-heading").click(function(){
        $("#mark-chat").slideToggle(500);
    });
    
    $("#peter-heading").click(function(){
        $("#peter-chat").slideToggle(500);
    });
    
    $("#rebecca-heading").click(function(){
        $("#rebecca-chat").slideToggle(500);
    });
    
    $("#close-chat-1").click(function(){
        $("#mark-chat").hide();
    });
    
    $("#close-chat-2").click(function(){
        $("#peter-chat").hide();
    });
    
    $("#close-chat-3").click(function(){
        $("#rebecca-chat").hide();
    });
    
    $("#mark-bar").click(function(){
        $("#mark-chat").show();
        $("#mark-chat-body").show(500);
    });
    
    $("#peter-bar").click(function(){
        $("#peter-chat").show();
        $("#peter-chat-body").show(500);
    });
    
    $("#rebecca-bar").click(function(){
        $("#rebecca-chat").show();
        $("#rebecca-chat-body").show(500);
    });
    
    $("#nav-toggler").click(function(){
        $("#left-sidenav").toggle();
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