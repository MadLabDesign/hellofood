'use strict';

angular
    .module('routerApp')
    .controller('introCtrl' , function ($scope) {
        $scope.hero = "Pear Parfait with Bayleaf";

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
    });