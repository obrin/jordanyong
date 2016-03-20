import './asyncModules'
import './particles.js'
import exclaimify from './exclaimify'

const $header = $('#header');
const $nav = $('#navigation');
const stickyHeight = $header.offset().top;


/************************************************************
 * Navigation
 ************************************************************/
$(window).scroll(function onScroll() {
  const windowHeight = $(this).scrollTop();

  if (windowHeight >= stickyHeight) {
    $nav.addClass('clipped');
  } else {
    $nav.removeClass('clipped');
  }
});

$(window).scroll(function onScroll() {
  const $sections = $('section');
  const $nav = $('nav');
  const navHeight = $nav.outerHeight();
  const currentPos = $(this).scrollTop();

  $sections.each(function() {
    const top = $(this).offset().top - navHeight;
    const bottom = top + $(this).outerHeight();

    if (currentPos >= top && currentPos <= bottom) {
      $nav.find('a').removeClass('active');
      $sections.removeClass('active');

      $(this).addClass('active');
      $nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  })
});
