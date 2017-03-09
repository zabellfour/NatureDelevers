jQuery(document).ready(function($) {
	sr.reveal('.appear', {
		origin	   :'top',
		viewFactor : 0.2,
		distance : '100px',
		scale    : 1, 
		reset	   : false
	}, 450);
	sr.reveal('.arrowUn', {
		origin	   :'left',
		scale    : 1,
		distance : '550px',
		easing   : 'ease-out'
	});
	sr.reveal('.arrowTop', {
		origin	   :'top',
		scale    : 1,
		distance : '500px',
		easing   : 'ease-out'
	});
	sr.reveal('.arrowRight', {
		origin	   :'right',
		scale    : 1,
		distance : '150px',
		easing   : 'ease-out'
	});
	sr.reveal('.logoBottom', {
		origin	   :'bottom',
		delay	   : 2000,
		duration : 1000,
		scale    : 1,
		distance : '250px',
		easing   : 'ease-out'
	});
});