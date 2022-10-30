var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 640;
canvas.height = 427;
document.getElementById("theCanvas").appendChild(canvas);

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "leaf.jpg";

var bugReady = false;
var bugImage = new Image();
bugImage.onload = function () {
    bugReady = true;
};
bugImage.src = "lb.png";


var score = 0;
var hopInterval = 2000;

var hop = setInterval(function () {
    resetLocation();
}, hopInterval);

var bug = {
    speed: 256 
};


canvas.addEventListener("mousedown", clicked, false);
function clicked(e) {
e.preventDefault();
var x = e.clientX;
var y = e.clientY;

if (x > bug.x && x < bug.x + 61 && y > bug.y && y < bug.y + 169) {
score += 5;
resetLocation();

if (hopInterval - 100 >= 50) {
clearInterval(hop);
hopInterval -= 100;
hop = setInterval(function () {
resetLocation();
}, hopInterval);

}
}
}

var resetLocation = function () {
    bug.x = 32 + (Math.random() * (canvas.width - 64));
    bug.y = 32 + (Math.random() * (canvas.height - 64));
};

var resetSpeed = function () {
    clearInterval(hop);
    hopInterval = 2000;
    hop = setInterval(function () {
        resetLocation();
    }, hopInterval);
};
var resetScore = function () {
    score = 0;
    resetSpeed();
};

var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }

    if (bugReady) {
        ctx.drawImage(bugImage, bug.x, bug.y);
    }

    ctx.fillStyle = "rgb(0, 0, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    document.getElementById("score").innerHTML = "Score : " + score;
};


var main = function () {
    render();

    requestAnimationFrame(main);
};


main();