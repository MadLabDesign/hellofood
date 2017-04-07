'use strict';


var app = angular.module('routerApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/intro');

    $stateProvider
    // Intro page

        .state('intro', {
            url: '/intro',
            views: {
                '': {
                    templateUrl: 'intro.html',
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
             templateUrl: 'views/recipes/latest.html',
            controller: function ($scope) {
                $scope.pageTitle = "The Recipe | The Breakfast Club";
                 $('#showRecipeInput').click(function () {
            $('#recipe-submit-dropdown').toggle("slide");
        });

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
                     templateUrl: 'gallery.html',
                    controller: 'galleryCtrl'
                }
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

//Intro Controller
app.controller('introCtrl', function ($scope) {



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


    $("#mygallery").justifiedGallery({
        rowNum: 3,
        rowHeight: 160,
        lastRow: 'nojustify',
        margins: 3,
        cssAnimation: true,
        sizeRangeSuffixes: {
            lt100: '_t',
            lt240: '_m',
            lt320: '_n',
            lt500: '',
            lt640: '_z',
            lt1024: '_b'
        }
    });

 $scope.hero = "Pear Parfait with Bayleaf";
});


//Recipe Controller
app.controller('recipeCtrl', function ($scope) {
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
    );
});


app.controller('galleryCtrl', function ($scope) {
    $scope.pageTitle = "Gallery";

    $("#gallery").justifiedGallery({
        rowNum: 3,
        rowHeight: 160,
        lastRow: 'nojustify',
        margins: 3,
        cssAnimation: true,
        sizeRangeSuffixes: {
            lt100: '_t',
            lt240: '_m',
            lt320: '_n',
            lt500: '',
            lt640: '_z',
            lt1024: '_b'
        }
    });

    //Gallery
    function getRandomSize(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }


    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            for (var i = 0; i < 5; i++) {
                var width = getRandomSize(200, 400);
                var height = getRandomSize(200, 400);
                $('#gallery').append('<a href="#!/latest">' +
                    '<img alt="caption for image 1" src="//www.lorempixel.com/' + width + '/' + height + '/food" />' +
                    '</a>');
            }
            $('#gallery').justifiedGallery('norewind');
        }
    });


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

