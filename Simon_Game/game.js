var pattern = [];
var userClickedPatterns = [];
var level = 0;
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;

function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNum];
    pattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    var audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
    audio.play();
    if (level !== 0){
        $("h1").text(`Level ${level}`);
    }
    else {
        $("h1").text(`Level 0`);
    }
    level += 1;
}

function playsound(name) {
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function animatePress(colour) {
    $("#" + colour).addClass("pressed");
    setTimeout(function (){ $("#" + colour).removeClass("pressed");}, 100);
}

function checkAnswer(currentLevel){
    for (var i = 0; i <= currentLevel; i++){
        if (userClickedPatterns[i] !== pattern[i]) {
            var audio = new Audio(`sounds/wrong.mp3`);
            audio.play();
            $("body").addClass("game-over");
            setTimeout(function (){ $("body").removeClass("game-over");}, 500);
            $("h1").text(`Game Over`);
            startOver()
        }
    }
    if (userClickedPatterns.length === pattern.length) {
        userClickedPatterns = [];
        setTimeout(nextSequence, 600);
    }
}

function startOver() {
    level = 0;
    pattern = [];
    userClickedPatterns = [];
    started = false;
}


$(".btn").on("click", function(event) {
    var userChosenColour = this.id;
    userClickedPatterns.push(this.id);
    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPatterns.length - 1);
  })


$(document).on("keypress", function() {
    if (started === false){
        nextSequence();
        started = true;}});

