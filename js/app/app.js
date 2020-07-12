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
      url: 'https://github.com/PureMunky',
      media: 'site',
      title: 'Github Profile',
      description: 'I like to tinker around with differnt technologies, you can check out some of my stuff on Github.'
    },
    {
      imgSrc: './images/friend.jpg',
      url: 'https://www.twitter.com/PhilCorbettLive',
      media: 'site',
      title: 'Twitter',
      description: "I'm always dumping my social media accounts but I always seem to come back to Twitter for some reason."
    },
    {
      imgSrc: './images/tete.jpg',
      url: 'http://tetelearning.com',
      media: 'site',
      title: 'Tete Learning',
      description: "If you're interested in becoming or finding a mentor for something, please reach out."
    }
  ];
}]);
