//set device size
let canvas = document.getElementById("renderer");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext("2d");

//find the center of the window
let center_x = canvas.width / 2;
let center_y = canvas.height / 2;
radius = 150;