//set device size
let canvas = document.getElementById("renderer");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

//find the center of the window
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
radius = 150;

//draw circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, 2*Math.PI);
ctx.stroke();