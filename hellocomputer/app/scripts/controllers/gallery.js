'use strict';

angular
    .module('routerApp')
    .controller('galleryCtrl', function ($scope) {
        $scope.pageTitle = "Gallery";

        $("#gallery").justifiedGallery({
            rowNum: 3,
            rowHeight: 160,
            lastRow: 'nojustify',
            margins: 3,
            cssAnimation: false,
            sizeRangeSuffixes: {
                lt100: '_t',
                lt240: '_m',
                lt320: '_n',
                lt640: '_z',
                lt1024: '_b'
            }
        });

        //Gallery
        function getRandomSize(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }

        for (var i = 0; i < 30; i++) {
            var width = getRandomSize(200, 400);
            var height = getRandomSize(200, 400);
            $('#gallery').append('<a href="#!/latest">' +
                '<img alt="caption for image 1" src="//www.lorempixel.com/' + width + '/' + height + '/food" />' +
                '</a>');
        }
        $('#gallery').justifiedGallery('norewind');


    });