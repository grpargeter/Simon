//console.log("hello there");
//create variables for DOM manipulation for squares, start button and counter

const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");
const startBtn = document.querySelector("#start");
const title = document.querySelector("#title");
const counter = document.querySelector("#counter");
// create variables and arrays for game play.
let compSequence = [];
let playerSequence = [];
let flash;
let turn;
let alive;
// let congrats; add this after for if player exceeds 10 turns
let intervalId;
let sound = true;

// console.log(counter);

//add click events to buttons
blueBtn.addEventListener("click", test);
redBtn.addEventListener("click", test);
greenBtn.addEventListener("click", test);
yellowBtn.addEventListener("click", test);

function test() {
  console.log("I was clicked");
}

//configure what happens when user hits start, clear out variables
startBtn.addEventListener("click", (event) => {
  start();
});
function start() {
  win = false;
  compSequence = [];
  playerSequence = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  counter.innerHTML = 1;
  alive = true;

  for (var i = 0; i < 25; i++) {
    compSequence.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log(compSequence);
}
// // test event listeners
// function test() {
//   console.log("I was clicked");
// }
