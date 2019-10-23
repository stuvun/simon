let round = 1;
let flash = round;
let order = [];
let playerOrder = [];
let turn = 0;

var min = 1;
var max = 4;

const start = document.querySelector(".start");

start.addEventListener("click", function(evt) {
    evt.preventDefault();
    startGame();
    console.log("Game Starts!"); })

const gameOver = document.querySelector(".gameOver");

const buttons = document.querySelectorAll(".button");

function flashButtons() {
    setInterval( function() {
        if (order.length < round) {
            order.push(JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min));
            console.log(order);
            
            order.forEach(function(seq) {
                console.log(order[seq])
            })
        } else { return }
    }, 200);
}

function checkOrder() {
    if (JSON.stringify(order) == JSON.stringify(playerOrder)) {
        round = round + 1;
        console.log(round);
    } else {
        gameOver.style.visibility = "visible"}
        console.log(gameOver.style.visibility);
}

function endGame() {

}

function startGame() {
    gameOver.style.visibility = "hidden";

    playerOrder.length = 0;

    flashButtons();

    buttons.forEach(function(but) {
        but.addEventListener("click", function(evt) {
            evt.preventDefault();
    
            console.log(but.value);
    
            if (playerOrder.length < order.length - 1) {
                playerOrder.push(but.value);
                console.log(playerOrder);
                console.log(round);
            } else if (playerOrder.length == order.length - 1) {
                playerOrder.push(but.value);
                console.log(playerOrder);
                checkOrder();
                playerOrder.length = 0;
                return;
            } else { return; }
        })
    })


}