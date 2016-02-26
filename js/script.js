


var canvas = document.getElementById("caseCanvas");
var context = canvas.getContext("2d");
context.moveTo(225, 0);
context.lineTo(225, 175);
context.strokeStyle = '#8C6931';
context.shadowColor = '#000';
context.shadowBlur = 15;
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.stroke();

var quality = [consumer, milspec, industrial, restricted, classified, covert, rare];
