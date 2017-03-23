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

        .state('recipes.breakfast', {
            url: '^/breakfast',
            templateUrl: 'views/recipes/breakfast.html',
            controller: function ($scope) {
                $scope.pageTitle = "The Recipe | The Breakfast Club";

            }
        })

        .state('recipes.lunch', {
            url: '^/lunch',
            templateUrl: 'views/recipes/lunch.html',
             controller: function ($scope) {
                $scope.pageTitle = "The Recipe | Lunch Time";
            }
        })

        .state('recipes.main', {
            url: '^/main',
            templateUrl: 'views/recipes/main.html',
             controller: function ($scope) {
                 $scope.pageTitle = "The Recipe | The Main Course";
             }
        })

        .state('recipes.salads', {
            url: '^/salads',
            templateUrl: 'views/recipes/salads.html',
             controller: function ($scope) {
                 $scope.pageTitle = "The Recipe | Amazing Salads";
             }
        })

        .state('recipes.dessert', {
            url: '^/dessert',
            templateUrl: 'views/recipes/dessert.html',
             controller: function ($scope) {
                 $scope.pageTitle = "The Recipe | Mouth Watering Deserts";
             }
        })

        .state('recipes.beverages', {
            url: '^/beverages',
            templateUrl: 'views/recipes/beverages.html',
            controller: function ($scope) {
                 $scope.pageTitle = "The Recipe | Getting the party started";
             }
        })

        .state('recipes.entertaining', {
            url: '^/entertaining',
            templateUrl: 'views/recipes/entertaining.html',
            controller: function ($scope) {
                 $scope.pageTitle = "The Recipe | Keeping the Part going";
             }
        })



        // Gallery page
        .state('gallery', {
            url: '/gallery',
            templateUrl: 'gallery.html',
            controller: function ($scope) {
                $scope.pageTitle = "The Gallery";

            }
        })



        // contact page
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact.html',
            controller: function ($scope) {
                 $scope.pageTitle = "Contact Us";
            }
        });

});


routerApp.controller('recipeCtrl', function ($scope) {
    $scope.pageTitle = "The Recipe | Latest";

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

            $scope.addLatestRecipeRow ({
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


    $scope.addLatestRecipeRow = function (recipe) {
        $scope.recipes.push(recipe);
    };

    $scope.addLatestRecipeRow (
        JSON.parse(localStorage.getItem('recipeData'))
    )
});





/*
localStorage.setItem("recipeData", JSON.stringify(
    {
            title: 'Breakfast Doughnuts',
            created: 'Tatum',
            release: '7 Aug 2017',
            cooking: '30 min',
            type: 'Breakfast',
            difficulty: 'Not to tricky',
            servings: '4'
        },
         {
            title: 'Breakfast Doughnuts',
            created: 'blaine',
            release: '7 Aug 2017',
            cooking: '30 min',
            type: 'Breakfast',
            difficulty: 'Not to tricky',
            servings: '4'
        }

));
*/




/*
 *
  * {
  *     title:'Breakfast Doughnuts',
  *     created:'Breakfast Doughnuts',
  *     release:'Breakfast Doughnuts',
  *     cooking:'Breakfast Doughnuts',
  *     type:'Breakfast Doughnuts',
  *     difficulty:'Breakfast Doughnuts',
  *     servings:'Breakfast Doughnuts'
  *
  * }

  * */