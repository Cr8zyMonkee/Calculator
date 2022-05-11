let tempClass;
let tempNum;
let tempOp;
let num1;
let num2;

let btn = document.querySelectorAll('button');
btn.forEach(function (button) {
    button.addEventListener('click', () => {
        operate();
    })
})


function opBtns(){
    tempOp = button.getAttribute('id');
    num1 = Number(tempNum);
    tempNum = "";
}
function getBtnClass(){
    tempClass = button.getAttribute('id');
}

function digitBtns(){
    if(tempNum == 'undefined'){
        tempNum = button.getAttribute('id');
    }
    else {
        tempNum = tempNum + button.getAttribute('id'); 
    }
}

function decimalBtn(){
    tempNum = tempNum + '.';
}

function equalBtn(){
    num2 = Number(tempNum);
    equals(num1, num2, tempOp);
}

function add(add1, add2) {
    return add1 + add2;
}

function subtract(sub1, sub2) {
    return sub1 - sub2;
}

function multiply(mul1, mul2) {
    return mul1 * mul2;
}

function divide(div1, div2) {
    return div1 / div2;
}

function equals(firstNum, secondNum, operation) {
    if(operation === 'add'){
        add(firstNum, secondNum);
    }
    else if(operation === 'sub'){
        subtract(firstNum, secondNum);
    }
    else if(operation === 'mult'){
        multiply(firstNum, secondNum);
    }
    else if(operation === 'divi'){
        divide(firstNum, secondNum);
    }
}

function clear() {
    
}

function operate(){
    getBtnClass();

    if (tempClass === 'operators') {
        opBtns();
    }
    else if (tempClass === 'equals') {
        equalBtn();
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