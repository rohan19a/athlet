angular.module('myApp', [])
.controller('MessagesController', function($scope) {
  $scope.currentUser = 'John Doe';
  $scope.conversations = [
    {
      id: 1,
      name: 'Alice',
      messages: [
        {
          sender: 'Alice',
          content: 'Hi John!'
        },
        {
          sender: 'John Doe',
          content: 'Hey Alice!'
        }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      messages: [
        {
          sender: 'Bob',
          content: 'Hello John!'
        },
        {
          sender: 'John Doe',
          content: 'Hi Bob!'
        },
        {
          sender: 'Bob',
          content: 'How are you?'
        }
      ]
    },
    {
      id: 3,
      name: 'Charlie',
      messages: [
        {
          sender: 'John Doe',
          content: 'Hi Charlie!'
        },
        {
          sender: 'Charlie',
          content: 'Hello John!'
        }
      ]
    }
  ];
});
