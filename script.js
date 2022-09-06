const deleteButton = document.querySelector('#deleteButton');
const clearButton = document.querySelector('#clearButton'); 
const decimalButton = document.querySelector('#decimalButton');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const display = document.querySelector('.display');
const equalsButton = document.querySelector('#equalsButton');

let firstValue = Number(display.innerText);
let secondValue = 0;
let operand = null;
let decimalState = true;

const add = (a,b) => {
    return a+b;
}

const subtract = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    return a/b;
}

const operate = (num1, num2, operator) => {
    switch(operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();

        if(display.innerText === '0') display.innerText = '';
        display.innerText += button.innerText;
        if(isNull(operand)){
            firstValue = Number(display.innerText);
        }
        else {
            secondValue = Number(display.innerText);
        }
        
    });
});

deleteButton.addEventListener('click', e => {
    e.preventDefault();

    let text = display.innerText;
    if(text.length === 1) {
        display.innerText = '0';
        if(isNull(operand)){
            firstValue = Number(display.innerText);
        }
        else {
            secondValue = Number(display.innerText);
        }
    }
    else {
        text = text.substring(0, text.length - 1);
        display.innerText = text;
        if(isNull(operand)){
            firstValue = Number(display.innerText);
        }
        else {
            secondValue = Number(display.innerText);
        }
    }
});

clearButton.addEventListener('click', e => {
    e.preventDefault();

    display.innerText = '0';
    firstValue = Number(display.innerText);
    secondValue = 0;
});

operatorButtons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();

        if(operand !== null) {
            equals();
            operand = null;
        }
        display.innerText = '0';
        decimalState = true;
        operand = button.innerText;
    });
});

equalsButton.addEventListener('click', e => {
    e.preventDefault();

    equals();
});

decimalButton.addEventListener('click', e => {
    e.preventDefault();

    if(decimalState) {
        display.innerText += '.';
        decimalState = false;
    }
});

const isNull = (operand) => {
    return operand === null ? true : false;
}

const equals = () => {

    if(operand !== null) {
        let number = Math.round(operate(firstValue, secondValue, operand) * 1000) / 1000
        display.innerText = `${number}`;
        operand = null;
        firstValue = Number(display.innerText);
        secondValue = 0;
    }
};