(function($) {


//scrolování v hlavním menu
  var menu = $('.headline__wrapper'),
      menuLinks = menu.find('a');

  menuLinks.on('click', function(event){
      event.preventDefault();
    
    var id = this.hash;

    $('html,body').animate({ scrollTop: $(id).offset().top }, function() {
      window.location.hash = id;
    });
  });


$( "#green-article" ).click(function(e) {
  e.preventDefault();
  $(".full-article").addClass('active');
});

$( "#article-delete" ).click(function(e) {
  e.preventDefault();
  $(".full-article").addClass('de-active');
});




$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


  })(jQuery);