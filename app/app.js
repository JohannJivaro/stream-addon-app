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
            tournament1:"Tournament1",
            tournament2:"Tournament2",
            tournament3:"Tournament3",
            tournament4:"Tournament4",
            tournament5:"Tournament5",
            tournament6:"Tournament6",
            chronoUp: "44:44:44",
            buyIns: 0,
            cashes: 0,
            yesterday: 0,
            bankroll: 0,
            latestDonation: "No Update",
            topDonation: "No Update",
            latestSubscriber: "No Update",
            subscribersToday: "No Update",
            artist: "IIIIIot Playing",
            songname: "Not Playing",
            chronoDown: "00:00:00",

        };

        var apiPath = 'http://localhost:3000';

        // Run
        // --------------------------------------------------
        activate();

        // Private functions
        // --------------------------------------------------
        function activate() {
            getTournament1();
            getTournament2();
            getTournament3();
            getTournament4();
            getTournament5();
            getTournament6();
            getChronoUp();
            getBuyIns();
            getCashes();
            getYesterday();
            getBankroll();
            getLatestDonation();
            getTopDonation();
            getLatestSubscriber();
            getSubscribersToday();
            getArtist();
            getSongname();
            getChronoDown


            setDataWatcher();
        }

        function getChronoUp() {
            $http.get(`${apiPath}/chrono-up`).then(
                function successCallback(response) {
                    vm.data.chronoUp = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
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

        function getYesterday() {
            $http.get(`${apiPath}/yesterday`).then(
                function successCallback(response) {
                    vm.data.yesterday = response.data;
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

        function getLatestDonation() {
            $http.get(`${apiPath}/latest-donation`).then(
                function successCallback(response) {
                    vm.data.latestDonation = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getTopDonation() {
            $http.get(`${apiPath}/top-donation`).then(
                function successCallback(response) {
                    vm.data.topDonation = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getLatestSubscriber() {
            $http.get(`${apiPath}/latest-subscriber`).then(
                function successCallback(response) {
                    vm.data.latestSubscriber = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getSubscribersToday() {
            $http.get(`${apiPath}/subscribers-today`).then(
                function successCallback(response) {
                    vm.data.subscribersToday = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getArtist() {
            $http.get(`${apiPath}/artist`).then(
                function successCallback(response) {
                    vm.data.artist = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getSongname() {
            $http.get(`${apiPath}/songname`).then(
                function successCallback(response) {
                    vm.data.songname = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getChronoDown() {
            $http.get(`${apiPath}/chrono-down`).then(
                function successCallback(response) {
                    vm.data.chronoDown = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getTournament1() {
            $http.get(`${apiPath}/tournament1`).then(
                function successCallback(response) {
                    vm.data.tournament1 = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getTournament2() {
            $http.get(`${apiPath}/tournament2`).then(
                function successCallback(response) {
                    vm.data.tournament2 = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getTournament3() {
            $http.get(`${apiPath}/tournament3`).then(
                function successCallback(response) {
                    vm.data.tournament3 = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getTournament4() {
            $http.get(`${apiPath}/tournament4`).then(
                function successCallback(response) {
                    vm.data.tournament4 = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getTournament5() {
            $http.get(`${apiPath}/tournament5`).then(
                function successCallback(response) {
                    vm.data.tournament5 = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }

        function getTournament6() {
            $http.get(`${apiPath}/tournament6`).then(
                function successCallback(response) {
                    vm.data.tournament6 = response.data;
                },
                function errorCallback(response) {
                    console.log('error', response);
                },
            );
        }



        function setDataWatcher() {
            $interval(function () {
                getChronoUp();
                getArtist();
                getSongname();
                getChronoDown();
            }, 1000);

            $interval(function () {
                getTournament1();
                getTournament2();
                getTournament3();
                getTournament4();
                getTournament5();
                getTournament6();
                getBuyIns();
                getCashes();
                getBankroll();
                getLatestDonation();
                getTopDonation();
                getSubscribersToday();
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