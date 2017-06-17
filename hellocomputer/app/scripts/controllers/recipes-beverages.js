'use strict';

angular
    .module('routerApp')
    .controller('recipeBeveragesCtrl', function ($scope, $http) {
        $scope.pageTitle = "The Recipe | Getting the party started";
        $http.get('recipes-beverages.json')
            .then(function (res) {
                $scope.recipes = res.data;
            });
    });