import './modules/nav';
import './modules/tabs';
import './modules/openClose';

jQuery(document).ready(function($) {
    smoothScroll.init({
        selector: '[data-scroll]',
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
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
});
