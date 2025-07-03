/* file: game.js */
"use strict";

/* 1.  Correct file list (folder name = images) */
const diceFaces = [
  "dice 1.jpg",
  "dice 2.jpg",
  "dice 3.jpg",
  "dice 4.jpg",
  "dice 5.jpg",
  "dice 6.jpg",
];

/* 2.  DOM elements */
const diceImg = document.querySelector(".dice");

/* use the class names that actually exist in your HTML */
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");   // future use

/* 3.  Roll handler */
function rollDice() {
  const random = Math.trunc(Math.random() * 6) + 1;   // 1‑6
  diceImg.src = `images/${diceFaces[random - 1]}`;     // set picture
  diceImg.style.display = "block";                     // make sure it’s visible
}

/* 4.  Events */
rollBtn.addEventListener("click", rollDice);
