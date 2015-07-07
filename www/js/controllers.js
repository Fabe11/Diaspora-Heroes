angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('CategoryCtrl', function($scope, Category) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.category = Category.all();
  $scope.remove = function(category) {
    Category.remove(category);
  }
})

.controller('CategoryDetailCtrl', function($scope, $stateParams, Category) {
  $scope.category = Category.get($stateParams.categoryId);
})

.controller('HomeCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
