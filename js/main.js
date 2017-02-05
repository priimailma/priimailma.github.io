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


  document.querySelectorAll('.hero__nav__item').forEach(item => {
    item.addEventListener('click', e => scrollIt(e.target));
  });

  

  function scrollIt(element, duration = 200) {
    function checkBody() {
      document.documentElement.scrollTop += 1;
      const body = (document.documentElement.scrollTop !== 0) ? document.documentElement : document.body;
      document.documentElement.scrollTop -= 1;
      return body;
    }

    const body = checkBody();
    const start = body.scrollTop;
    const startTime = Date.now();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    let destination = documentHeight - element.offsetTop < windowHeight ? documentHeight - windowHeight : element.offsetTop;

    destination += documentHeight;

    function scroll() {
      const now = Date.now();
      const time = Math.min(1, ((now - startTime) / duration));
      body.scrollTop = (time * (destination - start)) + start;

      if (body.scrollTop === destination || (window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        return;
      }
      requestAnimationFrame(scroll);
    }
    scroll();
  }

})();
