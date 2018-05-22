var scene = new THREE.Scene();
//scene.background = new THREE.Color( 0xffffff );
var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 10000 );
var mouse, raycaster;
var meshes = [],
		objects = [],
		objectso = [];

var renderer = new THREE.WebGLRenderer({alpha:true, antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor(0x000000, 0);
document.body.appendChild( renderer.domElement );

camera.position.z = 1200;

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

	var outlineCoord = [ -400, -20];

	var loader = new THREE.OBJLoader();
	//var mesh;

	for (var i = 0; i < 32; i++) {

				loader.load( "obj/"+i+".obj", function ( group ) {
					geometry = group.children[ 0 ].geometry;
					geometry.attributes.uv2 = geometry.attributes.uv;

					//geometry.center();

					var mesh = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff, transparent: true, side: THREE.DoubleSide } ) );
					mesh.scale.multiplyScalar( 1 );
					mesh.position.y = 70;
					mesh.scale.x = 50;
					mesh.scale.y = 50;
					mesh.scale.z = 50;

					mesh.traverse( function( node ) {
					    if( node.ref ) {
						node.material.side = THREE.DoubleSide;
					    }
					}); /*
					mesh.traverse(function (child) {
					    if (child instanceof THREE.Mesh) {
						child.geometry.computeVertexNormals();
						child.material.shading = THREE.SmoothShading;
					    }
					}); */
					mesh.traverse(function (child) {
					    if (child instanceof THREE.Mesh) {
						child.geometry.computeFaceNormals();
					    }
					});


					scene.add( mesh );
					meshes.push( mesh );
					console.log(meshes.length);

					console.log("hi");
					console.log(meshes.lastIndexOf(mesh));

					var temp = meshes.lastIndexOf(mesh);
					var array1 = [];
					array1.push(temp);
					var mirror = [11,12,13,14]
					// adding rest of numbers
					for (var k = 0; k < 16; k++) {
						n = k + 17;
						mirror.push(n);
					}
					console.log(mirror);

					let found = array1.some(r=> mirror.includes(r));

					//if (meshes.lastIndexOf(mesh) == 11) {
					//if (found = true) {
					if (mirror.indexOf(temp) === -1) {
						console.log("not in array");
					}	else {
						console.log("in array");
						var newMesh = new THREE.Mesh( mesh.geometry, mesh.material );
				    newMesh.position.set( 0, 70, 0 );
						newMesh.scale.set(50,50,50);

						console.log("code worked");
						newMesh.traverse(function (child) {
						    if (child instanceof THREE.Mesh) {
							child.geometry.computeFaceNormals();
						    }
						});
						scene.add( newMesh );
					}
				} );

