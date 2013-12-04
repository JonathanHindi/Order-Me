'use strict';

angular.module('orderMeApp', [
  'ngRoute',
  'ngAnimate',
  'angular-flash.service', 
  'angular-flash.flash-alert-directive'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/restaurants', {
        templateUrl: 'views/restaurants/restaurants.html',
        controller: 'RestaurantsCtrl'
      })
      .when('/orders', {
        templateUrl: 'views/orders/orders.html',
        controller: 'OrdersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Set HTML5 Styles Urls.
    // $locationProvider
    //   .html5Mode(true);

  });