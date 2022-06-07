function equal() {
    num2 = Number(tempNum);
    equals(num1, num2, tempOp);
}


function add(add1, add2) {
    let addedValue = add1 + add2;
    total = addedValue;
}


function subtract(sub1, sub2) {
    let subValue = sub1 - sub2;
    total = subValue;
}


function multiply(mul1, mul2) {
    let multValue = mul1 * mul2;
    total = multValue;
}


function divide(div1, div2) {
    if (div2 != 0) {
        let diviValue = div1 / div2;
        total = diviValue;
    } else {
        alert("You cannot divide by zero");
        return;
    }
}


function equals(numOne, numTwo) {
    if (addition === true) {
        add(numOne, numTwo);
    }
    else if (subtraction === true) {
        subtract(numOne, numTwo);
    }
    else if (multi === true) {
        multiply(numOne, numTwo);
    }
    else if (divi === true) {
        divide(numOne, numTwo);
    }

    addition = false;
    subtraction = false;
    divi = false;
    multi = false;

}

function clear() {
    displayCurrent = '0';
    firstNum = '';
    secondNum = '';
    firstNumArr = [];
    secondNumArr = [];
    total = 0;
    addition = false;
    subtraction = false;
    divi = false;
    multi = false;
    operatorPressed = false;
    firstDecimalPressed = false;
    secondDecimalPressed = false;
    operationCompleted = false;
    document.getElementById('display').innerHTML = displayCurrent;
}

function undo() {
    if (operatorPressed === false) {
        firstNumArr.pop();
        firstNum = Number(firstNumArr.join(''));
        displayCurrent = firstNum;
    }
    else if (operatorPressed === true) {
        secondNumArr.pop();
        secondNum = Number(secondNumArr.join(''));
        displayCurrent = secondNum;
    }
    document.getElementById('display').innerHTML = displayCurrent;
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


let displayCurrent = '0';
let firstNum = '';
let secondNum = '';
let firstNumArr = [];
let secondNumArr = [];
let total = 0;
let addition = false;
let subtraction = false;
let divi = false;
let multi = false;
let operatorPressed = false;
let firstDecimalPressed = false;
let secondDecimalPressed = false;
let operationCompleted = false;
let addSym = '+';
let subSym = '-';
let multSym = 'x';
let divSym = '÷';


document.getElementById('display').innerHTML = displayCurrent;

const displayBtn = document.querySelectorAll('button');
displayBtn.forEach(function (display) {
    display.addEventListener('click', () => {

        if (display.getAttribute('class') === 'equals') {
            return;
        }
        else if (display.getAttribute('class') === 'operators' && operatorPressed === true) {
            equals(Number(firstNum), Number(secondNum));
            firstNum = Number(total);
            secondNum = 0;
            secondNumArr = [];
            displayCurrent = Math.round(firstNum * 100) / 100;
            document.getElementById('display').innerHTML = displayCurrent;
        }

        document.getElementById('display').innerHTML = displayCurrent;
    })
})


const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    addition = true;
    operatorPressed = true;
    displayCurrent = addSym;
    if(operatorPressed === true){
        return;
    }else{
        document.getElementById('display').innerHTML = displayCurrent;
    }
})


const subBtn = document.querySelector('#sub');
subBtn.addEventListener('click', () => {
    subtraction = true;
    operatorPressed = true;
    displayCurrent = subSym;
    if(operatorPressed === true){
        return;
    }else{
        document.getElementById('display').innerHTML = displayCurrent;
    }
})


const multBtn = document.querySelector('#mult');
multBtn.addEventListener('click', () => {
    multi = true;
    operatorPressed = true;
    displayCurrent = multSym;
    if(operatorPressed === true){
        return;
    }else{
        document.getElementById('display').innerHTML = displayCurrent;
    }
})


const divBtn = document.querySelector('#divi');
divBtn.addEventListener('click', () => {
    divi = true;
    operatorPressed = true;
    displayCurrent = divSym;
    if(operatorPressed === true){
        return;
    }else{
        document.getElementById('display').innerHTML = displayCurrent;
    }
})


const clearBtn = document.querySelector('#clear')
clearBtn.addEventListener('click', () => {
    clear();
})


const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
    if ((firstNum != '' && secondNum != '') && operationCompleted === false) {
        equals(Number(firstNum), Number(secondNum));
        operationCompleted = true;
        addition = false;
        subtraction = false;
        divi = false;
        multi = false;
        operatorPressed = false;
        displayCurrent = Math.round(Number(total) * 100) / 100;
        document.getElementById('display').innerHTML = displayCurrent;
        total = 0;
    }
    return;
})

const numBtn = document.querySelectorAll('.numBtns');
numBtn.forEach(function (num) {
    num.addEventListener('click', () => {
        let tempNum = num.getAttribute('id');

        if (operatorPressed === false) {
            firstNumArr.push(tempNum);
            firstNum = Number(firstNumArr.join(''));
            displayCurrent = firstNum;
            document.getElementById('display').innerHTML = displayCurrent;
        }
        else if (operatorPressed === true) {
            secondNumArr.push(tempNum);
            secondNum = Number(secondNumArr.join(''));
            displayCurrent = secondNum;
            document.getElementById('display').innerHTML = displayCurrent;
        }


    })
})

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
    if (operatorPressed === false && firstDecimalPressed === false) {
        firstNumArr.push('.');
        firstDecimalPressed = true;
        firstNum = firstNumArr.join('');
        displayCurrent = firstNum;
        document.getElementById('display').innerHTML = displayCurrent;
    }
    else if (operatorPressed === true && secondDecimalPressed === false) {
        secondNumArr.push(".");
        secondDecimalPressed = true;
        secondNum = secondNumArr.join('');
        displayCurrent = secondNum;
        document.getElementById('display').innerHTML = displayCurrent;
    }
})