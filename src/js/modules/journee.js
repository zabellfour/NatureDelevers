/* Javacript document pour journee d'éléveur */
$(function() {

<<<<<<< HEAD
    // ---- action slide-right au click sur le bouton "voir plus" en ajoutant de class sliding, en appliquant un effet de transition en css3
    $('body').on('click', '.btn-plus', function() {
        $(this).parents(".container").find(".slide-block").addClass("sliding");
    });

    // ---- action clique sur le bloc pour disparaitre le bloc "right-slide-bloc"
    $('body').on('click', '.slide-block', function() {
        $(this).removeClass("sliding");
    });
});
=======
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
>>>>>>> 88ade21e2dcea012f5c71bb5d99a582466de3610
