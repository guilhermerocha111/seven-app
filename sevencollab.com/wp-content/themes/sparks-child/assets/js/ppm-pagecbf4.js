(function($) {
    "use strict";

    $('.sg-show-popup').click(function () {
        var title_price = $(this).parent().find('.hidden-data-ppm').data('titleprice');
        var type_price = $(this).parent().find('.hidden-data-ppm').data('typeprice');
        $('.popup-section input[name="title-price"]').val(title_price);
        $('.popup-section input[name="type-price"]').val(type_price);
    });

    $('.mkd-content-slider').mouseover(function () {
        $(this).find('.owl-nav').show();
    });
    $('.mkd-content-slider').mouseout(function () {
        $(this).find('.owl-nav').hide();
    });
})(jQuery);
