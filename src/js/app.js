import './modules/nav';
import './modules/tabs';

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
        maxWidth    : 500,
        maxHeight   : 400,
        fitToView   : false,
        width       : '500px',
        height      : '400px',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'none',
        closeEffect : 'none'
    });
  // var s = skrollr.init({forceHeight: false});
});

