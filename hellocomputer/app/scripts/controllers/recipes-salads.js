'use strict';

angular
    .module('routerApp')
    .controller('recipeSaladsCtrl', function ($scope, $http) {
        $scope.pageTitle = "The Recipe | Amazing Salads";
        $http.get('recipes-salads.json')
            .then(function (res) {
                $scope.recipes = res.data;
            });
    });