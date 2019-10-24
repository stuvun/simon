let round = 1;
let flash = round;
let order = [];
let playerOrder = [];
let turn = 1;

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
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            green.classList.add("lightgreen");
            console.log(green);
        } else if (order[i] == 2) {
            red.classList.add("lightred");
            console.log(red);
        } else if (order[i] == 3) {
            yellow.classList.add("lightyellow");
            console.log(yellow);
        } else if (order[i] == 4) {
            blue.classList.add("lightblue");
            console.log(blue);
        }
    }
    setTimeout(function() {
        green.classList.remove("lightgreen");
        console.log(green);
        red.classList.remove("lightred");
        console.log(red);
        yellow.classList.remove("lightyellow");
        console.log(yellow);
        blue.classList.remove("lightblue");
        console.log(blue)
    }, 500);
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