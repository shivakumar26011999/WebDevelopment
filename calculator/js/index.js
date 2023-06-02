"use strict";

console.log("Calculator...!");

const buttonContainer = document.querySelector(".proper");
const userInput = document.querySelector(".textbox");
const equalTo = document.querySelector(".equalto");
const clearBtn = document.querySelector(".clear");

buttonContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("realbutton")) {
    let currentValue = e.target.dataset.value;
    userInput.value = userInput.value + currentValue;
    // console.log(e.target.dataset.value);
  }
});

clearBtn.addEventListener("click", function () {
  userInput.value = "";
});

equalTo.addEventListener("click", function () {
  const result = eval(userInput.value);
  console.log(result);
  userInput.value = result;
}) 
