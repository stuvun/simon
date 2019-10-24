function eachIndex() {
    order.forEach(function(index) {
        console.log(index);
    
        if (index == 1) {
            setTimeout(function(){green.style.background = "lightgreen"}, 500)
            console.log("green is:" + green.style.backgroundColor)
            if (green.style.background == "lightgreen") {
                setTimeout(function(){green.style.background = "darkgreen"}, 500)
                console.log("green is:" + green.style.background)
            }
        } else if (index == 2) {
            setTimeout(function(){red.style.background = "red"; }, 500)  
            console.log("red is:" + red.style.background)
            if (red.style.background == "red") {
                setTimeout(function(){red.style.background = "darkred"; }, 500)
                console.log("red is:" + red.style.background)
            }
        } else if (index == 3) {
            setTimeout(function(){yellow.style.background = "goldenrod"; }, 500)
            console.log("yellow is:" + yellow.style.background)
            if (yellow.style.background == "goldenrod") {
                setTimeout(function(){yellow.style.background = "darkgoldenrod"; }, 500)
                console.log("yellow is:" + yellow.style.background)
            }
        } else if (index == 4) {
            setTimeout(function(){ blue.style.background = "lightskyblue";}, 500)
            console.log("blue is:" + blue.style.background)
            if (blue.style.background == "lightskyblue") {
                setTimeout(function(){ blue.style.background = "darkblue";}, 500)
                console.log("blue is:" + blue.style.background)
            }
        }
    })
}

function flashOrder() {
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            setTimeout(function() {green.classList.add("lightgreen")}, 500);
            green.classList.remove("green")
        } else if (order[i] == 2) {
            setTimeout(function() {red.classList.add("lightred")}, 500);
            red.classList.remove("red")
        } else if (order[i] == 3) {
            setTimeout(function() {yellow.classList.add("lightyellow")}, 500);
            yellow.classList.remove("yellow")
        } else if (order[i] == 4) {
            setTimeout(function() {blue.classList.add("lightblue")}, 500);
            blue.classList.remove("blue")
        }
    }
}

if (green.style.background == "lightgreen") {
    setTimeout(function(){green.style.background = "darkgreen"}, 500)
    console.log("green is:" + green.style.background)
} else if (red.style.background == "red") {
    setTimeout(function(){red.style.background = "darkred"; }, 500)
    console.log("red is:" + red.style.background)
} else if (yellow.style.background == "goldenrod") {
    setTimeout(function(){yellow.style.background = "darkgoldenrod"; }, 500)
    console.log("yellow is:" + yellow.style.background)
} else if (blue.style.background == "lightskyblue") {
    setTimeout(function(){ blue.style.background = "darkblue";}, 500)
    console.log("blue is:" + blue.style.background)
}