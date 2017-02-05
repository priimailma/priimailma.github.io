(function () {
  
  var menu = document.querySelector('.menu');
  var hero = document.querySelector('.hero');
  var parallax = document.querySelectorAll('.parallax'),
      speed = 0.5;

  window.onscroll = function() {
    if (isVisibleOnScreen(hero)) {
      menu.classList.remove('menu--visible');
    } else {
      menu.classList.add('menu--visible');
    }

    [].slice.call(parallax).forEach(function(el,i) {
      if (! isVisibleOnScreen(el)) {
        return;
      }

      var windowYOffset = window.pageYOffset;
      var elBackgrounPos = '50% ' + parseInt(windowYOffset * speed) + 'px';

      el.style.backgroundPosition = elBackgrounPos;
    });
  };

  

  function isVisibleOnScreen(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

})();
