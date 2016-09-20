;(function($) {
  'use strict';

  $(function() {

    var o = {};
    o.init = function() {
      o.setupEvent();
    };

    o.setupEvent = function() {
      var i = $('.page1').height() - $('.header').height() - $('.nav-box').height();
      var $nav_box = $('.nav-box');

      $('.for-next').on('click', function() {
        $('body, html').animate({
          scrollTop: i
        }, 1000);
      });

      $(window).scrollTop() >= i && $nav_box.removeClass('hide');

      $(window).scroll(function() {
        $(window).scrollTop() >= i ? $nav_box.removeClass('hide') : $nav_box.addClass('hide');
      });

      o.goPage();
    }

    o.goPage = function() {
      $('.nav-box').on('click', 'li', function() {
        var o = $(this).index();
        var i = $('.section').eq(o).offset().top - $('.header').height() - $('.nav-box').height();
        $('.nav-box').find('li').eq(o).addClass('current').siblings('li').removeClass('current');
        $('body, html').animate({
          scrollTop: i
        }, 1000);
      });

      // $('.section').each(function(o, i) {
      //     var e = $(i);
      //     $(window).scroll(function() {
      //         var i = $('body, html').scrollTop() + .5 * $(window).height();
      //         i <= .5 * $(window).height() && (i = $('body').scrollTop() + .5 * $(window).height()),
      //         e.offset().top <= i && $('.nav-box').find('li').eq(o).addClass('current').siblings('li').removeClass('current');
      //     });
      // });
    }

    o.init();
  });
})(jQuery);