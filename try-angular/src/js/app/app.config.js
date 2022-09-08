'use strict';

angular.module('try').config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  // FIXME: not working
  //   $locationProvider.html5Mode({ enabled: true });

  $routeProvider
    .when('/', {
      template: '<blog-list></blog-list>',
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
    })
    .when('/blog/:id', {
      template: '<blog-detail></blog-detail>',
    })
    .otherwise({
      template: 'Not found',
    });
});
