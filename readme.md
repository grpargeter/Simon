Instructions - Welcome to my first Java Script creation. A game called Simon. I used Java script along with CSS and HTML to create this game.

To play, hit the start button and watch for one of the buttons to highlight and play a tone. Continue to follow the pattern as long as you can. You'll see a counter keeping track of what level you are on in the upper right corner. If you are able to make it to 15 in a row you WIN!!! Have Fun.

![Wire Frame](https://https://github.com/grpargeter/Simon/blob/master/SimonFrame.png)


User Story

//bronze - complete
I want to be able to start a new game with a button
I want to be able to click on boxes as they get highlighted  
I want to be able to keep track of my score to determine how many I got correct in a row

//silver - complete

I want the buttons to make a sound on click
I want it to buzz when I lose

//gold - in process
Add the option to have multiple players
Animate the back ground
Create a "Win" animation and victory sound

//HTML
//layout HTML with 4 circles(boxes) red,green, blue and yellow
//create "start new game" button
//create title box with "Simon Says"
//create "Current Score" box in upper right

//CSS
//create 2x2 grid using flex grid
//color each box with red, blue, yellow, green
//create padding around grid boxes
//style reset, start and instructions

//js
//create variables to grab colored boxes, title, current score and start new game button
//create functions to highlight random buttons and wait for user response before moving on
//create function to track user input and put into an array
//create function to store current score in "current score box"
//create function to reset game after player chooses button incorrectly
