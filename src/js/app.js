import './modules/nav';
import './modules/tabs';
import './modules/openClose';



jQuery(document).ready(function($) {
    $('body').on('click', '.scroll-link', function() {
        var offset = $('.body-holder').position().top;
        $(".modal").animate({ scrollTop: offset }, 'slow');
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
    $(function() {
        if ($(window).width() > 1024) {
            skrollr.init({ forceHeight: false });
            $('.scroll-block').jScrollPane();
        }
    });
    $(".fancybox-media").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
            media: {}
        }
    });
    $('.scroll-block').jScrollPane();
});
