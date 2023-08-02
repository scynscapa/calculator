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
            displayValue += '+';
            break;
        case 'subtract':
            displayValue += '-';
            break;
        case 'multiply':
            displayValue += '*';
            break;
        case 'divide':
            displayValue += '/';
            break;
        case 'equals':
            doOperation();
            updateDisplay();
            break;
        case 'negate':
            negate();
            break;
        case 'clear':
            clearDisplay();
            break;
        case 'decimal':
            displayValue += '.';
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

function doOperation() {
    let operation = displayValue.match(/(?=.)([0-9]*)([\+-\/\*])([0-9]*)/g);

    let firstOperation = operation[0].split('');
    result = operate(Number(firstOperation[0]), firstOperation[1], 
        Number(firstOperation[2]));

    for (let i = 1; i < operation.length; i++) {
        let tempOperation = operation[i].split('');
        result = operate(result, tempOperation[0], Number(tempOperation[1]));
    }
    displayValue = result;
}