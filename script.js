let round = 1; // Current round
let order = []; // Game's sequence
let playerOrder = []; // Player's sequence
let turn = 1; // Current turn (1 for game | 0 for player)
let i = 0; // Variable for the index of an array

// | HTML DOM SELECTORS | \\

// Selects each individual button
const green = document.querySelector(".item1");
const red = document.querySelector(".item2");
const yellow = document.querySelector(".item3");
const blue = document.querySelector(".item4");
// Selectors to add event listeners to
const buttons = document.querySelectorAll(".button"); // Game buttons
const start = document.querySelector(".start"); // 'Start Game' button
// Selectors for text displays
const highScore = document.querySelector(".scoreBoard"); // Selects the 'High Score' display
const gameOver = document.querySelector(".gameOverContainer"); // Selects the 'Game Over' message container
// Selectors for Audio objects
const audio1 = new Audio("audio/Short\ Beep\ Tone-SoundBible.com-1937840853.mp3"); // Green Button
const audio2 = new Audio("audio/Checkout\ Scanner\ Beep-SoundBible.com-593325210.mp3"); // Red Button
const audio3 = new Audio("audio/Beep-SoundBible.com-923660219.mp3"); // Yellow Button
const audio4 = new Audio("audio/Bleep-SoundBible.com-1927126940.mp3"); // Blue button
const startAudio = new Audio("audio/Jump-SoundBible.com-1007297584.mp3"); // Plays for 'Start Game' button
const endAudio = new Audio("audio/iMac_Startup_Chime-Carlo_-1849294605.mp3"); // Plays on 'Game Over'

buttons.forEach(function(but) { // Adds audio unique to each different button click
    but.addEventListener("click", function(evt) {
        evt.preventDefault();
        if (playerOrder.length < order.length - 1 && turn == 0) { // Conditions for which audio to play on each button
            if (but.value == "1") { audio1.play(); audio1.currentTime = 0;
            } else if (but.value == "2") { audio2.play(); audio2.currentTime = 0
            } else if (but.value == "3") { audio3.play(); audio3.currentTime = 0
            } else if (but.value == "4") { audio4.play(); audio4.currentTime = 0 };
            playerOrder.push(but.value);
        } else if (playerOrder.length == order.length - 1 && turn == 0) { 
            if (but.value == "1") { audio1.play(); audio1.currentTime = 0;
            } else if (but.value == "2") { audio2.play(); audio2.currentTime = 0
            } else if (but.value == "3") { audio3.play(); audio3.currentTime = 0
            } else if (but.value == "4") { audio4.play(); audio4.currentTime = 0 };
            playerOrder.push(but.value);
            turn = 1; // If it's not the player's turn, sounds aren't played on click
            checkOrder();
            setTimeout(function() { flashOrder() }, ((i + 1) * 500));
        }
    })
})

// LOCAL STORAGE VARIABLES FOR HIGH SCORES
let score = 0; // Score (matches current round number)
let getScoreInt = parseInt(localStorage.getItem("highScores")); // Gets the high score from localStorage
let nanIs = isNaN(localStorage.getItem("highScores")); // Checks if there is a high score in localStorage

if (nanIs != false) { // If nothing's stored in localStorage, high score is 0 by default
    localStorage.setItem("highScores", 0);
}
highScore.innerText = "HIGH SCORE: " + getScoreInt; // Displays your high score from localStorage

// Called when you click the wrong sequence
function endGame() {
    gameOver.style.visibility = "visible"; // Displays 'Game Over' message
    start.style.visibility = "visible"; // Displays 'Start Button'
    endAudio.play(); // Sound for 'Game Over'
    endAudio.currentTime = 0; // Resets time on sound play to restart when called again

    if (nanIs != false || score > getScoreInt) { // If the value of your stored score is 'Not a Number' or is lower than the current score
        localStorage.setItem("highScores", score); // Sets score as the new high score
    } else if (nanIs == false && score > getScoreInt) { // If the value of your stored score is a number and is lower than the current score
        localStorage.setItem("highScores", score); // Sets score as the new high score
    }
    highScore.innerText = "HIGH SCORE: " + localStorage.getItem("highScores"); // Updates the high score count
}

// Plays the 'Start Game' sound and begins the game
start.addEventListener("click", function(evt) {
    evt.preventDefault();
    startAudio.play();
    startAudio.currentTime = 0;
    startGame();
})

