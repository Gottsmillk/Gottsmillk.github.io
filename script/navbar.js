// Banner movement on scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 0) {
    $('.bannerContent').addClass('bannerContentmove');
    $('.subtext').addClass('subtextscrolled');
  } else {
    $('.bannerContent').removeClass('bannerContentmove');
    $('.subtext').removeClass('subtextscrolled');


  }
});
// Navbar static at top after scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 80) {
    $('.nav').addClass('fixed');
  } else {
    $('.nav').removeClass('fixed');
  }
});

// Check if user has chromium scroll installed
$(function() {
var myExtension = chrome.management.get( "khpcanbeojalbkpgpmjpdkjnkfcgfkhb");
if (myExtension.enabled)
{
alert("You seem to have chromium scroll wheel enabled. Please add this site to the blacklist since it does not support this extension.");
// use cookies to make sure that this is appears only once
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