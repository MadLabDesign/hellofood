'use strict';

angular.module('myApp.recipes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes', {
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'
        });
    }])

    .controller('RecipesCtrl', ['$scope', function ($scope) {

        $scope.hero = "Lets Start Cooking!";
        $scope.pageTitle = "The Recipe | The Breakfast Club";

        $scope.title = "";
        $scope.created = "";
        $scope.release = "";
        $scope.cooking = "";
        $scope.type = "";
        $scope.difficulty = "";
        $scope.servings = "";


        $scope.recipes = [{
            'title': '',
            'created': '',
            'release': '',
            'cooking': '',
            'type': '',
            'difficulty': '',
            'servings': ''
        }];

        $scope.addRow = function () {

            $scope.recipes.push({
                'title': $scope.title,
                'created': $scope.created,
                'release': $scope.release,
                'cooking': $scope.cooking,
                'type': $scope.type,
                'difficulty': $scope.difficulty,
                'servings': $scope.servings
            });
            $scope.title = '';
            $scope.created = '';
            $scope.release = '';
            $scope.cooking = '';
            $scope.type = '';
            $scope.difficulty = '';
            $scope.servings = '';
        };

    }]);

