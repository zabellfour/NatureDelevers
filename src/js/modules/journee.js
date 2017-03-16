/* Javacript document pour journee d'éléveur */
$(function(){

// ---- action clique sur le bloc pour disparaitre le bloc "right-slide-bloc"
$('body').on('click', '.slide-block', function(){
	$(this).removeClass("sliding");
});

//    /!\ /!\/!\/!\ Gestion parallaxe + jscrollspane à revoir /!\/!\/!\/!\
if($(".modal-box").length > 0 ) {
	   // ajouter un scroll de bloc "jscrollPane", afin d'afficher tous les contenus du bloc, juste après le chargement du modal
	   $(".section-block").each(function(){
	   	var _this = $(this);

	   	$(".modal-box").on('shown.bs.modal', function () {

	   		setTimeout ( function () {
	   			callScrollpane(".slide-block .scroll-block", _this);
	   			skrollr.init();
	   		}, 1250);
	   	});
	   });
	}
	
});
