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
	angular.module('app', []).config(Config);

	// Config
	// --------------------------------------------------
	/* @ngInject */
	function Config() {}

	/**
	 * Tourney Controller
	 */
	angular.module('app').controller('AppCtrl', AppCtrl);

	/* @ngInject */
	function AppCtrl($http, $interval) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.data = {
			chronoUp: 0,
			buyIns: 0,
			cashes: 0,
			bankroll: 0,
		};

		var apiPath = 'http://localhost:3000';

		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate() {
			getChronoUp();
			getBuyIns();
			getCashes();
			getBankroll();

			setDataWatcher();
		}

		function getChronoUp() {
			// TODO: Get Data
			return vm.data.chronoUp;
		}

		function getBuyIns() {
			$http.get(`${apiPath}/buy-ins`).then(
				function successCallback(response) {
					vm.data.buyIns = response.data;
				},
				function errorCallback(response) {
					console.log('error', response);
				},
			);
		}

		function getCashes() {
			$http.get(`${apiPath}/cashes`).then(
				function successCallback(response) {
					vm.data.cashes = response.data;
				},
				function errorCallback(response) {
					console.log('error', response);
				},
			);
		}

		function getBankroll() {
			$http.get(`${apiPath}/bankroll`).then(
				function successCallback(response) {
					vm.data.bankroll = response.data;
				},
				function errorCallback(response) {
					console.log('error', response);
				},
			);
		}

		function setDataWatcher() {
			$interval(function () {
				getChronoUp();
			}, 1000);

			$interval(function () {
				getBuyIns();
				getCashes();
				getBankroll();
			}, 30000);
		}
	}

	/**
	 * Tourney Controller
	 */
	angular.module('app').controller('TourneyCtrl', TourneyCtrl);

	/* @ngInject */
	function TourneyCtrl($http, $interval) {
		// "Controller as" the ViewModel
		var vm = this;

		// Public ViewModel
		// --------------------------------------------------
		vm.data = [];
		vm.memory = {};

		// Run
		// --------------------------------------------------
		activate();

		// Private functions
		// --------------------------------------------------
		function activate() {
			updateHtml();

			setDataWatcher();
		}

		function setData(data) {
			data.forEach((tourn) => {
				if (tourn.entrants === 'acr') {
					if (!vm.memory[tourn.tourneyid]) {
						vm.memory[tourn.tourneyid] = tourn.entrantsRemaining;
					} else if (vm.memory[tourn.tourneyid] < tourn.entrantsRemaining) {
						// this happens when playing rebuy/latereg
						vm.memory[tourn.tourneyid] = tourn.entrantsRemaining;
					}
					tourn.entrants = vm.memory[tourn.tourneyid];
				}
			});
			vm.data = data;
		}

		function updateHtml() {
			$http.get('tournaments.json').then(
				function successCallback(response) {
					setData(response.data);
				},
				function errorCallback(response) {
					console.log('error', response);
				},
			);
		}

		function setDataWatcher() {
			$interval(function () {
				updateHtml();
			}, 5000);
		}
	}
})();
