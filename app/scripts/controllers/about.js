'use strict';

/**
 * @ngdoc function
 * @name caterMeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the caterMeApp
 */
angular.module('caterMeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
