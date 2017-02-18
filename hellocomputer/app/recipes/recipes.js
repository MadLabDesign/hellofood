'use strict';

angular.module('myApp.recipes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/recipes', {
            templateUrl: 'recipes/recipes.html',
            controller: 'RecipesCtrl'
        });
    }])

    .controller('RecipesCtrl', ['$scope', function ($scope) {
        $scope.title = "title here";
        $scope.type = "type here";
        $scope.release = "release here";

    }]);

$scope.addRow = function(){
	$scope.recipes.push({ 'title':$scope.title, 'type': $scope.type, 'release':$scope.release });
	$scope.title='';
	$scope.type='';
	$scope.release='';
};