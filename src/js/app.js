import './modules/nav';
import './modules/tabs';
import './modules/openClose';

var func1 = fn(
    function() {
        $('body').on('click', '.scroll-link', function() {
            var offset = $('.body-holder').position().top;
            $(".modal").animate({ scrollTop: offset }, 'slow');
        });
    },
    function() {
        $(".fancybox-media").fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            helpers: {
                media: {}
            }
        });
    },
    function() {
        $(".economes-popup").fancybox({
            maxWidth: 500,
            maxHeight: 400,
            fitToView: true,
            autoSize: true,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none'
        });
    },
    function() {
        $(function() {
            if ($(window).width() > 1024) {
                skrollr.init({ forceHeight: false });
                $('.scroll-block').jScrollPane();
            }
        });
    },
    function() {
        $(".fancybox-media").fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            helpers: {
                media: {}
            }
        });
    },
    function() {
        $('.scroll-block').jScrollPane();

    }
);




jQuery(document).ready(function($) {


    func1();



});
