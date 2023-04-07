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

    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })

    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    })

    .when('/profile', {
      templateUrl: 'profile.html',
      controller: 'ProfileController'
    })

    .when('/login', {
      templateUrl: 'login.html',
      controller: 'LoginController'
    })

    .otherwise({
      redirectTo: '/home'
    });

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

})
