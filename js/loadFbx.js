
function loaderFbx(fbxName) {
	var conf = getConfig();
	return function(group) {
	  var loader = new THREE.FBXLoader();
		loader.load( 'obj/nCache/'+fbxName+'.fbx', function ( radial ) {
				console.log("fbx start", radial);
				radial.mixer = new THREE.AnimationMixer( radial );
				console.log("fbx start2");
				mixers2.push( radial.mixer );
				console.log("fbx start3",radial, radial.mixer);

				var action2 = radial.mixer.clipAction( radial.animations[ 0 ] );
				console.log("fbx start4");
				action2.setLoop( THREE.LoopOnce );
				console.log("fbx start5");
				action2.clampWhenFinished = true;
				console.log("fbx start6");
				action2.play();
				console.log("fbx start7");

				radial.traverse( function ( child ) {
					if ( child.isMesh ) {
						child.castShadow = true;
						child.receiveShadow = true;
						child.material = material;
					}
				} );
				//object.position.y = -354.315;
				console.log("fbx loaded");
				radial.scale.set(50,50,50);
				radial.position.y = 0;
				radial.position.z = 0;
				scene.add( radial );
				//tweenRocks(srocks);
				console.log("fbx added to scene");
		} );
	}
}
