app.controller('myCtrl', function($scope, $http) {
    $scope.companyName = "Athlet";
    $scope.posts = [];

    $http.post('/graphql', {
        query: `
            query {
                posts {
                    id
                    title
                    content
                    author {
                        id
                        username
                    }
                }
            }
        `
    }).then(function(response) {
        $scope.posts = response.data.data.posts.slice(0, 100);
    });

    $scope.notifications = [
        { text: 'You have a new message', read: false },
        { text: 'Your post was liked by Jane', read: true },
        { text: 'New job posting: Front-end Developer', read: false }
    ];

    $scope.showNotifications = function() {
        $scope.notificationsVisible = !$scope.notificationsVisible;
    };
});
