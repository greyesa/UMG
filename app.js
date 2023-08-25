(function() {
  'use strict';

  const navbar = $('header .navbar');

  function colorizeNavbar() {
    const scrollTop = $(window).scrollTop();

    if ( scrollTop < 1)
      navbar.addClass('bg-transparent');
    else
      navbar.removeClass('bg-transparent');
  }

  $(window).on('scroll', colorizeNavbar);
  $(document).ready(colorizeNavbar).ready(function() {
    
    if ( $(window).scrollTop() > 0)
      navbar.removeClass('mt-0')
  });

  //

  $(window).on('wheel', function(evt) {
    if ( evt.originalEvent.wheelDelta <= 0)
      navbar.removeClass('mt-0');
    else
      navbar.addClass('mt-0');
  
  }).on('touchstart', function(evt) {
    this.startY = evt.touches[0].clientY;
  
  }).on('touchmove', function(evt) {
    const currentY = evt.touches[0].clientY;

    if ( currentY <= startY)
      navbar.removeClass('mt-0');
    else
      navbar.addClass('mt-0');
  });

  //

  $('#navbar_Umg .dropdown').on('show.bs.dropdown', function() {
    navbar.addClass('show');

  }).on('hide.bs.dropdown', function() {
    
    if ( $('#navbar_Umg .dropdown-menu.show').length == 1)
      navbar.removeClass('show');
  });

  $('#navbar_Umg').on('show.bs.collapse', function() {
    navbar.addClass('collapse-show');

  }).on('hide.bs.collapse', function() {  
    navbar.removeClass('collapse-show');
    
  });

})();