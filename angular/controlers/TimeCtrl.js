var module = angular.module('eCalc', []);
        module.controller('TimeCtrl', function($scope, $interval) {
            var tick = function() {
            $scope.clock = Date.now();
        }
            tick();
            $interval(tick, 1000);
        });