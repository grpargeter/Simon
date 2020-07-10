//console.log("hello there");
//create variables for DOM manipulation for squares, start button and counter

const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");
const startBtn = document.querySelector("#start");
const title = document.querySelector("#title");
const counter = document.querySelector("#counter");
const redSound = document.querySelector("#redSound");
const blueSound = document.querySelector("#blueSound");
const greenSound = document.querySelector("#greenSound");
const yelloSound = document.querySelector("#yellowSound");
// create arrays to store computer generated sequence and player responses
let compSequence = [];
let playerSequence = [];

//create variables for game play
let blink; //variable for flashing button to show sequence
let playerTurn; //variable for the players turn true/false
let computerTurn; //variable for the computers turn turn true/false
let alive; // variable for if the game is still active (still alive!!!)
let winner; //variable for if player gets 15 guesses in a row will add "Winner" to #title tag
let pause; //variable for pausing between blinks of buttons
let sound = true;

// console.log(counter);

//add click events to buttons
blueBtn.addEventListener("click", test);
redBtn.addEventListener("click", test);
greenBtn.addEventListener("click", test);
yellowBtn.addEventListener("click", test);
redSound.addEventListener("click", test);
blueSound.addEventListener("click", test);
greenSound.addEventListener("click", test);
yellowSound.addEventListener("click", test);
function test() {
  console.log("I was clicked");
  redSound.play();
}

//configure what happens when user hits start, clear out variables
startBtn.addEventListener("click", (event) => {
  start();
});
function start() {
  win = false;
  compSequence = [];
  playerSequence = [];
  blink = 0;
  pause = 0;
  turn = 1;
  counter.innerHTML = 1;
  alive = true;
  for (let i = 0; i < 15; i++) {
    compSequence.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log(compSequence);
}
computerTurn = true;
// pause = setInterval(() => {}, interval);

// // test event listeners
// function test() {
//   console.log("I was clicked");
// }
