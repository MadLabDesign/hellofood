'use strict';



angular.module('myApp.intro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/intro', {
    templateUrl: 'intro/intro.html',
    controller: 'IntroCtrl'
  });
}])

.controller('IntroCtrl', ['$scope', function($scope) {
    $scope.hero = " Pear Parfait with Bayleaf";


    $('h1').flowtype({
        minimum : 0,
        maximum : 640,
        minFont : 25,
        maxFont : 80,
        fontRatio : 5
    });


    $(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });

}]);


