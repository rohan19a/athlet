var app = angular.module('myApp', ['apollo']);

app.controller('ConnectionsController', function($scope, $apollo) {
  var query = gql`
    query {
      user(id: "123") {
        connections {
          id
          username
          name
        }
      }
    }
  `;
  
  $apollo.query({query: query}).then(function(result) {
    $scope.connections = result.data.user.connections;
  });

  $scope.viewProfile = function(connection) {
    // TODO: Implement code to view connection's profile
  };
});
