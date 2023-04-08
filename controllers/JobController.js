  //import angular 
  var app = angular.module('myApp', ['apollo']);
  
  app.controller('JobsController', function($scope, $apollo) {
    var query = gql`
      query {
        jobs(limit: 100) {
          id
          title
          company
          location
          description
        }
      }
    `;
    
    $apollo.query({query: query}).then(function(result) {
      $scope.jobs = result.data.jobs;
    });
  });
  

