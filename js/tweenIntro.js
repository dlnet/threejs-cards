function tweenIntro(object, objectIndex, scalex, scaley, rotation, binary){
  return function(){
      var objectList = [11,23,24,25,26,27,28,29,30,34,35,36,37,38,39,40];
      var objectZinc = [3,4,5,6,15,16,17,18,19,20,21,22,31,32];
      var addZ;
      if( objectZinc.includes(objectIndex) ){
        if (objectIndex < 30 && objectIndex > 14) { addZ = 25; }
        else if (objectIndex > 30 ) { addZ = 200; }
        else ( addZ = 0 ); //should be -100, but snaps
        let xpos = object.position.x,
        ypos = object.position.y,
        zpos = object.position.z,

        yposition = 170,

        tpos = { x: xpos, y: 0, z: -1000+addZ},
        target = { x: 0*scalex, y: yposition, z: -1000},

         tween0 = new TWEEN.Tween( tpos ).to( target, 1450-addZ )
        .onUpdate(function(){
            object.position.x = tpos.x;
            object.position.y = tpos.y;
            object.position.z = tpos.z;
        })
        .delay(3000+(1*scalex))
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();
      } else {
        addZ = 0;
      }

    objectList.includes(objectIndex)
      if( objectList.includes(objectIndex) ){

        var xpos = object.position.x,
      	ypos = object.position.y,
      	zpos = object.position.z,

        zrotval = 1*binary,
      	tpos = { x: xpos, y: 0, z: 1111 },
      	target = { x: 0*scalex, y: 170, z: -1000 };


      	 tween0 = new TWEEN.Tween( tpos ).to( target, 6 )
      	.onUpdate(function(){
      			object.position.x = tpos.x;
      			object.position.y = tpos.y;
      			object.position.z = tpos.z;
            object.scale.x = 0; object.scale.y = 0; object.scale.z = 0;
      	})
      	.delay(1+(1*1))
      	.easing(TWEEN.Easing.Quadratic.Out)
      	.start();

        if (objectIndex < 34) {

            var xrot = object.rotation.x,
          	yrot = object.rotation.y,
          	zrot = object.rotation.z,
            tpos1 = {    xr: 0, yr: 0, zr:(.9*4)*i },
            target1 = {   zr: 50, xr:0, yr:0, zr:(zrotval*1) },

             tween02 = new TWEEN.Tween( tpos1 ).to( target1, 2000 )
            .onUpdate(function(){

                object.rotation.z = tpos1.zr;
                object.rotation.y = tpos1.yr;
                object.rotation.x = tpos1.xr;
            })
            .delay(2000)
            .easing(TWEEN.Easing.Elastic.Out)
            .start();



            var tpos3 = {   xs: 0, ys: 0, zs: 0 },
            target3 = {   xs: binary*50, ys: 50, zs: 50  },
            tween02 = new TWEEN.Tween( tpos3 ).to( target3, 1500 )
           .onUpdate(function(){

               object.scale.x = tpos3.xs;
               object.scale.y = tpos3.ys;
               object.scale.z = tpos3.zs;

           })
           .delay(2555+(1*1))
           .easing(TWEEN.Easing.Elastic.Out)
           .start();


           var tpos2 = { zr:zrotval*1 },
          target2 = { zr:0 },

           tween1 = new TWEEN.Tween( tpos2 ).to( target2, 1555 )
          .onUpdate(function(){
              object.rotation.z = tpos2.zr;
          })
          .delay(4000)
          .easing(TWEEN.Easing.Elastic.Out)
          .start();

     } else {
           var tpos3 = {   xs: 0, ys: 0, zs: 0 },
           target3 = {   xs: binary*50, ys: 50, zs: 50  },
           tween02 = new TWEEN.Tween( tpos3 ).to( target3, 1250 )
          .onUpdate(function(){

              object.scale.x = tpos3.xs;
              object.scale.y = tpos3.ys;
              object.scale.z = tpos3.zs;

          })
          .delay(5000+(1*1))
          .easing(TWEEN.Easing.Elastic.InOut)
          .start();

     }




      } else {
        //Bring Object in from z up to y 170
          let xpos = object.position.x,
        	ypos = object.position.y,
        	zpos = object.position.z,
        	xrot = object.rotation.x,
        	yrot = object.rotation.y,
        	zrot = object.rotation.z,

          yposition = 170,

        	tpos = { x: xpos, y: 0, z: 1111, xr: 2.5/i, yr: .1*1, zr:.92*i },
        	target = { x: 0*scalex, y: yposition, z: -1000+addZ, xr:0, yr:0, zr:0 },

        	 tween0 = new TWEEN.Tween( tpos ).to( target, 2000 )
        	.onUpdate(function(){
        			object.position.x = tpos.x;
        			object.position.y = tpos.y;
        			object.position.z = tpos.z;
        			object.rotation.z = tpos.zr;
        			object.rotation.y = tpos.yr;
              object.rotation.x = tpos.xr;
        	})
        	.delay(2000+(1*scalex))
        	.easing(TWEEN.Easing.Elastic.Out)
        	.start();


      }


      //Bring Object/Blade Down v v v
      let ypos2 = object.position.y,

      tposFinal = {  y: 170 },
      targetFinal = {  y: 70 },

       tweenp = new TWEEN.Tween( tposFinal ).to( targetFinal, 1500 )
      .onUpdate(function(){
          object.position.y = tposFinal.y;
      })
      .delay(4000)
      .easing(TWEEN.Easing.Elastic.Out)
      .start();
  }
}

