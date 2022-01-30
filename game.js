// alert("JS file linked");

let gamePattern = [];
let buttonColors = ["red","blue","green","yellow"];



let randomNumber = Math.floor(Math.random()*4);
let randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);



$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
var audio = new Audio(`sounds/${randomChosenColor}.mp3`);
audio.play();



// alert(randomChosenColor);