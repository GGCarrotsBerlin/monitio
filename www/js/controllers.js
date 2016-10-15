console.log('starter');


angular.module('starter.controllers', [])

.controller('RegisterCtrl', function($scope, $ionicHistory) {
  console.log('mrkva register');

$ionicHistory.nextViewOptions({
  disableBack: true
});
})

.controller('ImportCtrl', function($scope,$rootScope, $ionicHistory) {
  console.log('mrkva import');
//   $ionicHistory.nextViewOptions({
//    disableBack: true
// });

console.log($rootScope);
})

.controller('DashCtrl', function($scope) {
  console.log('mrkva dash');
})

.controller('ChatsCtrl', function($scope, Chats) {
  console.log('chats register');
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
