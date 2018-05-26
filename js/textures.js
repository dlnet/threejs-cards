var envMap = new THREE.TextureLoader().load( 'textures/hdr3.jpg' );
envMap.mapping = THREE.SphericalReflectionMapping;

var envMap2 = new THREE.TextureLoader().load( 'textures/hdr2.jpg' );
envMap2.mapping = THREE.SphericalReflectionMapping;


var textureLoader = new THREE.TextureLoader();
var bumpMap = textureLoader.load( "textures/bump1.jpg" );
var floorBump = textureLoader.load( "textures/crack.jpg" );
var twirlMap = textureLoader.load( "textures/twirl.jpg" );
//var aoMap = textureLoader.load( "textures/uv2.jpg" );
//var displacementMap = textureLoader.load( "obj/bump.png" );
var jRed = new THREE.MeshPhongMaterial( {
					color: 0x93050e,
					//bumpMap: bumpMap,
					//bumpScale: -1,

				//	aoMap: aoMap,
				//	aoMapIntensity: 2,

				//	envMap: envMap2, overdraw: 0.99,
				//	reflectivity: 0.75,

				//	transparent: false, opacity: 0.9,



					side: THREE.DoubleSide

} );

function jRed(){
	return {
		color: 0x93050e,
		//bumpMap: bumpMap,
		//bumpScale: -1,
	//	aoMap: aoMap,
	//	aoMapIntensity: 2,
	//	envMap: envMap2, overdraw: 0.99,
		reflectivity: 0.75,
		transparent: true, opacity: 0.96,
		side: THREE.DoubleSide
	}
}

var textureNames, uv;
function returnTex (texIndex) {
  return new THREE.TextureLoader().load( 'textures/'+textureNames[texIndex]+'.jpg' );
}

function getConfig(){
	textureNames = [], uv = [];
	for (i=0;i<13;i++) {
		textureNames.push("UV"+(i+1));
		uv[i] = returnTex(i);
	}
	console.log("textures stuff ", textureNames);
	console.log("textures uv stuff ", uv);
//	var tex_tri = new THREE.TextureLoader().load( 'textures/UV1.jpg' );
	//var tex_center = new THREE.TextureLoader().load( 'textures/UV2.jpg' );
//	var tex_bottom = new THREE.TextureLoader().load( 'textures/UV3.jpg' );
	return {
		"0": {
			color : 0xffffff,
			map : uv[4],
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side : THREE.DoubleSide
		},
		"2": {
			color : 0xffffff,
			map : uv[11],
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"3": {
			color : 0xffffff,
			map : uv[3],
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"4": {
			color : 0xffffff,
			map : uv[1],
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"5": {
			color : 0xffffff,
			bumpMap: uv[0],
			bumpScale: 1,
			map : uv[0],
			envMap: envMap2, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"8": {
			color : 0xffffff,
			map : uv[2],
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"9": {
			color : 0xffffff,
			bumpMap: uv[9],
			bumpScale: 5,
			map : uv[9],
			envMap: envMap2, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"10": {
			color : 0xffffff,
			bumpMap: uv[8],
			bumpScale: 5,
			map : uv[8],
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"11": {
			color : 0xffffff,
			bumpMap: bumpMap,
			bumpScale: .2,
			map : uv[10],
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"12": {
			color : 0xffffff,
			map : uv[7],
			bumpMap: uv[7],
			bumpScale: 2,
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"13": {
			color : 0xffffff,
			map : uv[6],
			bumpMap: uv[6],
			bumpScale: 2,
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"14": {
			color : 0xffffff,
			map : uv[5],
			bumpMap: uv[5],
			bumpScale: 2,
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"15": { color: 0x685672, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"17": { color: 0x93050e, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"19": { color: 0x93050e, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"21": { color: 0x93050e, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"23": { color: 0x4c7c39, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"25": { color: 0x685672, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"27": { color: 0x93050e, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"29": { color: 0x93050e, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"31": { color: 0xc0bbbf, reflectivity: 0.75, transparent: true, opacity: 0.8, envMap: envMap, overdraw: 0.99, reflectivity: 0.95, side: THREE.DoubleSide },
		"34": {
			color : 0xffffff,
			map : uv[12],
			bumpMap: uv[12],
			bumpScale: 2,
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},
		"35": {
			color : 0x978e88,
			envMap: envMap, overdraw: 0.99,
			reflectivity: 0.25,
			side: THREE.DoubleSide
		},

		"37": { color: 0x93050e, reflectivity: 0.75, transparent: true, opacity: 0.8, envMap: envMap, overdraw: 0.99, reflectivity: 0.95, side: THREE.DoubleSide },
		"38": { color: 0x4c7c39, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"39": { color: 0x685672, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"40": { color: 0x4c7c39, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"41": { color: 0x685672, reflectivity: 0.75, transparent: true, opacity: 0.96, envMap: envMap, overdraw: 0.99, reflectivity: 0.5, side: THREE.DoubleSide },
		"random": { color: Math.random() * 0x685672, reflectivity: 0.75, transparent: true, opacity: 0.1*seed(1,7), envMap: envMap, overdraw: 0.99, reflectivity: 0.65, side: THREE.DoubleSide },
		"twirl": { color:0xffffff, map: twirlMap, transparent: true, opacity: 0.25*seed(1,7), envMap: envMap, overdraw: 0.99, reflectivity: 0.25, side: THREE.DoubleSide },
		"default": {
			//color: 0xafafaf,
			//color: 0xdbc077,
			color: 0xd0b26b, reflectivity: 0.75, envMap: envMap, overdraw: 0.99, reflectivity: 0.25, side: THREE.DoubleSide
		}
	}
}
