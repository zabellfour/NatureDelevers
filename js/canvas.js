$(function(){
   var story = [
        {
            "start":0 ,
            "titre":"Nos Exploitations" ,
            "intro":"Découvrez nos exploitations et nos actions pour le respect de l’environnement...",
            "popupUrlContent":"01-nos-exploitations.php",
            "fin":12
        },

        {
            "start":14 ,
            "titre":"Nous Les Éleveurs" ,
            "intro":"Découvrez qui nous sommes, notre métier et notre passion d’éleveurs engagés...",
            "popupUrlContent":"02-nos-eleveurs.php",
            "fin":34
        },

        {
            "start":36 ,
            "titre":"Nos Élevages" ,
            "intro":" Découvrez nos élevages en Terres de France...",
            "popupUrlContent":"03-nos-elevages.php",
            "fin":47
        },

        {
            "start":49 ,
            "titre":"Le confort pour nos volailles" ,
            "intro":"Découvrez nos conditions d’élevage pour le Confort de nos volailles...",
            "popupUrlContent":"04-nos-volailles.php",
            "fin":53
        },

        {
            "start":54.21 ,
            "titre":"La maîtrise des étapes de notre filière" ,
            "intro":" De l’œuf à l’assiette, découvrez la maîtrise des étapes de notre filière...",
            "popupUrlContent":"05-tracabilite.php",
            "fin":63
        },

        {
            "start":65 ,
            "titre":"L’alimentation pour nos volailles" ,
            "intro":"Découvrez l’alimentation que nous offrons à nos volailles...",
            "popupUrlContent":"06-alimentation.php",
            "fin":70
        },

        {
            "start":71.49 ,
            "titre":"La santé pour nos volailles" ,
            "intro":"Découvrez comment nous protégeons la Santé de nos volailles...",
            "popupUrlContent":"07-sante.php",
            "fin":78
        }
        ]


        var sound = true;
        var playVideo = true;

        // ---- Gestion de l'audio
        myAudio = new Audio('audio/SFmusic_folk.mp3');
        myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        myAudio.play();

        // ---- Evt play/pause sound
        $( "#sound" ).click(function() {
            if(sound){
                $(myAudio).animate({volume: 0}, 500, function () {
                    myAudio.pause();
                });
                $( "#sound" ).removeClass("fa-music");
                $( "#sound" ).addClass("fa-volume-off ");
                sound = false;
            }else{
                if(playVideo){
                    myAudio.play();
                    $(myAudio).animate({volume: 1}, 500);
                }
                $( "#sound" ).removeClass("fa-volume-off ");
                $( "#sound" ).addClass("fa-music");
                sound = true;
            }
        });

        function playSound(state){
            if(!state){
                $(myAudio).animate({volume: 0}, 500, function () {
                    myAudio.pause();
                });
            }else{
                if(sound){
                    myAudio.play();
                    $(myAudio).animate({volume: 1}, 500);
                }
            }
        }


        // ---- Evt play/pause video
        $( "canvas" ).click(function() {
            if(playVideo){
                onVideoPauseButtonClick();
                playSound(false);
                playVideo = false;
            }else{
                onVideoPlayButtonClick();
                playSound(true);
                playVideo = true;
            }
        });

        // ---- Fait play/stop le son et la video à l'ouverture/fermeture de la popup
        $('#modalChapter').on('shown.bs.modal', function (e) {
            onVideoPauseButtonClick();
            playSound(false);
        })
        $('#modalChapter').on('hidden.bs.modal', function () {
            onVideoPlayButtonClick();
            playSound(true);
        })

        // ---- Zone cible de la video
        var videoContainer = $("#videoContainer");
        var videoDuration = 87.56;
        // ---- Vidéo à jouer dans les différents formats
        var videoMp4 = 'videos/journeeEleveur_HD_tab.mp4';
        var videoOgg  = 'videos/journeeEleveur_HD_tab.ogv';
});

