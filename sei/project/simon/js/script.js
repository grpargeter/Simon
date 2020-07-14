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
let blink; //keeps track of number of blinks in a game
let playerTurn; //variable for the players turn true/false
let computerTurn; //variable for the computers turn turn true/false
let alive; // variable for if the game is still active (still alive!!!)
let winner; //variable for if player gets specified guesses in a row will add "Winner" to #title tag
let interval; //variable for pausing between blinks of buttons
let sound = true; //play a sound on correct answer
let expert = false; //toggle expert button...not added at this point.

// console.log(counter);

//add click events to buttons which plays audio sounds when clicked and pushes into player array
blueBtn.addEventListener("click", () => {
  playerSequence.push(1);
  blue();
  verify();
  if (!winner) {
    setTimeout(() => {
      resetColor();
    }, 300);
  }
  console.log(playerSequence);
});
redBtn.addEventListener("click", () => {
  playerSequence.push(3);
  red();
  verify();
  if (!winner) {
    setTimeout(() => {
      resetColor();
    }, 300);
  }
  console.log(playerSequence);
});
greenBtn.addEventListener("click", () => {
  playerSequence.push(2);
  green();
  verify();
  if (!winner) {
    setTimeout(() => {
      resetColor();
    }, 300);
  }
  console.log(playerSequence);
});
yellowBtn.addEventListener("click", () => {
  playerSequence.push(4);
  yellow();
  verify();
  if (!winner) {
    setTimeout(() => {
      resetColor();
    }, 300);
  }
  console.log(playerSequence);
});

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
  computerTurn = 1;
  counter.innerHTML = 1;
  alive = true;
  for (let i = 0; i < 3; i++) {
    compSequence.push(Math.floor(Math.random() * 4) + 1); //fills compSequence with randomn number for the computer
  }
  console.log(compSequence); //displays random array in console.
  computerTurn = true; //computer starts the game, player goes 2nd
  //   interval = setInterval(turn, 800); //trigger turn function 800 ms
  turn();
}

function turn() {
  for (let i = 0; i < compSequence.length; i++) {
    if (compSequence[i] === 1) {
      setTimeout(blue, 1000 * i);
    } else if (compSequence[i] === 2) {
      setTimeout(green, 1000 * i);
    } else if (compSequence[i] === 3) {
      setTimeout(red, 1000 * i);
    } else if (compSequence[i] === 4) {
      setTimeout(yellow, 1000 * i);
    }
  }
  computerTurn = false;
  // console.log("turn is called");
  // if (blink == computerTurn) {
  //   clearInterval(interval);
  //   computerTurn = false;
  //   console.log("Computer turn is false");
  // }
  // if (computerTurn) {
  //   console.log("computer turn called");
  //   resetColor();
  //   setTimeout(() => {
  //     if (compSequence[blink] == 1) blue(); //if the compSequence array is 1 then run blue funtion
  //     if (compSequence[blink] == 2) green(); //if the compSequence array is 2 run green function
  //     if (compSequence[blink] == 3) red(); //if the compSequence array is 3 run the red function
  //     if (compSequence[blink] == 4) yellow(); //if the compSequence array if 4 run the yellow function.
  //     blink++;
  //   }, 200);
  // }
}

function blue() {
  console.log("blue is called");
  if (sound) {
    blueSound.play();
  }
  blueBtn.style.backgroundColor = "lightblue";
  setTimeout(() => {
    resetColor();
  }, 500);
}
function green() {
  console.log("green is called");
  if (sound) {
    greenSound.play();
  }
  greenBtn.style.backgroundColor = "lightgreen";
  setTimeout(() => {
    resetColor();
  }, 500);
}
function red() {
  console.log("red is called");
  if (sound) {
    redSound.play();
  }
  redBtn.style.backgroundColor = "rgb(231, 110, 110)";
  setTimeout(() => {
    resetColor();
  }, 500);
}
function yellow() {
  console.log("Yellow is called");
  if (sound) {
    yellowSound.play();
  }
  yellowBtn.style.backgroundColor = "lightyellow";
  setTimeout(() => {
    resetColor();
  }, 500);
}

//function to compare computer to player and verify correct sequence
function verify() {
  console.log("verify function is called");
  if (
    playerSequence[playerSequence.length - 1] !==
    compSequence[playerSequence.length - 1]
  ) {
    console.log(
      `${playerSequence[playerSequence.length - 1]} player sequence${
        compSequence[playerSequence.length - 1]
      }`
    );
    alive = false;
  }
  if (playerSequence.length == compSequence.length && alive) {
    victory();
  }

  if (alive == false) {
    blinkColor();
    counter.innerHTML = "Wrong!";
    setTimeout(() => {
      counter.innerHTML = playerTurn;
      resetColor();

      if (expert) {
        start();
      } else {
        computerTurn = true;
        blink = 0;
        playerSequence = [];
        alive = true;
        interval = setInterval(turn, 800);
      }
    }, 800);
    sound = false;
  }
  if (computerTurn == playerSequence.length && alive && !winner) {
    console.log("if player is right you should see this.");
    playerTurn++;
    playerSequence = [];
    computerTurn = true;
    blink = 0;
    counter.innerHTML = playerTurn;
    interval = setInterval(turn, 800);
  }
}
//function that gets called if you win
function victory() {
  blinkColor();
  counter.innerHTML = "Winner!!!";
  on = false;
  winner = true;
}
//function to clear colored buttons back to original
function resetColor() {
  console.log("color reset");
  blueBtn.style.backgroundColor = "blue";
  redBtn.style.backgroundColor = "red";
  greenBtn.style.backgroundColor = "green";
  yellowBtn.style.backgroundColor = "yellow";
}
//function to blink buttons if win!
function blinkColor() {
  console.log("blink color called.");
  blueBtn.style.backgroundColor = "lightblue";
  redBtn.style.backgroundColor = "lightred";
  greenBtn.style.backgroundColor = "lightgreen";
  yellowBtn.style.backgroundColor = "lightyellow";
}
