function tweenMain(object, scalex, scaley, rotation){

  let xpos = object.position.x,
	ypos = object.position.y,
	zpos = object.position.z,
	xrot = object.rotation.x,
	yrot = object.rotation.y,
	zrot = object.rotation.z,
	tpos = { x: xpos, y: 0, z: 1111, xr: 2.5/i, yr: .1*1, zr:.92*i },
	target = { x: 0*scalex, y: 70, z: 0, xr:0, yr:0, zr:0 },

	 tween0 = new TWEEN.Tween( tpos ).to( target, 3000 )
	.onUpdate(function(){
			object.position.x = tpos.x;
			object.position.y = tpos.y;
			object.position.z = tpos.z;
			object.rotation.z = tpos.zr;
			object.rotation.y = tpos.yr;
      object.rotation.x = tpos.xr;
	})
	.delay(155+(45*scalex))
	.easing(TWEEN.Easing.Elastic.Out)
	.start();

}
