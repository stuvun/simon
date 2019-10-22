// SIMON GAME
// 1. Press start
// 2. Game starts
// 3. Game displays sequence
// 4. Player mimics sequence
// 5. If player succeeds, the game displays the next sequence with one more step
// 6. If player fails, game over
// 7. Game continues until player fails.

// BONUS
// 1. Add timer based scoring
// 2. Track scores across games (Even if page is reloaded)

// FUNCTIONALITY

// GAME START
// 1. One of the four buttons light up
// 2. User clicks button after light is gone
// 3. Check if User clicked the right button
// 4. If User was correct, Light same button plus one more
// 5. Game continues until User gets sequence wrong
// 6. If User was wrong, Display 'Game Over'
// 7. After game over, display User's score.
// 8. The score is equal to the number of sequences the User has completed

// LIGHT BUTTONS UP
// DETERMINE FLASH ORDER
// CHECK IF USER'S SEQUENCE MATCHES COMPUTER'S
// ADDING TO NUMBER OF FLASHES
// KEEPING SCORE
// RESETTING FLASH ORDER BACK TO START

const start = document.querySelector(".start");

const buttons = document.querySelectorAll(".button");

buttons.forEach(function(but) {
    but.addEventListener("click", function(evt) {
        evt.preventDefault();
        console.log("success!");
    })
})

class Simon {
    constructor(flash, round) {
        this.flash = flash
        this.round = round
        this.order = [];
        this.playerOrder = [];
    }
}
let simon = new Simon

start.addEventListener("click", function(evt) {
    evt.preventDefault();
    simon.startGame();
})
// function startGame() {

// }

// function flashSequence() {

// }

// function playSequence() {

// }

// function flashCheck() {

// }

// function roundCheck() {

// }

// function playerScore() {

// }



// REFERENCE CODE

// var c = 100;
// var t;
// var timer_is_on = 0;

// function timedCount() {
//   document.getElementById("txt").value = c;
//   c -= 1;
//   t = setTimeout(timedCount, 200);
// }

// function startCount() {
//   if (!timer_is_on) {
//     timer_is_on = 1;
//     timedCount();
//   }
// }

// function stopCount() {
//   clearTimeout(t);
//   timer_is_on = 0;
// }