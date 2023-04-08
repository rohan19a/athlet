var app = angular.module('myApp', ['apollo']);
app.controller('SignupController', function($scope, $apollo, $http) {
  $scope.signupData = {};
  
  $scope.signup = function() {
    var mutation = gql`
      mutation($signupData: SignupInput!) {
        createUser(username: $signupData.username, password: $signupData.password, name: $signupData.name, email: $signupData.email, birthday: $signupData.birthday, highSchool: $signupData.highSchool) {
          id
          username
          name
          email
          birthday
          highSchool
        }
      }
    `;
    
    $apollo.mutate({
      mutation: mutation,
      variables: {
        signupData: $scope.signupData
      }
    }).then(function(result) {
      console.log('User created:', result.data.createUser);
      // redirect to user profile page or login page
    }).catch(function(error) {
      console.error('Error creating user:', error);
      // display error message to user
    });
  };
});
