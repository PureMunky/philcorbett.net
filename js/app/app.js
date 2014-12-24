var App = angular.module('App', ['ngRoute']),
    config = {
        partialsPath: 'partials/'
    };

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: config.partialsPath + 'home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/_/:commId', {
        templateUrl: function (arrs) {
          return config.partialsPath + 'comm/index.html';
        },
        controller: 'CommCtrl',
        controllerAs: 'comm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

App.controller('MainCtrl', ['$scope', function ($scope) {
  this.name = 'Main';
}]);

App.controller('CommCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  var word = $routeParams.commId;

  $scope.name = word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();
  $scope.description = 'hello';

  $scope.getPage = function () {
    return config.partialsPath + 'comm/words/' + $scope.name + '.html';
  };
}]);
