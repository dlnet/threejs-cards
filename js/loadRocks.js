var jloader;
jloader = new THREE.JSONLoader();
jloader.load('obj/nCache/rocks_morph.json');

function addRocks(geometry, materials){
  materials.forEach(function (mat){
    mat.skinning = true; });

  rocks = new THREE.SkinnedMesh
}
        var rocks = [];
        var rock;
        var jloader = new THREE.JSONLoader();
				jloader.load( "obj/nCache/rocks_morph.json", function( geometry ) {

					var material = new THREE.MeshPhongMaterial( {
						color: 0xffffff,
						morphTargets: true,
						vertexColors: THREE.FaceColors,
						flatShading: true
					} );
					var rock = new THREE.Mesh( geometry, material );

					rock.position.x = 0;
					rock.position.y = 0;
					rock.scale.set( 1.5, 1.5, 1.5 );

					scene.add( rock );

					var mixer = new THREE.AnimationMixer( rock );
					mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();

					mixers.push( mixer );

				} );

				jloader.load( "obj/nCache/rocks_morph.json", function( geometry ) {

					geometry.computeVertexNormals();
					geometry.computeMorphNormals();

					var material = new THREE.MeshPhongMaterial( {
						color: 0xffffff,
						morphTargets: true,
						morphNormals: true,
						vertexColors: THREE.FaceColors
					} );
					var rock = new THREE.Mesh( geometry, material );

					rock.position.x = 0;
					rock.position.y = -100;
					rock.scale.set( 1.5, 1.5, 1.5 );

					scene.add( rock );

					var mixer = new THREE.AnimationMixer( rock );
					mixer.clipAction( geometry.animations[ 0 ] ).setDuration( 1 ).play();

					mixers.push( mixer );

				} );
