"use strict";
const diceFaces = [
  "dice 1.jpg",
  "dice 2.jpg",
  "dice 3.jpg",
  "dice 4.jpg",
  "dice 5.jpg",
  "dice 6.jpg",
];
const diceImg = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");  
function rollDice() {
  const random = Math.trunc(Math.random() * 6) + 1;   
  diceImg.src = `images/${diceFaces[random - 1]}`;     
  diceImg.style.display = "block";                   
}
rollBtn.addEventListener("click", rollDice);
