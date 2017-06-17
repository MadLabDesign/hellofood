'use strict';


var app = angular.module('routerApp', ['ui.router', 'angular-loading-bar']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/intro');

    $stateProvider
    // Intro page

        .state('intro', {
            url: '/intro',
            views: {
                '': {
                    templateUrl: 'views/intro/intro.html',
                    controller: 'introCtrl'
                }
            }
        })

        // Recipe pages
        .state('recipes', {
            url: '/recipes',
            views: {
                '': {
                    templateUrl: 'recipes.html',
                    controller: 'recipeCtrl'
                }
            }
        })

        .state('recipes.latest', {
            url: '^/latest',
            views: {
                '': {
                    templateUrl: 'views/recipes/latest.html',
                    controller: 'recipeLatestCtrl'
                }
            }
        })

        .state('recipes.breakfast', {
            url: '^/breakfast',
            views: {
                '': {
                    templateUrl: 'views/recipes/breakfast.html',
                    controller: 'recipeBreakfastCtrl'
                }
            }
        })

        .state('recipes.lunch', {
            url: '^/lunch',
            views: {
                '': {
                    templateUrl: 'views/recipes/lunch.html',
                    controller: 'recipeLunchCtrl'
                }
            }
        })

        .state('recipes.main', {
            url: '^/main',
            views: {
                '': {
                    templateUrl: 'views/recipes/main.html',
                    controller: 'recipeMainCtrl'
                }
            }
        })

        .state('recipes.salads', {
            url: '^/salads',
            views: {
                '': {
                    templateUrl: 'views/recipes/salads.html',
                    controller: 'recipeSaladsCtrl'
                }
            }
        })

        .state('recipes.dessert', {
            url: '^/dessert',
            views: {
                '': {
                    templateUrl: 'views/recipes/dessert.html',
                    controller: 'recipeDessertCtrl'
                }
            }
        })

        .state('recipes.beverages', {
            url: '^/beverages',
            views: {
                '': {
                    templateUrl: 'views/recipes/beverages.html',
                    controller: 'recipeBeveragesCtrl'
                }
            }
        })

        .state('recipes.entertaining', {
            url: '^/entertaining',
            views: {
                '': {
                    templateUrl: 'views/recipes/entertaining.html',
                    controller: 'recipeEntertainCtrl'
                }
            }
        })

        // Single Recipe Template View
        .state('single-recipe', {
            url: '/single-recipe',
            templateUrl: 'single-recipe.html',
            controller: function ($scope) {
                $scope.pageTitle = "The Gallery";

            }
        })

        // Gallery page
        .state('gallery', {
            url: '/gallery',
            views: {
                '': {
                    templateUrl: 'views/gallery/gallery.html',
                    controller: 'galleryCtrl'
                }
            }

        })

        // contact page
        .state('contact', {
            url: '/contact',
            views: {
                '': {
                    templateUrl: 'views/contact/contact.html',
                    controller: 'contactCtrl'
                }
            }
        });

});





