'use strict';

angular.module('try').config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  // FIXME: not working
  //   $locationProvider.html5Mode({ enabled: true });

  $routeProvider
    .when('/', {
      template: '<blog-list></blog-list>',
    })
    .when('/blog/1', {
      template: '<h1>Hi</h1>',
    })
    .when('/blog/2', {
      template: '<blog-list></blog-list>',
    })
    .otherwise({
      template: 'Not found',
    });
});
