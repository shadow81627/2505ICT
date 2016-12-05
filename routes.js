app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl : "Views/home.html"
    })
    .when("/posts", {
      templateUrl : "Views/posts.html"
    })
    .otherwise({
      templateUrl : "Views/home.html"
    });
});