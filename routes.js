app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl : "Views/home.html"
    })
    .when("/post", {
      templateUrl : "Views/posts.html"
    })
    .otherwise({
      templateUrl : "Views/home.html"
    });
});