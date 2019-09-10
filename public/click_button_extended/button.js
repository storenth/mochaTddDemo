'use strict';
//  Task
//  We want to create nine buttons enclosed in a div, 
//  laid out so they form a  grid. Each button has a distinct label from  to,
//  and the labels on the outer buttons must rotate in the clockwise direction each time we click the middle button.

const changeLabels = function() {
    const btn_1 = document.getElementById('btn1');
    const btn_2 = document.getElementById('btn2');
    const btn_3 = document.getElementById('btn3');
    const btn_4 = document.getElementById('btn4');
    const btn_6 = document.getElementById('btn6');
    const btn_7 = document.getElementById('btn7');
    const btn_8 = document.getElementById('btn8');
    const btn_9 = document.getElementById('btn9');

    let arrLabel =  [
        btn_1.innerHTML,
        btn_2.innerHTML,
        btn_3.innerHTML,
        btn_6.innerHTML,
        btn_9.innerHTML,
        btn_8.innerHTML,
        btn_7.innerHTML,
        btn_4.innerHTML
    ];
    console.log(arrLabel);
    let buffer = arrLabel.pop();
    arrLabel.unshift(buffer);
    console.log(arrLabel);
    
    btn_1.innerHTML = arrLabel[0];
    btn_2.innerHTML = arrLabel[1];
    btn_3.innerHTML = arrLabel[2];
    btn_6.innerHTML = arrLabel[3];
    btn_9.innerHTML = arrLabel[4];
    btn_8.innerHTML = arrLabel[5];
    btn_7.innerHTML = arrLabel[6];
    btn_4.innerHTML = arrLabel[7];

};

// Entry point

let btn = document.getElementById('btn5');
btn.addEventListener('click', changeLabels);



