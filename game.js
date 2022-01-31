// alert("JS file linked");
let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red","blue","green","yellow"];

function playSound(name) {
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}


// function nextSequence() {
//     let randomNumber = Math.floor(Math.random()*4);
//     let randomChosenColor = buttonColors[randomNumber];
//     gamePattern.push(randomChosenColor);

//     $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
//     var sound = new Audio(`sounds/${randomChosenColor}.mp3`);
//     sound.play();
// }

let randomNumber = Math.floor(Math.random()*4);
let randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

$(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);


$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    console.log(userClickedPattern);
})



// alert(randomChosenColor);