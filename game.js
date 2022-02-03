// alert("JS file linked");
let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red","blue","green","yellow"];
let level = 0;
let gameIsRunning = false;

// Sound Effect
function playSound(name) {
    var sound = new Audio("sounds/"+name+".mp3");
    sound.play();
}

// Press Effect
function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");
    setTimeout(function(){
        $("."+currentColor).removeClass("pressed",100);
    },100);
}

// Next Button Indicator
function nextSequence() {

    // Generating random color from the list
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Button blink effect
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);

    // Sound playing effect
    playSound(randomChosenColor);

    // Updating heading
    $("#level-title").text("Level " + level.toString());

    // Level Increment
    level++;

    // Setting user clicked patern to an empty array
    userClickedPattern = [];
}


function checkAnswer(currentLevel){

    let result = true;

    for(let i=0;i<=currentLevel;i++)
    {
        if(userClickedPattern[i]!=gamePattern[i])
        {
            result = false;
        }
    }

    if( result ) // I think we shuold compare entire arrays
    {
        console.log("Success");
        // Calling use Clicked attern after a 1000ms delay
        setTimeout( nextSequence() , 1000);
    }
    else{
        console.log("Wrong");

//      Ending game
        gameIsRunning = false;

        // Playing Wrong Sound
        var wrongSound = new Audio("sounds/wrong.mp3");
        wrongSound.play();

        // Aninmating Wrong Effeect
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over",200);
        },200);

        // Changing The title
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // Detecting keypress and starting the game again
        if(!gameIsRunning)
        {
            gameIsRunning = true;
            level = 0;
            gamePattern = [];
            if(!gameIsRunning)
            {
                $( document ).keypress(function() {
                    setTimeout(nextSequence(),1000);
                  });
            }
        }
    }
}


// Game Flow

// After First Keypress
if(!gameIsRunning)
{
    gameIsRunning = true;
    $( document ).keypress(function() 
      {
        nextSequence();
      });
}




// User Click Action
$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    // User Answer Check only after length of user clicked pattern = length of game generated patern
    if (userClickedPattern.length == gamePattern.length)
    {
        checkAnswer(level-1);
    }
    
})



