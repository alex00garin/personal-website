// function to clear the display
function clearResult() {
  document.getElementById("result").textContent = "0";
}

// function to delete last symbol from display
function deleteSymbol() {
  let result = document.getElementById("result").textContent;
  // remove last character from the result string
  result = result.slice(0, -1);
  // if result string is empty, set it to "0"
  if (result === "") {
    result = "0";
  }
  document.getElementById("result").textContent = result;
}

// function to append operator to the display
function appendOperator(operator) {
  let result = document.getElementById("result").textContent;
  // if last character of result string is an operator, replace it with the new operator
  if (isOperator(result.slice(-1))) {
    result = result.slice(0, -1);
  }
  document.getElementById("result").textContent = result + operator;
}

// function to check if the character is an operator
function isOperator(character) {
  return ["+", "-", "*", "/"].includes(character);
}

// function to append number to the display
function appendNumber(number) {
  let result = document.getElementById("result").textContent;
  // if result string is "0", replace it with the new number
  if (result === "0") {
    result = "";
  }
  document.getElementById("result").textContent = result + number;
}

// function to append decimal point to the display
function appendDecimal() {
  let result = document.getElementById("result").textContent;
  let lastChar = result.charAt(result.length - 1);

  // check if the last character is a decimal point or not
  if (lastChar !== "." || !result.includes(".")) {
    let operators = ["+", "-", "*", "/"];
    let operatorIndex = result.split("").findIndex(char => operators.includes(char));
    let currentNumber = operatorIndex === -1 ? result : result.slice(operatorIndex + 1);
    if (!currentNumber.includes(".")) {
      document.getElementById("result").textContent = result + ".";
    }
  }
}  


let decimalAdded = false;

function appendNumber(number) {
let result = document.getElementById("result").textContent;

// check if the current number already has a decimal point
if (number === ".") {
  if (decimalAdded) {
    // if a decimal point has already been added to the current number, do nothing
    return;
  } else {
    // if a decimal point has not been added to the current number, set decimalAdded to true
    decimalAdded = true;
  }
}

// if result string is "0", replace it with the new number
if (result === "0") {
  result = "";
}
document.getElementById("result").textContent = result + number;
}


// function to calculate the result of the expression
function calculate() {
  let result = document.getElementById("result").textContent;
  try {
    result = eval(result); // evaluate the expression using eval() function
    if (result === Infinity || result === -Infinity) {
      // check if the result is infinity or negative infinity
      throw "Error: Dividing by zero"; // throw an error message
    }
    document.getElementById("result").textContent = result; // display the result
  } catch (error) {
    // if there is any error, display the error message
    document.getElementById("result").textContent = error;
  }
}
