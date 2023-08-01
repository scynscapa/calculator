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

let number1 = 0;
let number2 = 0;
let operator = '';

function operate(num1, num2, oper) {
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
            return 'ERROR'; 
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
            break;
        case 'negate':
            negate();
            break;
        default:
            displayValue = `${displayValue} ${e.srcElement.id}`;
    }


    console.log(displayValue);
    updateDisplay();    
    
    console.log(e.srcElement.id);
}

function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}