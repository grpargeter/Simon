let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;

const turnCounter = document.querySelector("#counter");
const blueBtn = document.querySelector("#blue");
const greenBtn = document.querySelector("#green");
const redBtn = document.querySelector("#red");
const yellowBtn = document.querySelector("#yellow");
const expertBtn = document.querySelector("#expert");
const powerBtn = document.querySelector("#on");
const startBtn = document.querySelector("#start");

expertBtn.addEventListener("click", (event) => {
  if (expertBtn.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

powerBtn.addEventListener("click", (event) => {
  if (powerBtn.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
    console.log(powerBtn);
  } else {
    on = false;
    turnCounter.innerHTML = "Hello";
    clearColor();
    clearInterval(intervalId);
  }
});

startBtn.addEventListener("click", (event) => {
  if (on || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;
  console.log(order);
  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) blue();
      if (order[flash] == 2) green();
      if (order[flash] == 3) red();
      if (order[flash] == 4) yellow();
      flash++;
    }, 200);
  }
}

function blue() {
  if (noise) {
    let audio = document.getElementById("#blueSound");
    audio.play();
  }
  noise = true;
  blueBtn.style.backgroundColor = "lightskyblue";
}

function green() {
  if (noise) {
    let audio = document.getElementById("#greenSound");
    audio.play();
  }
  noise = true;
  greenBtn.style.backgroundColor = "lightgreen";
}

function red() {
  if (noise) {
    let audio = document.getElementById("redSound");
    audio.play();
  }
  noise = true;
  redBtn.style.backgroundColor = "tomato";
}

function yellow() {
  if (noise) {
    let audio = document.getElementById("yellowSound");
    audio.play();
  }
  noise = true;
  yellowBtn.style.backgroundColor = "yellow";
}

function clearColor() {
  blueBtn.style.backgroundColor = "Blue";
  greenBtn.style.backgroundColor = "Green";
  redBtn.style.backgroundColor = "Red";
  yellowBtn.style.backgroundColor = "Yellow";
}

function flashColor() {
  blueBtn.style.backgroundColor = "lightgreen";
  greenBtn.style.backgroundColor = "tomato";
  redBtn.style.backgroundColor = "yellow";
  yellowBtn.style.backgroundColor = "lightskyblue";
}

blueBtn.addEventListener("click", (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    blue();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
    b;
  }
});

greenBtn.addEventListener("click", (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    green();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

redBtn.addEventListener("click", (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    red();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

yellowBtn.addEventListener("click", (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    yellow();
    if (!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
});

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 3 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }
}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "WIN!";
  on = false;
  win = true;
}
