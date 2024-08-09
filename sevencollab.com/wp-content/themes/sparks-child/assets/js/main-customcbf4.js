var visibleEngineers = 0;
var arrSelected = [];
var selectedLevels = [];
var englishLevels = [];

$(document).ready(function () {
  jQuery('#datecal').datepicker({
    dateFormat: 'mm/dd/yy'
  });

  $('#custompicker1').datetimepicker({
    timeFormat: "hh:mm TT",
    dateFormat: '',
    timeOnly: true,
    stepMinute: 15
  });

  setCustomLoadingSpinnerForVideo();
  setCustomLoadingSpinnerForLayerSlider();

  var width = $(window).width();
  showFilterBlock(width);
  $(window).resize(function () {
    width = $(window).width();
    showFilterBlock(width);
  });
  $('select.filter-item').change(function () {
    var all_skill = false;
    var all_level = false;
    var all_english = false;
    arrSelected = [];
    selectedLevels = [];
    englishLevels = [];
    $("select[name*='skills'] option:selected").each(function () {
      if (all_skill)
        $(this).attr('selected', false);
      if ($(this).val() == 'all')
        all_skill = true;
      if (!all_skill)
        arrSelected.push($(this).val());
    });
    $("select[name*='levels'] option:selected").each(function () {
      if (all_level)
        $(this).attr('selected', false);
      if ($(this).val() == 'all')
        all_level = true;
      if (!all_level)
        selectedLevels.push($(this).val());
    });
    $("select[name*='english'] option:selected").each(function () {
      if (all_english)
        $(this).attr('selected', false);
      if ($(this).val() == 'all')
        all_english = true;
      if (!all_english)
        englishLevels.push($(this).val());
    });
    showEngineers();

  });
  $('.filter-items-skills .filter-item :checkbox').click(function () {
    visibleEngineers = 0;
    arrSelected = [];
    selectedLevels = [];
    englishLevels = [];
    if ($('input:checkbox:checked').length) {
      $('input[name*="skills-list-filter"]:checkbox:checked').each(function () {
        arrSelected.push($(this).val());
      });
      $('input[name*="level-list-filter"]:checkbox:checked').each(function () {
        selectedLevels.push($(this).val());
      });
      $('input[name*="english-list-filter"]:checkbox:checked').each(function () {
        englishLevels.push($(this).val());
      });
      showEngineers();
    } else {
      $('#no-engineers-block').hide();
      $(".available-developers-section").fadeIn();
    }
  });

  $('.mkd-btn[href*="#"]').click(function (event) {
    return false;
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 150
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              //$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              //$target.focus(); // Set focus again
            }
            ;
          });
        }
      }
    });

  setTimeout(function () {
    if (location.hash) {
      window.scrollTo(0, 0);
      $('html, body').animate({scrollTop: $(location.hash).offset().top - 150}, 1000);
      parent.location.hash = ''
    }
  }, 1);

  $('.gant-action-left').click(function () {
    var config = {
      'scrollableDomEle': document.querySelector('.gant-chart-scroll'),
      'duration': 1000,
      'direction': 'left',
      'easingPreset': 'easeInQuad',
      'onAnimationCompleteCallback': function() {}
    };
    if (!isNaN(500) && 500 > 0) {
      config.scrollAmount = 500;
    }
    easyScroll(config);
  });

  $('.gant-action-right').click(function () {
    var config = {
      'scrollableDomEle': document.querySelector('.gant-chart-scroll'),
      'duration': 1000,
      'direction': 'right',
      'easingPreset': 'easeInQuad',
      'onAnimationCompleteCallback': function() {}
    };
    if (!isNaN(500) && 500 > 0) {
      config.scrollAmount = 500;
    }
    easyScroll(config);
  });

  var vids = $('video'); 
  $.each(vids, function(){
     this.controls = false;
  });

  // $('.mkd-pl-filter').click(function () {
  //   const url = new URL(window.location.href);
  //   url.searchParams.set('category', 'recent,healthcare,p2p-ppm-chats');
  //   window.history.pushState(null, null, url);
  // }); 


  if (window.location.href.indexOf('case-study') > -1) {
    $('#nav-menu-item-12809').addClass('current-menu-item current_page_item mkd-active-item');
    $('#nav-menu-item-12809 a').addClass('current');
    $('#sticky-nav-menu-item-12809').addClass('current-menu-item current_page_item mkd-active-item');
    $('#sticky-nav-menu-item-12809 a').addClass('current');
  } 

  if ($('body').hasClass('single-post') || $('body').hasClass('tag') || $('body').hasClass('category') || $('body').hasClass('search')) {
    $('#nav-menu-item-14511').addClass('current-menu-ancestor current-menu-parent mkd-active-item');
    $('#nav-menu-item-14511 a').addClass('current');
    $('#sticky-nav-menu-item-14511').addClass('current-menu-ancestor current-menu-parent mkd-active-item');
    $('#sticky-nav-menu-item-14511 a').addClass('current');
  }

  if (window.location.href.indexOf('available-developer') > -1) {
    $('#nav-menu-item-12799').addClass('current-menu-item current_page_item mkd-active-item');
    $('#nav-menu-item-12799 a').addClass('current');
    $('#sticky-nav-menu-item-12799').addClass('current-menu-item current_page_item mkd-active-item');
    $('#sticky-nav-menu-item-12799 a').addClass('current');
  } 

  if (window.matchMedia('(min-width: 768px)').matches) {
    let videos= document.querySelectorAll('.video-js:not(.blog-video) video');
    videos.forEach((video) => {
      isInViewport(video) ? video.play() : video.pause();
    });
  }

  $('.cf-thank-you-section .cf-thank-you-btn').click(function () {
    $('.cftys-success').hide();
    $('.cftys-error').hide();
    $('.cf-replace-section').show();
  });

  $('.cf-thank-you-section .cf-thank-you-btn-close').click(function () {
    document.querySelectorAll('#sgcboxClose').forEach(close => {
      close.click();
    })
  });

  $('.before-sidebar-header').click(function() {
    $('.before-sidebar-body').slideToggle('normal');
    $('.before-sidebar-header img').toggleClass('rotate-top');
  });

  if (window.location.href.indexOf('tag') > -1) {
    var currentUrl = window.location.pathname;
    $('.tagcloud a').each(function() {
      console.log($(this).attr('href'));
      if ($(this).attr('href').indexOf(currentUrl) > -1) {
        $(this).addClass('active');
      }
    });
  }

  if ($('li:nth-child(2)').hasClass('active')) {
    $('.mkd-pagination-prev').addClass('not-active-pagination');
    $('.mkd-pagination-prev a').click(function(event) {
      event.preventDefault();
    });
  }

  if ($('li:last-child').prev().hasClass('active')) {
    $('.mkd-pagination-next').addClass('not-active-pagination');
    $('.mkd-pagination-next a').click(function(event) {
      event.preventDefault();
    });
  }


  // $('.icon-click1').click(function () {
  //   _N2.r('#n2-ss-166', function(){
  //       var slider = _N2['#n2-ss-166'];
  //       slider.slide(1);
  //   });
  // });
  // $('.icon-click2').click(function () {
  //   _N2.r('#n2-ss-166', function(){
  //       var slider = _N2['#n2-ss-166'];
  //       slider.slide(2);
  //   });
  // });
  // $('.icon-click3').click(function () {
  //   _N2.r('#n2-ss-166', function(){
  //       var slider = _N2['#n2-ss-166'];
  //       slider.slide(6);
  //   });
  // });
  // $('.icon-click4').click(function () {
  //   _N2.r('#n2-ss-166', function(){
  //       var slider = _N2['#n2-ss-166'];
  //       slider.slide(0);
  //   });
  // });

});

