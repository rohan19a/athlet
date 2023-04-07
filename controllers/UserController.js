angular.module('myApp', [])
  .controller('UserController', function($scope) {
    $scope.users = [
      { name: 'John Doe' },
      { name: 'Jane Smith' },
      { name: 'Bob Johnson' }
    ];
  });
