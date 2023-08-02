function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, oper, num2) {
    switch (oper) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null; 
    }
}

let displayValue = '';

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', buttonClicked));

function buttonClicked(e) {
    keyId = e.srcElement.id;
    switch (keyId) {
        case 'add':
            displayValue += ' + ';
            enableDecimal();
            break;
        case 'subtract':
            displayValue += ' - ';
            enableDecimal();
            break;
        case 'multiply':
            displayValue += ' * ';
            enableDecimal();
            break;
        case 'divide':
            displayValue += ' / ';
            enableDecimal();
            break;
        case 'equals':
            doOperation();
            enableDecimal();
            updateDisplay();
            break;
        case 'negate':
            negate();
            break;
        case 'clear':
            clearDisplay();
            enableDecimal();
            break;
        case 'decimal':
            displayValue += '.';
            disableDecimal();
            break;
        default:
            displayValue = `${displayValue}${e.srcElement.id}`;
    }

    updateDisplay();
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function  doOperation() {
    let operation = displayValue.split(' ');

    result = operation.splice(0,1);
    while (operation.length > 1) {
        result = operate(Number(result), operation.splice(0,1)[0], Number(operation.splice(0,1)));
    }
    
    displayValue = Math.round(result * 1000) / 1000;
}

function disableDecimal() {
    decimal = document.getElementById('decimal');
    decimal.removeEventListener('click', buttonClicked);
}

function enableDecimal() {
    decimal = document.getElementById('decimal');
    decimal.addEventListener('click', buttonClicked);
}