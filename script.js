const deleteButton = document.querySelector('#deleteButton');
const clearButton = document.querySelector('#clearButton'); 
const decimalButton = document.querySelector('#decimalButton');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const display = document.querySelector('.display');

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
    });
});

deleteButton.addEventListener('click', e => {
    e.preventDefault();

    let text = display.innerText;
    if(text.length === 1) {
        display.innerText = '0';
    }
    else {
        text = text.substring(0, text.length - 1);
        display.innerText = text;
    }
});

clearButton.addEventListener('click', e => {
    e.preventDefault();

    display.innerText = '0';
});

