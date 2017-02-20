'use strict';

angular.module('myApp.recipes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes', {
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'
        });
    }])

    .controller('RecipesCtrl', ['$scope', function ($scope) {

        $scope.hero = "Add and view our recipes";
        $scope.pageTitle = "Recipes Page";

        $scope.title = "";
        $scope.type = "";
        $scope.release = "";


        $scope.recipes = [{ 'title': '', 'type': '', 'release':'' }];

        $scope.addRow = function(){
    
            $scope.recipes.push({ 'title':$scope.title, 'type': $scope.type, 'release':$scope.release });
            $scope.title='';
            $scope.type='';
            $scope.release='';
        };

}]);

