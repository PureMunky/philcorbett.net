var App = angular.module('App', ['ngRoute']),
  config = {
    partialsPath: 'partials/'
  },
  persist = {

  };

App.config(['$routeProvider',
  function ($routeProvider) {
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

App.directive('appFooter', [function () {
  return {
    restrict: 'E',
    template: '<footer> <ul> <li> <a ng-href="#/"><img src="https://www.philcorbett.net/images/profile.jpg" class="u-photo" style="height: 50px; width: 50px;" /></a> </li><li><a target="_blank" href="https://drive.google.com/drive/folders/1c2BigmZC8YfnrSy5Xalbdj9of05jPcvO?usp=sharing" rel="me">Public Folder</a></li><li> <a target="_blank" href="http://www.twitter.com/PhilCorbettLive" rel="me">Twitter</a> </li> <li> <a target="_blank" href="https://soundcloud.com/phil-corbett" rel="me">SoundCloud</a> </li> <li> <a target="_blank" href="https://blog.philcorbett.net" rel="me">Blog</a> </li> <li> <a target="_blank" href="http://github.com/PureMunky" rel="me">Github</a> </li> <li> <a target="_blank" href="https://www.paypal.me/philcorbettlive" rel="me">PayPal</a> </li> <li> <a href="./pages/contact.html">Contact</a> </li> </ul> </footer>'
  };
}]);

App.controller('FeedCtrl', ['$scope', function ($scope) {
  $scope.items = [
    {
      imgSrc: './images/sounding-board.jpg',
      url: './pages/sounding-board.html',
      media: 'site',
      title: 'Sounding Board',
      description: 'Are you looking for someone to offer an impartial opinion about anything? Let me know!'
    },
    {
      imgSrc: './images/code.png',
      url: './pages/github.html',
      media: 'site',
      title: 'Github Profile',
      description: 'I like to tinker around with different technologies, you can check out some of my stuff on Github.'
    },
    {
      imgSrc: './images/friend.jpg',
      url: './pages/twitter.html',
      media: 'site',
      title: 'Twitter',
      description: "I'm always dumping my social media accounts but I seem to come back to Twitter for one reason or another."
    },
    {
      imgSrc: './images/tete.jpg',
      url: 'http://tetelearning.com',
      media: 'site',
      title: 'Tete Learning',
      description: "If you're interested in becoming or finding a mentor for something, please reach out."
    },
    // {
    //   url: './blog/2020/06/03.enough.excuses.html',
    //   media: 'blog',
    //   title: 'Enough Excuses',
    //   description: "Keeping ahead of your future self inclues eliminating reasons he doesn't want to do something."
    // }
  ];
}]);
