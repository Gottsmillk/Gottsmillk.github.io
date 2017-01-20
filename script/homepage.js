var toggled = false;
// Navbar static at top after scroll, fixes navbar size after scroll, fixes body positioning after scroll
$(window).scroll(function() {
  if ($(document).scrollTop() < 80) {
	$('.nav').css("position", "absolute");
	$('.nav').css("top", "80px");
	$('.sidebar').css("position", "absolute");
	$('.sidebar').css("top", "120px");
	} else {
	$('.nav').css("position", "fixed");
	$('.nav').css("top", "0px");
	$('.sidebar').css("position", "fixed");	
	$('.sidebar').css("top", "40px");
  }
});

//Sidebar opening and collapsing
function sidebar() {
	if (toggled == false) {
		$('.sidebar').animate({width: "160px"}, "fast");
		toggled = true;
	}
	else if (toggled == true) {
		$('.sidebar').animate({width: "0px"}, "fast");
		toggled = false;
	}
}

// Close the sidebar menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.link-sidebar a') 
  && !event.target.matches('.sidebar')
  && !event.target.matches('.sidebar-header a')
  && toggled == true) {
	$('.sidebar').animate({width: "0px"}, "fast");
	toggled = false;
  }
}

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
//Handling various aspect ratios
function updateContainer() {
	var w = $(window).width();
	var h = $(window).height();
    var r = w/h;
	var x = 0;
		if (w <= 1024) {
			$('.pic1').css("width", "1024px");	
			x = 1024;
			$('.pic1').css("right", (x-(w+17))/2);
		}
		else {
			$('.pic1').css("width", "100%");
			$('.pic1').css("right", "0px");			
		}
	document.getElementById("test").textContent=w;
}
$(document).ready(function () {
    updateContainer();
    $(window).resize(function() {
        updateContainer();
    });
});