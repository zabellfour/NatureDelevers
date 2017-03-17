import './modules/nav';
import './modules/tabs';
import './modules/openClose';

function initGetAjax() {
	onVideoPauseButtonClick();
	playSound(false);
	skrollr.init().destroy();
	$(function() {
		if ($(window).width() > 1024) {
			$('.scroll-block').jScrollPane();
		}
	});
	$('body').on('click', '.scroll-link', function() {
		var offset = $('.body-holder').position().top;
		$("body, .modal").animate({
			scrollTop: offset
		}, 'slow');
	});
	$(".fancybox-media").fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		helpers: {
			media: {}
		}
	});
	$(".economes-popup").fancybox({
		maxWidth: 500,
		maxHeight: 400,
		fitToView: true,
		autoSize: true,
		closeClick: false,
		openEffect: 'none',
		closeEffect: 'none'
	});
	$(".fancybox-media").fancybox({
		openEffect: 'none',
		closeEffect: 'none',
		helpers: {
			media: {}
		}
	});
	$('div.open-box-text').openClose({
		hideOnClickOutside: true,
		activeClass: 'active',
		opener: '.open-text-btn',
		slider: '.holder-text',
		animSpeed: 400,
		effect: 'slide'
	});
	skrollr.init({
		forceHeight: false
	});
}

$('#modalChapter').on('shown.bs.modal', function(e) {
	initGetAjax()
});