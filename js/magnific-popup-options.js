$(document).ready(function() {
  // MagnificPopup Initialization
  $('.popup-image').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
          enabled: true // Enables gallery mode for multiple images
      },
      zoom: {
          enabled: true,
          duration: 300,
          easing: 'ease-in-out',
          opener: function(openerElement) {
              return openerElement.is('a') ? openerElement.find('img') : openerElement;
          }
      }
  });
});