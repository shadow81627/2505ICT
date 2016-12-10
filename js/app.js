var app = angular.module("app", ["ngRoute"]);
app.controller('myCtrl', function($scope, $route, $routeParams, $location) {
    $scope.title = "KnowledgeFlux";
    $scope.keywords = "KnowledgeFlux";
});