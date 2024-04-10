let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let currentOperation = null;

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function setOperation(operation) {
    if (currentNumber === '') return;
    if (previousNumber !== '') calculateResult();
    currentOperation = operation;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    currentOperation = null;
}
function clearDisplay() {
  display.value = '';
  currentNumber = '';
  previousNumber = '';
  currentOperation = null;
}
function calculateLog() {
  const number = parseFloat(currentNumber);
  if (isNaN(number) || number <= 0) {
    display.value = 'Error';
    return;
  }
  display.value = Math.log(number);
  currentNumber = Math.log(number).toString();
}
function calculateExponentiation() {
  const base = parseFloat(previousNumber);
  const exponent = parseFloat(currentNumber);
  if (isNaN(base) || isNaN(exponent)) {
    display.value = 'Error';
    return;
  }
  display.value = Math.pow(base, exponent);
  currentNumber = Math.pow(base, exponent).toString();
}
function calculateSquareRoot() {
  const number = parseFloat(currentNumber);
  if (isNaN(number) || number < 0) {
    display.value = 'Error';
    return;
  }
  display.value = Math.sqrt(number);
  currentNumber = Math.sqrt(number).toString();
}
function calculateFactorial() {
  const number = parseInt(currentNumber);
  if (isNaN(number) || number < 0) {
    display.value = 'Error';
    return;
  }
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  display.value = result;
  currentNumber = result.toString();
}
function calculatePercentage() {
  const number = parseFloat(previousNumber);
  if (isNaN(number)) {
    display.value = 'Error';
    return;
  }
  display.value = (number / 100) * parseFloat(currentNumber);
  currentNumber = ((number / 100) * parseFloat(currentNumber)).toString();
}
function calculateSin() {
  const number = parseFloat(currentNumber);
  if (isNaN(number)) {
    display.value = 'Error';
    return;
  }
  display.value = Math.sin(number);
  currentNumber = Math.sin(number).toString();
}
function calculateCos() {
  const number = parseFloat(currentNumber);
  if (isNaN(number)) {
    display.value = 'Error';
    return;
  }
  display.value = Math.cos(number);
  currentNumber = Math.cos(number).toString();
}
function calculateTan() {
  const number = parseFloat(currentNumber);
  if (isNaN(number)) {
    display.value = 'Error';
    return;
  }
  display.value = Math.tan(number);
  currentNumber = Math.tan(number).toString();
}
// Implement the rest of the functions here