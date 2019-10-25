let round = 1;
let order = [];
let playerOrder = [];
let turn = 1;
let i = 0;

const audio1 = new Audio("audio/Short\ Beep\ Tone-SoundBible.com-1937840853.mp3");
const audio2 = new Audio("audio/Checkout\ Scanner\ Beep-SoundBible.com-593325210.mp3");
const audio3 = new Audio("audio/Beep-SoundBible.com-923660219.mp3");
const audio4 = new Audio("audio/Bleep-SoundBible.com-1927126940.mp3");
const endAudio = new Audio("audio/iMac_Startup_Chime-Carlo_-1849294605.mp3");
const startAudio = new Audio("audio/Jump-SoundBible.com-1007297584.mp3");

const green = document.querySelector(".item1");
const red = document.querySelector(".item2");
const yellow = document.querySelector(".item3");
const blue = document.querySelector(".item4");

const buttons = document.querySelectorAll(".button");
const start = document.querySelector(".start");
const gameOver = document.querySelector(".gameOverContainer");
const highScore = document.querySelector(".scoreBoard");

let score = 0;
let highScores = parseInt(sessionStorage.getItem("highScores"));
if (parseInt(sessionStorage.getItem("highScores")) == false) {
    sessionStorage.setItem("highScores", 0);
}

highScore.innerHTML == "";
highScore.innerHTML = "HIGH SCORE: " + sessionStorage.getItem("highScores");

start.addEventListener("click", function(evt) {
    evt.preventDefault();
    startAudio.play();
    startAudio.currentTime = 0;
    startGame();
})

buttons.forEach(function(but) {
    but.addEventListener("click", function(evt) {
        evt.preventDefault();
        
        if (playerOrder.length < order.length - 1 && turn == 0) {
            if (but.value == "1") { audio1.play(); audio1.currentTime = 0;
            } else if (but.value == "2") { audio2.play(); audio2.currentTime = 0
            } else if (but.value == "3") { audio3.play(); audio3.currentTime = 0
            } else if (but.value == "4") { audio4.play(); audio4.currentTime = 0 };
            playerOrder.push(but.value);
        } else if (playerOrder.length == order.length - 1 && turn == 0) {
            if (but.value == "1") { audio1.play(); audio1.currentTime = 0;
            } else if (but.value == "2") { audio2.play(); audio2.currentTime = 0
            } else if (but.value == "3") { audio3.play(); audio3.currentTime = 0
            } else if (but.value == "4") { audio4.play(); audio4.currentTime = 0 };
            playerOrder.push(but.value);
            turn = 1;
            checkOrder();
            setTimeout(function() { flashOrder() }, ((i + 1) * 500));
            return;
        }
    })
})

function startGame() {
    if (start.style.visibility == "visible") {
        start.style.visibility = "hidden"
    };
    if (gameOver.style.visibility == "visible") {
        gameOver.style.visibility = "hidden";
        order.length = 0;
        playerOrder.length = 0;
        score = 0;
        round = 1
    };
    flashOrder();
}

function checkOrder() {
    if (JSON.stringify(order) != JSON.stringify(playerOrder)) {
        endGame();
    } else {
        round = round + 1;
        score = score + 1;
        playerOrder.length = 0;
    }
}

function endGame() {
    gameOver.style.visibility = "visible";
    start.style.visibility = "visible";
    endAudio.play();
    endAudio.currentTime = 0;
    if (score > parseInt(sessionStorage.getItem("highScores"))) {
        sessionStorage.setItem("highScores", score);
    };
    highScore.innerHTML == "";
    highScore.innerHTML = "HIGH SCORE: " + sessionStorage.getItem("highScores");
    console.log(highScores);
}

function flashOrder() {
    if (order.length < round && turn != 0) {
        order.push(JSON.stringify(Math.floor(Math.random() * (4)) + 1));

        setTimeout(function() { flashButtons() }, ((i + 1) * 500));

        if (turn != 0) {
            turn = 0
        }
    }
};

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

function flashGreen() {
    if (green.classList.contains("lightgreen") == false) {
        setTimeout(function() {
        green.classList.toggle("lightgreen");
        audio1.play();
        audio1.currentTime = 0;
        }, ((i + 1) * 500))
    }
    setTimeout(function() { dimGreen() }, ((i + 1) * 700));
}

function flashRed() {
    if (red.classList.contains("lightred") == false) {
        setTimeout(function() {
        red.classList.toggle("lightred");
        audio2.play();
        audio2.currentTime = 0;
        }, ((i + 1) * 500))
    }
    setTimeout(function() { dimRed() }, ((i + 1) * 700));
}

function flashYellow() {
    if (yellow.classList.contains("lightyellow") == false) {
        setTimeout(function() {
        yellow.classList.toggle("lightyellow");
        audio3.play();
        audio3.currentTime = 0;
        }, ((i + 1) * 500))
    }
    setTimeout(function() { dimYellow() }, ((i + 1) * 700));
}

function flashBlue() {
    if (blue.classList.contains("lightblue") == false) {
        setTimeout(function() {
        blue.classList.toggle("lightblue");
        audio4.play();
        audio4.currentTime = 0;
        }, ((i + 1) * 500))
    }
    setTimeout(function() { dimBlue() }, ((i + 1) * 700));
}

function dimGreen() {
    if (green.classList.contains("lightgreen") == true) {
        setTimeout(function() {
        green.classList.toggle("lightgreen");
        }, ((i + 1) * 200))
    } else { green.classList.remove("lightgreen") }
}

function dimRed() {
    if (red.classList.contains("lightred") == true) {
        setTimeout(function() {
        red.classList.toggle("lightred");
        }, ((i + 1) * 200))
    } else { red.classList.remove("lightred") }
}

function dimYellow() {
    if (yellow.classList.contains("lightyellow") == true) {
        setTimeout(function() {
        yellow.classList.toggle("lightyellow");
        }, ((i + 1) * 200))
    } else { yellow.classList.remove("lightyellow") }
}

function dimBlue() {
    if (blue.classList.contains("lightblue") == true) {
        setTimeout(function() {
        blue.classList.toggle("lightblue");
        }, ((i + 1) * 200))
    } else { blue.classList.remove("lightblue") }
}