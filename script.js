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

  $('a[href*=#]').bind('click', function(e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 800, function() {
        location.hash = target; //attach the hash (#jumptarget) to the pageurl
    });

    return false;
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

$(window).scroll(function() {
  // checks if window is scrolled more than certain px, adds/removes solid class

  if($(this).scrollTop() > 690) { 
      $('.Navbar').addClass('solid');
      $('.Navbar').removeClass('white-text');
      $('.Navbar-Link a').css("color","black");
    } else {
      $('.Navbar').removeClass('solid');
      $('.Navbar').addClass('white-text');
      $('.Navbar-Link a').css("color","white");
      
  }

});

//transparency effect
$(window).scroll(
  {
      previousTop: 0
  }, 
  function () {
  var currentTop = $(window).scrollTop();
  if (currentTop < this.previousTop) {
    $('.Navbar').removeClass("slideUp");
    $('.Navbar').addClass("slideDown");
  } else {
    $('.Navbar').removeClass("slideDown");
    $('.Navbar').addClass("slideUp");
  }
  this.previousTop = currentTop;
});



$(window).resize(function (){
  if($(window).width()>786){
    $('#navid').toggle();
     $('#navid').show();
  }
});


  
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.Navbar a.active').removeClass('active');
          $('.Navbar a').eq(i).addClass('active');
      }
  });
}).scroll();