// Called when the 'Start Game' button is clicked
function startGame() {
    if (start.style.visibility == "visible") { // Hides the 'Start Game' button to prevent conflictions
        start.style.visibility = "hidden"
    };
    if (gameOver.style.visibility == "visible") { // If the 'Game Over' message is visible
        gameOver.style.visibility = "hidden"; // Hides the 'Game Over' message
        order.length = 0; // Resets the array for the sequence
        playerOrder.length = 0; // Resets the array for the player
        score = 0; // Resets the score
        round = 1 // Resets the round
    };
    flashOrder();
}
// Called when player clicks the same amount of buttons as the current round #
function checkOrder() { // Compares sequences of the game and player
    if (JSON.stringify(order) != JSON.stringify(playerOrder)) { // If the sequences don't match
        endGame(); // The 'Game Over' message shows
    } else { // If sequences match
        score = round; // Updates score based on current round
        round = round + 1; // Moves to next round
        playerOrder.length = 0; // Clears the player's sequence for the new round
    }
}
// Called on game's turn
function flashOrder() {
    if (order.length < round && turn != 0) { // Conditions for which order, when, and until when the buttons are flashed
        order.push(JSON.stringify(Math.floor(Math.random() * (4)) + 1)); // Adds a new random step to the game sequence
        setTimeout(function() { flashButtons() }, ((i + 1) * 500)); // Calls flashButtons()
        if (turn != 0) { // After buttons are flashed, if it's not the player's turn
            turn = 0 // It becomes the player's turn
        }
    }
};
// Called after sequence order is set
function flashButtons() {
    for (let i = 0; i < order.length; i++) { // Until the # of flashes match the # of steps in the game sequence
        if (order[i] == 1) { // If the step matches the value of a button
            setTimeout(function() { flashGreen() }, ((i + 1) * 500)); // Flashes the green button after .5 seconds
        } else if (order[i] == 2) {
            setTimeout(function() { flashRed() }, ((i + 1) * 500)); // Flashes the red button after .5 seconds
        } else if (order[i] == 3) {
            setTimeout(function() { flashYellow() }, ((i + 1) * 500)); // Flashes the yellow button after .5 seconds
        } else if (order[i] == 4) {
            setTimeout(function() { flashBlue() }, ((i + 1) * 500)); // Flashes the blue button after .5 seconds
        }
    }
}
// Called for when buttons flash | Toggles class containing the flash's color (Adds the "light[button-color]" class)
function flashGreen() {
    if (green.classList.contains("lightgreen") == false) {
        setTimeout(function() {
        green.classList.toggle("lightgreen");
        audio1.play();
        audio1.currentTime = 0;
        }, ((i + 1) * 500))
    }
    setTimeout(function() { dimGreen() }, ((i + 1) * 700));
}
function flashRed() {
    if (red.classList.contains("lightred") == false) {
        setTimeout(function() {
        red.classList.toggle("lightred");
        audio2.play();
        audio2.currentTime = 0;
        }, ((i + 1) * 500))
    }
    setTimeout(function() { dimRed() }, ((i + 1) * 700));
}
function flashYellow() {
    if (yellow.classList.contains("lightyellow") == false) {
        setTimeout(function() {
        yellow.classList.toggle("lightyellow");
        audio3.play();
        audio3.currentTime = 0;
        }, ((i + 1) * 500))
    }
    setTimeout(function() { dimYellow() }, ((i + 1) * 700));
}
function flashBlue() {
    if (blue.classList.contains("lightblue") == false) {
        setTimeout(function() {
        blue.classList.toggle("lightblue");
        audio4.play();
        audio4.currentTime = 0;
        }, ((i + 1) * 500))
    }
    setTimeout(function() { dimBlue() }, ((i + 1) * 700));
}
// Called after each button flash | Toggles the "light[button-color]" class to remove it
function dimGreen() {
    if (green.classList.contains("lightgreen") == true) {
        setTimeout(function() {
        green.classList.toggle("lightgreen");
        }, ((i + 1) * 200))
    } else { green.classList.remove("lightgreen") }
}
function dimRed() {
    if (red.classList.contains("lightred") == true) {
        setTimeout(function() {
        red.classList.toggle("lightred");
        }, ((i + 1) * 200))
    } else { red.classList.remove("lightred") }
}
function dimYellow() {
    if (yellow.classList.contains("lightyellow") == true) {
        setTimeout(function() {
        yellow.classList.toggle("lightyellow");
        }, ((i + 1) * 200))
    } else { yellow.classList.remove("lightyellow") }
}
function dimBlue() {
    if (blue.classList.contains("lightblue") == true) {
        setTimeout(function() {
        blue.classList.toggle("lightblue");
        }, ((i + 1) * 200))
    } else { blue.classList.remove("lightblue") }
}