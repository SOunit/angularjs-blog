'use strict';

angular.module('blogDetail').component('blogDetail', {
  templateUrl: 'templates/blog-detail.html',
  controller: function ($routeParams, $scope) {
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

    $scope.title = `Blog ${$routeParams.id}`;
  },
});
