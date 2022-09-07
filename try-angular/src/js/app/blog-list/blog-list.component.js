'use strict';

angular.module('blogList').component('blogList', {
  template: `<div class="">
    <h1 class="new-class">{{title}}</h1>
    <button ng-click="someClickTest()">Click me!</button>
  </div>`,
  controller: function ($scope) {
    $scope.title = 'Hi, there';
    $scope.clicks = 0;

    $scope.someClickTest = function () {
      $scope.clicks += 1;
      $scope.title = `Clicked! ${$scope.clicks}`;
    };
  },
});
// .controller('BlogListController', function ($scope) {
//   console.log('Hello');
//   $scope.title = 'Hi, there';
//   $scope.clicks = 0;

//   $scope.someClickTest = function () {
//     console.log('click test!');
//     $scope.clicks += 1;
//     $scope.title = `Clicked! ${$scope.clicks}`;
//   };
// });
