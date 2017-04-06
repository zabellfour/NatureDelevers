
var sr1 = new ScrollReveal;
var sr2 = new ScrollReveal;
var sr3 = new ScrollReveal;
var animation = function() {
    if (document.getElementsByClassName("animation-demarche-nature-deleveurs").length != 0) {
        console.log('animation-demarche-nature-deleveurs');
        sr1.reveal('.appear', {
            origin: 'top',
            viewFactor: 0.2,
            distance: '100px',
            scale: 1,
            reset: true
        }, 450);
        sr1.reveal('.arrowUn', {
            origin: 'left',
            scale: 1,
            distance: '550px',
            easing: 'ease-out'
        });
        sr1.reveal('.arrowTop', {
            origin: 'top',
            scale: 1,
            distance: '500px',
            easing: 'ease-out'
        });
        sr1.reveal('.arrowRight', {
            origin: 'right',
            scale: 1,
            distance: '150px',
            easing: 'ease-out'
        });
        sr1.reveal('.logoBottom', {
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
        sr2.reveal('.modal .appear', {
            origin: 'top',
            viewFactor: 0.2,
            distance: '0px',
            scale: 1,
            reset: true,
            easing: 'ease-out'
        }, 350);
        sr2.reveal('.modal .badge', {
            origin: 'bottom',
            delay: 50,
            rotate: { x: 80, y: 50, z: 0 },
            distance: '50px',
            scale: 1,
        });
        sr2.reveal('.modal .arrowTop', {
            origin: 'top',
            scale: 1,
            distance: '100px',
            easing: 'ease-out'
        });
        sr2.reveal('.modal .arrowLeft', {
            origin: 'left',
            scale: 1,
            distance: '100px',
            easing: 'ease-out'
        });
    };
    if (document.getElementsByClassName("animation-etape-alimentation").length != 0) {
        console.log('animation-etape-alimentation');
        sr3.reveal('.modal .appear', {
            origin: 'top',
            viewFactor: 0.2,
            distance: '-50px',
            scale: 1,
            reset: true
        }, 50);
        sr3.reveal('.modal .arrowUn', {
            origin: 'left',
            delay: 50,
            distance: '250px',
            easing: 'ease-out',
        });
        sr3.reveal('.modal .arrowTop', {
            origin: 'top',
            delay: 50,
            distance: '200px',
        });
        sr3.reveal('.modal .arrowRight', {
            origin: 'right',
            distance: '150px',
            easing: 'ease-out',
        });
    };
    if (document.getElementsByClassName("animation-commence").length != 0) {
        sr.reveal('.appear', {
            origin: 'top',
            viewFactor: 0.2,
            distance: '0px',
            scale: 1,
            reset: false
        }, 450);
        sr.reveal('.arrowTop', {
            origin: 'top',
            scale: 1,
            distance: '100px',
            easing: 'ease-out'
        });
    };
}