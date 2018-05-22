function tweenRemove(object, scalex, scaley){
	let	xpos = object.position.x,
			ypos = object.position.y,
			tpos = { x: xpos, y: ypos },
			target = { x: xpos+scalex, y: ypos+scaley };

	new TWEEN.Tween( tpos ).to( target, 750 )
	.onUpdate(function(){
			object.position.x = tpos.x;
			object.position.y = tpos.y;
	})
	.easing(TWEEN.Easing.Elastic.Out)
	.start();
}
