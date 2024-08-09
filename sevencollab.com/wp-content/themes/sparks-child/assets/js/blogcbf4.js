(function($) {
    "use strict";


    var blog = {};
    mkd.modules.blog = blog;

    blog.mkdInitAudioPlayer = mkdInitAudioPlayer;
    blog.mkdInitBlogMasonry = mkdInitBlogMasonry;
    blog.mkdInitBlogLoadMore = mkdInitBlogLoadMore;

    blog.mkdOnDocumentReady = mkdOnDocumentReady;
    // blog.mkdOnWindowLoad = mkdOnWindowLoad;
    blog.mkdOnWindowResize = mkdOnWindowResize;
    blog.mkdOnWindowScroll = mkdOnWindowScroll;

    $(document).ready(mkdOnDocumentReady);
     $(window).load(mkdOnWindowLoad);
    $(window).resize(mkdOnWindowResize);
    $(window).scroll(mkdOnWindowScroll);

    /*
     All functions to be called on $(document).ready() should be in this function
     */
    function mkdOnDocumentReady() {
        mkdInitAudioPlayer();
        mkdInitBlogMasonry();
        mkdInitBlogLoadMore();
    }

    /*
     All functions to be called on $(window).load() should be in this function
     */
    function mkdOnWindowLoad() {
      //  mkdInitBlogMasonry();
       // mkdInitBlogLoadMore();
    }

    /*
     All functions to be called on $(window).resize() should be in this function
     */
    function mkdOnWindowResize() {

    }

    /*
     All functions to be called on $(window).scroll() should be in this function
     */
    function mkdOnWindowScroll() {

    }



    function mkdInitAudioPlayer() {

        var players = $('audio.mkd-blog-audio');

        players.mediaelementplayer({
            audioWidth: '100%'
        });
    }

    var isotopFunction = function () {
        var container = $('.mkd-blog-holder.mkd-blog-type-masonry');

        container.waitForImages(function() {
            container.isotope({
                layoutMode: 'packery',
                itemSelector: 'article',
                resizable: false,
                packery: {
                    columnWidth: '.mkd-blog-masonry-grid-sizer',
                    gutter: '.mkd-blog-masonry-grid-gutter'
                },
                transitionDuration: 0,
               //  animationOptions: {
               //      animationEngine: 'best-available',
               //      duration: 750,
               //      easing: 'linear',
               //      queue: false
               //  },
            });
            container.addClass('mkd-appeared');

        });
    };


    function mkdInitBlogMasonry() {

        if($('.mkd-blog-holder.mkd-blog-type-masonry').length) {

            isotopFunction();

            var filters = $('.mkd-filter-blog-holder');
            $('.mkd-filter').click(function() {

                $('.mkd-mimic-ajax').show();
                $('.preloader-active').show();

                var filter = $(this);

                filters.find('.mkd-active').removeClass('mkd-active');
                filter.addClass('mkd-active');

                var catId = ($(this).data('catid'));


                var ajaxCustomData = {
                    action: 'ajax_custom_blog_filter',
                    catId: catId
                };

                $.ajax({
                    type: 'POST',
                    data: ajaxCustomData,
                    url: MikadoAjaxUrl,
                    success: function (data) {

                        var thisBlogHolder = $('.mkd-blog-holder');
                        thisBlogHolder.html('');

                        var response = $.parseJSON(data);
                        var responseHtml =  response.html;

                        $('.mkd-load-more-ajax-pagination').show();

                        if(response.pagesCustomNumber == 1){
                            $('.mkd-load-more-ajax-pagination').hide();
                        }

                        var container = $('.mkd-blog-holder.mkd-blog-type-masonry');
                        container.data('next-page', 2);

                        thisBlogHolder.append(responseHtml).isotope('reloadItems');
                        isotopFunction();

                        setTimeout(function() {
                            mkd.modules.blog.mkdInitAudioPlayer();
                            mkd.modules.common.mkdOwlSlider();
                            mkd.modules.common.mkdFluidVideo();
                        },400);

                        $('.mkd-mimic-ajax').hide();
                        $('.preloader-active').hide();

                        return false;
                    }
                });
                return false;
            });
        }
    }

    function mkdInitBlogLoadMore(){
        var blogHolder = $('.mkd-blog-holder.mkd-blog-load-more');

        if(blogHolder.length){
            blogHolder.each(function(){
                var thisBlogHolder = $(this);
                var nextPage;
                var maxNumPages;

                var loadMoreButton = thisBlogHolder.find('.mkd-load-more-ajax-pagination .mkd-btn');

                console.log(loadMoreButton);

                maxNumPages =  thisBlogHolder.data('max-pages');

                $('.mkd-load-more-ajax-pagination .mkd-btn').click( function (e) {
                     e.preventDefault();
                     e.stopPropagation();

                    var loadMoreDatta = getBlogLoadMoreData(thisBlogHolder);
                    nextPage = loadMoreDatta.nextPage;

                    console.log(thisBlogHolder);

                    if(nextPage <= maxNumPages){
                        $('.mkd-mimic-ajax').show();
                        $('.preloader-active').show();

                        var ajaxData = setBlogLoadMoreAjaxData(loadMoreDatta);

                        $.ajax({
                            type: 'POST',
                            data: ajaxData,
                            url: MikadoAjaxUrl,
                            success: function (data) {
                                nextPage++;
                                thisBlogHolder.data('next-page', nextPage);

                                var response = $.parseJSON(data);
                                var responseHtml =  response.html;


                                thisBlogHolder.waitForImages(function(){

                                    if(thisBlogHolder.hasClass('mkd-blog-type-masonry')){

                                        thisBlogHolder.append(responseHtml).isotope('reloadItems').isotope({sortBy: 'original-order'});
                                        //mkdInitBlogMasonry();
                                        isotopFunction();

                                    }
                                    else if(thisBlogHolder.hasClass('mkd-blog-type-masonry-gallery')){

                                        thisBlogHolder.append(responseHtml).isotope('reloadItems').isotope({sortBy: 'original-order'});

                                        mkdInitBlogMasonryGallery();
                                        mkdInitBlogMasonryGalleryContentPosition();

                                    }
                                    else{
                                        thisBlogHolder.find('article:last').after(responseHtml); // Append the new content
                                    }

                                    setTimeout(function() {
                                        mkd.modules.blog.mkdInitAudioPlayer();
                                        mkd.modules.common.mkdOwlSlider();
                                        mkd.modules.common.mkdFluidVideo();
                                    },400);

                                    $('.mkd-mimic-ajax').hide();
                                    $('.preloader-active').hide();
                                });
                            }
                        });
                    }

                    if(nextPage === maxNumPages){
                        $('.mkd-load-more-ajax-pagination').hide();
                    }

                });
            });
        }
    }
    function getBlogLoadMoreData(container){

        var returnValue = {};

        returnValue.nextPage = '';
        returnValue.number = '';
        returnValue.category = '';
        returnValue.blogType = '';
        returnValue.archiveCategory = '';
        returnValue.archiveAuthor = '';
        returnValue.archiveTag = '';
        returnValue.archiveDay = '';
        returnValue.archiveMonth = '';
        returnValue.archiveYear = '';

        if (typeof container.data('next-page') !== 'undefined' && container.data('next-page') !== false) {
            returnValue.nextPage = container.data('next-page');
        }
        if (typeof container.data('post-number') !== 'undefined' && container.data('post-number') !== false) {
            returnValue.number = container.data('post-number');
        }

        returnValue.category = $('.mkd-filter-blog .mkd-active').data('catid');

        if (typeof container.data('blog-type') !== 'undefined' && container.data('blog-type') !== false) {
            returnValue.blogType = container.data('blog-type');
        }
        if (typeof container.data('archive-category') !== 'undefined' && container.data('archive-category') !== false) {
            returnValue.archiveCategory = container.data('archive-category');
        }
        if (typeof container.data('archive-author') !== 'undefined' && container.data('archive-author') !== false) {
            returnValue.archiveAuthor = container.data('archive-author');
        }
        if (typeof container.data('archive-tag') !== 'undefined' && container.data('archive-tag') !== false) {
            returnValue.archiveTag = container.data('archive-tag');
        }
        if (typeof container.data('archive-day') !== 'undefined' && container.data('archive-day') !== false) {
            returnValue.archiveDay = container.data('archive-day');
        }
        if (typeof container.data('archive-month') !== 'undefined' && container.data('archive-month') !== false) {
            returnValue.archiveMonth = container.data('archive-month');
        }
        if (typeof container.data('archive-year') !== 'undefined' && container.data('archive-year') !== false) {
            returnValue.archiveYear = container.data('archive-year');
        }

        return returnValue;

    }

    function setBlogLoadMoreAjaxData(container){

        var returnValue = {
            action: 'sparks_mikado_blog_load_more_custom',
            nextPage: container.nextPage,
            number: container.number,
            category: container.category,
            blogType: container.blogType,
            archiveCategory: container.archiveCategory,
            archiveAuthor: container.archiveAuthor,
            archiveTag: container.archiveTag,
            archiveDay: container.archiveDay,
            archiveMonth: container.archiveMonth,
            archiveYear: container.archiveYear
        };

        return returnValue;
    }

    $('.mkd-blog-share .mkd-social-share-holder a').each(function(){
        $(this).removeAttr('href');
    })

})(jQuery);
