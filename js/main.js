(function () {

  var parallax = document.querySelectorAll('.parallax'),
      speed = 0.5;

  window.onscroll = function() {
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
