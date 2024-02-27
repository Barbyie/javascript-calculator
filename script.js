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
  return (num1 / num2);
};

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

const operate = function(num1, operator, num2) {
  return operator(num1, num2);
};

