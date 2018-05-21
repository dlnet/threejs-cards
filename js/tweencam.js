function tweenTest(){
  // initial position of camera
  var camposition = {
    x: 0,
    y: 0,
    z: 1000
  };
  // target position that camera tweens to
  var camtarget = {
    x: 0,
    y: 0,
    z: 2000
  };
  var tweencam = new TWEEN.Tween(camposition).to(camtarget, 1600);

  tweencam.onUpdate(function() {
    camera.position.x = camposition.x;
    camera.position.y = camposition.y;
    camera.position.z = camposition.z;
  });

  tweencam.easing(TWEEN.Easing.Exponential.InOut);
  tweencam.start();
}

function launchTween() {

}
