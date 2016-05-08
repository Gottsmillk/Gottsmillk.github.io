// Navbar static at top after scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 80) {
	$('.nav').css("position", "fixed");
	$('.nav').css("top", "0px");
  } else {
	$('.nav').css("position", "absolute");
	$('.nav').css("top", "80px");
  }
});

// Smooth scrolling on scroll wheel
$(function(){	

    var $window = $(window);
	var scrollTime = 0.5;
	var scrollDistance = 80;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
		var finalScroll2 = scrollTop - parseInt(delta*(scrollDistance*2));

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
	
// Check if user has chromium scroll installed
// use cookies to make sure that this is appears only once
	var detect = function(base, if_installed, if_not_installed) {
    var s = document.createElement('script');
    s.onerror = if_not_installed;
    s.onload = if_installed;
    document.body.appendChild(s);
    s.src = base + '/manifest.json';
}
detect('chrome-extension://' + khpcanbeojalbkpgpmjpdkjnkfcgfkhb, function() {alert('You seem to have chromium scroll wheel enabled. Please add this site to the blacklist since it does not support this extension.');});

});

// Smooth scrolling on down arrow
window.addEventListener("keydown", checkKeyPressed);

function checkKeyPressed(e) {
    if (e.keyCode == "40") {
		var $window = $(window);
		event.preventDefault();	
		var scrollTop = $window.scrollTop();
		var newScrollTop = scrollTop + 80;
		var newScroll = scrollTop + 120
		
		if ($(document).scrollTop() < 160) {
		TweenMax.to($window, 0.5, {
			scrollTo : { y: newScrollTop, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5	
			});
		} else {
		TweenMax.to($window, 0.5, {
			scrollTo : { y: newScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5	
			});
		}
    }
// Smooth scrolling on up arrow
	    else if (e.keyCode == "38") {
		var $window = $(window);
		event.preventDefault();	
		var scrollTop = $window.scrollTop();
		var newScrollTop = scrollTop - 80;
		var newScroll = scrollTop - 120
		
		if ($(document).scrollTop() <= 200) {
		TweenMax.to($window, 0.5, {
			scrollTo : { y: newScrollTop, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5	
			});
		} else {
		TweenMax.to($window, 0.5, {
			scrollTo : { y: newScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5	
			});
		}
    }
}