/*
		mesh.position.x = 0;
		mesh.position.y = 0;
		mesh.position.z = 0;

		mesh.scale.x = 1;
		mesh.scale.y = 1;
		mesh.scale.z = 1;

		scene.add( mesh );
		meshes.push( mesh );
		meshes.castShadow = true;
		meshes.receiveShadow = true; */
	}

	/*
	var newMesh = meshes[10].clone();
	newMesh.scale.set(-50,50,50);

		var mesh2 = new THREE.Mesh( mesh.geometry, mesh.material );
    mesh2.scale.set( -50, 50, 50 );
    scene.add( mesh2 ); */

	for (var i = 0; i < 10; i++) {
		//var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

		if (i<5) {
			//var texture = new THREE.TextureLoader().load( 'textures/'+(i+1)+'.jpg' );
			var texture = new THREE.TextureLoader().load( 'textures/xd.png' );
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
			var objectOutline = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: 0x3281ff,  map: texture, transparent: true, opacity: 0, side: THREE.DoubleSide } ) );

			objectOutline.position.x = (coord[i-5])*1.11;
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


		// *** Should this stuff be outside of for loop?? ***
		object.setOpacityOnOutline = function (objectsOutline) {
			//objectsOutline.material.opacity = 0.25;
			new TWEEN.Tween( objectsOutline.material ).to( { opacity: 0.2 }, 259 ).start();
		}

		object.removeOpacityOnOutline = function (objectsOutline) {
			new TWEEN.Tween( objectsOutline.material ).to( { opacity: 0 }, 750 ).start();
		}

		object.setOutlineTween = function (objectsOutline) {
			let oscl = { x: 1.15, y: 1.15 },
			 		starget = { x: 1.3, y: 1.3 };
			new TWEEN.Tween( oscl ).to( starget, 250 ).onUpdate(function(){ objectsOutline.scale.x = oscl.x; objectsOutline.scale.y = oscl.y; }).start();
		}

		object.endOutlineTween = function (objectsOutline) {
			let oscl = { x: objectsOutline.scale.x, y: objectsOutline.scale.y },
			 		starget = { x: 1.15, y: 1.15 };
					console.log("Test");
			new TWEEN.Tween( oscl ).to( starget, 500 ).onUpdate(function(){ objectsOutline.scale.x = oscl.x; objectsOutline.scale.y = oscl.y; }).easing(TWEEN.Easing.Elastic.Out).start();
			console.log("Test2");
		}


	}



	// * Raycasting Tests *
	// add raycaster and mosue as 2D vector
	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();

	// add event listener for mouse and calls function when activated
	document.addEventListener( 'mousemove', onDocumentMouseMove, false);
	document.addEventListener( 'touchmove', onDocumentTouchStart, false);


	// **


	var controls = new THREE.DragControls( objects, camera, renderer.domElement );
	controls.addEventListener( 'dragstart', dragStartCallback );
	controls.addEventListener( 'dragend', dragendCallback );



}

function animateCardsIn(){
	tweenMove(objects[0],-315,0,1);
	tweenMove(objects[1],-212.1,150,.5);
	tweenMove(objects[2],0,200,0);
	tweenMove(objects[3],212.1,150,-.5);
	tweenMove(objects[4],315,0,-1);
}

function onDocumentTouchStart( event ) {
	event.preventDefault();

	event.clientX = event.touches[0].clientX;
	event.clientY = event.touches[0].clientY;
	onDocumentMouseMove( event );
}

var intersected = false;
var index;

function onDocumentMouseMove( event ) {
	event.preventDefault();

	mouse.x = (event.clientX / renderer.domElement.width ) * 2 - 1;
	mouse.y = - (event.clientY / renderer.domElement.height ) * 2 + 1;

	raycaster.setFromCamera( mouse, camera );

	for (var k = 0; k < objectso.length; k++){
		objectso[k].index = k;
	}

	var intersects = raycaster.intersectObjects( objectso );
	//console.log(objectso);
	var color = (Math.random() * 0xffffff);

	if ( intersects.length > 0 ) {
		if (!intersected){
			intersects[0].object.material.color.setHex( 0x1dff00 );
			console.log(intersects[0]);
			console.log(objectso);

			index = intersects[0].object.index;
			console.log(index);
			var o = objects[index];


			o.setOutlineTween(intersects[0].object);
			/*
			for (var key in intersects[0]) {
			    if (Object.prototype.hasOwnProperty.call(intersects[0], key)) {
			        var val = intersects[0][key];
			        // use val
							console.log(key,  " : ", val);
			    }
			}
			*/
		}
		intersected = true;
	} else {
		intersected = false;
		console.log(index);
		var o = objects[index];
		o.endOutlineTween(objectso[index]);
		index = undefined;
	}
}

function dragStartCallback(event) {
	//startColor = event.object.material.color.getHex();
	//event.object.material.color.setHex(0x000000);
	event.object.material.opacity = 0.6;
	for (i=0; i<5; i++) {
			event.object.setOpacityOnOutline(objectso[i]);
	}
/*
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
	*/

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
		// not saving index when not hovered over cardOutline, which is why cards sometimes land in wrong x coordinate?
		var target = { x: coord[index], y: -150, z: 10 };
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