function tweenCamScale(object,scale,binary){

  let xscl = object.scale.x,
	yscl = object.scale.y,
	zscl = object.scale.z,

	tscl = { x: xscl, y: yscl, z: zscl },
	target = { x: binary*84, y: 84, z: 84 },

	 tween0 = new TWEEN.Tween( tscl ).to( target, 1500 )
	.onUpdate(function(){
			object.scale.x = tscl.x;
			object.scale.y = tscl.y;
			object.scale.z = tscl.z;
	})
	.delay(1450+(10*scale))
	.easing(TWEEN.Easing.Elastic.Out)
	.start();
}

// Letters TWEEN
function tweenLetters(object,scale,myGeometry,z1,z2){

  let xscl = object.position.x,
	    yscl = object.position.y,
	    zscl = object.position.z;

  var tmpPX = seed(-300,300),
      tmpPY = seed(-300,300),
      tmpPZ = seed(z1,z2),
      xinit = tmpPX, yinit = tmpPY, zinit = tmpPZ + 2200,
      pos = .1*i, neg = -.1*i,
      tmpRX = seed(neg,pos), tmpRY = seed(neg,pos), tmpRZ = seed(neg,pos),

	cinit = { x: xinit, y: yinit, z: zinit, xr: 0, yr: 0, zr: 0 },
	target = { x: tmpPX, y: tmpPY, z: tmpPZ, xr: tmpRX, yr: tmpRY, zr: tmpRZ },

	 tween0 = new TWEEN.Tween( cinit ).to( target, 3000 )
	.onUpdate(function(){
			object.position.x = cinit.x;
			object.position.y = cinit.y;
			object.position.z = cinit.z;
      object.rotation.x = cinit.xr;
			object.rotation.y = cinit.yr;
			object.rotation.z = cinit.zr;
	})
	.delay(1450+(65*scale))
	.easing(TWEEN.Easing.Elastic.Out)
	.start();

}

function tweenRocks(object){

  var rockinit = { x: 0, y: 0, z: 0, yp:-225 },
	target = { x: .5, y: .5, z: .5, yp: -120 },

	 tween0 = new TWEEN.Tween( rockinit ).to( target, 1500 )
	.onUpdate(function(){
			object.scale.x = rockinit.x;
			object.scale.y = rockinit.y;
			object.scale.z = rockinit.z;
      object.position.y = rockinit.yp;
	})
	.delay(3850)
	.easing(TWEEN.Easing.Elastic.Out)
	.start();

}

function tweenEffects(object){

  var effectinit = { x: 0, y: 0, z: 0 , zp:-1000, yp:-40},
	targeteffect = { x: 15, y: 15, z: 15, zp:-1000, yp:-280},

	 tween0 = new TWEEN.Tween( effectinit ).to( targeteffect, 1500 )
	.onUpdate(function(){
			object.scale.x = effectinit.x;
			object.scale.y = effectinit.y;
			object.scale.z = effectinit.z;
      object.position.z = effectinit.zp;
      object.position.y = effectinit.yp;
	})
	.delay(5000)
	.easing(TWEEN.Easing.Elastic.Out)
	.start();

}
