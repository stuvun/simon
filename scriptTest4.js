let round = 1;
let flash = round;
let order = [];
let playerOrder = [];
let turn = 1;
let s = 0;
let interval = 1000;

const green = document.querySelector(".item1");
const red = document.querySelector(".item2");
const yellow = document.querySelector(".item3");
const blue = document.querySelector(".item4");

dimGreen = setTimeout(function() { green.classList.remove("lightgreen")}, 1000);
dimRed = setTimeout(function() { red.classList.remove("lightred")}, 1000);
dimYellow = setTimeout(function() { yellow.classList.remove("lightyellow")}, 1000);
dimBlue = setTimeout(function() { blue.classList.remove("lightblue")}, 1000);

const min = 1;
const max = 4;

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
        round = 1
    };
    
    setInterval(function() {flashOrder()}, 1000);

    order.forEach(function(index) {
        console.log(index);
    });
}

function flashButtons() {
    for (i = 0; i < order.length; i++) {
        if (order[i] == 1 && s == 0) {
            green.classList.add("lightgreen");
            console.log(order[i]);
            s = s + 1;
        }
        if (order[i] == 1 && s == 1) {
            setInterval(function() {
                green.classList.remove("lightgreen");
                red.classList.remove("lightred");
                yellow.classList.remove("lightyellow");
                blue.classList.remove("lightblue")
            }, 1000);
            console.log(green);
            s = s - 1;
        }
        if (order[i] == 2 && s == 0) {
            red.classList.add("lightred");
            console.log(red);
            s = s + 1;
        }
        if (order[i] == 2 && s == 1) {
            setInterval(function() {
                green.classList.remove("lightgreen");
                red.classList.remove("lightred");
                yellow.classList.remove("lightyellow");
                blue.classList.remove("lightblue")
            }, 1000);
            console.log(red);
            s = s - 1;
        }
        if (order[i] == 3 && s == 0) {
            yellow.classList.add("lightyellow");
            console.log(yellow);
            s = s + 1;
        }
        if (order[i] == 3 && s == 1) {
            setInterval(function() {
                green.classList.remove("lightgreen");
                red.classList.remove("lightred");
                yellow.classList.remove("lightyellow");
                blue.classList.remove("lightblue")
            }, 1000);
            console.log(yellow);
            s = s - 1;
        }
        if (order[i] == 4 && s == 0) {
            blue.classList.add("lightblue");
            console.log(blue);
            s = s + 1;
        }
        if (order[i] == 4 && s == 1) {
            setInterval(function() {
                green.classList.remove("lightgreen");
                red.classList.remove("lightred");
                yellow.classList.remove("lightyellow");
                blue.classList.remove("lightblue")
            }, 1000)
            console.log(blue);
            s = s - 1;
        }
    }
}
order.forEach((orders, index) => {
    setTimeout(() => {
        
    }, index * interval)
})

let modes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let interval = 1000; //one second
modes.forEach((mode, index) => {

  setTimeout(() => {
    console.log(mode)
  }, index * interval)
})

function flashOrder() {
    if (order.length < round && turn != 0) {
        order.push(JSON.stringify(Math.floor(Math.random() * (max - min + 1)) + min));

        flashButtons();

        if (turn != 0) {
            turn = 0
        } else { turn = 0 }
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
});

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

// setInterval(function() {
//     green.classList.remove("lightgreen");
//     red.classList.remove("lightred");
//     yellow.classList.remove("lightyellow");
//     blue.classList.remove("lightblue")
// }, 1000)