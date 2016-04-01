(function () {
	'use strict';

	/**
	 * Angular module
	 * WebStorm names: ngmodule
	 * Recommended naming conventions:
	 * moduleName = lowercase,
	 */

	/**
	 * app module
	 */
	angular
		.module('app', [])
		.config(Config);

	// Config
	// --------------------------------------------------
	/* @ngInject */
	function Config() {

	}

	/**
	 * Tourney Controller
	 */
	angular
		.module('app')
		.controller('AppCtrl', AppCtrl);

	/* @ngInject */
	function AppCtrl($http, $interval) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.data = [];

		

		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate() {
			getData();

			setDataWatcher();
		}


		function getData() {
			$http.get('data.json')
				.then(function successCallback(response) {
					vm.data = response.data;
				}, function errorCallback(response) {
					console.log('error', response);
				});
		}

		function setDataWatcher() {
			$interval(function() {
				getData();
			}, 1000)
		}
	}


/**
	 * Tourney Controller
	 */
	angular
		.module('app')
		.controller('TourneyCtrl', TourneyCtrl);

	/* @ngInject */
	function TourneyCtrl($http, $interval) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.data = [];

		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate() {
			updateHtml();

			setDataWatcher();
		}

		function updateHtml() {
			$http.get('tournaments.json')
				.then(function successCallback(response) {
					vm.data = response.data;
				}, function errorCallback(response) {
					console.log('error', response);
				});
		}

		function setDataWatcher() {
			$interval(function() {
				updateHtml();
			}, 5000)
		}
	}


})();