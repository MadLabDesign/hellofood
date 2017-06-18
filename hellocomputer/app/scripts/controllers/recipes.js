'use strict';

angular
    .module('routerApp')
    .controller('recipeCtrl' , function ($scope, $state, $http) {
        $state.transitionTo('recipes.latest');

        $scope.required = true;

        $scope.image = "";
        $scope.title = "";
        $scope.created = "";
        $scope.release = "";
        $scope.cooking = "";
        $scope.type = "";
        $scope.difficulty = "";
        $scope.servings = "";


        $scope.recipes = [{
            'image': '',
            'title': '',
            'created': '',
            'release': '',
            'cooking': '',
            'type': '',
            'difficulty': '',
            'servings': ''
        }];

        $scope.addRow = function () {
            if ($scope.image !== '' && $scope.title !== '' && $scope.created !== '' && $scope.release !== '' && $scope.cooking !== '' && $scope.type !== '' && $scope.difficulty !== '' && $scope.servings !== '') {

                $scope.addLatestRecipeRow ({
                    'image': $scope.image,
                    'title': $scope.title,
                    'created': $scope.created,
                    'release': $scope.release,
                    'cooking': $scope.cooking,
                    'type': $scope.type,
                    'difficulty': $scope.difficulty,
                    'servings': $scope.servings
                });
                $scope.image = '';
                $scope.title = '';
                $scope.created = '';
                $scope.release = '';
                $scope.cooking = '';
                $scope.type = '';
                $scope.difficulty = '';
                $scope.servings = '';
            }
        };


        $('#showRecipeInput').click(function () {
            $('#recipe-submit-dropdown').toggle("slide");
        });


        $scope.addLatestRecipeRow = function (recipe) {
            $scope.recipes.push(recipe);
        };

        $scope.addLatestRecipeRow (
            JSON.parse(localStorage.getItem('recipeData'))
        );
    });