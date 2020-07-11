var App = angular.module('App', ['ngRoute']),
  config = {
    partialsPath: 'partials/'
  },
  persist = {

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
      .when('/:page', {
        templateUrl: function (arrs) {
          return config.partialsPath + arrs.page + '.html';
        },
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);

App.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.name = 'Main';
}]);

App.controller('CommCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.word = $routeParams.commId;
  $scope.lastWord = persist.lastWord;
  persist.lastWord = $scope.word;

  var specialWords = {
    whatisthis: {
      name: 'What is this?'
    }
  };

  if (specialWords[$scope.word] !== undefined) {
    $scope.name = specialWords[$scope.word].name;
  } else {
    $scope.name = $scope.word.substr(0, 1).toUpperCase() + $scope.word.substr(1).toLowerCase();
  }


  $scope.getPage = function () {
    return config.partialsPath + 'comm/words/' + $scope.word + '.html';
  };
}]);

App.controller('FeedCtrl', ['$scope', function($scope) {
  $scope.items = [
    {
      imgSrc: './images/code.png',
      url: 'https://www.google.com',
      media: 'site',
      title: 'Google Test',
      description: 'This is where you go to search for lots of things.'
    },
    {
      imgSrc: './images/friend.jpg',
      url: 'https://www.twitter.com/PhilCorbettLive',
      media: 'site',
      title: 'Twitter',
      description: 'Come follow me!'
    },
    {
      url: 'https://www.twitter.com/PhilCorbettLive',
      media: 'code',
      title: 'Twitter',
      description: "I want to write a really long description to make sure that it overflows correctly and isn't terrible to look at!"
    }
  ];
}]);
