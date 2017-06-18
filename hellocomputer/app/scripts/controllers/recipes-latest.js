'use strict';

angular
    .module('routerApp')
    .controller('recipeLatestCtrl', function ($scope, $http) {
        $scope.pageTitle = "The Recipes | Our Latest";
        $http.post('recipes.json')
            .then(function (res) {
                $scope.recipes = res.data;
            });
    });