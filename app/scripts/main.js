(function(){

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
			scrollTop: $(".objetivo").offset().top
		}, 'slow');
		e.preventDefault();
	});

	$(".scrollchico").on('click', function (e) {

		$('#tabs > li').removeClass('active')
		e.preventDefault();
	});

/*	if(localStorage.getItem('popState') != 'shown'){*/
		$('#myModal').modal({
			show: true
		});
/*		localStorage.setItem('popState','shown')
    }*/
})();
