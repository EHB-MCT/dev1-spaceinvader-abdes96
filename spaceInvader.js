"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

Drawspaceinvader();


function Drawspaceinvader () {


    context.beginPath();
    context.fillRect(50, 50, 300, 300);
    

    context.beginPath();

    context.fillStyle = "#66FF00";
    context.rect(120, 300, 50, 50);

    context.rect(225, 300, 50, 50);

    context.rect(120, 250, 50, 50);
    
    context.rect(225, 250, 50, 50);

    context.rect(75, 200, 50, 50);

    context.rect(75, 150, 50, 50);

    context.rect(75, 100, 50, 50);

    context.rect(125, 100, 50, 50);
    
    context.rect(175, 100, 50, 50);
    
    context.rect(175, 150, 50, 50);
    
    context.rect(225, 100, 50, 50);

    context.rect(275, 100, 50, 50);
    
    context.rect(275, 150, 50, 50);
    
    context.rect(275, 200, 50, 50);
    
    context.fill();

    
}