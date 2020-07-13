//console.log("hello there");
//create variables for DOM manipulation for squares, start button and counter

const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");
const startBtn = document.querySelector("#start");
const title = document.querySelector("#title");
const counter = document.querySelector("#counter");

// create arrays to store computer generated sequence and player responses
let compSequence = []; //empty computer array to populate with randomn sequence
let playerSequence = []; //empty player array to populate with player choices

//create variables for game play
let blink = true; //variable for flashing button to show sequence
let playerTurn; //variable for the players turn true/false
let computerTurn; //variable for the computers turn turn true/false
let alive; // variable for if the game is still active (still alive!!!)
let winner; //variable for if player gets 15 guesses in a row will add "Winner" to #title tag
let interval; //variable for pausing between blinks of buttons
let sound = true;

// console.log(counter);

//add click events to buttons which plays audio sounds when clicked
blueBtn.addEventListener("click", () => {
  playerSequence.push(1);
  blue();
  console.log(playerSequence);
});
redBtn.addEventListener("click", () => {
  playerSequence.push(3);
  red();
  console.log(playerSequence);
});
greenBtn.addEventListener("click", () => {
  playerSequence.push(2);
  green();
  console.log(playerSequence);
});
yellowBtn.addEventListener("click", () => {
  playerSequence.push(4);
  yellow();
  console.log(playerSequence);
});

//fucntion to blink buttons
// function blinkColor() {
//   blueBtn.style.backgroundColor = "lightblue";
//   redBtn.style.backgroundColor = "lightred";
//   greenBtn.style.backgroundColor = "lightgreen";
//   yellowBtn.style.backgroundColor = "lightyellow";
// }

//configure what happens when user hits start, clear out variables
startBtn.addEventListener("click", (event) => {
  start();
});
function start() {
  winner = false;
  compSequence = [];
  playerSequence = [];
  blink = 0;
  interval = 0;
  playerTurn = 1;
  counter.innerHTML = 1;
  alive = true;
  for (let i = 0; i < 15; i++) {
    compSequence.push(Math.floor(Math.random() * 4) + 1); //fills compSequence with randomn number for the computer
  }
  console.log(compSequence); //displays randon array in console.
  computerTurn = true; //computer starts the game, player goes 2nd
  interval = setInterval(computerTurn, 1000); //trigger fucntion
}

function Turn() {
  on = false;
  if (blink == turn) {
    clearInterval(interval);
    computerTurn = false;
    clearColor();
    on = true;
  }
  if (computerTurn) {
    clearColor();
    setTimeout(() => {
      if (compSequence[blink] == 1) blue(); //if the compSequence array is 1 then run blue funtion
      if (compSequence[blink] == 2) green(); //if the compSequence array is 2 run green function
      if (compSequence[blink] == 3) red(); //if the compSequence array is 3 run the red function
      if (compSequence[blink] == 4) yellow(); //if the compSquence array if 4 run the yellow function.
      blink++;
    }, 200);
  }
}

function blue() {
  if (sound) {
    blueSound.play();
  }
  blueBtn.style.backgroundColor = "lightblue";
  setTimeout(() => {
    clearColor();
  }, 500);
}
function green() {
  if (sound) {
    greenSound.play();
  }
  greenBtn.style.backgroundColor = "lightgreen";
  setTimeout(() => {
    clearColor();
  }, 500);
}
function red() {
  if (sound) {
    redSound.play();
  }
  redBtn.style.backgroundColor = "rgb(231, 110, 110)";
  setTimeout(() => {
    clearColor();
  }, 500);
}
function yellow() {
  if (sound) {
    yellowSound.play();
  }
  yellowBtn.style.backgroundColor = "lightyellow";
  setTimeout(() => {
    clearColor();
  }, 500);
}
//function to clear colored buttons back to original
function clearColor() {
  blueBtn.style.backgroundColor = "blue";
  redBtn.style.backgroundColor = "red";
  greenBtn.style.backgroundColor = "green";
  yellowBtn.style.backgroundColor = "yellow";
}
//fucntion to blink buttons
function blinkColor() {
  blueBtn.style.backgroundColor = "lightblue";
  redBtn.style.backgroundColor = "lightred";
  greenBtn.style.backgroundColor = "lightgreen";
  yellowBtn.style.backgroundColor = "lightyellow";
}
