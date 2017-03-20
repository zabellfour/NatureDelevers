var video;

jQuery(document).ready(function($) {
	var windowWidth 		= videoContainer.width();
	var windowHeight 	= videoContainer.height();

	$(window).resize(function(e){
		windowWidth 		= videoContainer.width();
		windowHeight 	= videoContainer.height();
		windowHalfX = windowWidth / 2,
		windowHalfY = windowHeight / 2,

		camera.aspect = windowWidth / windowHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( windowWidth, windowHeight );
	});

	// init renderer
	var directionalLight, pointLight;

	var mouseX = 0;
	var mouseY = 0;

	var windowHalfX = windowWidth / 2;
	var windowHalfY = windowHeight / 2;

	videoContainer.mousemove(function( event ) {
		mouseX = ( event.clientX - windowHalfX ) / 1500*-1;
		mouseY = (( event.clientY - windowHalfY ) / 800)*-1;
	});


	var renderer	= new THREE.WebGLRenderer({
		antialias	: true,
		canvas : document.getElementById("canvas")
	});
	renderer.setClearColor(new THREE.Color('lightgrey'), 1)
	renderer.setSize( windowWidth, windowHeight );

	var updateFcts	= [];
	var scene	= new THREE.Scene();
	var camera	= new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.01, 100 );
	camera.position.z = 3;

	// find out which file formats i can read
	var canPlayMp4	= document.createElement('video').canPlayType('video/mp4') !== '' ? true : false
	var canPlayOgg	= document.createElement('video').canPlayType('video/ogg') !== '' ? true : false

	if( canPlayMp4 ){
		var url	= videoMp4;
	}else if( canPlayOgg ){
		var url	= videoOgg;
	}else	alert('cant play mp4 or ogv')

	// create the videoTexture
	var videoTexture= new THREEx.VideoTexture(url)
	video	= videoTexture.video

	updateFcts.push(function(delta, now){
		videoTexture.update(delta, now)
	})

	var chapterClick = false;
	var progressValue;
	var currentChapter = -1;
	$(video).on(
		"timeupdate",
		function(event){
			progressValue = (video.currentTime*100)/video.duration;

			// ---- Anime la barre de progression
			if(!chapterClick){
				$("#jauge").css("width", progressValue+"%");
			}

			var chapterEnd = true;
			$( ".chapter" ).each(function( index ) {
				var chapterId = $(this).attr('data-chapter');
				// ---- Active/desactive les chapitres selon la timeline
				if(story[chapterId].start <= video.currentTime ){
					$(this).addClass("active");
				}else{
					$(this).removeClass("active");
				}

				// ---- Gestion de l'affichage des contenus selon le chapitre en cours
				if(story[chapterId].start <= video.currentTime && story[chapterId].fin > video.currentTime ){
					chapterEnd = false;
					if(currentChapter != chapterId){
						currentChapter = chapterId;
						$(".textVideo h2").html(story[chapterId].titre);
						$(".textVideo p").html(story[chapterId].intro);
						$(".textVideo").show('slow');
						$(".storyBtn").show('slow');
						$("#modalChapter .modal-body").load(story[chapterId].popupUrlContent);
						console.log();


					}
				}

			});
			if(chapterEnd){
				$(".textVideo").hide('slow');
				$(".storyBtn").hide('slow');
			}
	});

	// ---- gestion  click sur un chapitre
	$( ".chapter" ).on("click",function() {
		var chapterId = $(this).attr('data-chapter');
		var position =  (story[chapterId].start*100)/video.duration;
		chapterClick = true;
		video.pause();
		video.currentTime =story[chapterId].start;
		currentChapter = chapterId-1;
		$( "#jauge" ).stop().animate({
			width: position+'%',
		}, 500, function(){
			video.play();
			chapterClick = false;
		});
	});


	// use the texture in a THREE.Mesh
	var material	= new THREE.MeshBasicMaterial({
		map	: videoTexture.texture
	});
	material.map.minFilter = THREE.LinearFilter;

	// model
	var onProgress = function ( xhr ) {
		if ( xhr.lengthComputable ) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log( Math.round(percentComplete, 2) + '% downloaded' );
		}
	};
	var onError = function ( xhr ) { };

	THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

	var mtlLoader = new THREE.MTLLoader();
		mtlLoader.setBaseUrl( 'obj/' );
		mtlLoader.setPath( 'obj/' );
		mtlLoader.load( 'ecran.mtl', function( materials ) {

		materials.preload();

		var objLoader = new THREE.OBJLoader();
		objLoader.setMaterials( materials ); //materials
		objLoader.setPath( 'obj/' );
		objLoader.load( 'ecran.obj', function ( object ) {

			object.position.y =  0;
			ecran = object;
			scene.add( object );

			var scaleVideo = 7;

			ecran.scale.x = scaleVideo;
			ecran.scale.y = scaleVideo;
			ecran.scale.z = scaleVideo;

			// double side
			object.traverse( function( node ) {
				if( node.material ) {
					node.material.side = THREE.DoubleSide;
				}
			});
			ecran.children[2].material = material

			// ---- Placement des chapitres sur la timeline
			$( ".chapter" ).each(function( index ) {
				var chapterId = $(this).attr('data-chapter');
				var position = (story[chapterId].start*100)/videoDuration;
				$(this).css('left', position+'%');
			});
		}, onProgress, onError );
		console.log("video durée : "+video.duration);
	});

	// ---- render the scene
	updateFcts.push(function(){
		camera.position.x += ( mouseX - camera.position.x ) * .05;
		camera.position.y += ( - mouseY - camera.position.y ) * .05;
		camera.lookAt( scene.position );
		renderer.render( scene, camera );
	})

	// ---- Loop runner
	var lastTimeMsec= null
	requestAnimationFrame(function animate(nowMsec){
		// keep looping
		requestAnimationFrame( animate );
		// measure time
		lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
		var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
		lastTimeMsec	= nowMsec
		// call each update function
		updateFcts.forEach(function(updateFn){
			updateFn(deltaMsec/1000, nowMsec/1000)
		})
	})

});

function onVideoPlayButtonClick(){
	video.play();
	$(".fake-play-btn").addClass('pause-symbol');
}

function onVideoPauseButtonClick(){
	video.pause();
	$(".fake-play-btn").removeClass('pause-symbol');
}
