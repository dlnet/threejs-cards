var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf0f0f0 );
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 10000 );
var objects = [];

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 1000;

var startColor;

function init() {
	scene.add( new THREE.AmbientLight( 0x0f0f0f ) );

	var light = new THREE.SpotLight( 0xffffff, 1 );
	light.position.set( 0, 500, 2000 );

	scene.add(light);

	var geometry = new THREE.BoxGeometry( 40, 40, 40 );
	var geometry = new THREE.PlaneGeometry( 140, 225, 40 );

	var texture = new THREE.TextureLoader().load( 'textures/card1.jpg' );

	for (var i = 0; i < 5; i++) {
		//var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { map: texture } ) );

		object.position.x = Math.random() * 100 - 50;
		object.position.y = Math.random() * 60 - 30;
		object.position.z = Math.random() * 80 - 40;
		/*
		object.rotation.x = seed(0,2);
		object.rotation.y = seed(0,2);
		object.rotation.z = seed(0,2);
		*/
		object.castShadow = true;
		object.receiveShadow = true;

		scene.add( object );

		objects.push( object );
	}

	var controls = new THREE.DragControls( objects, camera, renderer.domElement );
	controls.addEventListener( 'dragstart', dragStartCallback );
	controls.addEventListener( 'dragend', dragendCallback );




}



function dragStartCallback(event) {
	startColor = event.object.material.color.getHex();
	event.object.material.color.setHex(0x000000);
}

function dragendCallback(event) {
	event.object.material.color.setHex(startColor);

	var xpos = event.object.position.x;
	var ypos = event.object.position.y;
	var zpos = event.object.position.z;

	var tpos = { z: zpos };
	var target = {z: zpos - 150 };
	var tween = new TWEEN.Tween(tpos).to(target, 2000);

	tween.onUpdate(function(){
	    event.object.position.z = tpos.z;
	});

	tween.delay(0);
	tween.easing(TWEEN.Easing.Elastic.Out);
	tween.start();
}

function animate() {
	requestAnimationFrame( animate );
	renderer.render(scene, camera);
	TWEEN.update();
};

init();
animate();
