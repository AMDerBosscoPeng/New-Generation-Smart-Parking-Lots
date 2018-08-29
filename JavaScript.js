// something to draw on
var canvas      = document.getElementById("canvas");
var context     = canvas.getContext("2d");
//canvas.width    = window.innerWidth*0.9;
//canvas.height   = window.innerHeight*0.8;
canvas.width    =1500;
canvas.height   =750;


var space_x=[110,140,170,200,230,260,290,320,350,380,410,440,470,500,530,560,590,620,650,680,710,740,770,800,830,860,890,920,950,980,1010,1040,1070,1100,1130,1160,1190,1220,1250,1280,1310];

var space_y=[50,80,110,300,330,360,540,570,600];
var arccircle =[/*
 {  x:110,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:230,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  
  {  x:110,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  { x:230,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},

   {  x:110,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  { x:230,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  
  {  x:110,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  { x:230,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  
  {  x:110,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  { x:230,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  
   {  x:110,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  { x:230,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  
  {  x:110,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  { x:230,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  
  
  {  x:110,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  { x:230,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:110,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:140,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:170,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:200,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  { x:230,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}, 
  {  x:260,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:290,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:320,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:350,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:380,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:410,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:440,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:470,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:500,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:530,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:560,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:590,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:620,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:650,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:680,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:710,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:740,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:770,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:800,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:830,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:860,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:890,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:920,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:950,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:980,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1010,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1040,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1070,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1100,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1130,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1160,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1190,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1220,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1250,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1280,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1310,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
  {  x:1340,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},{  x:1310,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"}*/];

