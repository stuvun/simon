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

let round = 1;
let flash = round;
let order = [];
let playerOrder = [];

// | GAME BUTTONS |
const buttons = document.querySelectorAll(".button");
// | Player clicks same amount of buttons as [round]   |  * CHECKS *   |
// | Clicked button values push to [playerOrder] array | - Click count |
buttons.onclick = function() {
    console.log("success!");

    // playerOrder.push() }

// | START BUTTON |
const start = document.querySelector(".start");
// | Starts the Simon Game |
start.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("success!"); })

const gameOver = document.querySelector(".gameOver");

// | Flashes according to [round]                  |     * CHECKS *     |
// | Randomizes order with Math.floor(Math.random) | - Value of [round] |
// | Pushes order to an [order] array              |                    |
function flashButtons() {
 }

buttons.forEach(function(but) {
    but.addEventListener("click", function(evt) {
        evt.preventDefault();
        console.log("success!"); }) })

// | Compares [order] with [playerOrder]   |              * CHECKS *               |
// | If they match, add 1 to [round]       | - [order] == [playerOrder]            |
// | If they don't match, show 'Game Over' | - [order] != [playerOrder]            |
// | If 'Game Over' is shown, show [round] | - 'Game Over' visibility == 'hidden'  |
// | If 'Game Over' is hidden, next round  | - 'Game Over' visibility == 'visible' |
function checkOrder() {
    if (order == playerOrder) {
        round = round + 1;
    } else {
        gameOver.style.visibility = "null";
        gameOver.style.visibility = "visible"} }

// SAMPLE CODE

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

// buttons.forEach(function(but) {
//     but.addEventListener("click", function(evt) {
//         evt.preventDefault();
//         console.log("success!");

//         playerOrder.push()
//     })
// })
