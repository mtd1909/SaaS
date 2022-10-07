$('.features__slide').owlCarousel({
  loop: true,
  items: 1,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true
})
$('.trust__slide').owlCarousel({
  loop: true,
  items: 5,
  center: true,
  autoplayTimeout: 4000,
  smartSpeed: 1000,
  autoplay: true,
  autoplayHoverPause: true,
  responsive : {
    0: {
      items: 1,
    },
    379: {
      items: 3,
    },
    767: {
      items: 5,
    },
  }
})

// Sticky header
let header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Vanilla Menu //
function functionScroll() {
  var section = document.querySelectorAll('.section'),
    sections = {},
    i = 0;
  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });
  let header = document.querySelector('.header');
  let height = header.offsetHeight;
  for (i in sections) {
    if (sections[i] <= window.pageYOffset + height) {
      const active = document.querySelector('.active');
      if (active) {
        active.classList.remove('active');
      }
      if (document.querySelector('a[href*=' + i + ']')) {
        document.querySelector('a[href*=' + i + ']').classList.add('active');
      }
    }
  }
}
window.addEventListener('scroll', functionScroll);
window.addEventListener('resize', functionScroll);

$( '.header__menu .header__menu-item .menu__item-link' ).on( 'click', function(e){
  $( '.header__menu .header__menu-item .menu__item-link' ).removeClass( 'active' );
  $( this ).addClass( 'active' );
  var href = $(this).attr( 'href' );
  $( 'html, body' ).animate({
    scrollTop: $( href ).offset().top
  }, 1000 );
  e.preventDefault();
});

$( '.logo' ).on( 'click', function(e){
  var href = $(this).attr( 'href' );
  $( 'html, body' ).animate({
    scrollTop: $( href ).offset().top
  }, 1000 );
  e.preventDefault();
});

// Back to top
function BackToTop() {
  $('.back-to-top').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
      return false;
  });

  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 0) {
          $('.back-to-top').fadeIn();
          $('.back-to-top').addClass('open');
      } else {
          $('.back-to-top').fadeOut();
          $('.back-to-top').removeClass('open');
      }
  });
}
BackToTop();

// Click hien menu
$('.menu__bars').click(function(e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
  $('.header__menu').toggleClass('show__menu');
  $('body').toggleClass('hidden');
  $('.overlay_container').toggleClass('menu_bars_overlay');
})

$('.overlay_container').click(function() {
  $('.header__menu').removeClass('show__menu');
  $('.overlay_container').removeClass('menu_bars_overlay');
  $('body').removeClass('hidden');
})  