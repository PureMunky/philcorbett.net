var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/_/:commId', {
        templateUrl: function (arrs) {
          return 'comm/' + arrs.commId + '.html';
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
  this.name = $routeParams.commId;
}]);
