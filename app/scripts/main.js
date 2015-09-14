(function(){
	$('#myModal').modal({
	  show: true
	});
	$('.carousel').carousel({
		controls:true
	});


	$('.caract a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})  
	    
	$('a.scroll').on('click', function (e) {
		var href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, 'slow');
		e.preventDefault();
	});

	$(".scrollchico").click(function() {

		$('html, body').animate({
			scrollTop: $(".objetivo").offset().top
		},1000);
	});
})();
