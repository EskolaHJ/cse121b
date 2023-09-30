/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    const sum = number1 + number2;
    return sum;
}
function addNumbers(){
   let firstNumber = parseFloat(document.querySelector('#add1').value);
   let secondNumber = parseFloat(document.querySelector('#add2').value);
   let sum = add(firstNumber,secondNumber);
   document.querySelector("#sum").value = sum;
   
   
}
document.querySelector("#addNumbers").addEventListener('click', addNumbers)
    /* Function Expression - Subtract Numbers */
function Subtract (number1, number2){
    const difference = number1 - number2;
    return difference;
}
function subtractNumbers(){
    let firstNumber = parseFloat(document.querySelector('#subtract1').value);
    let secondNumber = parseFloat(document.querySelector('#subtract2').value);
    let difference = Subtract(firstNumber,secondNumber);
    document.querySelector('#difference').value = difference;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);



/* Arrow Function - Multiply Numbers */
const Multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.querySelector('#factor1').value);
    let factor2 = parseFloat(document.querySelector('#factor2').value);
    let product = Multiply(factor1, factor2);
    document.querySelector('#product').value = product;
}

document.querySelector('#muliplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
function Divide(dividend, divisor){
    if (divisor === 0) return "Cannot divide by zero";
    return dividend / divisor;
}

function divideNumbers(){
    let dividendValue = parseFloat(document.querySelector('#dividend').value);
    let divisorValue = parseFloat(document.querySelector('#divisor').value);
    let quotientValue = Divide(dividendValue, divisorValue);
    document.querySelector('#quotient').value = quotientValue;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.querySelector('#year').innerText = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = Array.from({length: 13}, (_, i) => i + 1)
document.querySelector('#array').innerText = numbers.join(", ");

/* Output Odds Only Array */
let odds = numbers.filter(num => num % 2 !==0);
document.querySelector('#odds').innerText = odss.join(", ");

/* Output Evens Only Array */
let evens = numbers.filter(num => num % 2 === 0);
document.querySelector('#evens').innerText = evens.join(", ")

/* Output Sum of Org. Array */
let sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
document.querySelector('#summOfArray').innerText = sumOfNumbers;

/* Output Multiplied by 2 Array */
let multipliedNumbers = numbers.map(num => num * 2);
document.querySelector('#multiplied').innerText = multipliedNumbers.join(", ")

/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedNumbers = multipliedNumbers.reduce((acc, num) => acc + num, 0);
document.querySelector('#sumOfMultiplied').innerText = sumOfMultipliedNumbers;
