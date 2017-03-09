/* Javacript document pour journee d'éléveur */
$(function(){
// ---- Scroll down au clique sur le bouton découvrir
$('body').on('click', '.btn-decouvrir', function(){
	var offset = $('.body-bloc').position().top;
	$("html, body").animate({scrollTop: offset}, 'slow');
});

// ---- action slide-right au click sur le bouton "voir plus" en ajoutant de class sliding, en appliquant un effet de transition en css3
$('body').on('click', '.btn-voirplus', function(){
	$(this).parents(".container").find(".slide-bloc").addClass("sliding");
});

// ---- action clique sur le bloc pour disparaitre le bloc "right-slide-bloc"
$('body').on('click', '.slide-bloc', function(){
	$(this).removeClass("sliding");
});

//    /!\ /!\/!\/!\ Gestion parallaxe + jscrollspane à revoir /!\/!\/!\/!\
if($(".section-bloc").length > 0 ) {
	   // ajouter un scroll de bloc "jscrollPane", afin d'afficher tous les contenus du bloc, juste après le chargement du modal
	   $(".section-bloc").each(function(){
	   	var _this = $(this);

	   	$(".modal-parent").on('shown.bs.modal', function () {

	   		setTimeout ( function () {
	   			callScrollpane(".slide-bloc .scroll-bloc", _this);
	   			skrollr.init();
	   		}, 250);
	   	});
	   });
	}
	
});
