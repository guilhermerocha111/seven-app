$(document).ready(function () {
	var filterHolder = $('.mkd-portfolio-list-holder .mkd-pl-filter-holder');

	if (filterHolder.length) {
		var categoryFromUrl = getURLParameter('category');
		if (categoryFromUrl) {
			setTimeout(function () {
				$('.mkd-portfolio-list-holder .mkd-pl-filter-holder ul li[data-filter=".portfolio-category-' + categoryFromUrl + '"]').trigger('click');
			}, 200);
		} else {
			$('.mkd-portfolio-list-holder .mkd-pl-filter-holder').find('.mkd-pl-filter:first').addClass('mkd-pl-current');
		}

	    filterHolder.each(function () {
	        var thisFilterHolder = $(this),
	            thisPortListHolder = thisFilterHolder.closest('.mkd-portfolio-list-holder'),
	            thisPortListInner = thisPortListHolder.find('.mkd-pl-inner');

	        thisFilterHolder.find('.mkd-pl-filter').click(function () {
        		var filterValue = $(this).attr('data-filter');
        		var filterClassName = filterValue.length ? filterValue.substring(1) : '';
        		

        		thisPortListInner.children().removeClass('show-by-filter');
        		thisPortListInner.children().removeClass('section-tile-bg');

        		if (filterClassName === '') {
					thisPortListInner.children().addClass('show-by-filter');
        		} else {
					let filteredList = thisPortListInner.children().filter(function( index ) {
						return $(this).hasClass(filterClassName);
					});

					let tilesBG = [7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75];

					if ($(window).width() <= 585) {
						filteredList.each(function(index) {
							if (index%2 == 0) {
								$(this).addClass('section-tile-bg');
						    }
						});
					} else {
						filteredList.each(function(index) {
							if (index == 0 || index == 3 || index%4 == 0 || tilesBG.includes(index)) {
						       $(this).addClass('section-tile-bg');
						    }
						});
					}
        		}
	        });
	    });
	}
});

function getURLParameter(param)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == param)
        {
            return decodeURIComponent(sParameterName[1]);
        }
    }
}
