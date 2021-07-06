const form = document.querySelector("#login_form");
const maxNum = document.querySelector("#generate");
const guessNum = document.querySelector("#guess");
const machineNum = document.querySelector("#machine");
const result = document.querySelector("#result");

const startGame = function (event) {
  event.preventDefault();

  const maxNum_parse = parseInt(maxNum.value);
  const guessNumb_parse = parseInt(guessNum.value);
  const randomNum = Math.round(Math.random() * maxNum_parse);

  machineNum.textContent = `You chose : ${guessNumb_parse}, The machine chose : ${randomNum}`;
  
  machineNum.classList.remove("hide");
  result.classList.remove("hide");

  if (guessNumb_parse === randomNum) {
    result.textContent = "You won!";
  } else if (maxNum_parse < guessNumb_parse) {
    result.textContent = `Choose a number smaller than ${maxNum_parse}`;
  } else {
    result.textContent = "You lost!";
  }
};

form.addEventListener("submit", startGame);
