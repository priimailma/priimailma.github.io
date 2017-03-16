(function () {

  var menu = document.querySelector('.menu');
  var hero = document.querySelector('.hero');

  // parallax options
  var parallax = document.querySelectorAll('.parallax'),
      speed = 0.6;

  // Run when the user scrolls
  window.onscroll = function () {
    showOrHideMenu();
    parallaxElements();
  };
  window.onscroll();

  // Show the static menu if scrolled beyond the hero section
  function showOrHideMenu() {
    if (isVisibleOnScreen(hero)) {
      menu.classList.remove('menu--visible');
    } else {
      menu.classList.add('menu--visible');
    }
  }

  // Move the bg of elements in parallax effect if visible
  function parallaxElements() {
    [].slice.call(parallax).forEach(function (el) {
      if (! isVisibleOnScreen(el)) {
        return;
      }

      el.style.backgroundPosition = '50% ' + parseInt(window.pageYOffset * speed) + 'px';
    });
  }

  // Check is the given el visible on the screen
  // with optional threshold.
  function isVisibleOnScreen(elm, threshold) {
    if (! elm) {
        return false;
    }

    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var rect = elm.getBoundingClientRect();

    return ! (
      rect.bottom - (threshold || 0) < 0 ||
      rect.top - viewHeight >= 50
    );
  }

  var tricker = menu.querySelector('#menu-tricker');

  // responsive menu
  menu.addEventListener('click', function (e) {
    // if the menu-tricker el is visible (then menu is in the responsive mode)
    if (tricker.getBoundingClientRect().width !== 0) {
      // just toggle the the opening state whatever is it open now or not
      menu.querySelector('.menu__links--mobile').classList.toggle('menu__links--open');

      tricker.querySelector('.close').classList.toggle('active');
      tricker.querySelector('.open').classList.toggle('active');
    }
  });

  // initialize the smooth scrolling for menus
  smoothScroll.init({
    offset: menu.offsetHeight,
  });
})();
