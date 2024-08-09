$(document).ready(function () {
	if ($('.sliders-arrows-bg').length && $('.sliders-arrows-bg .mkd-section-inner').length) {
		sliderArrowsPosition();
	}
});

$(window).resize(function() {
	if ($('.sliders-arrows-bg').length && $('.sliders-arrows-bg .mkd-section-inner').length) {
		sliderArrowsPosition();
	}
});

function sliderArrowsPosition() {
	let distanceFromLeft = $('.sliders-arrows-bg .mkd-section-inner').offset().left;
	$('.sliders-arrows-bg .n2-ss-slider-controls .nextend-arrow-previous').css('width', distanceFromLeft + 'px');
	$('.sliders-arrows-bg .n2-ss-slider-controls .nextend-arrow-next').css('width', distanceFromLeft + 'px');
}
