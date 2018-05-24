

  // initial position of camera
  var camposition = {
    x: 0,
    y: 0,
    z: 200
  };
  // target position that camera tweens to
  var camtarget = {
    x: 0,
    y: 0,
    z: 1200
  };
  var tweencam = new TWEEN.Tween(camposition).to(camtarget, 1500);

  tweencam.onUpdate(function() {
    camera.position.x = camposition.x;
    camera.position.y = camposition.y;
    camera.position.z = camposition.z;
  });

  tweencam.easing(TWEEN.Easing.Exponential.InOut);



function launchCamTween() {
  tweencam.start();
}

function launchTween2() {
  var camposition2 = { x: camera.position.x, y: camera.position.y, z: camera.position.z,
                      xr: camera.rotation.x, yr: camera.rotation.y, zr: camera.rotation.z };
  var camtarget2 = { x: 0, y: 500, z: 150,
                    xr: -.4, yr: .0, zr: .0 };
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
