let round = 1;
let flash = round;
let order = [];
let playerOrder = [];
let turn = 1;
let delay = 3000;
let i = -1

const min = 1;
const max = 4;

const green = document.querySelector(".item1");
const red = document.querySelector(".item2");
const yellow = document.querySelector(".item3");
const blue = document.querySelector(".item4");

const buttons = document.querySelectorAll(".button");

const start = document.querySelector(".start");

const gameOver = document.querySelector(".gameOver");

start.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("Game Starts!");
    startGame();
})

function startGame() {
    if (start.style.visibility == "visible") {
        start.style.visibility = "hidden" };

    if (gameOver.style.visibility == "visible") {
        gameOver.style.visibility = "hidden";
        order.length = 0;
        playerOrder.length = 0;
        round = 1 };
    
    flashOrder();

    order.forEach(function(index) {
        console.log(index);
    });
}

function flashButtons() {
    for (i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            green.classList.add("lightgreen");
            let timer = setTimeout(function(){console.log(green)}, delay);
            green.classList.remove("lightgreen")
        } else if (order[i] == 2) {
            red.classList.add("lightred");
            let timer = setTimeout(function(){console.log(red)}, delay);
            red.classList.remove("lightred");
        } else if (order[i] == 3) {
            yellow.classList.add("lightyellow");
            let timer = setTimeout(function(){console.log(yellow)}, delay);
            yellow.classList.remove("lightyellow");
        } else if (order[i] == 4) {
            blue.classList.add("lightblue");
            let timer = setTimeout(function(){console.log(blue)}, delay);
            blue.classList.remove("lightblue");
        }
    }
}

function flashOrder() {
    if (order.length < round && turn != 0) {
        order.push(JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min));

        setTimeout(flashButtons(), 500);

        if (turn != 0) { turn = 0 } else { turn = 0 }
    }
    console.log("Order = " + order);
};

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
            flashOrder();
            return;
        }
    })
})

function checkOrder() {
    if (JSON.stringify(order) != JSON.stringify(playerOrder)) {
        gameOver.style.visibility = "visible";
        console.log(gameOver.style.visibility);
        endGame();
    } else {
        round = round + 1;
        playerOrder.length = 0;
    }
}

function endGame() {
    console.log("Click Start Game to retry!");
    start.style.visibility = "visible";
    alert("Your score is: " + round + "!");
}