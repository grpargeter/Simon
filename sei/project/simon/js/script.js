//console.log("hello there");
//create variables for DOM manipulation for squares, start button and counter

const blueBtn = document.querySelector("#blue");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const yellowBtn = document.querySelector("#yellow");
const startBtn = document.querySelector("#start");
const title = document.querySelector("#title");
const counter = document.querySelector("#counter");
let sequence = [];
let playerSequence = [];
let flash;
let turn;
let congrats;
let intervalId;
let sound = true;

const flash =
  // console.log(counter);

  //add click events to buttons
  blueBtn.addEventListener("click", test);
redBtn.addEventListener("click", test);
greenBtn.addEventListener("click", test);
yellowBtn.addEventListener("click", test);
startBtn.addEventListener("click", test);

// test event listeners
function test() {
  console.log("I was clicked");
}
