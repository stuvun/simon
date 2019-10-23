let round = 1;
let flash = round;
let order = [];
let playerOrder = [];
let turn = 0;

var min = 1;
var max = 4;

const start = document.querySelector(".start");

const retry = document.querySelector(".retry");

start.addEventListener("click", function(evt) {
    evt.preventDefault();
    startGame();
    console.log("Game Starts!"); })

retry.addEventListener("click", function(evt) {
    evt.preventDefault();
    startNewGame();
    console.log("New Game Starts!")
})

const gameOver = document.querySelector(".gameOver");

const buttons = document.querySelectorAll(".button");

function flashButtons() {
    setInterval( function() {
        if (order.length < round) {
            order.push(JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min));
            console.log(order);
        } else { return }
    }, 200);

    buttons.forEach(function(but) {
        but.addEventListener("click", function() {
            console.log(but.value);
            console.log(round);

            playerOrder.push(but.value);

            if (playerOrder.length < order.length) {
                console.log(playerOrder);
                console.log(round);
                checkOrder();
                if (playerOrder.length == order.length - 1) {
                console.log(playerOrder);
                checkOrder();
                flashButtons();
                }
            } else { return; }
        })
    })
}

function checkOrder() {
    if (JSON.stringify(order) == JSON.stringify(playerOrder)) {
        round = round + 1;
        console.log(round);
    } else if (JSON.stringify(order) != JSON.stringify(playerOrder)) {
        gameOver.style.visibility = "visible";
        console.log(gameOver.style.visibility);
        order.length = 0;
        playerOrder.length = 0;
        round = 1;
        return {order, playerOrder, round};
    } else { return }
}

// function endGame() {

// }

// function startNewGame() {
//     gameOver.style.visibility = "hidden";
    
//     round = 1;

//     order.length = round - 1;

//     playerOrder.length = 0;

//     flashButtons();

//     buttons.forEach(function(but) {
//         but.addEventListener("click", function(evt) {
//             evt.preventDefault();
    
//             console.log(but.value);
    
//             if (playerOrder.length < order.length - 1) {
//                 playerOrder.push(but.value);
//                 console.log(playerOrder);
//                 console.log(round);
//             } else if (playerOrder.length == order.length - 1) {
//                 playerOrder.push(but.value);
//                 console.log(playerOrder);
//                 checkOrder();
//                 playerOrder.length = 0;
//             } else { return; }
//         })
//     })
// }

function startGame() {
    flashButtons();

    console.log(order)
}
