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
