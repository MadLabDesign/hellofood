$(document).ready(function () {
        (function ($) {
            $('#header__icon').click(function (e) {
                e.preventDefault();
                $('body').toggleClass('with--sidebar');
            });
            $('#site-cache,.menu li a').click(function (e) {
                $('body').removeClass('with--sidebar');
                $('.header__icon').removeClass('open');
            });
            $('.header__icon').click(function () {
                $(this).toggleClass('open');
            });
        })(jQuery);
    });


        $(document).ready(function () {
        $('#showRecipeInput').click(function () {
            $('#recipe-submit-dropdown').toggle("slide");
        });


    });