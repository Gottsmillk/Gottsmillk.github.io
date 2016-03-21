$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
    $('.bannerContent').addClass('bannerContentmove');
    $('.subtext').addClass('subtextscrolled');
  } else {
    $('.bannerContent').removeClass('bannerContentmove');
    $('.subtext').removeClass('subtextscrolled');


  }
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function profile() {
    document.getElementById("myDropdown").classList.toggle("showdropdown");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showdropdown')) {
        openDropdown.classList.remove('showdropdown');
      }
    }
  }
}
$(window).scroll(function() {
  if ($(document).scrollTop() > 80) {
    $('.nav').addClass('shrink');
  } else {
    $('.nav').removeClass('shrink');
  }
});
$(function(){	

    var $window = $(window);
	var scrollTime = 0.5;
	var scrollDistance = 80;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
		var finalScroll2 = scrollTop - parseInt(delta*(scrollDistance*3));

		  if ($(document).scrollTop() <= 80) {
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5	
			});
		} else {
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll2, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5	
			});
		}
	});
});

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "40") {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		var newScrollTop = scrollTop + 80;
		event.preventDefault();	
		
		TweenMax.to($window, 0.5, {
			scrollTo : { y: newScrollTop, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5	
			});
    }
}