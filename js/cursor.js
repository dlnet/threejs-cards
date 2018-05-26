var cursorX,
    cursorY,
    xPercent,
    yPercent;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
    // mouse percentage
    xPercent = cursorX/window.innerWidth;
    yPercent = cursorY/window.innerHeight;
}
setInterval("checkCursor()", 1000);
function checkCursor(){
    //console.log("Cursor at: " + xPercent + ", " + yPercent);
}


function mouseToWorldSpace(clientX, clientY, camera) {
  //calculate mouse position in normalized device coordinates
  //(-1 to +1)
  var msX = (clientX / window.innerWidth) * 2 - 1;
  var msY = -(clientY / window.innerHeight) * 2 + 1;
  var vector = new THREE.Vector3(msX, msY, 1);
  vector.unproject(camera);
  return vector;
}
