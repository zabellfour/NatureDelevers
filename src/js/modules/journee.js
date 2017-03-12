/* Javacript document pour journee d'éléveur */
$(function(){

// ---- action slide-right au click sur le bouton "voir plus" en ajoutant de class sliding, en appliquant un effet de transition en css3
$('body').on('click', '.btn-plus', function(){
	$(this).parents(".container").find(".slide-block").addClass("sliding");
});

// ---- action clique sur le bloc pour disparaitre le bloc "right-slide-bloc"
$('body').on('click', '.slide-block', function(){
	$(this).removeClass("sliding");
});
});