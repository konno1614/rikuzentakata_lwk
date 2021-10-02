import Nav from './lib/Sp-Nav'
import PageTop from './lib/Page-Top'
import Swiper from './lib/Swiper'
import Wave from './lib/Wave'

$(function() {
    /**
     * ページ内リンクスクロール
     */
    $('a[href^="#"]').click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var headerHeight = 0;
      var position = target.offset().top - headerHeight;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });

});
