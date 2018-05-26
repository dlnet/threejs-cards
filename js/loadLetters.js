
function loaderLetters(i, xyzscale, z1, z2, defaultmat, pivot) {
	var conf = getConfig();
	return function(group) {
		let geometry = group.children[ 0 ].geometry;
		geometry.attributes.uv2 = geometry.attributes.uv;
		//geometry.translate( 0, 0, 0 );
		if (defaultmat == true) {
			letter = loadTex(geometry,conf["default"]);
		} else {
			letter = loadTex(geometry,conf["random"]);
		}

		letter.scale.multiplyScalar( 1 );
		/*
		letter.position.x = seed(-350,350);
		letter.position.y = seed(-200,200);
		letter.position.z = seed(-2000,-1000);
		var pos = .1*i, neg = -.1*i;
		letter.rotation.x = seed(neg,pos); letter.rotation.y = seed(neg,pos); letter.rotation.z = seed(neg,pos);
		*/
		letter.position.x = 0;
		letter.position.y = 0;
		letter.position.z = -4000;
		letter.scale.x = xyzscale; letter.scale.y = xyzscale; letter.scale.z = xyzscale;
		letter.traverse( function( node ) { if( node.ref ) { node.material.side = THREE.DoubleSide; } });
		letter.traverse(function (child) { if (child instanceof THREE.Mesh) { child.geometry.computeFaceNormals(); } });
		scene.add( letter );
		pivot.add( letter );
		letters.push( letter );
		letter.index = i;
		tweenLetters(letter,i,geometry,z1,z2);
		//console.log(letters.length);
		geometry.center();

	}
}


function basicLoader(xpos,ypos,zpos,xscl,yscl,zscl,isTrue,basicIndex) {
	var conf = getConfig();
	return function(group) {
		let geometry = group.children[ 0 ].geometry;
		geometry.attributes.uv2 = geometry.attributes.uv;
		//geometry.translate( 0, 0, 0 );
		basicobj = loadTex(geometry,new THREE.MeshPhongMaterial( { color:  0xffffff, bumpMap: floorBump, bumpScale: 20 } ));
		basicobj.scale.multiplyScalar( 1 );
		basicobj.position.x = xpos;
		basicobj.position.y = ypos;
		basicobj.position.z = zpos;
		basicobj.scale.set(xscl,yscl,zscl);
		if(isTrue<1){
			basicobj.position.z = -1000;
			basicobj.position.y = 70;
			basicobj.scale.x = 50;
			basicobj.scale.y = 50;
			basicobj.scale.z = 50;
		}
		basicobj.traverse( function( node ) { if( node.ref ) { node.material.side = THREE.DoubleSide; } });
		basicobj.traverse(function (child) { if (child instanceof THREE.Mesh) { child.geometry.computeFaceNormals(); } });
		scene.add( basicobj );
		basicObjects.push( basicobj );
		basicobj.index = basicIndex;
		//geometry.center();
		if(isTrue>0){ tweenRocks(basicobj); }
	}
}
