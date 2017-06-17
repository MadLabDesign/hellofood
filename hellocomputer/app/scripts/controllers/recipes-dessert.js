'use strict';

angular
    .module('routerApp')
    .controller('recipeDessertCtrl', function ($scope, $http) {
        $scope.pageTitle = "The Recipe | Mouth Watering Deserts";
        $http.get('recipes-dessert.json')
            .then(function (res) {
                $scope.recipes = res.data;
            });
    });