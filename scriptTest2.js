let round = 1;
let flash = round;
let order = [];
let playerOrder = [];
let turn = 1;
const min = 1;
const max = 4;

const start = document.querySelector(".start");

start.addEventListener("click", function(evt) {
    evt.preventDefault();
    startGame();
    console.log("Game Starts!"); })

const gameOver = document.querySelector(".gameOver");

const buttons = document.querySelectorAll(".button");

function flashButtons() {
    setInterval( function() {
        if (order.length < round && turn != 0) {
            order.push(JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min));
            console.log(order);

            order.forEach(function(seq) {
                console.log(order[seq])
            });

            if (turn != 0) {
                turn = 0;
        } else { return; }
        }
    }, 200)
}

function endGame() {
    console.log("Click Start Game to retry!");
}

function checkOrder() {
    if (JSON.stringify(order) != JSON.stringify(playerOrder)) {
        gameOver.style.visibility = "visible";
        console.log(gameOver.style.visibility);
        endGame();
        return;
    } else {
        round = round + 1;
    }
}

function startGame() {
    if (gameOver.style.visibility == "visible") {
        order.length = 0; round = 1 }

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
            } else if (playerOrder.length == order.length - 1) {
                playerOrder.push(but.value);
                console.log(playerOrder);
                checkOrder();
                playerOrder.length = 0;
                turn = 1;
                return;
            } else {
                return;
            }
    })
})