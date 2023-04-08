var app = angular.module('myApp', ['ngRoute']);
app.controller('NavController', function($scope, $location, $window) {
    $scope.companyName = 'Athlet';

    $scope.isActive = function(route) {
      return route === $location.path();
    }

    $scope.gotoPage = function(page) {
      $location.path(page);
    }
  
    $scope.goToHome = function() {
      $location.path('/');
    }
    $scope.signup = function() {
        $location.path('/signup');
        console.log($location.path());
      window.location.reload();
    }
      $scope.companyName = 'Athlet';
      $scope.tagline = 'Welcome to our website';
      $scope.login = function() {
        $location.path('/');
          $window.location.reload();
    }

  });