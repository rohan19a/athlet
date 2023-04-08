var app = angular.module('myApp.NavController', []);
app.controller('NavController', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    }
  
    $scope.goToHome = function() {
      $location.path('/');
    }
    $scope.signup = function() {
        $window.location.href = '#/signup';
    }
      $scope.companyName = 'Athlet';
      $scope.tagline = 'Welcome to our website';
      $scope.login = function() {
          $window.location.href = '#/home';
      }

  });

  app.controller('myCtrl', function($scope, $location) {
    $scope.companyName = 'Athlet';
    $scope.tagline = 'Welcome to our website';
  });

  app.controller('HomeController', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    }
  
    $scope.goToHome = function() {
      $location.path('/');
    }
    $scope.signup = function() {
        $window.location.href = '#/signup';
    }
      $scope.companyName = 'Athlet';
      $scope.tagline = 'Welcome to our website';
      $scope.login = function() {
          $window.location.href = '#/home';
      }
    });

  app.controller('WelcomeController', function($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    }
  
    $scope.goToHome = function() {
      $location.path('/');
    }
    $scope.signup = function() {
        $window.location.href = '#/signup';
    }
      $scope.companyName = 'Athlet';
      $scope.tagline = 'Welcome to our website';
      $scope.login = function() {
          $window.location.href = '#/home';
      }

  });
