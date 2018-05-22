

  // initial position of camera
  var camposition = {
    x: 0,
    y: 0,
    z: 255
  };
  // target position that camera tweens to
  var camtarget = {
    x: 0,
    y: 0,
    z: 1200
  };
  var tweencam = new TWEEN.Tween(camposition).to(camtarget, 1600);

  tweencam.onUpdate(function() {
    camera.position.x = camposition.x;
    camera.position.y = camposition.y;
    camera.position.z = camposition.z;
  });

  tweencam.easing(TWEEN.Easing.Exponential.InOut);



function launchTween() {
  tweencam.start();
}

function launchTween2() {
  var camposition2 = { x: camera.position.x, y: camera.position.y, z: camera.position.z,
                      xr: camera.rotation.x, yr: camera.rotation.y, zr: camera.rotation.z };
  var camtarget2 = { x: 250, y: 25, z: 2250,
                    xr: -.15, yr: .25, zr: .51 };
  var tweencam2 = new TWEEN.Tween( camposition2 ).to( camtarget2, 1600 )
  .onUpdate(function() {
    camera.position.x = camposition2.x;
    camera.position.y = camposition2.y;
    camera.position.z = camposition2.z;
    camera.rotation.x = camposition2.xr;
    camera.rotation.y = camposition2.yr;
    camera.rotation.z = camposition2.zr;
  })
  .easing(TWEEN.Easing.Exponential.InOut)
  .start();
}
