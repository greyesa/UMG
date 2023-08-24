(function() {
  'use strict';

  var navbar = $('header .navbar');

  function stickyNavbar() {
    var scroll = $(window).scrollTop();
    
    if (scroll < 1)
      navbar.removeClass(['sticky', 'show']);
    else
      navbar.addClass('sticky');
  }

  $(window).on('scroll', stickyNavbar);
  $(document).ready(stickyNavbar);

  //

  $(window).on('wheel', function(evt) {
    if (evt.originalEvent.wheelDelta <= 0)
      navbar.addClass(['scrollDown', 'sticky'])
    else
      navbar.removeClass('scrollDown');
  });

  $(window).on('touchstart', function(evt) {
    this.startY = evt.touches[0].clientY;
  });

  $(window).on('touchmove', function(evt) {
    const currentDelta = evt.touches[0].clientY;

    if (currentDelta < this.startY)
      navbar.addClass(['scrollDown', 'sticky']);
    else
      navbar.removeClass('scrollDown');
  });

  //

  const querySelector = '#navbar_Umg .dropdown';
  //const navbar = $('header .navbar');

  var elem = $(querySelector);
  
  elem.on('show.bs.dropdown', function () {
    navbar.addClass('show');
  });

  elem.on('hide.bs.dropdown', function () {
    if ( $(querySelector + '.show').length == 1) 
      navbar.removeClass('show');
  });

})();