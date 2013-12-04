'use strict';

angular.module('orderMeApp')
	.factory('$store', function storeFactory() {

		var storage = window.localStorage;

		var methods = {

			/* 
			 * SetItem Wrapper
			 */
			set: function ( key, value ) {

				storage.setItem( key, JSON.stringify(value) );

			},

			/* 
			 * GetItem Wrapper
			 */
			get: function ( key ) {

				return JSON.parse( storage.getItem( key, [] ) );

			},

			/*
			 * Bind scope key to localstorage
			 */
			bind: function ( $scope, key ) {

				$scope.$watch( key, function (value) {
					methods.set( key, value );
				}, true);

			}

		};
		
		return methods;

	});
