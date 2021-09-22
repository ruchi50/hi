canvas = document.getElementById("canvas_new");
ctx = canvas.getContext("2d");
color = "blue" ;
var mouse_event = "empty" ; 
var last_position_x , last_position_y;
width_of_line = 2 ; 

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_line").value ;
radius =  document.getElementById("radius").value;
mouseEvent =  "mouseDown";
}

function my_mousemove(e)
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clienty - canvas.offsetTop;
if (mouseEvent == "mouseDown") {
console.log("Current position of x and y coordinates = ");
console.log("x = " + current_position_of_mouse_x + "y = " +
current_position_of_mouse_y);
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0,
2 * Math.PI);
ctx.stroke();
}

   
 last_position_x = currentpositionmousex ;
 last_position_y = currentpositionmousey ;
}
    canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup (e) {
    mouse_event = "mouseUp";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e) {
    mouse_event = "mouseleave";

}
function clear_area () {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


