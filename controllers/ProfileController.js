var app = angular.module('myApp', ['apollo']);

app.controller('UserController', function($scope, $apollo) {
  var query = gql`
    query {
      user(id: "user_id_here") {
        id
        username
        name
        email
        birthday
        highSchool
      }
    }
  `;
  
  $apollo.query({query: query}).then(function(result) {
    $scope.user = result.data.user;
  });
});
