let round = 1;
let flash = round;
let order = [];
let playerOrder = [];
let turn = 1;
const min = 1;
const max = 4;

const start = document.querySelector(".start");

const gameOver = document.querySelector(".gameOver");

const buttons = document.querySelectorAll(".button");

start.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("Game Starts!");
    startGame(); })

function flashButtons() {
    if (order.length < round && turn != 0) {
        order.push(JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min));

        if (turn != 0) {
            turn = 0;
        } else { turn = 0 }
    }
    console.log(order)
}

function endGame() {
    console.log("Click Start Game to retry!");
    start.style.visibility = "visible";
}

function checkOrder() {
    if (JSON.stringify(order) != JSON.stringify(playerOrder)) {
        gameOver.style.visibility = "visible";
        console.log(gameOver.style.visibility);
        endGame();
    } else {
        round = round + 1;
        playerOrder.length = 0;
        flashButtons();
    }
}

function startGame() {
    if (start.style.visibility == "visible") {
        start.style.visibility = "hidden"
    };

    if (gameOver.style.visibility == "visible") {
        order.length = 0; round = 1
    };

    gameOver.style.visibility = "hidden";

    playerOrder.length = 0;

    flashButtons();
}

buttons.forEach(function(but) {
    but.addEventListener("click", function(evt) {
        evt.preventDefault();
        
        if (playerOrder.length < order.length - 1 && turn == 0) {
            console.log(but.value);
            playerOrder.push(but.value);
            console.log(playerOrder);
            console.log(round);
        } else if (playerOrder.length == order.length - 1 && turn == 0) {
            playerOrder.push(but.value);
            console.log(playerOrder);
            turn = 1;
            checkOrder();
            return;
        } else {
            return;
        }
    })
})