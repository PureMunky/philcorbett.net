var App = angular.module('App', []);

App.controller('MainCtrl', ['$scope', function ($scope) {
  
}]);

App.controller('RssViewCtrl', ['$scope', function ($scope) {
  var feeds = ['https://github.com/PureMunky.atom'],
    i = 0;

  $scope.feedItems = [];

  for (i = 0; i < feeds.length; i++) {

  }
}]);