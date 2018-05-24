function tweenMove(object, scalex, scaley, rotation){
	let	index = objects.indexOf(object),
  xpos = object.position.x,
	ypos = object.position.y,
	zpos = object.position.z,
	tpos = { x: xpos, y: ypos, z: zpos },
	target = { x: 1*scalex, y: 1*scaley, z: 90 },
  wait = 850,

	 tween0 = new TWEEN.Tween( tpos ).to( target, 2000 )
	.onUpdate(function(){
			object.position.x = tpos.x;
			object.position.y = tpos.y;
			object.position.z = tpos.z;
			object.rotation.z = rotation;
      object.rotation.x = -.75;
	})
	.delay(wait+(250*index))
	.easing(TWEEN.Easing.Elastic.Out)
	.start();


  let trot = { x: -4, y: 2, z: 4 },
	rtarget = { x: -.75, y: 0, z: rotation };

	 tween = new TWEEN.Tween( trot ).to( rtarget, 2000 )
	.onUpdate(function(){
      object.rotation.x = trot.x;
      object.rotation.y = trot.y;
			object.rotation.z = trot.z;
	})
	.delay(wait+(50*index))
	.easing(TWEEN.Easing.Elastic.Out)
	.start();

  let tscl = { x: 0, y: 0, z: 0 },
	starget = { x: .85, y: .85, z: .85 };

	 tween = new TWEEN.Tween( tscl ).to( starget, 2000 )
	.onUpdate(function(){
      object.scale.x = tscl.x;
      object.scale.y = tscl.y;
			object.scale.z = tscl.z;
	})
	.delay(wait+(45*index))
	.easing(TWEEN.Easing.Elastic.Out)
	.start();

  return {
    "tween0" : tween0,
    //"tween1" : tween,
  //    "tween2" : tween
  }
}

function removeObjects(){
  objects = [];
}
