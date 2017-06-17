'use strict';

angular
    .module('routerApp')
    .controller('recipeMainCtrl', function ($scope, $http) {
        $scope.pageTitle = "The Recipe | The Main Course";
        $http.get('recipes-main.json')
            .then(function (res) {
                $scope.recipes = res.data;
            });
    });