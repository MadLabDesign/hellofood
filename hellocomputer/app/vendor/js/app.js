'use strict';


var routerApp = angular.module('routerApp', ['ui.router', 'ngStorage']);

routerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/intro');

    $stateProvider
    // Intro page
        .state('intro', {
            url: '/intro',
            templateUrl: 'intro.html',
            controller: function ($scope) {
                $scope.hero = " Pear Parfait with Bayleaf";

                $(".scroll").click(function (event) {
                    event.preventDefault();
                    //calculate destination place
                    var dest = 0;
                    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                        dest = $(document).height() - $(window).height();
                    } else {
                        dest = $(this.hash).offset().top;
                    }
                    //go to destination
                    $('html,body').animate({scrollTop: dest}, 1000, 'swing');
                });
            }
        })

        // Recipe page
        .state('recipes', {
            url: '/recipes',
            views: {
                '': {
                    templateUrl: 'recipes.html',
                    controller: 'recipeCtrl'
                }
            }

        })

        .state('recipes.breakfast', {
            url:'^/breakfast',
            templateUrl: 'views/recipes/breakfast.html',
        })

        .state('recipes.lunch', {
            url:'^/lunch',
           templateUrl: 'views/recipes/lunch.html'
        })



        // Gallery page
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'gallery.html',
            controller: function ($scope) {
            }
        })



        // contact page
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html',
            controller: function ($scope) {
            }
        });

});


routerApp.controller('recipeCtrl', function ($scope, $localStorage) {
    $scope.hero = "Lets Start Cooking!";
    $scope.pageTitle = "The Recipe | The Breakfast Club";

    $scope.required = true;

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
        if ($scope.title !== '' && $scope.created !== '' && $scope.release !== '' && $scope.cooking !== '' && $scope.type !== '' && $scope.difficulty !== '' && $scope.servings !== '') {
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
        }
    };

    $('#showRecipeInput').click(function () {
        $('#recipe-submit-dropdown').toggle("slide");
    });
});
