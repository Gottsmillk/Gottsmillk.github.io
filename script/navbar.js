$(window).scroll(function() {
  if ($(document).scrollTop() > .000001) {
    $('.bannerContent').addClass('bannercontentmove');
    $('.subtext').addClass('subtextscrolled');
  } else {
    $('.bannerContent').removeClass('bannercontentmove');
    $('.subtext').removeClass('subtextscrolled');
  }
});
$(window).scroll(function() {
  if ($(document).scrollTop() > 60) {
    $('.nav').addClass('shrink');
  } else {
    $('.nav').removeClass('shrink');
  }
});
$(function(){	

        var $window = $(window);
	var scrollTime = 0.7;
	var scrollDistance = 210;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});
});