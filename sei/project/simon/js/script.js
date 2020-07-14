//console.log("hello there");
//create variables for DOM manipulation for squares, start button and counter

const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");
const startBtn = document.querySelector("#start");
const title = document.querySelector("#title");
const counter = document.querySelector("#counter");
const resetBtn = document.querySelector("#reset");

// create arrays to store computer generated sequence and player responses
let compSequence = []; //empty computer array to populate with randomn sequence
let playerSequence = []; //empty player array to populate with player choices

//create variables for game play
let blink; //keeps track of number of blinks in a game
let playerTurn = 0; //variable for the players turn true/false
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
  // console.log(playerSequence);
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
  // console.log(playerSequence);
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
  // console.log(playerSequence);
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
  // console.log(playerSequence);
});
//configure reset button
resetBtn.addEventListener("click", (event) => {
  location.reload();
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
  counter.innerHTML = "Level Completed = 0";
  alive = true;
  for (let i = 0; i < 1; i++) {
    compSequence.push(Math.floor(Math.random() * 4) + 1); //fills compSequence with randomn number for the computer
  }
  // console.log(compSequence); //displays random array in console.
  computerTurn = true; //computer starts the game, player goes 2nd
  //   interval = setInterval(turn, 800); //trigger turn function 800 ms
  turn();
}

async function turn() {
  for (let j = 0; j < 5; j++) {
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
    while (computerTurn == false) {
      // console.log(computerTurn);
      await new Promise((r) => setTimeout(r, 1000));
    }
    await new Promise((r) => setTimeout(r, 1000));
    compSequence.push(Math.floor(Math.random() * 4) + 1);
  }
  computerTurn = false;
  victory();
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
  redBtn.style.backgroundColor = "tomato";
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
  console.log(playerSequence);
  console.log(compSequence);
  console.log("verify function is called");
  if (
    playerSequence[playerSequence.length - 1] !==
    compSequence[playerSequence.length - 1]
  ) {
    alive = false;
  }
  if (playerSequence.length == compSequence.length && alive) {
    if (compSequence.length == playerSequence.length && alive && !winner) {
      playerTurn++;
      playerSequence = [];
      computerTurn = true;
      blink = 0;
      counter.innerHTML = `Level Completed = ${playerTurn}`;
    }
  }

  if (alive == false) {
    blinkColor();
    counter.innerHTML = "Wrong!";
    setTimeout(() => {
      counter.innerHTML = "You are a loser!";
      resetColor();

      if (expert) {
        start();
      } else {
        // computerTurn = true;
        blink = 0;
        playerSequence = [];
        alive = true;
      }
    }, 800);
    setTimeout(location.reload.bind(location), 5000);
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
  blueBtn.style.backgroundColor = "blue";
  redBtn.style.backgroundColor = "red";
  greenBtn.style.backgroundColor = "green";
  yellowBtn.style.backgroundColor = "yellow";
}
//function to blink buttons if win!
function blinkColor() {
  blueBtn.style.backgroundColor = "lightblue";
  redBtn.style.backgroundColor = "tomato";
  greenBtn.style.backgroundColor = "lightgreen";
  yellowBtn.style.backgroundColor = "lightyellow";
}
