'use strict';

angular.module('orderMeApp')
  .controller('OrdersCtrl', [ '$scope', '$store', 'flash', function ($scope, $store, flash) {
    
    // Get Orders List
    $scope.orders = $store.get('orders');

    // Get restaurants list
    $scope.restaurants = $store.get('restaurants');

    // Bind localStorage to scope ( wrapper for $scope.$watch )
    $store.bind( $scope, 'orders' );

    // Bind localStorage to scope ( wrapper for $scope.$watch )
    $store.bind( $scope, 'restaurants' );


    // If no orders make sure it's an empty array
    // to be able to generate new ids from the array length
    if( !$scope.orders ) {
      $scope.orders = [];
    }


    /*
     * Generate new Id
     * @notes This shouldn't happen if using a webservice,
     * the webservice will assign new ids
     */
    var newId = function () {
      
      return $scope.orders.length + 1;

    };

    /*
     * Add New Restaurant
     */
    $scope.save = function () {

      // Generate new id and assign it
      $scope.newOrder.id = newId();

      // Save Order Date 
      $scope.newOrder.date = new Date();

      // Push new order in array
      $scope.orders.push($scope.newOrder);

      // Show flash message
      flash.success =  'New order was placed successfully.';

    };

    /*
     * Reorder Old Order
     */
    $scope.reorder = function (oldOrder) {

      // Create empty order
      $scope.newOrder = {};

      // Set a reorder flag
      $scope.newOrder.reorder = true;

      // Copy Restaurant and Order Details only from old order.
      $scope.newOrder.restaurant = oldOrder.restaurant;
      $scope.newOrder.details = oldOrder.details;

      // Also set the form to dirty to be able 
      // to submit without changing anything
      $scope.orderForm.$setDirty();

    };

  }]);
