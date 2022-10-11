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
    context.rect(125, 275, 50, 50);

    context.rect(225, 275, 50, 50);

    context.rect(125, 225, 50, 50);
    
    context.rect(225, 225, 50, 50);

    context.rect(75, 175, 50, 50);

    context.rect(75, 125, 50, 50);

    context.rect(75, 75, 50, 50);

    context.rect(125, 75, 50, 50);
    
    context.rect(175, 75, 50, 50);
    
    context.rect(175, 125, 50, 50);
    
    context.rect(225, 75, 50, 50);

    context.rect(275, 75, 50, 50);
    
    context.rect(275, 125, 50, 50);
    
    context.rect(275, 175, 50, 50);
    
    context.fill();

    
}