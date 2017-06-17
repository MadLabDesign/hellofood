'use strict';

angular
    .module('routerApp')
    .controller('recipeEntertainCtrl', function ($scope, $http) {
        $scope.pageTitle = "The Recipe | Keeping the Part going";
        $http.get('recipes-entertaining.json')
            .then(function (res) {
                $scope.recipes = res.data;
            });
    });