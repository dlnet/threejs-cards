function tweenRemove(object, scalex, scaley, binary){
	let	xpos = object.position.x,
			ypos = object.position.y,
			zpos = object.position.z,
			tpos = { x: xpos, y: ypos, z: zpos },
			target = { x: xpos+scalex, y: ypos+scaley, z: 10 };

	 new TWEEN.Tween( tpos ).to( target, 850 )
	.onUpdate(function(){
			object.position.x = tpos.x;
			object.position.y = tpos.y;
			object.position.z = tpos.z;
	})
	.easing(TWEEN.Easing.Elastic.Out)
	.start();


	let xrot = object.rotation.x,
			yrot = object.rotation.y,
			zrot = object.rotation.z,
			trot = { x: xrot, y: 3*binary, z: 2*binary },
			rtarget = { x: 0, y: 0, z: 0 };

	 tween = new TWEEN.Tween( trot ).to( rtarget, 1500 )
	.onUpdate(function(){
			object.rotation.x = trot.x;
			object.rotation.y = trot.y;
			object.rotation.z = trot.z;
	})
	.easing(TWEEN.Easing.Elastic.Out)
	.start();


}