var standerArc=[{  x:110,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
{  x:350,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
{  x:590,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
{  x:830,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
 {  x:1070,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
 {  x:1310,  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
                {  x:110,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
{  x:350,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
{  x:590,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
{  x:830,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
 {  x:1070,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"},
 {  x:1310,  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(107, 242, 87, 1)",ledstroke: "rgba(255,255,255,0)"}]


// store created rectangles, we will run collision checks on these
var lefttpush1=[];
var righttpush1=[];
var car1to5=0;
var pricesumhalfhours=[];
var Nowstore=[];
var Hstore=[];
var startTime=[];
var endTime=[];
var continueTime=[];

var custnum=0;
var rectangles  =[
  {  x:130,  y:180, width:7, height:7   },
  {  x:150,  y:180, width:7, height:7   },
  {  x:170,  y:180, width:7, height:7   },
  {  x:190,  y:180, width:7, height:7   },
  {  x:210,  y:180, width:7, height:7   },
  {  x:230,  y:180, width:7, height:7   },
  {  x:250,  y:180, width:7, height:7   },
  {  x:270,  y:180, width:7, height:7   },
  {  x:290,  y:180, width:7, height:7   },
  {  x:310,  y:180, width:7, height:7   },
  {  x:330,  y:180, width:7, height:7   },
  {  x:350,  y:180, width:7, height:7   },
  {  x:370,  y:180, width:7, height:7   },
  {  x:390,  y:180, width:7, height:7   },
  {  x:410,  y:180, width:7, height:7   },
  {  x:430,  y:180, width:7, height:7   },
  {  x:450,  y:180, width:7, height:7   },
  {  x:470,  y:180, width:7, height:7   },
  {  x:490,  y:180, width:7, height:7   },
  {  x:510,  y:180, width:7, height:7   },
  {  x:530,  y:180, width:7, height:7   },
  {  x:550,  y:180, width:7, height:7   },
  {  x:570,  y:180, width:7, height:7   },
  {  x:590,  y:180, width:7, height:7   },
  {  x:610,  y:180, width:7, height:7   },
  {  x:630,  y:180, width:7, height:7   },
  {  x:650,  y:180, width:7, height:7   },
  {  x:670,  y:180, width:7, height:7   },
  {  x:690,  y:180, width:7, height:7   },
  {  x:710,  y:180, width:7, height:7   },
  {  x:730,  y:180, width:7, height:7   },
  {  x:750,  y:180, width:7, height:7   },
  {  x:770,  y:180, width:7, height:7   },
  {  x:790,  y:180, width:7, height:7   },
  {  x:810,  y:180, width:7, height:7   },
  {  x:830,  y:180, width:7, height:7   },
  {  x:850,  y:180, width:7, height:7   },
  {  x:870,  y:180, width:7, height:7   },
  {  x:890,  y:180, width:7, height:7   },
  {  x:910,  y:180, width:7, height:7   },
  {  x:930,  y:180, width:7, height:7   },
  {  x:950,  y:180, width:7, height:7   },
  {  x:970,  y:180, width:7, height:7   },
  {  x:990,  y:180, width:7, height:7   },
  {  x:1010,  y:180, width:7, height:7   },
  {  x:1030,  y:180, width:7, height:7   },
  {  x:1050,  y:180, width:7, height:7   },
  {  x:1070,  y:180, width:7, height:7   },
  {  x:1090,  y:180, width:7, height:7   },
  {  x:1110,  y:180, width:7, height:7   },
  {  x:1130,  y:180, width:7, height:7   },
  {  x:1150,  y:180, width:7, height:7   },
  {  x:1170,  y:180, width:7, height:7   },
  {  x:1190,  y:180, width:7, height:7   },
  {  x:1210,  y:180, width:7, height:7   },
  {  x:1230,  y:180, width:7, height:7   },
  {  x:1250,  y:180, width:7, height:7   },
  {  x:1270,  y:180, width:7, height:7   },
  {  x:1290,  y:180, width:7, height:7   },
  //{  x:1310,  y:180, width:7, height:7   },
  //{  x:1330,  y:180, width:7, height:7   },
  //{  x:1350,  y:180, width:7, height:7   },
  {  x:130,  y:275, width:7, height:7   },
  {  x:150,  y:275, width:7, height:7   },
  {  x:170,  y:275, width:7, height:7   },
  {  x:190,  y:275, width:7, height:7   },
  {  x:210,  y:275, width:7, height:7   },
  {  x:230,  y:275, width:7, height:7   },
  {  x:250,  y:275, width:7, height:7   },
  {  x:270,  y:275, width:7, height:7   },
  {  x:290,  y:275, width:7, height:7   },
  {  x:310,  y:275, width:7, height:7   },
  {  x:330,  y:275, width:7, height:7   },
  {  x:350,  y:275, width:7, height:7   },
  {  x:370,  y:275, width:7, height:7   },
  {  x:390,  y:275, width:7, height:7   },
  {  x:410,  y:275, width:7, height:7   },
  {  x:430,  y:275, width:7, height:7   },
  {  x:450,  y:275, width:7, height:7   },
  {  x:470,  y:275, width:7, height:7   },
  {  x:490,  y:275, width:7, height:7   },
  {  x:510,  y:275, width:7, height:7   },
  {  x:530,  y:275, width:7, height:7   },
  {  x:550,  y:275, width:7, height:7   },
  {  x:570,  y:275, width:7, height:7   },
  {  x:590,  y:275, width:7, height:7   },
  {  x:610,  y:275, width:7, height:7   },
  {  x:630,  y:275, width:7, height:7   },
  {  x:650,  y:275, width:7, height:7   },
  {  x:670,  y:275, width:7, height:7   },
  {  x:690,  y:275, width:7, height:7   },
  {  x:710,  y:275, width:7, height:7   },
  {  x:730,  y:275, width:7, height:7   },
  {  x:750,  y:275, width:7, height:7   },
  {  x:770,  y:275, width:7, height:7   },
  {  x:790,  y:275, width:7, height:7   },
  {  x:810,  y:275, width:7, height:7   },
  {  x:830,  y:275, width:7, height:7   },
  {  x:850,  y:275, width:7, height:7   },
  {  x:870,  y:275, width:7, height:7   },
  {  x:890,  y:275, width:7, height:7   },
  {  x:910,  y:275, width:7, height:7   },
  {  x:930,  y:275, width:7, height:7   },
  {  x:950,  y:275, width:7, height:7   },
  {  x:970,  y:275, width:7, height:7   },
  {  x:990,  y:275, width:7, height:7   },
  {  x:1010,  y:275, width:7, height:7   },
  {  x:1030,  y:275, width:7, height:7   },
  {  x:1050,  y:275, width:7, height:7   },
  {  x:1070,  y:275, width:7, height:7   },
  {  x:1090,  y:275, width:7, height:7   },
  {  x:1110,  y:275, width:7, height:7   },
  {  x:1130,  y:275, width:7, height:7   },
  {  x:1150,  y:275, width:7, height:7   },
  {  x:1170,  y:275, width:7, height:7   },
  {  x:1190,  y:275, width:7, height:7   },
  {  x:1210,  y:275, width:7, height:7   },
  {  x:1230,  y:275, width:7, height:7   },
  {  x:1250,  y:275, width:7, height:7   },
  {  x:1270,  y:275, width:7, height:7   },
  {  x:1290,  y:275, width:7, height:7   },
  //{  x:1310,  y:275, width:7, height:7   },
  //{  x:1330,  y:275, width:7, height:7   },
  //{  x:1350,  y:275, width:7, height:7   },
  {  x:130,  y:380, width:7, height:7   },
  {  x:150,  y:380, width:7, height:7   },
  {  x:170,  y:380, width:7, height:7   },
  {  x:190,  y:380, width:7, height:7   },
  {  x:210,  y:380, width:7, height:7   },
  {  x:230,  y:380, width:7, height:7   },
  {  x:250,  y:380, width:7, height:7   },
  {  x:270,  y:380, width:7, height:7   },
  {  x:290,  y:380, width:7, height:7   },
  {  x:310,  y:380, width:7, height:7   },
  {  x:330,  y:380, width:7, height:7   },
  {  x:350,  y:380, width:7, height:7   },
  {  x:370,  y:380, width:7, height:7   },
  {  x:390,  y:380, width:7, height:7   },
  {  x:410,  y:380, width:7, height:7   },
  {  x:430,  y:380, width:7, height:7   },
  {  x:450,  y:380, width:7, height:7   },
  {  x:470,  y:380, width:7, height:7   },
  {  x:490,  y:380, width:7, height:7   },
  {  x:510,  y:380, width:7, height:7   },
  {  x:530,  y:380, width:7, height:7   },
  {  x:550,  y:380, width:7, height:7   },
  {  x:570,  y:380, width:7, height:7   },
  {  x:590,  y:380, width:7, height:7   },
  {  x:610,  y:380, width:7, height:7   },
  {  x:630,  y:380, width:7, height:7   },
  {  x:650,  y:380, width:7, height:7   },
  {  x:670,  y:380, width:7, height:7   },
  {  x:690,  y:380, width:7, height:7   },
  {  x:710,  y:380, width:7, height:7   },
  {  x:730,  y:380, width:7, height:7   },
  {  x:750,  y:380, width:7, height:7   },
  {  x:770,  y:380, width:7, height:7   },
  {  x:790,  y:380, width:7, height:7   },
  {  x:810,  y:380, width:7, height:7   },
  {  x:830,  y:380, width:7, height:7   },
  {  x:850,  y:380, width:7, height:7   },
  {  x:870,  y:380, width:7, height:7   },
  {  x:890,  y:380, width:7, height:7   },
  {  x:910,  y:380, width:7, height:7   },
  {  x:930,  y:380, width:7, height:7   },
  {  x:950,  y:380, width:7, height:7   },
  {  x:970,  y:380, width:7, height:7   },
  {  x:990,  y:380, width:7, height:7   },
  {  x:1010,  y:380, width:7, height:7   },
  {  x:1030,  y:380, width:7, height:7   },
  {  x:1050,  y:380, width:7, height:7   },
  {  x:1070,  y:380, width:7, height:7   },
  {  x:1090,  y:380, width:7, height:7   },
  {  x:1110,  y:380, width:7, height:7   },
  {  x:1130,  y:380, width:7, height:7   },
  {  x:1150,  y:380, width:7, height:7   },
  {  x:1170,  y:380, width:7, height:7   },
  {  x:1190,  y:380, width:7, height:7   },
  {  x:1210,  y:380, width:7, height:7   },
  {  x:1230,  y:380, width:7, height:7   },
  {  x:1250,  y:380, width:7, height:7   },
  {  x:1270,  y:380, width:7, height:7   },
  {  x:1290,  y:380, width:7, height:7   },
  //{  x:1310,  y:380, width:7, height:7   },
  //{  x:1330,  y:380, width:7, height:7   },
  //{  x:1350,  y:380, width:7, height:7   },
  {  x:130,  y:470, width:7, height:7   },
  {  x:150,  y:470, width:7, height:7   },
  {  x:170,  y:470, width:7, height:7   },
  {  x:190,  y:470, width:7, height:7   },
  {  x:210,  y:470, width:7, height:7   },
  {  x:230,  y:470, width:7, height:7   },
  {  x:250,  y:470, width:7, height:7   },
  {  x:270,  y:470, width:7, height:7   },
  {  x:290,  y:470, width:7, height:7   },
  {  x:310,  y:470, width:7, height:7   },
  {  x:330,  y:470, width:7, height:7   },
  {  x:350,  y:470, width:7, height:7   },
  {  x:370,  y:470, width:7, height:7   },
  {  x:390,  y:470, width:7, height:7   },
  {  x:410,  y:470, width:7, height:7   },
  {  x:430,  y:470, width:7, height:7   },
  {  x:450,  y:470, width:7, height:7   },
  {  x:470,  y:470, width:7, height:7   },
  {  x:490,  y:470, width:7, height:7   },
  {  x:510,  y:470, width:7, height:7   },
  {  x:530,  y:470, width:7, height:7   },
  {  x:550,  y:470, width:7, height:7   },
  {  x:570,  y:470, width:7, height:7   },
  {  x:590,  y:470, width:7, height:7   },
  {  x:610,  y:470, width:7, height:7   },
  {  x:630,  y:470, width:7, height:7   },
  {  x:650,  y:470, width:7, height:7   },
  {  x:670,  y:470, width:7, height:7   },
  {  x:690,  y:470, width:7, height:7   },
  {  x:710,  y:470, width:7, height:7   },
  {  x:730,  y:470, width:7, height:7   },
  {  x:750,  y:470, width:7, height:7   },
  {  x:770,  y:470, width:7, height:7   },
  {  x:790,  y:470, width:7, height:7   },
  {  x:810,  y:470, width:7, height:7   },
  {  x:830,  y:470, width:7, height:7   },
  {  x:850,  y:470, width:7, height:7   },
  {  x:870,  y:470, width:7, height:7   },
  {  x:890,  y:470, width:7, height:7   },
  {  x:910,  y:470, width:7, height:7   },
  {  x:930,  y:470, width:7, height:7   },
  {  x:950,  y:470, width:7, height:7   },
  {  x:970,  y:470, width:7, height:7   },
  {  x:990,  y:470, width:7, height:7   },
  {  x:1010,  y:470, width:7, height:7   },
  {  x:1030,  y:470, width:7, height:7   },
  {  x:1050,  y:470, width:7, height:7   },
  {  x:1070,  y:470, width:7, height:7   },
  {  x:1090,  y:470, width:7, height:7   },
  {  x:1110,  y:470, width:7, height:7   },
  {  x:1130,  y:470, width:7, height:7   },
  {  x:1150,  y:470, width:7, height:7   },
  {  x:1170,  y:470, width:7, height:7   },
  {  x:1190,  y:470, width:7, height:7   },
  {  x:1210,  y:470, width:7, height:7   },
  {  x:1230,  y:470, width:7, height:7   },
  {  x:1250,  y:470, width:7, height:7   },
  {  x:1270,  y:470, width:7, height:7   },
  {  x:1290,  y:470, width:7, height:7   },
 // {  x:1310,  y:470, width:7, height:7   },
  //{  x:1330,  y:470, width:7, height:7   },
 /* {  x:1350,  y:470, width:7, height:7   }*/];
var rectCarPush=[];
var rectBikePush=[];
var pricesum=0;
var pricearray=[];
var arrayleft1=[];
var arrayright1=[];
var cust_selected;
var car_selected;
var leftwidth_selected;
var rightwidth_selected;
var carnum=0;
var carspacewidthdata=[];
 var carspacerightwidth=[];
var carspaceleftwidth=[];
var esc=[];
var esc2=[];
var escb=[];
var escc=[];
var arraycspx1=[];
var arraycspx2=[];
var arraybspx1=[];
var arraybspx2=[];
var rect_x=[];
var rect_y=[];
var escb_x=[];
var escb_y=[];
var escc_x=[];
var escc_y=[];
var parkingdata=[];
var parkingdata2=[];
var parkdata_leftx=[];
var parkdata_rightx=[];
var  selectcararray=[];
// store collisions to be rendered
var collisions  = [];
var deletecust=0;
var bikedic=[];
var bikedid=[];
//存放rectB.x
var esc_x=[];
//存放rectB.y
var esc_y=[];
//存放x重複的分析結果
var result_x = {};
//存放y重複的分析結果
var result_y = {};


var result={};
var num; 
var qw;

var name,bnum,numc;
// create some rectangles
while(rectangles.length < 4){ addRectangle(); }  

// track rectangle being dragged by user
var rectDrag    = { target : null, mx : 0, my : 0, ox: 0, oy :0 }

// allow dragging
canvas.addEventListener("mousedown", handleCanvasDown);

// resize when window does
window.addEventListener("resize", handleWindowResized);

// begin main loop
 

update();





/////////////////////////////////////////////////////////////////////////////////////////////
// CORE LOOP
/////////////////////////////////////////////////////////////////////////////////////////////

function update()
{ 
   
  // clean up current collisions, we will check again
  bikedic=[];
  bikedid=[];
  rectCarPush=[];
  rectBikePush=[];
 pricesumhalfhours=[];
  deletecust=0;
  pricesum=0;
  pricearray=[];
  arrayleft1=[];
  arrayright1=[];
  rect_x=[];
 rect_y=[];
 escb_x=[];
 escb_y=[];
 escc_x=[];
 escc_y=[];
 parkingdata=[];
 parkingdata2=[];
 parkdata_leftx=[];
 parkdata_rightx=[];
  collisions = [];
  esc_x=[];
  result_x = {};
   esc_y=[];
  result_y = {};
  esc=[];
  result={};
  esc2=[];
  escb=[];
  escc=[];
   arraycspx1=[];
  arraycspx2=[];
  arraybspx1=[];
  arraybspx2=[];
  arccircle=[];
  carspacerightwidth=[];
  carspaceleftwidth=[];
  qw=0;
  numc=0,numb=0;
  carnum=0;
  // we want to check the collisions of each rectangle
  // we also don't want tocheck the same two rectangles
  for(var i = 0; i <rectangles.length; i++)
  {
    for(var j = i+1; j < rectangles.length; j++)
    {
      var collision = AABBAABBCollision(rectangles[i], rectangles[j]);

      if(collision)
      { 
        collisions.push( { data:collision, rectA:rectangles[i], rectB:rectangles[j]} ); 
      } 
    }  
  }

  package();

  render();
  if(pricesumhalfhours.length>=1){
        var start=0;
 
     for(var i=0;i<pricesumhalfhours.length;i++){
       if(isNaN(pricesumhalfhours[i])){
          
          }else{
                start=start+Math.round10(pricesumhalfhours[i],-2);
          }
  }
        var standerprice=0;
        for(var i=0;i<pricesumhalfhours.length;i++){
            if(pricesumhalfhours[i]>0.3){
                standerprice=standerprice+0.5;
            }else if(pricesumhalfhours[i]<0.4 && pricesumhalfhours[i]!=0) {
                standerprice=standerprice+0.125;
            }
        }
        
    start=Math.round10(start,-2);
    standerprice=Math.round10(standerprice,-4);
    //console.log("standerprice:"+standerprice+"start:"+start);
    var persentadd=Math.round10(((start/standerprice)-1)*100,-2);
    if (start==0 && standerprice==0){
      persentadd=0;
    }
  document.getElementById("sum").innerHTML =persentadd+"%";
 
       }
  for(var i=0;i<standerArc.length;i++){
   renderArc(standerArc[i]);
  }

  window.requestAnimationFrame(update);
  
}

function changewidth2(car,leftwidth,rightwidth){
  var car_index=car.selectedIndex;
  var leftwidth_index=leftwidth.selectedIndex;
  var rightwidth_index=rightwidth.selectedIndex;
  if (car_index>=0){
    car_selected=car.options[car_index].value;
    leftwidth_selected=leftwidth.options[leftwidth_index].value;
    rightwidth_selected=rightwidth.options[rightwidth_index].value;
    if(car_selected==""){
       alert("請新增一輛汽車！");
       }else {
         var str="第"+car_selected+"輛車的左側寬度加"+(Math.abs(leftwidth_selected))*30+"cm"+"右側寬度加"+(rightwidth_selected-8)*30+"cm";
          console.log(str);
         lefttpush1[car_selected-1]=(Math.abs(leftwidth_selected))*30;
         righttpush1[car_selected-1]=(rightwidth_selected-8)*30;
     
          
       }
  }
  
}

function getout2(cust){
  if(rectangles.length>236){
     getout(cust);
   
    
  
     }else {
        alert("請新增顧客！");
     }
 
}
function getout(cust){
  selectcararray=[];
  for(var i=236;i<rectangles.length;i++){
    if(rectangles[i].height>250){
       selectcararray.push(i);
       }
  }


 var cust_index=cust.selectedIndex;
  if(cust_index>=0){
     cust_selected=cust.options[cust_index].value;
   if(cust_selected==""){
        alert("請新增顧客！");
       }else if (rectangles[cust_selected].height>250){
         //lefttpush1[rectangles.length-cust_selected-1]=0;
        // righttpush1[rectangles.length-cust_selected-1]=0;
           /*lefttpush1[0]=lefttpush1[1];
  righttpush1[0]=righttpush1[1];
  lefttpush1[1]=lefttpush1[2];
  righttpush1[1]=righttpush1[2];
  lefttpush1[2]=lefttpush1[3];
  righttpush1[2]=righttpush1[3];
  lefttpush1[3]=lefttpush1[4];
  righttpush1[3]=righttpush1[4];*/
        
        
            console.log("第"+cust_selected);
         deletecust=selectcararray.indexOf(parseInt(cust_selected));
         console.log(deletecust);
         lefttpush1.splice(deletecust,1);
         righttpush1.splice(deletecust,1);
         selectcararray.splice(selectcararray.indexOf(cust_selected),1);
             rectangles.splice(cust_selected,1);
           
 
 if(car1to5>0){
     car1to5=car1to5-1;
   for(var ii=0 ; ii<car1to5;ii++){
    var numj =ii+1;
     var words="選擇第"+numj+"輛汽車";
  document.SetParkSpace.Car.options[ii]=new Option(words,numj);
  document.SetParkSpace.Car.length=car1to5;
  }
}
              custnum=custnum-1;
  document.SetParkSpace.Cust.length=custnum; 
  if(rectangles.length>236){
     for(var iii =236 ;iii<rectangles.length;iii++){
      
var iiii=iii-235;
  var index=iii-236;
  if(rectangles[iii].height>250){
     var custwords1=iiii+"號汽車";  
     document.SetParkSpace.Cust.options[index]=new Option(custwords1,iii);
     
     }else {
    var custwords2=iiii+"號重機";
        document.SetParkSpace.Cust.options[index]=new Option(custwords2,iii);
       
     }
 
}
  } 
  }else {
     rectangles.splice(cust_selected,1);
     custnum=custnum-1;
  document.SetParkSpace.Cust.length=custnum; 
  if(rectangles.length>236){
     for(var iii =236 ;iii<rectangles.length;iii++){
      
var iiii=iii-235;
  var index=iii-236;
  if(rectangles[iii].height>250){
     var custwords1=iiii+"號汽車";  
     document.SetParkSpace.Cust.options[index]=new Option(custwords1,iii);
     
     }else {
    var custwords2=iiii+"號重機";
        document.SetParkSpace.Cust.options[index]=new Option(custwords2,iii);
       
     }
 
}
  }  
     }
       }
        

    

 if(car1to5==0){
  document.SetParkSpace.Car.options[0]=new Option("請新增一輛汽車","");
  document.SetParkSpace.Car.length=1;
    }
    if(custnum==0){
        document.SetParkSpace.Cust.options[0]=new Option("目前無顧客","");
  document.SetParkSpace.Cust.length=1;
       }
 
       var NowDate = new Date();
     

       // startTime.push({time:(NowDate.getFullYear(),(NowDate.getMonth()+1),NowDate.getDate(),NowDate.getHours(),NowDate.getMinutes(),NowDate.getSeconds)});
  endTime.push({year:NowDate.getFullYear(),month:(NowDate.getMonth()+1),date:NowDate.getDate(),hour:NowDate.getHours(),minute:NowDate.getMinutes(),seconds:NowDate.getSeconds()});
  Hstore.push({start:startTime[cust_selected-236],end:{year:NowDate.getFullYear(),month:(NowDate.getMonth()+1),date:NowDate.getDate(),hour:NowDate.getHours(),minute:NowDate.getMinutes(),seconds:NowDate.getSeconds()},price:pricearray[cust_selected-236]}); 
    startTime.splice(cust_selected-236,1);

}

function changewidth(car,leftwidth,rightwidth){

  var car_index=car.selectedIndex;
  var leftwidth_index=leftwidth.selectedIndex;
  var rightwidth_index=rightwidth.selectedIndex;
  if (car_index>=0){
    car_selected=car.options[car_index].value;
    leftwidth_selected=car.options[leftwidth_index].value;
    rightwidth_selected=rightwidth.options[rightwidth_index].value;
    if(car_selected==""){
       alert("請新增一輛汽車！");
       }else {
         var str="第"+car_selected+"輛車的左側寬度加"+(Math.abs(leftwidth_selected)-1)*30+"cm"+"右側寬度加"+(rightwidth_selected-8)*30+"cm";
          console.log(str);
     carspacewidthdata.push({selected:car_selected-1,left:-(Math.abs(leftwidth_selected)-1),right:Math.abs(rightwidth_selected)});
          
       }
  }
  
  
    
}

function Bspacedetection(spd){
  escb.push(spd);
  numb=numb+1;
  
  
}
function Cspacedetection(spd){
  escc.push(spd);
 
  numc=numc+1;
  
}
function Bspace(csp){
  space_x.filter(function(elem){
    if(elem+5<=csp.x){
      arraybspx1=[];
      arraybspx1.push(elem);}
    
  })
   var x=Math.max.apply(null, arraybspx1);
  if(x>1250){x=1250;}
   arraybspx2.push(x);
 
}
function BiyparkingSpacepush(left,right){
 
    var n=space_x.indexOf(left);
  var n2=space_x.indexOf(right);
   if(n!=-1 && n2!=-1){
   arccircle.push(
      {  x:space_x[n],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n+1],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2-1],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n+1],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2-1],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n+1],  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2-1],  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},        
                  {  x:space_x[n],  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"});
   }
}


function Cspace(csp,leftwidth,rightwidth,i){
  space_x.filter(function(elem){
    if(elem-10 <=csp.x ){
      arraycspx1=[];
      arraycspx1.push(elem);}
    
  })
  var x=Math.max.apply(null, arraycspx1);
  if(x>1130){x=1130;}
  else if(x>109 && x<140){x=110;}
  else {x=x-30;}
   
 if(rightwidth==undefined){
   rightwidth=8;
   carspacerightwidth[i]=rightwidth;
 
 }
  if(leftwidth==undefined){
   leftwidth=0;
   carspaceleftwidth[i]=leftwidth;
 
 }
  var x1=x+30*leftwidth;
  arraycspx2.push(x1);

  
}
function CarparkingSpacepush(left,right){

 
   
  
  var n=space_x.indexOf(left);
  var n2=space_x.indexOf(right);
  if(n!=-1 && n2!=-1){
   
    arccircle.push( { x:space_x[n],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n+1],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n+2],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2-2],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2-1],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:50,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n+1],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n+2],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2-2],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2-1],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},   
                  {  x:space_x[n],  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:80,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:110,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:300,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:330,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:360,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:540,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:570,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"},
                  {  x:space_x[n2],  y:600,r:3.5,  start:0, stop: 2*Math.PI, ledfill:"rgba(255, 0, 0, 1)",ledstroke: "rgba(255,255,255,0)"});

  }
  
 
}


/////////////////////////////////////////////////////////////////////////////////////////////
// COLLISION CHECK
/////////////////////////////////////////////////////////////////////////////////////////////

// check collision on two rectangles取得覆蓋面積
function AABBAABBCollision( rectA, rectB )
{
  // check for intersection
  if
    ( 
      // neither rectangles x should be pass the others right
      // and the same applies to y vs bottom
      Math.max( rectA.x, rectB.x ) < Math.min( rectA.x + rectA.width,  rectB.x+rectB.width ) && 
      Math.max( rectA.y, rectB.y ) < Math.min( rectA.y + rectA.height, rectB.y+rectB.height ) 
    )
  {
    // calculate extremes
    var maxX        = Math.max( rectA.x, rectB.x );
    var maxY        = Math.max( rectA.y, rectB.y );
    var minRight    = Math.min( rectA.x + rectA.width , rectB.x + rectB.width );
    var minBottom   = Math.min( rectA.y + rectA.height , rectB.y + rectB.height );

    // return intersection area
    return {
      x       : maxX,
      y       : maxY,
      width   : Math.abs( minRight - maxX ),
      height  : Math.abs( minBottom - maxY ) 
    }
  }

  // no collision
  return false;
}
//計算有無碰撞
function AABBPointCollision( rect, point)
{            
  // the distance from the center of the rect to the point should be less than half width and height
  // otherwise pointis not within rectangle
  return ( 
    Math.abs( ( rect.x + (rect.width/2) )  - point.x) < (rect.width/2) &&
    Math.abs( ( rect.y + (rect.height/2) ) - point.y) < (rect.height/2) 
  )
}


/////////////////////////////////////////////////////////////////////////////////////////////
// RECTANGLE CREATION
/////////////////////////////////////////////////////////////////////////////////////////////

function addDifRaceCar(carRace){
  var carRace_Index=parseInt(carRace.selectedIndex);
  switch(carRace_Index){
        case 0:
         addRectangle(1,27,150,360);
        break;
       case  1:
         addRectangle(17,2,160,410);
        break;
       case  2:
         addRectangle(1,274,170,430);
        break;
       case  3:
         addRectangle(141,2,170,460);
        break;
       case  4:
         addRectangle(141,72,180,480);
        break;
       case  5:
         addRectangle(81,27,200,450);
        break;
       case  6:
         addRectangle(12,27,170,440);
        break;
       case  7:
         addRectangle(18,52,160,470);
        break;
       case  8:
         addRectangle(91,27,150,370);
        break;
       case  9:
         addRectangle(10,24,180,520);
        break;
       case  10:
         addRectangle(41,22,180,500);
        break;
         }
}
// create rectangles新增方塊及設定大小*位置
function addRectangle(x,y,width,height)
{if(pricearray.length==(rectangles.length-236)){
     if(height>250){
     car1to5=car1to5+1;
      for(var ii=0 ; ii<car1to5;ii++){
    var numj =ii+1;
     var words="選擇第"+numj+"輛汽車";
  document.SetParkSpace.Car.options[ii]=new Option(words,numj);
  document.SetParkSpace.Car.length=car1to5;
  }
     }
  // min width and height for rectangle, keep thing reasonable
  var minWidth    = canvas.width*0.2;
  var minHeight   = canvas.width*0.2;
  var maxWidth    = canvas.width*0.4;
  var maxHeight   = canvas.width*0.4;

  // random width and height, keep within bounds
/*  var width       =180;
  var height      = 550;  */
 var x      = Math.round( Math.random()*( canvas.width-width ) );
  var y     = Math.round( Math.random()*( canvas.height-height ) );

  // store rectangle for reference
  rectangles.push( { x:x, y:y, width:width, height:height } )
  
      
       
      
       custnum=custnum+1;
  document.SetParkSpace.Cust.length=custnum; 
  if(rectangles.length>236){
     for(var iii =236 ;iii<rectangles.length;iii++){
      
var iiii=iii-235;
  var index=iii-236;
  if(rectangles[iii].height>250){
     var custwords1=iiii+"號汽車";  
     document.SetParkSpace.Cust.options[index]=new Option(custwords1,iii);
     
     }else {
    var custwords2=iiii+"號重機";
        document.SetParkSpace.Cust.options[index]=new Option(custwords2,iii);
       
     }
 
}
      
     }
  
        var NowDate = new Date();
      

       // startTime.push({time:(NowDate.getFullYear(),(NowDate.getMonth()+1),NowDate.getDate(),NowDate.getHours(),NowDate.getMinutes(),NowDate.getSeconds)});
  startTime.push({year:NowDate.getFullYear(),month:(NowDate.getMonth()+1),date:NowDate.getDate(),hour:NowDate.getHours(),minute:NowDate.getMinutes(),seconds:NowDate.getSeconds()});
           
    selectcararray=[];
  for(var i=236;i<rectangles.length;i++){
    if(rectangles[i].height>250){
       selectcararray.push(i);
       }
  }
  refresh();

    }else {
      alert("尚有用戶未停入車格內 , 請稍後!");
    }
 
}
// 閉包含數
(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

function refresh(){
  var numindex=0;
   document.SetParkSpace.Gust.length=startTime.length;
  for(var i in startTime){
    if(pricearray[i]==undefined){
      var stri=i.toString();
      pricearray.push({position:i,price:0});
      console.log(pricearray);
    }
    
 //  if(rectangles[236+i].height>250){
   numindex=numindex+1;
    if(isNaN(pricearray[i].price) ){
      pricearray[i].price=0;
    }
     var str=numindex+"號 "+startTime[i].month+"/"+startTime[i].date+" "+startTime[i].hour+":"+startTime[i].minute+" "+"進場 "+"費率:"+Math.round10(pricearray[i].price/2,-2)+"每半小時";
     document.SetParkSpace.Gust.options[i]=new Option(str,"");
   //}else {
    //   var numindex=i+1;
    // var str=numindex+"號重機"+"進場時間:"+startTime[i].year+"年"+startTime[i].month+"月"+startTime[i].date+"日"+startTime[i].hour+"點"+startTime[i].minute+"分";
   //  document.SetParkSpace.Gust.options[i]=new Option(str,"");

 //  }
  }
  if(startTime.length==0){
      document.SetParkSpace.Gust.length=startTime.length;
     document.SetParkSpace.Gust.options[0]=new Option("目前無顧客","");
     }
  
 if(Hstore.length>=1){
     var hibdex=0;
   var hindex=0
  document.SetParkSpace.Hust.length=Hstore.length;
  for(var i in Hstore){
    hibdex=hibdex+1;
    var year_start=Hstore[hindex].start.year;
    var month_start=Hstore[hindex].start.month;
    var date_start=Hstore[hindex].start.date;
    var hour_start=Hstore[hindex].start.hour;
    var minute_start=Hstore[hindex].start.minute;
    var second_start=Hstore[hindex].start.seconds;
    var year_end=Hstore[hindex].end.year;
    var month_end=Hstore[hindex].end.month;
    var date_end=Hstore[hindex].end.date;
    var hour_end=Hstore[hindex].end.hour;
    var minute_end=Hstore[hindex].end.minute;
    var second_end=Hstore[hindex].end.seconds;
    hindex=hindex+1;
    var Date_A = new Date(year_start,month_start,date_start,hour_start,minute_start,second_start);  
    var Date_B = new Date(year_end,month_end,date_end,hour_end,minute_end,second_end);  
   if(Hstore[i].price!=undefined){
      var Date_C = new Date(Date_B - Date_A);
    var caulprice= Math.round(( Math.floor(Date_C.getTime() / 3600000)+Math.floor(Date_C.getUTCMinutes()/60)+Math.floor(Date_C.getUTCSeconds()/3600))*Hstore[i].price.price/2,2) ;
     if(caulprice==0){
        caulprice=Hstore[i].price.price/2;
        } 
     caulprice=Math.round10(caulprice,-2);
      if(isNaN(caulprice)){
       caulprice=0;
}
    var str= hibdex+"號 停放:"+Math.floor(Date_C.getTime() / 3600000) + "小時 " + Date_C.getUTCMinutes() + "分 " + Date_C.getUTCSeconds() + "秒 "+"費用:"+caulprice;
    
    pricesumhalfhours.push(caulprice);

     document.SetParkSpace.Hust.options[i]=new Option(str,"");
      }else{
         var Date_C = new Date(Date_B - Date_A);
   var caulprice=0;
    var str= hibdex+"號 停放:"+0 + "小時 " + 0 + "分 " +0 + "秒"+"費用:"+0;
        if(isNaN(caulprice)){
       caulprice=0;
}
    pricesumhalfhours.push(caulprice);

     document.SetParkSpace.Hust.options[i]=new Option(str,"");
      }

    

  }
    }
  
   if(Hstore.length==0){
      document.SetParkSpace.Hust.length=Hstore.length;
     document.SetParkSpace.Hust.options[0]=new Option("無歷史紀錄","");
     }

 
}

// removes the last added rectangle移除最後一個方塊
function removeRectangle()
{ if(car1to5>0 && rectangles[236].height>250){
     car1to5=car1to5-1;
   for(var ii=0 ; ii<car1to5;ii++){
    var numj =ii+1;
     var words="選擇第"+numj+"輛汽車";
  document.SetParkSpace.Car.options[ii]=new Option(words,numj);
  document.SetParkSpace.Car.length=car1to5;
  }
}

 if(car1to5==0){
  document.SetParkSpace.Car.options[0]=new Option("請新增一輛汽車","");
  document.SetParkSpace.Car.length=1;
    }

  
  lefttpush1[0]=lefttpush1[1];
  righttpush1[0]=righttpush1[1];
  lefttpush1[1]=lefttpush1[2];
  righttpush1[1]=righttpush1[2];
  lefttpush1[2]=lefttpush1[3];
  righttpush1[2]=righttpush1[3];
  lefttpush1[3]=lefttpush1[4];
  righttpush1[3]=righttpush1[4];
  rectangles.splice(236,1);
  
}




/////////////////////////////////////////////////////////////////////////////////////////////
// USER INPUT
/////////////////////////////////////////////////////////////////////////////////////////////

function handleCanvasDown(e)
{          
  // where is the input
  var position = canvasClientToCanvasRelativeXY( e );    

  // check through rectangles to find selected
  for(var i in rectangles)
  {
    if( AABBPointCollision( rectangles[i], {x:position.x, y:position.y } ) )
    {
      // flag rect for dragging
      rectangles[i].dragging = true;

      // set drag target
      rectDrag.target = rectangles[i];
      // set initial mouse position
      rectDrag.mx     = position.x;
      rectDrag.my     = position.y;
      // set target offset from mouse position
      rectDrag.ox     = rectangles[i].x - position.x;
      rectDrag.oy     = rectangles[i].y - position.y;
      // listen for input
      canvas.addEventListener("mousemove", handleDragObject);
      window.addEventListener("mouseleave", handleDragRelease);
      window.addEventListener("mouseup", handleDragRelease);

      // break out of loop
      break;
    }
  }
}

function handleDragObject(e)
{
  // where is the input
  var position   = canvasClientToCanvasRelativeXY( e );
  // how far has the input moved
  var distX      = rectDrag.mx - position.x;
  var distY      = rectDrag.my - position.y;

  // calculate desired position
  var targetX = ( rectDrag.mx + rectDrag.ox ) - distX;
  var targetY = ( rectDrag.my + rectDrag.oy ) - distY;

  // constrain position within boundaries
  rectDrag.target.x = Math.max(0, Math.min( targetX, canvas.width-rectDrag.target.width) ) ;
  rectDrag.target.y = Math.max(0, Math.min( targetY, canvas.height-rectDrag.target.height) ) ;
}

function handleDragRelease(e)
{
  // clear up draggable
  rectDrag.target.dragging    = false;
  rectDrag.target             = null;
  rectDrag.mx                 = 0;
  rectDrag.my                 = 0;
  rectDrag.ox                 = 0;
  rectDrag.oy                 = 0;

  // remove listeners
  canvas.removeEventListener("mousemove", handleDragObject);
  window.removeEventListener("mouseleave", handleDragRelease);
  window.removeEventListener("mouseup", handleDragRelease);
}

function canvasClientToCanvasRelativeXY(input)
{
  // takes x / y according to canvas.offsetX/y and returns relative to canvas scale
  var canvasScale = canvas.width / canvas.clientWidth;
  return { x:input.offsetX * canvasScale , y : input.offsetY * canvasScale, scale : canvasScale }; 
}

function handleWindowResized()
{
  // lets just clean up resize and respawn
  canvas.width    = 1500;
  canvas.height   = 750;
  
  var rects     = rectangles.length;
  
  
}


/////////////////////////////////////////////////////////////////////////////////////////////
// RENDER
/////////////////////////////////////////////////////////////////////////////////////////////

function render()
{
   

  // clear canvas
  context.clearRect( 0, 0, canvas.width, canvas.height );

  // draw the rectangles
  for(var i in rectangles)  { renderRect(rectangles[i]); }  
 for(var ii in arccircle)  { renderArc(arccircle[ii]); } 
  
  
  
  // render collision data
  for(var i in collisions)  
  { 
    // if dragging a rectangle - focus collision
    if( rectDrag.target && collisions[i].rectA === rectDrag.target || rectDrag.target && collisions[i].rectB === rectDrag.target )
    {
      renderCollision(collisions[i].data);
    }
    else if(!rectDrag.target)
    {
      // if no drag target we render all collisions
      renderCollision(collisions[i].data );
    }

  }
 
}



//框的顏色
function renderRect( rect )
{ 
  // store current context state
  context.save();
  // define stroke based on if user is dragging rectangle
  context.strokeStyle = rect.dragging ? "#ffff00": "#ffffff";
  // start path, and draw rectangle
  context.beginPath();
  context.rect( rect.x, rect.y, rect.width, rect.height );
  context.stroke(); 
  context.fillStyle   = "#ffffff"; 
  context.font        = "16px Verdana";
  context.textAlign   = "center";
   var str=0;
var priceRectIndex=rectangles.indexOf(rect)-236;
  if(pricearray==undefined || pricearray[priceRectIndex]==undefined){
    str=0;
     }else{
       str=Math.round10(pricearray[priceRectIndex].price/2,-2);
     }
    
  if(rectangles.indexOf(rect)>235 && parkingdata.length==parkingdata2.length){


    
  if(rect.height>250){
    rectCarPush.push(rect);
    }else{
      rectBikePush.push(rect);
    }
  if(rect.height>250){
     context.fillStyle   = "#3EBDFF"; 
  context.font        = "17px Verdana";
  context.textAlign   = "center";
    context.fillText("第"+parseInt(rectCarPush.indexOf(rect)+1)+'輛汽車', rect.x + (rect.width/2), rect.y+(rect.height/2));
  context.font        = "17px Verdana";
    
    context.fillText("汽車寬度:"+rect.width+"cm", rect.x + (rect.width/2),  rect.y+(rect.height/2)+20);
     }else{
        context.fillStyle   = "#29e8ce"; 
  context.font        = "17px Verdana";
  context.textAlign   = "center";
    context.fillText("第"+parseInt(rectBikePush.indexOf(rect)+1)+'部重機', rect.x + (rect.width/2), rect.y+100);
  context.font        = "17px Verdana";

    context.fillText("重機寬度:"+rect.width+"cm", rect.x + (rect.width/2), rect.y+(rect.height/2)+10);
    context.fillStyle   = "ffffff"; 
    context.fillText("車位寬度:"+"120"+"cm", rect.x + (rect.width/2), rect.y+(rect.height/2)+25);

     }

    if(rect.width==80){

      if(arraybspx2[parseInt(rectBikePush.indexOf(rect))]!=undefined){
        if(str==0.3){
        var stringprice="費率:"+str;
     }else if(str==0.25){
        var stringprice="優惠費率:"+str;
     } 
     context.fillStyle   = "#ffffff"; 
  context.font        = "17px Verdana";
  context.textAlign   = "center";
     context.fillText(parseInt(rectangles.indexOf(rect)-235)+'號'+stringprice, rect.x + (rect.width/2), rect.y-12);
     
      }
    }else{
      context.fillStyle   = "#ffffff"; 
  context.font        = "17px Verdana";
  context.textAlign   = "center";
      var addStringprice="";
      var punStringprice="";
      var stringprice="";
      if(arraycspx2[parseInt(rectCarPush.indexOf(rect))]!=undefined){
          if((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)==240 && str==0.5){
        var stringprice="費率:"+str;
     }else if((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)==240 && str==0.45){
        var stringprice="費率:"+str;
     }else if((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)==240 && str>0.5){
        var stringprice="費率:"+str;
        var parInt=parseInt(Math.ceil((str-0.5)/0.05*30));
        if(parInt==31){
          parInt=30;
        }else if(parInt==91){
          parInt=90;
        }else if(parInt==61){
          parInt=60;

        }
        var punStringprice="多佔用"+parInt+"cm"+"追加費用:"+Math.round10(str-0.5,-2);
     }else if((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)>240 && (0.5+parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240)/30)*0.05)==str ){
        var stringprice="費率"+(0.5+parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240)/30)*0.05);//"費率:"+str;
        var addStringprice="增加寬度"+parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240))+"cm"+"追加費用:"+Math.round10(parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240)/30)*0.05,-2);
     }else if((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)>240 && (0.5+parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240)/30)*0.05)<str ){
        var stringprice="費率:"+str;
        var addStringprice="增加寬度"+parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240))+"cm"+"追加費用:"+Math.round10(parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240)/30)*0.05,-2);
         var parInt=parseInt(Math.ceil((str-0.5-parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240)/30)*0.05)/0.05*30));
        if(parInt==31){
          parInt=30;
        }else if(parInt==91){
          parInt=90;
        }else if(parInt==61){
          parInt=60;

        }
        var punStringprice="多佔用"+parInt+"cm"+"追加費用:"+Math.round10(str-0.5-parseInt(((parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)-240)/30)*0.05,-2);
     }
     context.fillText(parseInt(rectangles.indexOf(rect)-235)+'號'+stringprice, rect.x + (rect.width/2), rect.y-12);
      if(str>0.5){
  context.font        = "17px Verdana";

        context.fillText('明細:', rect.x+40 , 200);
  context.font        = "17px Verdana";

        if(addStringprice==""){
          context.fillText(punStringprice, rect.x +80, 230);
        }else if(punStringprice==""){
         context.fillText(addStringprice, rect.x +80, 230);
          }else {
          context.fillText(punStringprice, rect.x +80, 230);
         context.fillText(addStringprice, rect.x +80, 260);

          }
        

         

      }else if(str==0.5){
  context.font        = "17px Verdana";
        
           context.fillText('明細:', rect.x+40 , 200);
           context.fillText("原價0.5", rect.x +80, 230);
      }else if(str==0.45){
  context.font        = "17px Verdana";

        context.fillText('明細:', rect.x +40, 200);

        context.fillText('優惠車位:折扣0.05', rect.x +80, 230);

      }
      ////////
      context.fillStyle   = "#3EBDFF"; 
  context.font        = "17px Verdana";
  context.textAlign   = "center";
    context.fillText("車位寬度:"+(parkingdata2[parseInt(rectangles.indexOf(rect)-236)].right-parkingdata2[parseInt(rectangles.indexOf(rect)-236)].left)+"cm", rect.x + (rect.width/2),  rect.y+(rect.height/2)+35);

      }
      
    } 
     }
