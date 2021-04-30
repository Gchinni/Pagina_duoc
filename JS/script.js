$(window).on ("scroll", function() {

	if ($(".navbar").offset().top > 40) {
		$(".navbar").addClass("navbar-fixed");
	} else {
		$(".navbar").removeClass("navbar-fixed");
	}
})




