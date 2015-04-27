'use strict';

/**
 * @ngdoc function
 * @name caterMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the caterMeApp
 */
angular.module('caterMeApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.fireData = function(){
      $scope.data = 'fireData called';
      var myRootRef = new Firebase('https://cater-hr.firebaseio.com/');
      myRootRef.set("hello world!");
    };
  });