//context.fillText("第"+parseInt(rectangles.indexOf(rect)+1)+'台', rect.x + (rect.width/2), rect.y-12);
// restore context state
  context.restore();   
  
}
function renderArc(arc){
    context.beginPath();
context.arc(arc.x,arc.y,arc.r,arc.start,arc.stop);
  
  context.strokeStyle =arc.ledstroke;
context.fillStyle = arc.ledfill;
   context.fill();
  context.stroke(); 
}
// 被覆蓋的顏色/區域/字體
function renderCollision(collision)
{
  // store current context state
  context.save();

  // render collision box
  context.strokeStyle = "#ff0000"; 
  context.fillStyle   = "rgba(255,0,0,0.25)";
  context.fillRect( collision.x, collision.y, collision.width, collision.height );

  // render collision dimensions
  context.fillStyle   = "#ffffff"; 
  context.font        = "12px Verdana";
  context.textAlign   = "center";
 
  
  // render width text
/*  context.fillText(Math.round( collision.width )+' px', collision.x + (collision.width/2), collision.y+collision.height-12);

  // rotate the canvas and render height text
  context.translate( Math.round( collision.x + 12 ), Math.round( collision.y + (collision.height/2) ));
  context.rotate(90*Math.PI/180);
  context.fillText(Math.round( collision.height )+' px', 0, 0);  */

  // restore to saved settings
  context.restore();
}
function carspacechange(){
    
  for(var i in carspacewidthdata){
    carspaceleftwidth[carspacewidthdata[i].selected]=carspacewidthdata[i].left;
     carspacerightwidth[carspacewidthdata[i].selected]=carspacewidthdata[i].right;
  }

  //建立停車格
  for(var i in escc){
   // var rightwidth;
 //  var leftwidth;
 

   /* carspacerightwidth.push(rightwidth);
    carspaceleftwidth.push(leftwidth); */
    Cspace(escc[i],carspaceleftwidth[i],carspacerightwidth[i],i);
   
  }
   carspacerightwidth.length=escc.length;
   carspaceleftwidth.length=escc.length;
}
function package(selectedcar,leftwidth,rightwidth){

    // 分析汽車與重機
 for(var i in collisions){esc_x.push(collisions[i].rectB.x);esc_y.push(collisions[i].rectB.y);}
  esc_x.forEach(function(item) {
  result_x[item] = result_x[item] ? result_x[item] + 1 : 1;
});
   esc_y.forEach(function(item) {
  result_y[item] = result_y[item] ? result_y[item] + 1 : 1;
});  
 for(var i in collisions){
    var xy={x: collisions[i].rectB.x,y: collisions[i].rectB.y};
   
    esc.push({position:xy});
    }
if(Object.entries(result_x).length>Object.entries(result_y).length){
   for(var i in result_y ){
var xy={x:Object.entries(result_x)[qw][0]  , y: Object.entries(result_y)[qw][0] , num: Object.entries(result_x)[qw][1]};
  esc2.push(xy); 
  qw=qw+1;
}  
   }else{
     for(var i in result_x ){
var xy={x:Object.entries(result_x)[qw][0]  , y: Object.entries(result_y)[qw][0] , num: Object.entries(result_x)[qw][1]};
  esc2.push(xy); 
  qw=qw+1;
}  
   }


  for(var i in esc2){
    if(esc2[i].num<11){Bspacedetection(esc2[i]);}
    if(esc2[i].num>25){Cspacedetection(esc2[i]);}
    }
  


  //
 carspacechange();
  for(var i in escb){Bspace(escb[i]);}
  //
 if(rectangles.length>236){
    for(var i=236 ;i<rectangles.length;i++ ){
   rect_x.push(''+rectangles[i].x+'');
   rect_y.push(''+rectangles[i].y+'');
 }
  for(var i in escb ){
    escb_x.push(''+escb[i].x+'');
    escb_y.push(''+escb[i].y+'');
  }
  for(var i in escc){
    escc_x.push(''+escc[i].x+'');
    escc_y.push(''+escc[i].y+'');
  }
  for(var i in esc2){
    var P=0;
    if(esc2[i].num<11 && esc2[i].num>=1){
       var Px=rect_x.indexOf(esc2[i].x);
       var Py=rect_y.indexOf(esc2[i].y);
       if(Px!=Py){
         P=Py;
         }
      if(Px==Py){
        P=Px;
         }   
      var Qx=escb_x.indexOf(esc2[i].x);
      var Qy=escb_y.indexOf(esc2[i].y);
      if(Qx==Qy){
         var left=arraybspx2[Qx];
         var right=arraybspx2[Qx]+120; 
         }
      if(Qx!=Qy){
         var left=arraybspx2[Qy];
         var right=arraybspx2[Qy]+120;
         }   
       }else if(esc2[i].num>11){
      var Px=rect_x.indexOf(esc2[i].x);
          P= Px;
      var Qx=escc_x.indexOf(esc2[i].x);
      if(Qx>arraycspx2.length){
         Qx=arraycspx2.length;
         }
      var left=arraycspx2[Qx];
      var right=arraycspx2[Qx]+30*(carspacerightwidth[Qx]-carspaceleftwidth[Qx]);
       }
    parkingdata.push({position:P,left:left,right:right});
  }

    }
    for(var i in parkingdata){
     parkdata_leftx[parkingdata[i].position]=parkingdata[i].left;
     parkdata_rightx[parkingdata[i].position]=parkingdata[i].right;
     
     
   }
  var target=0;
    for(var i in parkdata_rightx){
     if( (parkdata_rightx[i]-parkdata_leftx[i])==120 ){
        parkingdata2.push({position:i , left:parkdata_leftx[i] ,right:parkdata_rightx[i]});
        }else{
          if(lefttpush1[target]==undefined && righttpush1[target]==undefined){
             lefttpush1[target]=0;
            righttpush1[target]=0;
             }
         parkingdata2.push({position:i , left:parkdata_leftx[i]-lefttpush1[target] ,right:parkdata_rightx[i]+righttpush1[target]});
          target=target+1;
        }                                                                                                                                                                                    
        
    } 
 /* for(var i in parkingdata2){
    if( (parkingdata2[i].right-parkingdata2[i].left)==120 ){
       BiyparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
       }else {
       CarparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
       }
  }*/
  for(var i in parkingdata2){
    var priceleft=0;
    var priceright=0;
    var pricewidth=0;
    var pprice=[];
    
    arrayleft1.push(parkingdata2[i].left);
    arrayright1.push(parkingdata2[i].right);
    arrayleft1=arrayleft1.sort(function (a, b) {
  return a - b;
})
    arrayright1=arrayright1.sort(function (a, b) {
  return a - b;
})
    if( (parkingdata2[i].right-parkingdata2[i].left)==120 ){
     
     bikedic.push(parkingdata2[i].left);
 
  bikedic.sort(function(a,b){return b-a;});
  bikedic.reverse();
 
var result = bikedic.filter(function(element, index, arr){
    return arr.indexOf(element) === index;
});
  var repeat = bikedic.filter(function(element, index, arr){
    return arr.indexOf(element) !== index;
});
  bikedic=result;
  bikedid=repeat;
    
         pricearray.push({position:parkingdata2[i].position,price:0.6});
      var repea=bikedic.indexOf(parkingdata2[i].left);
     //console.log(repea);
    if(bikedid.indexOf(parkingdata2[i].left)!=-1){
       pricearray[i].price=0.5;
       }
    
             }else{
         //汽車
          if( arrayleft1.length==1 ){
       if( (parkingdata2[i].left-110)<120 ){
          priceleft=0.1*(parkingdata2[i].left-110)/30;
          }
       if( (1310-parkingdata2[i].right)<120){
          priceright=0.1*(1310-parkingdata2[i].right)/30;
          }
       pricewidth=0.1*(parkingdata2[i].right-parkingdata2[i].left-240)/30;
       pprice.push(priceleft);
       pprice.push(priceright);
       pprice=pprice.sort(function (a, b) {
  return a - b;
})
       
       pricearray.push({position:parkingdata2[i].position,price:1+pprice[1]+pricewidth});
        }else if(arrayleft1.length>=2 && arrayleft1.indexOf(parkingdata2[i].left)==0){
           if( (arrayleft1[arrayright1.indexOf(parkingdata2[i].right)+1]-110)<360 ){
        
        }else{
          if((parkingdata2[i].left-110)<120){
             priceleft=0.1*(parkingdata2[i].left-110)/30;
             }
         if((arrayleft1[arrayright1.indexOf(parkingdata2[i].right)+1]-parkingdata2[i].right)<120 ){
             priceright=0.1*(arrayleft1[arrayright1.indexOf(parkingdata2[i].right)+1]-parkingdata2[i].right)/30;
            }
        }
          
         
                 pricewidth=0.1*(parkingdata2[i].right-parkingdata2[i].left-240)/30;
                 pprice.push(priceleft);
                 pprice.push(priceright);
                 pprice=pprice.sort(function (a, b) {
                  return a - b;
                })
       
       pricearray.push({position:parkingdata2[i].position,price:1+pprice[1]+pricewidth});
                 }else if(arrayleft1.length>=2 && arrayleft1.indexOf(parkingdata2[i].left)==(arrayleft1.length-1) ){
                   if( (1310-arrayright1[arrayleft1.indexOf(parkingdata2[i].left)-1])<360 ){
                      
                      }else{
                          if((parkingdata2[i].left-arrayright1[arrayleft1.indexOf(parkingdata2[i].left)-1])<120){
                      priceleft=0.1*(parkingdata2[i].left-arrayright1[arrayleft1.indexOf(parkingdata2[i].left)-1])/30;
                      }
                   if((1310-parkingdata2[i].right)<120){
                      priceright=0.1*(1310-parkingdata2[i].right)/30;
                      }      
                      }
                   
                                                       
                          pricewidth=0.1*(parkingdata2[i].right-parkingdata2[i].left-240)/30;
                          pprice.push(priceleft);
                          pprice.push(priceright);
                          pprice=pprice.sort(function (a, b) {
                          return a - b;
                         })
       
       pricearray.push({position:parkingdata2[i].position,price:1+pprice[1]+pricewidth});
                          }else{
                            if( (arrayleft1[arrayright1.indexOf(parkingdata2[i].right)+1]-arrayright1[arrayleft1.indexOf(parkingdata2[i].left)-1])<360 ){
                               
                               }else{
                                  if((parkingdata2[i].left-arrayright1[arrayleft1.indexOf(parkingdata2[i].left)-1])<120){
                      priceleft=0.1*(parkingdata2[i].left-arrayright1[arrayleft1.indexOf(parkingdata2[i].left)-1])/30;
                      }
           if((arrayleft1[arrayright1.indexOf(parkingdata2[i].right)+1]-parkingdata2[i].right)<120){
             priceright=0.1*(arrayleft1[arrayright1.indexOf(parkingdata2[i].right)+1]-parkingdata2[i].right)/30;
            }                        
                               }
          
          pricewidth=0.1*(parkingdata2[i].right-parkingdata2[i].left-240)/30;
                 pprice.push(priceleft);
                 pprice.push(priceright);
                 pprice=pprice.sort(function (a, b) {
                  return a - b;
                })
       
       pricearray.push({position:parkingdata2[i].position,price:1+pprice[1]+pricewidth});
        }
       if(parkingdata2[i].left==110 && parkingdata2[i].right==350){
         pricearray[i].price=0.9;
          }else if(parkingdata2[i].left==350 && parkingdata2[i].right==590){
                   pricearray[i].price=0.9;
                   }else if(parkingdata2[i].left==590 && parkingdata2[i].right==830){
            pricearray[i].price=0.9;
          }else if(parkingdata2[i].left==830 && parkingdata2[i].right==1070){
            pricearray[i].price=0.9;
          }else if(parkingdata2[i].left==1070 && parkingdata2[i].right==1310){
           pricearray[i].price=0.9;
          }
       }
  }
  
  for(var i in pricearray){
   pricesum=pricearray[i].price+pricesum;
  }
  
  for(var i in parkingdata2){
    if( (parkingdata2[i].right-parkingdata2[i].left)==120 ){
       //重機
      var leftindex=arrayleft1.indexOf(parkingdata2[i].left);
      var leftlastIndex=arrayleft1.lastIndexOf(parkingdata2[i].left);
      if(leftlastIndex!=leftindex && arrayleft1.length==2){
         //兩重機在同一長條內
        //放入車格
       
        BiyparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
         }else if( arrayleft1.length>=2 && leftindex==0 ){
                  //在最左
           if( (arrayleft1[leftlastIndex+1]-parkingdata2[i].right)<0 ){
              //右邊壓線
              
              }else {
                //放入車格
                BiyparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
              }
                  }else if(arrayleft1.length>=2 && leftindex==arrayleft1.length){
                           //在最右
                    if(( parkingdata2[i].left-arrayright1[leftindex-1] )<0){
                       //左邊壓線
                      
                       }else{
                         //放入車格
                         BiyparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
                       }
                           }else if(arrayright1.length==1){
                                    //放入車格
                             BiyparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
                                    }else {
                             if((arrayleft1[leftlastIndex+1]-parkingdata2[i].right)<0){
                                //右邊壓線
                                }else if(( parkingdata2[i].left-arrayright1[leftindex-1] )<0){
                               //左邊壓線
                             }else {
                               //放入車格
                               BiyparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
                               
                             }
                                
                           }
      
       }else {
         //汽車
         var carleftindex=arrayleft1.indexOf(parkingdata2[i].left);
         if(arrayright1.length==1){
            //放入車格
           CarparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
            }else if(arrayright1.length>=2 && carleftindex==0){
                     if( (arrayleft1[carleftindex+1]-parkingdata2[i].right)<0 ){
                        //右邊壓線
                      
                        }else {
                          //放入車格
                          CarparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
                        }
                     }else if(arrayright1.length>=2 && carleftindex==arrayright1.length){
                              if( (parkingdata2[i].left-arrayright1[carleftindex-1])<0 ){
                              //左邊壓線
                                                            
                                 }else {
                                   //放入車格
                                   CarparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
                                 }
                              }else {
                                if((arrayleft1[carleftindex+1]-parkingdata2[i].right)<0){
                                   //右邊壓線
                                   
                                   }else if((parkingdata2[i].left-arrayright1[carleftindex-1])<0){
                                            //左邊壓線
                                           
                                            }else {
                                              //放入車格
                                              CarparkingSpacepush(parkingdata2[i].left,parkingdata2[i].right);
                                            }
                              }
         
       }
    
  }
  
 
if(pricearray.length>=(rectangles.length-236)){
     refresh();
   }

}




 
