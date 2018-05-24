
function loaderLetters(i) {
	var conf = getConfig();
	return function(group) {
		let geometry = group.children[ 0 ].geometry;
		geometry.attributes.uv2 = geometry.attributes.uv;
		//geometry.translate( 0, 0, 0 );
		letter = loadTex(geometry,conf["default"]);
		letter.scale.multiplyScalar( 1 );
		/*
		letter.position.x = seed(-350,350);
		letter.position.y = seed(-200,200);
		letter.position.z = seed(-2000,-1000);
		var pos = .1*i, neg = -.1*i;
		letter.rotation.x = seed(neg,pos); letter.rotation.y = seed(neg,pos); letter.rotation.z = seed(neg,pos);
		*/
		letter.position.x = -4000;
		letter.position.y = -4000;
		letter.position.z = -4000;
		letter.scale.x = 5; letter.scale.y = 5; letter.scale.z = 5;
		letter.traverse( function( node ) { if( node.ref ) { node.material.side = THREE.DoubleSide; } });
		letter.traverse(function (child) { if (child instanceof THREE.Mesh) { child.geometry.computeFaceNormals(); } });
		scene.add( letter );
		letters.push( letter );
		letter.index = i;
		tweenLetters(letter,i,geometry);
		//console.log(letters.length);
		geometry.center();
	}
}
