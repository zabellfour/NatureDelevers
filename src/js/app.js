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

});

