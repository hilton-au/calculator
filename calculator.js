let screenValue = document.querySelector("#screen-value");
let currentValue = '';
let equation = 0;
let previousOperator = '';
let allButtons = document.querySelectorAll('button');
let numbers = document.querySelectorAll('.numbers');
let backspace = document.querySelector('#delete');
let clear = document.querySelector('#clear');
let operators = document.querySelectorAll('.operators');
let percent = document.querySelector('#percent');
let posNeg = document.querySelector('#pos-neg');
let decimal = document.querySelector('#decimal');


let updateScreen = function() {
    screenValue.textContent = currentValue;
};


updateScreen();

numbers.forEach((number) => {
    number.addEventListener('click',() => {
        if (currentValue.length < 13){
        currentValue = currentValue.concat(number.innerText);
        updateScreen();
        };
    });
});

decimal.addEventListener('click',() => {
    if (currentValue.length < 13){
        if (currentValue.includes('.')) {

        }
        else {
            currentValue = currentValue.concat(decimal.innerText);
            updateScreen();
        };
    };
});


backspace.addEventListener('click',()=> {
    currentValue = currentValue.slice(0,-1);
    updateScreen();
});

clear.addEventListener('click',()=> {
    equation = 0;
    currentValue = '';
    previousOperator = '';
    updateScreen();
})

operators.forEach((operator) => {
    operator.addEventListener('click',() => {
        switch(previousOperator){
            case '+':
                equation += Number(currentValue);
                screenValue.textContent = equation;
                currentValue = '';
                previousOperator = operator.innerText;
            break;
            case '-':
                equation -= Number(currentValue);
                screenValue.textContent = equation;
                currentValue = '';
                previousOperator = operator.innerText;
            break;
            case 'x':
                equation *= Number(currentValue);
                screenValue.textContent = equation;
                currentValue = '';
                previousOperator = operator.innerText;
            break;
            case '/':
                equation /= Number(currentValue);
                screenValue.textContent = equation;
                currentValue = '';
                previousOperator = operator.innerText;
            break;
            case '=':
                screenValue.textContent = equation;
                currentValue = '';
                previousOperator = '';
                equation = 0;
            break;
            default:
                previousOperator = operator.innerText;
                equation = Number(currentValue);
                screenValue.textContent = equation;
                currentValue = '';
        }
    });
});


percent.addEventListener('click',() => {
    let percentage = (Number(currentValue)/100);
    currentValue = percentage.toString();
    updateScreen();
});

posNeg.addEventListener('click',() => {
    if((Number(currentValue)) < 0){
        currentValue.slice(0,1);
        updateScreen();
    }
    else{
        currentValue = '-' + currentValue;
        updateScreen();
    }

});

