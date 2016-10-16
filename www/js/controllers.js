console.log('starter');


angular.module('starter.controllers', [])

.controller('RegisterCtrl', function($scope, $ionicHistory) {
  console.log('mrkva register');

$ionicHistory.nextViewOptions({
  disableBack: true
});
})

.controller('ImportCtrl', function($scope ,$ionicPopup, $location, $timeout) {
  console.log('mrkva import');
  $scope.data = {};
  

  $scope.showPopup = function() {
    var myPopup = $ionicPopup.show({
    template: '<input type="text" ng-model="data.email" placeholder="email"><br><input type="password" ng-model="data.password" placeholder="password">',
    title: 'Enter your 8fit credentials',
    subTitle: 'Please use your 8fit credentials',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Connect</b>',
        type: 'button-positive',
        onTap: function(){
          console.log('clicked');
          $scope.showLoading();
        }
      }
    ]
   });
  };

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
    console.log()
  };

  $scope.showLoading = function() {
    var loading = $ionicPopup.show({
    template: '<div class="import-spinner"><ion-spinner icon="ios" class="spinner spinner-ios"><svg viewBox="0 0 64 64"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg></ion-spinner></div>',
    title: 'Importing data',
    subTitle: '',
    scope: $scope,
    buttons: []
   });

$timeout(function() {
     loading.close(); 
     $location.path("/test/1");
  }, 2000);
  };

})

.controller('TabTestCtrl', function($scope, $location) {
  console.log('mrkva test');
})

.controller('DashCtrl', function($scope) {
  console.log('mrkva dash');
})

.controller('TestCtrl', function($scope, Chats) {
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

.controller('TestDetailCtrl', function($scope, $stateParams, $ionicPopup, $location, Questions) {
  console.log('test detail');
  $scope.question = Questions.get($stateParams.testId);

$scope.showAlert = function() {
     var alertPopup = $ionicPopup.alert({
       title: 'Thank you for answering the questions'
     });

     alertPopup.then(function(res) {
      $location.path("/tab/dash");
       console.log('Thank you for not eating my delicious ice cream cone');
     });
   };

  if (!$scope.question) {
      $scope.showAlert();
  }
})

.controller('ResultsCtrl', function($scope) {
  console.log('results');
})
.controller('ResultDetailCtrl', function($scope) {
  $scope.symptomes = [true, true, true, true];
  console.log('results detail');
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
