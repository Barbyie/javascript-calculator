const add = function(num1, num2) {
  return (num1 + num2);
};

const subtract = function(num1, num2) {
  return (num1 - num2);
};

const multiply = function(num1, num2) {
  return (num1 * num2);
};

const divide = function(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    display.textContent = "lmao";
  }else {
    return (num1 / num2);
  };
};

// These are the 4 main operators that the calculator will use.

const operate = function(num1, operator, num2) {
  return operator(Number(num1), Number(num2));
}; // This is the function that will calculate the values in the entire code.

let firstNumber = ""; //This variable will be a placeholder for the first value of displayValue.
let operator = "";
let displayValue = "";

let display = document.querySelector(".display");

let buttonZero= document.querySelector(".zero");
buttonZero.addEventListener("click", () => {
  displayValue += "0"; 
  display.textContent += 0;
});

let buttonOne = document.querySelector(".one");
buttonOne.addEventListener("click", () => {
  displayValue += "1"; 
  display.textContent += 1;
});

let buttonTwo= document.querySelector(".two");
buttonTwo.addEventListener("click", () => {
  displayValue += "2"; 
  display.textContent += 2;
});

let buttonThree= document.querySelector(".three");
buttonThree.addEventListener("click", () => {
  displayValue += "3"; 
  display.textContent += 3;
});

let buttonFour= document.querySelector(".four");
buttonFour.addEventListener("click", () => {
  displayValue += "4"; 
  display.textContent += 4;
});

let buttonFive= document.querySelector(".five");
buttonFive.addEventListener("click", () => {
  displayValue += "5"; 
  display.textContent += 5;
});

let buttonSix= document.querySelector(".six");
buttonSix.addEventListener("click", () => {
  displayValue += "6"; 
  display.textContent += 6;
});

let buttonSeven= document.querySelector(".seven");
buttonSeven.addEventListener("click", () => {
  displayValue += "7"; 
  display.textContent += 7;
});

let buttonEight= document.querySelector(".eight");
buttonEight.addEventListener("click", () => {
  displayValue += "8"; 
  display.textContent += 8;
});

let buttonNine= document.querySelector(".nine");
buttonNine.addEventListener("click", () => {
  displayValue += "9";
  display.textContent += 9;
});

// One event listener for each button, that will show text in the calculator, and will increase
// in the displayValue.

let buttonAdd= document.querySelector(".add");
buttonAdd.addEventListener("click", () => {
  if (firstNumber !== "") {
    display.textContent = operate(firstNumber, add, displayValue);
    displayValue = operate(firstNumber, add, displayValue);
  }; // This function checks if the firstNumber already has a number saved inside of it.
     // And if it has, it will run the operation so that we can proceed to the next one.
  display.textContent += "+";
  operator =  "";
  firstNumber = displayValue;
  displayValue = "";
  operator =  "+";
});

let buttonSubtract= document.querySelector(".subtract");
buttonSubtract.addEventListener("click", () => {
  if (firstNumber !== "") {
    display.textContent = operate(firstNumber, subtract, displayValue);
    displayValue = operate(firstNumber, subtract, displayValue);
  };
  display.textContent += "-";
  operator = "";
  firstNumber = displayValue;
  displayValue = "";
  operator = "-";
});

let buttonMultiply= document.querySelector(".multiply");
buttonMultiply.addEventListener("click", () => {
  if (firstNumber !== "") {
    display.textContent = operate(firstNumber, multiply, displayValue);
    displayValue = operate(firstNumber, multiply, displayValue);
  };
  display.textContent += "x";
  operator = "";
  firstNumber = displayValue;
  displayValue = "";
  operator = "*";
});

let buttonDivide= document.querySelector(".divide");
buttonDivide.addEventListener("click", () => {
  if (firstNumber !== "") {
    display.textContent = operate(firstNumber, divide, displayValue);
    displayValue = operate(firstNumber, divide, displayValue);
  };
  display.textContent += "/";
  operator = "";
  firstNumber = displayValue;
  displayValue = "";
  operator = "/";
});

let buttonEquals= document.querySelector(".equals");
buttonEquals.addEventListener("click", () => {
  switch (operator) {
    case "+":
      display.textContent = operate(firstNumber, add, displayValue);
      displayValue = operate(firstNumber, add, displayValue);
      break;
    case "-":
      display.textContent = operate(firstNumber, subtract, displayValue);
      displayValue = operate(firstNumber, subtract, displayValue);
      break;
    case "*":
      display.textContent = operate(firstNumber, multiply, displayValue);
      displayValue = operate(firstNumber, multiply, displayValue);
      break;
    case "/":
      display.textContent = operate(firstNumber, divide, displayValue);
      displayValue = operate(firstNumber, divide, displayValue);
      break;
  };
  firstNumber = ""; // After the = is triggered, it will wipe the firstNumber variable.
});

let buttonClear= document.querySelector(".clear");
buttonClear.addEventListener("click", () => {
  firstNumber = "";
  displayValue = "";
  display.textContent = "";
  operator = "";
  // This event listener will reset the operations so that the user can start fresh.
});

