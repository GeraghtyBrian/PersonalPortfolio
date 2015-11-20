'use strict';

/**
 * @ngdoc overview
 * @name personalPortfolioApp
 * @description
 * # personalPortfolioApp
 *
 * Main module of the application.
 */
angular
  .module('personalPortfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/proWork', {
        templateUrl: 'views/proWork.html',
        controller: 'ProWorkCtrl',
        controllerAs: 'proWork'
      })
      .when('/sideWork', {
        templateUrl: 'views/sideWork.html',
        controller: 'SideWorkCtrl',
        controllerAs: 'sideWork'
      })
      .when('/colWork', {
        templateUrl: 'views/colWork.html',
        controller: 'ColWorkCtrl',
        controllerAs: 'colWork'
      })
      .otherwise({
        redirectTo: '/'
      });
  });