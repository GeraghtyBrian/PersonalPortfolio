'use strict';

angular.module('personalPortfolioApp')
  .controller('NavCtrl', function ($scope,$location) {

  	$scope.isActive = function(route) {
        return route === $location.path();
    };
  });