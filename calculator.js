let screenValue = document.querySelector("#screen-value");
let currentValue = '0';
let equation = 0;
let currentOperator = '';
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
    screenValue.textContent = currentValue
};


updateScreen();


numbers.forEach((number) => {
    number.addEventListener('click',() => {
        previousOperator = currentOperator
        if (currentValue.length >= 15){
            alert(`Number exceeds screensize!`)
        }
        else if (currentValue.length < 15 && currentValue != '0'){
            currentValue = currentValue.concat(number.innerText)
            updateScreen()
        }
        else {
            currentValue = number.innerText
            updateScreen()
        }
    })
});


decimal.addEventListener('click',() => {
    if (currentValue.length < 15){
        if (currentValue.includes('.')) {

        }
        else {
            currentValue = currentValue.concat(decimal.innerText)
            updateScreen()
        }
    }
    else{
        alert(`Number exceeds screensize!`)
    }
});


backspace.addEventListener('click',()=> {
    currentValue = currentValue.substring(0,currentValue.length-1)
    if (currentValue == ""){
        currentValue = "0"
    }
    updateScreen()
});

clear.addEventListener('click',()=> {
    equation = 0
    currentValue = '0'
    previousOperator = ''
    updateScreen()
});


// There is a bug where if operator is doubleclicked, then equation is zeroed out

operators.forEach((operator) => {
    operator.addEventListener('click',() => {
        if (currentOperator == previousOperator) {
            switch(previousOperator){
                case '+':
                        equation += Number(currentValue)
                        screenValue.textContent = String(equation).substring(0,15)
                break
                case '-':
                    equation -= Number(currentValue)
                    screenValue.textContent = String(equation).substring(0,15)
                break
                case 'x':
                    equation *= Number(currentValue)
                    screenValue.textContent = String(equation).substring(0,15)

                break
                case '/':
                    equation /= Number(currentValue)
                    screenValue.textContent = String(equation).substring(0,15)
                break
                default:
                        equation = Number(currentValue)
                        screenValue.textContent = String(equation).substring(0,15)
            }
            currentValue = ''
            currentOperator = operator.innerText
        }
    })
});


percent.addEventListener('click',() => {
    if (previousOperator == 'x'){
        let percentage = (Number(currentValue)/100)
        currentValue = percentage.toString()
        updateScreen()
    }
});

posNeg.addEventListener('click',() => {
    let number = Number(currentValue)
    if (number == 0){
        updateScreen()
    }
    else if (number < 0){
        currentValue = currentValue.substring(1)
        updateScreen()
    }
    else{
        currentValue = '-' + currentValue
        updateScreen()
    }

});

