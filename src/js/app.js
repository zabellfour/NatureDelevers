import './modules/nav';
import './modules/tabs';
import './modules/openClose';


var initJs = function() {

    $('div.open-box-text').openClose({
        hideOnClickOutside: true,
        activeClass: 'active',
        opener: '.open-text-btn',
        slider: '.holder-text',
        animSpeed: 400,
        effect: 'slide'
    });
    $('body').on('click', '.scroll-link', function() {
        var offset = $('.body-holder').position().top;

        $('body, .modal').stop(true, false).animate({ scrollTop: offset }, 1000);
    });
    $(".fancybox-media").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {}
        }
    });
    $(function() {
        if ($(window).width() > 1024) {
            $('.scroll-block').jScrollPane();
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
    skrollr.init({ forceHeight: false });


}

var customNav = function() {
    $(".drop-opener").click(function(event) {
        event.preventDefault();
        $(this).parent().find(".dropdown").toggleClass("opened");
    });
    $("body").click(function(e) {
        if ($(e.target).closest(".holder2").length == 0)
            $(".dropdown").removeClass("opened");
        if ($(e.target).closest(".share-opened").length == 0)
            $(".share-holder").removeClass("share-opened");
    });
    $(".share-holder").click(function(event) {
        event.preventDefault();
        $(this).toggleClass("share-opened");
    });
    $(".holder2 .dropdown > li > a").click(function(event) {
        event.preventDefault();
        var path = $(this).attr("href");
        $("#modalChapter .modal-body").load(path);
        $('#modalChapter').modal('show');
        $('#modalChapter').modal('handleUpdate');
        $("body").removeClass("nav-active");
    });
    $(".baner-bottom .btn-footer").click(function(event) {

        event.preventDefault();
        if (document.location.href.indexOf('journee.html') + 1) {
            $('#modalChapter').modal('hide');
        } else {
            document.location.href = 'journee.html';
        }
    });
}


jQuery(document).ready(function($) {
    initJs();
     customNav();
    $('#modalChapter').on('shown.bs.modal', function() {
        skrollr.init().destroy();
        skrollr.init({ forceHeight: false });
        initJs();
        customNav();	
    });

    $('#modalChapter').on('hidden.bs.modal', function() {
        skrollr.init().destroy;
    });
});