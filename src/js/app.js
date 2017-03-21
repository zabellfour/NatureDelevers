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
        scrolling: 'no',
        helpers: {
            media: {}
        }
    });

    $(function() {
        $('.scroll-block').each(
            function()
            {
                $(this).jScrollPane(
                {
                    showArrows: $(this).is('.arrow')
                }
                );
                var api = $(this).data('jsp');
                var throttleTimeout;
                $(window).bind(
                    'resize',
                    function()
                    {
                        if (!throttleTimeout) {
                            throttleTimeout = setTimeout(
                                function()
                                {
                                    api.reinitialise();
                                    throttleTimeout = null;
                                },
                                50
                                );
                        }
                    });
            })
    });

    $(function(){
        if ( $(window).width() > 767 ) {
            $('.number').each(function(index, el) {
                $(this).Parallax({ property:'top', speed:0.100, start: 0, delay:0 });
            });
            $('.decor-animation img').each(function(index, el) {
                $(this).Parallax({ property:'bottom', speed:0.175, start: 0, delay:0 });
            });
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

    $( window ).resize(function() {
        skrollr.init({ forceHeight: false });
    });
    window.sr = new ScrollReveal;
}

var animation = function() {
    window.sr = new ScrollReveal;
    if (document.getElementsByClassName("animation-demarche-nature-deleveurs").length != 0) {
        console.log('animation-demarche-nature-deleveurs');
        sr.reveal('.appear', {
            origin: 'top',
            viewFactor: 0.2,
            distance: '100px',
            scale: 1,
            reset: false
        }, 450);
        sr.reveal('.arrowUn', {
            origin: 'left',
            scale: 1,
            distance: '550px',
            easing: 'ease-out'
        });
        sr.reveal('.arrowTop', {
            origin: 'top',
            scale: 1,
            distance: '500px',
            easing: 'ease-out'
        });
        sr.reveal('.arrowRight', {
            origin: 'right',
            scale: 1,
            distance: '150px',
            easing: 'ease-out'
        });
        sr.reveal('.logoBottom', {
            origin: 'bottom',
            delay: 2000,
            duration: 1000,
            scale: 1,
            distance: '250px',
            easing: 'ease-out'
        });
    };
    if (document.getElementsByClassName("animation-etape-tracabilite").length != 0) {
        console.log('animation-etape-tracabilite');
        sr.reveal('.appear', {
            origin: 'top',
            viewFactor: 0.2,
            distance: '0px',
            scale: 1,
            reset: true,
            easing: 'ease-out'
        }, 350);
        sr.reveal('.badge', {
            origin: 'bottom',
            delay: 50,
            rotate: { x: 80, y: 50, z: 0 },
            distance: '50px',
            scale: 1,
        });
        sr.reveal('.arrowTop', {
            origin: 'top',
            scale: 1,
            distance: '100px',
            easing: 'ease-out'
        });
        sr.reveal('.arrowLeft', {
            origin: 'left',
            scale: 1,
            distance: '100px',
            easing: 'ease-out'
        });
    };
    if (document.getElementsByClassName("animation-etape-alimentation").length != 0) {
        console.log('animation-etape-alimentation');
        sr.reveal('.appear', {
            origin: 'top',
            viewFactor: 0.2,
            distance: '-50px',
            scale: 1,
            reset: true
        }, 50);
        sr.reveal('.arrowUn', {
            origin: 'left',
            delay: 50,
            distance: '250px',
            easing: 'ease-out',
        });
        sr.reveal('.arrowTop', {
            origin: 'top',
            delay: 50,
            distance: '200px',
        });
        sr.reveal('.arrowRight', {
            origin: 'right',
            distance: '150px',
            easing: 'ease-out',
        });
    };



}

var customNav = function() {
    $(".drop-opener").click(function(event) {
        if($(this).hasClass('notdef'))  event.preventDefault();
        $(this).parent().find(".dropdown").addClass("opened");
        $(this).removeClass('notdef');
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
        $('.drop-opener').addClass('notdef');
        var path = $(this).attr("href");

        $("#modalChapter .modal-body").load(path);
        if (document.location.href.indexOf('journee.html') + 1) { console.log(''); } else {
            $(".diagram-holder .svg").removeClass("animation-demarche-nature-deleveurs");
        };
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
    $(".close-modal").click(function(event) {
        if (document.location.href.indexOf('journee.html') + 1) { console.log(''); } else {
            setTimeout(function() { $(".modal-content .modal-body").empty(); }, 300);
            $(".diagram-holder .svg").addClass("animation-demarche-nature-deleveurs");
        };
    });

}

jQuery(document).ready(function($) {
    initJs();
    customNav();
    animation();
    $('#modalChapter').on('shown.bs.modal', function() {
        if ($(window).width() > 1024) {
            skrollr.init().destroy();
            skrollr.init({ forceHeight: false });
        }
        initJs();
        customNav();
        setTimeout(function() { animation(); }, 300);
    });
    $('#modalChapter').on('hidden.bs.modal', function() {
        if ($(window).width() > 1024) {
            skrollr.init().destroy;
        }
    });
});

