var app = angular.module('myApp', []);

app.controller('loginCtrl', function($scope) {
	$scope.login = function() {
		// Write your login logic here
		if ($scope.email == 'user@example.com' && $scope.password == 'password') {
			// Successful login, navigate to dashboard
			window.location.href = 'dashboard.html';
		} else {
			// Login failed, display error message
			$scope.error = 'Invalid email or password';
		}
	};
});
