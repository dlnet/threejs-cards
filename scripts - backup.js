var scene = new THREE.Scene();
//scene.background = new THREE.Color( 0xffffff );
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 10000 );
var objects = [];
var objectso = [];

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor(0x000000, 0);
document.body.appendChild( renderer.domElement );

camera.position.z = 1000;

var startColor;

var coord = [ -400, -200, 0, 200, 400 ];

function init() {
	scene.add( new THREE.AmbientLight( 0x0f0f0f ) );

	var light = new THREE.SpotLight( 0xffffff, 1 );
	light.position.set( 0, 500, 2000 );

	scene.add(light);

	var geometry = new THREE.BoxGeometry( 40, 40, 40 );
	var geometry = new THREE.PlaneGeometry( 140, 225, 40 );
		//	geometry
	//var texture = new THREE.TextureLoader().load( 'textures/card1.jpg' );

	var outlineCoord = [ -400, -20]

	for (var i = 0; i < 10; i++) {
		//var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

		if (i<5) {
			var texture = new THREE.TextureLoader().load( 'textures/'+(i+1)+'.jpg' );
			var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { map: texture, transparent: true, side: THREE.DoubleSide } ) );

			object.position.x = Math.random() * 100 - 50;
			object.position.y = Math.random() * 60 - 30;
			object.position.z = Math.random() * 80 - 40;

			object.scale.x = 0;
			object.scale.y = 0;
			object.scale.z = 0;

			scene.add( object );
			objects.push( object );
			object.castShadow = true;
			object.receiveShadow = true;
		} else {
			var texture = new THREE.TextureLoader().load( 'textures/outline.jpg' );
			var objectOutline = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0xffffff, map: texture, transparent: true, opacity: 0.1, side: THREE.DoubleSide } ) );

			objectOutline.position.x = coord[i-5];
			objectOutline.position.y = -172;
			objectOutline.position.z = -112;

			objectOutline.rotation.x = -1;

			objectOutline.scale.x = 1.15;
			objectOutline.scale.y = 1.15;
			objectOutline.scale.z = 1.15;

			//objectOutline.material.opacity = 0.7;

			scene.add( objectOutline );
			objectso.push( objectOutline );
		}


		object.setOpacityOnOutline = function (objectsOutline) {
			//objectsOutline.material.opacity = 0.25;
			new TWEEN.Tween( objectsOutline.material ).to( { opacity: 0.2 }, 300 ).start();
		}

		object.removeOpacityOnOutline = function (objectsOutline) {
			new TWEEN.Tween( objectsOutline.material ).to( { opacity: 0 }, 450 ).start();
		}

		object.setOutlineTween = function (objectsOutline) {
			let oscl = { x: 1.15, y: 1.15 },
			 		starget = { x: 1.4, y: 1.4 };
			new TWEEN.Tween( oscl ).to( starget, 500 ).onUpdate(function(){ objectsOutline.scale.x = oscl.x; objectsOutline.scale.y = oscl.y; }).start();
		}


		console.log("Test " + objectso.children);
		console.log(typeof(objectso));
		for (var property in objectso) {
	    if (objectso.hasOwnProperty(property)) {
	        console.log("Prop: " + property);
					console.log(typeof (objectso.children));

					//console.log(scene.getObjectById(4, true));
	    }
		}

	//	objectso["1"].material.opacity = 0.1;

	}

	function setOpac(objectsOutline) {
		objectsOutline.material.opacity = 0.1;
	}

	//setOpac(objectso[1]);



	var controls = new THREE.DragControls( objects, camera, renderer.domElement );
	controls.addEventListener( 'dragstart', dragStartCallback );
	controls.addEventListener( 'dragend', dragendCallback );


		tweenMove(objects[0],-315,0,1);
		tweenMove(objects[1],-212.1,150,.5);
		tweenMove(objects[2],0,200,0);
		tweenMove(objects[3],212.1,150,-.5);
		tweenMove(objects[4],315,0,-1);
/*
	var i;
	for (i = 0; i < 5; i++) {
		tweenMove(objects[i],i+2);
	}
*/
}

function dragStartCallback(event) {
	//startColor = event.object.material.color.getHex();
	//event.object.material.color.setHex(0x000000);
	event.object.material.opacity = 0.6;
	for (i=0; i<5; i++) {
			event.object.setOpacityOnOutline(objectso[i]);
	}

	if ( cursorY > 647 && cursorY < 889 && cursorX > 227 && cursorX < 1694 ) {
		if ( cursorX >= 228 && cursorX <= 517 ) {
			event.object.setOutlineTween(objectso[0]);
			console.log("0 executed");
		} else if ( cursorX >= 518 && cursorX <= 811 ) {
			event.object.setOutlineTween(objectso[1]);
			console.log("1 executed");
		} else if ( cursorX >= 812 && cursorX <= 1105 ) {
			event.object.setOutlineTween(objectso[2]);
			console.log("2 executed");
		} else if ( cursorX >= 1106 && cursorX <= 1399 ) {
			event.object.setOutlineTween(objectso[3]);
			console.log("3 executed");
		} else if ( cursorX >= 1400 && cursorX <= 1693 ) {
			event.object.setOutlineTween(objectso[4]);
			console.log("4 executed");
		}
	}

}

function dragendCallback(event) {
	event.object.material.opacity = 1;
	for (i=0; i<5; i++) {
			event.object.removeOpacityOnOutline(objectso[i]);
	}
	//event.object.material.color.setHex(startColor);

	var xpos = event.object.position.x,
	ypos = event.object.position.y,
	zpos = event.object.position.z,
	xrot = event.object.rotation.x,
	zrot = event.object.rotation.z;

	// t position
	var tpos = { x: xpos, y: ypos, z: zpos };
	// t rotation
	var trot = { x: xrot, z: zrot };

	if (cursorY > 600) {
		// position
		var target = { x: coord[seed(0,4)], y: -150, z: -90 };
		var tween = new TWEEN.Tween(tpos).to(target, 1750)
		.onUpdate(function(){
				event.object.position.x = tpos.x;
				event.object.position.y = tpos.y;
				event.object.position.z = tpos.z;
				event.object.rotation.x = -1;
		})
		.easing(TWEEN.Easing.Elastic.Out)
		.start();
		// rotation
		var rtarget = { x: -1, z: 0 };
		var rtween = new TWEEN.Tween(trot).to(rtarget, 1750)
		.onUpdate(function(){
				event.object.rotation.z = trot.z;
				event.object.rotation.x = trot.x;
		})
		.easing(TWEEN.Easing.Elastic.Out)
		.start();

	} else {
		// position
		var tpos = { z: zpos };
		var target = {z: -200 };
		var tween = new TWEEN.Tween(tpos).to(target, 2000)
		.onUpdate(function(){
				event.object.position.z = tpos.z;
		})
		.easing(TWEEN.Easing.Elastic.Out)
		.start();
		// rotation
		var rtarget = { x: 0, z: 0 };
		var rtween = new TWEEN.Tween(trot).to(rtarget, 2000)
		.onUpdate(function(){
				event.object.rotation.z = trot.z;
				event.object.rotation.x = trot.x;
		})
		.easing(TWEEN.Easing.Elastic.Out)
		.start();
	}
}

function animate() {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);
	TWEEN.update();
};

init();
animate();
