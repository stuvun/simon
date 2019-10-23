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
    startGame(); })

let flashes = function flashOrder() {

}

function flashButtons() {
    if (order.length < round && turn != 0) {
        order.push(JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min));

        if (turn != 0) {
            turn = 0;
        } else { turn = 0 }
    }
    console.log("Order = " + order)
}

function endGame() {
    console.log("Click Start Game to retry!");
    start.style.visibility = "visible";
    alert("Your score is: " + round + "!");
}

// let eachIndex = order.forEach(function(index) {
//     console.log(index);

//     if (index == 1) {
//         green.style.visibility = "hidden";
//         green.style.visibility = "visible";
//     } else if (index == 2) {
//         red.style.visibility = "hidden";
//         red.style.visibility = "visible";
//     } else if (index == 3) {
//         yellow.style.visibility = "hidden";
//         yellow.style.visibility = "visible";
//     } else if (index == 4) {
//         blue.style.visibility = "hidden";
//         blue.style.visibility = "visible";
//     }
// });

function eachIndex() {
    order.forEach(function(index) {
        console.log(index);
    
        if (index == 1) {
            green.style.visibility = "hidden";
            setTimeout(function(){ green.style.visibility = "visible";}, 500)
            console.log("green is:" + green.style.visibility)
            

        } else if (index == 2) {
            red.style.visibility = "hidden";
            setTimeout(function(){red.style.visibility = "visible"; }, 500)
            console.log("red is:" + red.style.visibility)
            

        } else if (index == 3) {
            yellow.style.visibility = "hidden";
            setTimeout(function(){yellow.style.visibility = "visible"; }, 500)
            console.log("yellow is:" + yellow.style.visibility)
            

        } else if (index == 4) {
            blue.style.visibility = "hidden";
            setTimeout(function(){ blue.style.visibility = "visible";}, 500)
            console.log("blue is:" + blue.style.visibility)
            

        }




    });

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

        eachIndex();
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

    order.forEach(function(index) {
        console.log(index);
    });
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