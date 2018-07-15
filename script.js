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
    
  var flkty = new Flickity( '.main-gallery', {
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoPlay: 1500,
    prevNextButtons: true
  });
  
  });