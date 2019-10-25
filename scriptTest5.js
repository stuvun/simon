let round = 1;
let flash = round;
let order = [];
let playerOrder = [];
let turn = 1;
let i = 0;

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

function flashGreen() {
    if (green.classList.contains("lightgreen") == false) {
        setTimeout(function() {
        green.classList.toggle("lightgreen");
        }, ((i + 1) * 500))
    }
    console.log(green + " is true");

    setTimeout(function() { dimGreen() }, ((i + 1) * 500));
    console.log(green + " is false")
}

function dimGreen() {
    if (green.classList.contains("lightgreen") == true) {
        setTimeout(function() {
        green.classList.toggle("lightgreen");
        }, ((i + 1) * 150))
    } else { green.classList.remove("lightgreen") }
}

function flashRed() {
    if (red.classList.contains("lightred") == false) {
        setTimeout(function() {
        red.classList.toggle("lightred");
        }, ((i + 1) * 500))
    }
    console.log(red + " is true");

    setTimeout(function() { dimRed() }, ((i + 1) * 500));
    console.log(red + " is false")
}

function dimRed() {
    if (red.classList.contains("lightred") == true) {
        setTimeout(function() {
        red.classList.toggle("lightred");
        }, ((i + 1) * 150))
    } else { red.classList.remove("lightred") }
}

function flashYellow() {
    if (yellow.classList.contains("lightyellow") == false) {
        setTimeout(function() {
        yellow.classList.toggle("lightyellow");
        }, ((i + 1) * 500))
    }
    console.log(yellow + " is true");

    setTimeout(function() { dimYellow() }, ((i + 1) * 500));
    console.log(yellow + " is false")
}

function dimYellow() {
    if (yellow.classList.contains("lightyellow") == true) {
        setTimeout(function() {
        yellow.classList.toggle("lightyellow");
        }, ((i + 1) * 150))
    } else { yellow.classList.remove("lightyellow") }
}

function flashBlue() {
    if (blue.classList.contains("lightblue") == false) {
        setTimeout(function() {
        blue.classList.toggle("lightblue");
        }, ((i + 1) * 500))
    }
    console.log(blue + " is true");

    setTimeout(function() { dimBlue() }, ((i + 1) * 500));
}

function dimBlue() {
    if (blue.classList.contains("lightblue") == true) {
        setTimeout(function() {
        blue.classList.toggle("lightblue");
        }, ((i + 1) * 150))
    } else { blue.classList.remove("lightblue") }
}

function flashButtons() {
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            setTimeout(function() { flashGreen() }, ((i + 1) * 500));
        } else if (order[i] == 2) {
            setTimeout(function() { flashRed() }, ((i + 1) * 500));
        } else if (order[i] == 3) {
            setTimeout(function() { flashYellow() }, ((i + 1) * 500));
        } else if (order[i] == 4) {
            setTimeout(function() { flashBlue() }, ((i + 1) * 500));
        }
    }
}

function flashOrder() {
    if (order.length < round && turn != 0) {
        order.push(JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min));

        setTimeout(function() { flashButtons() }, ((i + 1) * 500));

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
            setTimeout(function() { flashOrder() }, ((i + 1) * 500));
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