document.addEventListener('scroll', function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    let videos= document.querySelectorAll('.video-js:not(.blog-video) video');
    videos.forEach((video) => {
      isInViewport(video) ? video.play() : video.pause();
    });
  }
}, {
  passive: true
});

document.addEventListener('touchmove', function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    let videos= document.querySelectorAll('.video-js:not(.blog-video) video');
    videos.forEach((video) => {
      isInViewport(video) ? video.play() : video.pause();
    });
  }
}, {
  passive: true
});

function setCustomLoadingSpinnerForVideo() {
  var videos = document.querySelectorAll('.video-js video');
  for (var i = 0; i < videos.length; i++) {
    var player = videojs(videos[i].id);
    player.loadingSpinner.el().innerHTML = '<div id="circleG">'
      + '<div id="circleG_1" class="circleG"></div>'
      + '<div id="circleG_2" class="circleG"></div>'
      + '<div id="circleG_3" class="circleG"></div>'
    + '</div>';
  }
}

function setCustomLoadingSpinnerForLayerSlider() {
  setTimeout(function () {
    var layerSliders = document.querySelectorAll('.ls-wp-container .ls-loading-container');
    for (var i = 0; i < layerSliders.length; i++) {
      var layerSlider = layerSliders[i];
      layerSlider.innerHTML = '<div id="circleG">'
        + '<div id="circleG_1" class="circleG"></div>'
        + '<div id="circleG_2" class="circleG"></div>'
        + '<div id="circleG_3" class="circleG"></div>'
      + '</div>';
    }
  }, 1000);
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const thanksPopupBtn = document.querySelectorAll('.thanks_popup .sg-show-popup');

function showThanks() {
  document.querySelectorAll('.thanks_popup .sg-show-popup').forEach(el => {
     el.click();
  })
}

document.addEventListener('wpcf7mailsent', function (event) {
  $('#' + event.detail.id + ' .cf-replace-section').hide();
  $('#' + event.detail.id + ' .cftys-success').show();

  if ('13655' == event.detail.contactFormId || '13888' == event.detail.contactFormId) {
    document.querySelectorAll('#sgcboxClose').forEach(close => {
      close.click();
    })
    window.setTimeout(function() {
      showThanks();
    }, 100);
  }

  if ('13655' == event.detail.id) {
    window.uetq = window.uetq || [];
    window.uetq.push({'ec': 'RequestCV', 'ea': 'Submit', 'el': 'button', 'ev': 1});
  }
  if ('13903' == event.detail.id) {
    window.uetq = window.uetq || [];
    window.uetq.push({'ec': 'RequestCV', 'ea': 'Submit', 'el': 'button', 'ev': 1});
  }
  if ('13759' == event.detail.id) {
    window.uetq = window.uetq || [];
    window.uetq.push({'ec': 'GetFreeTrial', 'ea': 'Submit', 'el': 'button', 'ev': 1});
  }
  // qp('track', 'GenerateLead');
}, true);

document.addEventListener('wpcf7mailfailed', function (event) {
  $('#' + event.detail.id + ' .cf-replace-section').hide();
  $('#' + event.detail.id + ' .cftys-error').show();
}, true);
document.addEventListener('wpcf7spam', function (event) {
  $('#' + event.detail.id + ' .cf-replace-section').hide();
  $('#' + event.detail.id + ' .cftys-error').show();
}, true);

function showFilterBlock(width) {
  if (width < 768) {
    $('#multi-select-filter').show();
    $('#check-filter').hide();
  } else {
    $('#multi-select-filter').hide();
    $('#check-filter').show();
  }
}

function showEngineers() {
  $('.available-developers-section').each(function () {
    $(this).hide();

    var str1 = $(this).attr('data-skillsitemhidden');
    var i = 0;
    for (var q = 0; q < arrSelected.length; q++) {
      if (str1.indexOf('_' + arrSelected[q] + '_') != -1) {
        i++
      }
    }
    var isNeededLevel = selectedLevels.length === 0 ? true : false;
    for (var q = 0; q < selectedLevels.length; q++) {
      if (str1.indexOf('_' + selectedLevels[q]) > -1) {
        isNeededLevel = true;
      }
    }
    var isEnglishLevel = englishLevels.length === 0 ? true : false;
    for (var q = 0; q < englishLevels.length; q++) {
      if (str1.indexOf(englishLevels[q]) > -1) {
        isEnglishLevel = true;
      }
    }

    if (i == arrSelected.length && isNeededLevel && isEnglishLevel) {
      visibleEngineers++;
      $(this).fadeIn();
    }

  });
  if (visibleEngineers === 0) {
    $('#no-engineers-block').show();
  } else {
    $('#no-engineers-block').hide();
  }
}

$(".schedule_section select").each(function () {
  var $this = $(this),
    numberOfOptions = $(this).children("option").length;

  $this.addClass("select-hidden");
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next("div.select-styled");
  $styledSelect.text($this.children("option").eq(0).text());

  var $listContainer = $("<div />", {
    class: "select-options-container",
  }).insertAfter($styledSelect);

  var $list = $("<ul />", {
    class: "select-options",
  }).appendTo($listContainer);

  for (var i = 0; i < numberOfOptions; i++) {
    $("<li />", {
      text: $this.children("option").eq(i).text(),
      rel: $this.children("option").eq(i).val(),
    }).appendTo($list);
    //if ($this.children('option').eq(i).is(':selected')){
    //  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
    //}
  }

  var $listItems = $list.children("li");

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.select-styled.active")
      .not(this)
      .each(function () {
        $(this)
          .removeClass("active")
          .next(".select-options-container")
          .hide();
      });
    $(this).toggleClass("active").next(".select-options-container").toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    // $list.hide();
    $listContainer.hide();
  });

  $(document).click(function () {
    $styledSelect.removeClass("active");
    // $list.hide();
    $listContainer.hide();
  });
});

const targetNode = document.body;
const config = {
  childList: true,
  subtree: true
};

const callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {

      $('.wpcf7-field-group-add').each(function () {
        $(this).click(function (e) {
          $(this).hide();
          $(this).parent().addClass('added');
        });
      });

      $('.wpcf7-field-group-remove').each(function () {
        $(this).click(function (e) {
          $(this).closest('.wpcf7-field-group').prev().find('p.added').removeClass('added');
          $(this).closest('.wpcf7-field-group').prev().find('.wpcf7-field-group-add').show();
        });
      });



      $('div.select-styled').click(function (e) {
        e.stopPropagation();
        $("div.select-styled.active")
          .not(this)
          .each(function () {
            $(this)
              .removeClass('active')
              .next('.select-options-container')
              .hide();
          });
        $(this).addClass('active selected').next().show();
      });

    }

    $('.select-options li').click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active').addClass('selected');
      $('div.select-styled.active').next().hide();
      $('div.select-styled.active').prev().val($(this).attr("rel"));
      $('div.select-styled.active').text($(this).text()).removeClass("active");
      // $list.hide();
    });

    $(document).click(function () {
      $('div.select-styled.active').next().hide();
      $('div.select-styled.active').removeClass("active");
      // $list.hide();
    });
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
