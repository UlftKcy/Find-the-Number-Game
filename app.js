// Random Number
const guessNumber = Math.floor(Math.random() * 10 * 10);
console.log(guessNumber);

// Guess The Number (1 - 100)
const input = document.querySelector("#form-input");
const btn = document.querySelector(".btn");
const p = document.querySelector(".message");

btn.addEventListener("click", guessNumberFunc);

function guessNumberFunc() {
  if (!isNaN(input.value)) {
    if (input.value == guessNumber) {
      if (window.confirm("Congrats! That's right.Do you want to try again?")) {
        window.location.reload();
      } else {
        p.innerText = "Thanks for Visiting!";
        input.value = "";
      }
    } else if (input.value > guessNumber) {
      p.innerText = "DOWN";
    } else {
      p.innerText = "UP";
    }
  } else {
    p.innerText = "Only Numbers";
  }
}

// Number of attempts
var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("attempt-number").innerHTML = clicks;
}

// reset

const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  window.location.reload();
});

// input change color

input.addEventListener("focus", focusColor);

function focusColor(event) {
  event.target.style.backgroundColor = "khaki";
}
input.addEventListener("blur", blurColor);

function blurColor(event) {
  event.target.style.backgroundColor = "lightblue";
}
