//functions

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

function numPressed(num) {
    if (num === 'n0') {
        return '0';
    } else if (num === 'n1') {
        return '1';
    } else if (num === 'n2') {
        return '2';
    } else if (num === 'n3') {
        return '3';
    } else if (num === 'n4') {
        return '4';
    } else if (num === 'n5') {
        return '5';
    } else if (num === 'n6') {
        return '6';
    } else if (num === 'n7') {
        return '7';
    } else if (num === 'n8') {
        return '8';
    } else if (num === 'n9') {
        return '9';
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

// Variables

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

// event listeners
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
    if (operatorPressed === true) {
        return;
    } else {
        document.getElementById('display').innerHTML = displayCurrent;
    }
})


const subBtn = document.querySelector('#sub');
subBtn.addEventListener('click', () => {
    subtraction = true;
    operatorPressed = true;
    displayCurrent = subSym;
    if (operatorPressed === true) {
        return;
    } else {
        document.getElementById('display').innerHTML = displayCurrent;
    }
})


const multBtn = document.querySelector('#mult');
multBtn.addEventListener('click', () => {
    multi = true;
    operatorPressed = true;
    displayCurrent = multSym;
    if (operatorPressed === true) {
        return;
    } else {
        document.getElementById('display').innerHTML = displayCurrent;
    }
})


const divBtn = document.querySelector('#divi');
divBtn.addEventListener('click', () => {
    divi = true;
    operatorPressed = true;
    displayCurrent = divSym;
    if (operatorPressed === true) {
        return;
    } else {
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
        let numID = num.getAttribute('id');
        let tempNum = numPressed(numID);
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

const deleteBtn = document.querySelector('#undo');
deleteBtn.addEventListener('click', () => {
    undo();
})

//keyboard support

document.addEventListener('keydown', (e) => {
    if (e.code === 'Backspace') {
        undo();
    }
    else if (e.code === 'Enter' || e.code === '') {
        if ((firstNum != '' && secondNum != '') &&
            operationCompleted === false) {
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
    }
    else if (e.code === 'Period' || e.code === 'NumpadDecimal') {
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
    }
    else if (e.code === 'Delete') {
        clear();
    }
    else if (e.code === 'NumpadMultiply') {
        multi = true;
        operatorPressed = true;
        displayCurrent = multSym;
        if (operatorPressed === true) {
            return;
        } else {
            document.getElementById('display').innerHTML = displayCurrent;
        }
    }
    else if (e.code === 'NumpadDivide') {
        divi = true;
        operatorPressed = true;
        displayCurrent = divSym;
        if (operatorPressed === true) {
            return;
        } else {
            document.getElementById('display').innerHTML = displayCurrent;
        }
    }
    else if (e.code === 'NumpadSubtract') {
        subtraction = true;
        operatorPressed = true;
        displayCurrent = subSym;
        if (operatorPressed === true) {
            return;
        } else {
            document.getElementById('display').innerHTML = displayCurrent;
        }
    }
    else if (e.code === 'NumpadAdd') {
        addition = true;
        operatorPressed = true;
        displayCurrent = addSym;
        if (operatorPressed === true) {
            return;
        } else {
            document.getElementById('display').innerHTML = displayCurrent;
        }
    }
    else if (e.code === 'Numpad0' || e.code === 'Digit0') {
        let tempNum = '0';

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
    }
    else if (e.code === 'Numpad1' || e.code === 'Digit1') {
        let tempNum = '1';

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
    }
    else if (e.code === 'Numpad2' || e.code === 'Digit2') {
        let tempNum = '2';

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
    }
    else if (e.code === 'Numpad3' || e.code === 'Digit3') {
        let tempNum = '3';

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
    }
    else if (e.code === 'Numpad4' || e.code === 'Digit4') {
        let tempNum = '4';

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
    }
    else if (e.code === 'Numpad5' || e.code === 'Digit5') {
        let tempNum = '5';

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
    }
    else if (e.code === 'Numpad6' || e.code === 'Digit6') {
        let tempNum = '6';

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
    }
    else if (e.code === 'Numpad7' || e.code === 'Digit7') {
        let tempNum = '7';

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
    }
    else if (e.code === 'Numpad8' || e.code === 'Digit8') {
        let tempNum = '8';

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
    }
    else if (e.code === 'Numpad9' || e.code === 'Digit9') {
        let tempNum = '9';

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
    }
});