$(window).on ("scroll", function() {

	if ($(".navbar").offset().top > 40) {
		$(".navbar").addClass("navbar-fixed");
		$(".go-top").show();
	} else {
		$(".navbar").removeClass("navbar-fixed");
		$(".go-top").hide();
	}
});

$("#navbarNav").on('show.bs.collapse', function() {

	$(".navbar").addClass("navbar-fixed");

	$('a.nav-link, a.btn-custom').click(function() {
		$("#navbarNav").collapse('hide');
	});

})


