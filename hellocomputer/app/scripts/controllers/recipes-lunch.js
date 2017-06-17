'use strict';

angular
    .module('routerApp')
    .controller('recipeLunchCtrl', function ($scope, $http) {
        $scope.pageTitle = "The Recipe | Lunch Time";
        $http.get('recipes-lunch.json')
            .then(function (res) {
                $scope.recipes = res.data;
            });
    });