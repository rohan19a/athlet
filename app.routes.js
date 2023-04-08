var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode({
  enabled:true
});
  $routeProvider
    .when("/", {
      templateUrl: "views/welcome.html",
      controller: "WelcomeController"
    })
    .when("/signup", {
      templateUrl: "views/signup.html",
      controller: "SignupController"
    })
    .when("/login", {
      templateUrl: "views/login.html",
      controller: "LoginController"
    })
    .otherwise({
      redirectTo: "/"
    });

});