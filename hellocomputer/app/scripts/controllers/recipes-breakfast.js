'use strict';

angular
    .module('routerApp')
    .controller('recipeBreakfastCtrl', function ($scope, $http) {
        $scope.pageTitle = "The Recipe | The Breakfast Club";
        $http.get('recipes-breakfast.json')
            .then(function (res) {
                $scope.recipes = res.data;
            });
    });