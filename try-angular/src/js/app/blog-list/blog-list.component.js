'use strict';

angular.module('blogList').component('blogList', {
  // template: `<div class="">
  //   <h1 class="new-class">{{title}}</h1>
  //   <button ng-click="someClickTest()">Click me!</button>
  // </div>`,
  templateUrl: '/try-angular/src/templates/blog-list.html',
  controller: function ($scope) {
    var blogItems = [
      {
        title: 'Some Title1',
        id: 1,
        description: 'this is a book1',
        publishDate: '2016-07-11',
      },
      { title: 'Some Title2', id: 2, description: 'this is a book2' },
      { title: 'Some Title3', id: 3, description: 'this is a book3' },
      { title: 'Some Title4', id: 4, description: 'this is a book4' },
      { title: 'Some Title5', id: 5, description: 'this is a book5' },
    ];

    $scope.items = blogItems;

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
