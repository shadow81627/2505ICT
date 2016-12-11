app.config(function($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl : "Views/home.html"
    })
    .when("/posts2", {
      templateUrl : "Views/posts2.html"
    })
    .when("/groups", {
      templateUrl : "Views/groups.html"
    })
    .otherwise({
      templateUrl : "Views/home.html"
    });
});