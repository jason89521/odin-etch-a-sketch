import * as MyCanvas from "./canvas.js";
import { changeSquresNum, changeActiveBtn } from "./eventHandler.js"

// Canvas related
let canvas = document.querySelector('.canvas');

// Control related
let colorPalette = document.querySelector('input[type=color]');
let gridRange = document.querySelector('input[type=range]');
let squares_nums = document.querySelectorAll('.squares-num');
let normalBtn = document.querySelector('#normal-btn');
let rainbowBtn = document.querySelector('#rainbow-btn');
let specialBtn = document.querySelector('#special-btn');
let clearBtn = document.querySelector('#clear-btn');

init();

function init() {
    squares_nums.forEach((squares_num) => {
        squares_num.innerText = gridRange.value;
    })

    // MyCanvas.generateSquares(canvas, colorPalette, gridRange.value);
    MyCanvas.generateSquares(canvas, gridRange.value);
    MyCanvas.setMode('normal');
    canvas.addEventListener('mouseover', function(e) {
        if(e.target.classList.contains('square-grid'))
            MyCanvas.renderSquare(e.target, colorPalette);
    });

    gridRange.addEventListener('input', (e) => changeSquresNum(squares_nums, e.target.value));
    gridRange.addEventListener('change', (e) => MyCanvas.resetCanvas(canvas, e.target.value));

    normalBtn.addEventListener('click', (e) => {
        MyCanvas.setMode('normal')
        changeActiveBtn(document.querySelector('.active-btn'), normalBtn);
    });
    rainbowBtn.addEventListener('click', (e) => {
        MyCanvas.setMode('rainbow');
        changeActiveBtn(document.querySelector('.active-btn'), rainbowBtn);
    });
    specialBtn.addEventListener('click', (e) => {
        MyCanvas.setMode('special')
        changeActiveBtn(document.querySelector('.active-btn'), specialBtn);
    });
    clearBtn.addEventListener('click', (e) => MyCanvas.clearCanvas(canvas));
}