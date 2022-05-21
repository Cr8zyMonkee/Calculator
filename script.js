function equal() {
    num2 = Number(tempNum);
    equals(num1, num2, tempOp);
}


function add(add1, add2) {
    let addedValue = add1 + add2;
    console.log(addedValue);
    total = addedValue;
}


function subtract(sub1, sub2) {
    let subValue = sub1 - sub2;
    console.log(subValue);
    total = subValue;
}


function multiply(mul1, mul2) {
    let multValue = mul1 * mul2;
    console.log(multValue);
    total = multValue;
}


function divide(div1, div2) {
    let diviValue = div1 / div2;
    console.log(diviValue);
    total = diviValue;
}


function equals(numOne, numTwo, operation) {
    if (operation === 'add') {
        add(numOne, numTwo);
    }
    else if (operation === 'sub') {
        subtract(numOne, numTwo);
    }
    else if (operation === 'mult') {
        multiply(numOne, numTwo);
    }
    else if (operation === 'divi') {
        divide(numOne, numTwo);
    }
}


function operate() {

    if (tempClass === 'operators') {
        opBtns();
    }
    else if (tempClass === 'equals') {
        equal();
    }
    else if (tempClass === 'decimal') {
        decimalBtn();
    }
    else if (tempClass === 'numBtns') {
        digitBtns();
    }
    else if (tempClass === 'clear') {

    }
}


let displayCurrent = '';
let firstNum = "";
let secondNum = "";
let total = 0;
let addition = false;
let subtraction = false;
let divi = false;
let multi = false;
let operatorPressed = false;
let firstDecimalPressed = false;
let secondDecimalPressed = false;
let operationCompleted = false;

const displayBtn = document.querySelectorAll('button');
displayBtn.forEach(function (display) {
    display.addEventListener('click', () => {

        if(display.getAttribute('class') === 'numBtns'){
            displayCurrent = displayCurrent =+ display.getAttribute('id');
        }
        else if(display.getAttribute('class') === 'equals'){
            return;
        }
        else
        {
            displayCurrent = display.getAttribute('id');
        }

        document.getElementById('display').innerHTML = displayCurrent;
    })
})


const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    addition = true;
    operatorPressed = true;
    
})


const subBtn = document.querySelector('#sub');
subBtn.addEventListener('click', () => {
    subtraction = true;
    operatorPressed = true;
})


const multBtn = document.querySelector('#mult');
multBtn.addEventListener('click', () => {
    multi = true;
    operatorPressed = true;
})


const divBtn = document.querySelector('#divi');
divBtn.addEventListener('click', () => {
    divi = true;
    operatorPressed = true;
})


const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', () => {
    firstNum = 0;
    secondNum = 0;
    addition = false;
    subtraction = false;
    divi = false;
    multi = false;
    operatorPressed = false;
    operationCompleted = false;
})


const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    if(operationCompleted === false){
        let operator;
        if (addition === true) {
            operator = 'add';
        }
        else if (subtraction === true) {
            operator = 'sub'
        }
        else if (divi === true) {
            operator = 'divi';
        }
        else if (multi === true) {
            operator = 'mult';
        }
        equals(Number(firstNum), Number(secondNum), operator);
        operationCompleted = true;
        displayCurrent = total.toString();
        document.getElementById('display').innerHTML = displayCurrent; 
    }
    return;
})

const numBtn = document.querySelectorAll('.numBtns');
numBtn.forEach(function (num) {
    num.addEventListener('click', () => {
        let tempNum = num.getAttribute('id');

        if (operatorPressed === false) {
            firstNum += tempNum;
        }
        else if (operatorPressed === true) {
            secondNum += tempNum;
        }
    })
})

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
    if (operatorPressed === false && firstDecimalPressed === false) {
        firstNum += ".";
        firstDecimalPressed = true;
    }
    else if (operatorPressed === true && secondDecimalPressed === false) {
        secondNum += ".";
        secondDecimalPressed = true;
    }
})