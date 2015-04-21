
function init(){

var c = document.getElementById("stagecanvas");
var ctx = c.getContext("2d"); //webgl
c.width = 640;
c.height = 480;
//Draw a Line
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

//Draw a Circle
ctx.beginPath();
ctx.arc(400,100,40,0,2*Math.PI);
ctx.stroke();

//Draw a Text
ctx.font = "30px Arial";
ctx.fillText("Canvas",c.width/3,50);


// Create Linear gradient
var grd = ctx.createLinearGradient(120,120,250,100);
grd.addColorStop(0, '#FF0000'); 
grd.addColorStop(0.285714286, '#FF7F00'); 
grd.addColorStop(0.428571429, '#FFFF00'); 
grd.addColorStop(0.571428571, '#00FF00'); 
grd.addColorStop(0.714285714, '#0000FF'); 
grd.addColorStop(0.857142857, '#4B0082'); 
grd.addColorStop(1.0, '#8F00FF');
ctx.fillStyle = grd;
ctx.fillRect(120,120,150,50)


// Create Circular gradient
var grd = ctx.createRadialGradient(350,350,50,350,350,10);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
ctx.fillStyle = grd;
ctx.fillRect(300,300,100,100);


}

window.onload = init;
