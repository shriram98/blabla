$(document).ready(function(){
    $('.wp-zone').waypoint(function(direction) {
    if (direction === 'down') {
      $('nav a').removeClass('disable-click');
      var selector = "nav a[href='#" + this.element.id + "']"; 
      $(selector).addClass('disable-click');
    }
    }, {
    offset: '5%'
  });
  //up
    $('.wp-zone').waypoint(function(direction) {
      if (direction === 'up') {
        $('nav a').removeClass('disable-click');
        var selector = "nav a[href='#" + this.element.id + "']"; 
        $(selector).addClass('disable-click');
      }
    }, {
      offset: '-5%'
  }); 
    
  //navbar
 $('#trigger').click( function(event) {
  if($(window).width() < 786){
    event.stopPropagation();
    $('#navid').addClass('solid');
    $('#navid').toggle();
    $(document).click( function() {
      $('#navid').hide();

   });

  }
 });

 $(window).resize(function (){
  if($(window).width() < 786){
    $('#navid').hide();
    $('.Navbar').addClass('white-text');
  }
});

$(window).resize(function (){
  if($(window).width()>786){
    $('#navid').toggle();
     $('#navid').show();
  }
});

  var flkty = new Flickity( '.main-gallery', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 1500,
    prevNextButtons: true
  });
  
  });