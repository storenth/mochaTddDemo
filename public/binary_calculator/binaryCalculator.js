'use strict';
//  Task
//  We want to create nine buttons enclosed in a div, 
//  laid out so they form a  grid. Each button has a distinct label from  to,
//  and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.


// Entry point

document.getElementById('btn0').addEventListener('click', inputZero);
document.getElementById('btn1').addEventListener('click', inputOne);
document.getElementById('btnClr').addEventListener('click', wipeInput);
document.getElementById('btnSum').addEventListener('click', inputSign);
document.getElementById('btnSub').addEventListener('click', inputSign);
document.getElementById('btnMul').addEventListener('click', inputSign);
document.getElementById('btnDiv').addEventListener('click', inputSign);
document.getElementById('btnEql').addEventListener('click', evalExpression);




/** Event handler
 * Get the element's innerHTML and append `0` 
*/
function inputZero() {
    document.getElementById('res').innerHTML += 0;
};
/** Event handler
 * Get the element's innerHTML and append `1`
*/
function inputOne() {
    document.getElementById('res').innerHTML += 1;
};
/** Event handler
 * Empty Output
 */
function wipeInput() {
    document.getElementById('res').innerHTML = '';
};

/** Event handler
 * Get the Output element's innerHTML and append `+ - * /`
 */
function inputSign(e) {
    let btn = e.target;
    if (btn.id == 'btnSum') {
        document.getElementById('res').innerHTML += '+';
    }
    else if (btn.id == 'btnSub'){
        document.getElementById('res').innerHTML += '-';

    }
    else if (btn.id == 'btnMul'){
        document.getElementById('res').innerHTML += '*';

    }
    else {
        document.getElementById('res').innerHTML += '/';

    }
};

/** Event handler
 * Evaluate expression
 */
function evalExpression() {
    let expressionTmp = document.getElementById('res').innerHTML;
    // first need strip
    // let expression = expressionTmp.replace(/^[\+]+|[\+]+$/, '');
    let expressionArr = expressionTmp.split(/([\+\-\*\/])/);
    let operand1 = parseInt(expressionArr[0], 2);
    let operand2 = parseInt(expressionArr[2], 2);
    let expression = eval(`${operand1}${expressionArr[1]}${operand2}`);
    let finalDecimal = Math.floor(expression);
    let finalBinary = (finalDecimal).toString(2);
    wipeInput();
    document.getElementById('res').innerHTML = finalBinary;
    console.log(`final decimal after Math.floor = ${finalDecimal},
                final binary representation = ${finalBinary}`);
};



