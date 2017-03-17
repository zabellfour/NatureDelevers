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


jQuery(document).ready(function($) {
    initJs();
    $('#modalChapter').on('shown.bs.modal', function() {
        skrollr.init().destroy();
        skrollr.init({ forceHeight: false });
        initJs();

    });

    $('#modalChapter').on('hidden.bs.modal', function() {
        skrollr.init().destroy;
    });
});
