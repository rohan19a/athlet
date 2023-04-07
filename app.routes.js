angular.module('linkd_sport', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

  $routeProvider

    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
        })

    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .when('/messaging', {
      templateUrl: 'views/messaging.html',
      controller: 'messageController'
    })

    .when('/contact', {
      templateUrl: 'views/jobs.html',
      controller: 'jobsController'
    })

    .when('/profile', {
      templateUrl: 'profile.html',
      controller: 'ProfileController'
    })

    .when('/login', {
      templateUrl: 'view/login.html',
      controller: 'LoginController'
    })

    .otherwise({
      redirectTo: '/home'
    });

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

})
