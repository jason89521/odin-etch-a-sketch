import * as Canvas from "./canvas.js";
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

    Canvas.generateSquares(canvas, colorPalette, gridRange.value);
    Canvas.setMode('normal');

    gridRange.addEventListener('input', (e) => changeSquresNum(squares_nums, e.target.value));
    gridRange.addEventListener('change', (e) => Canvas.resetCanvas(canvas, colorPalette, e.target.value));

    normalBtn.addEventListener('click', (e) => {
        Canvas.setMode('normal')
        changeActiveBtn(document.querySelector('.active-btn'), normalBtn);
    });
    rainbowBtn.addEventListener('click', (e) => {
        Canvas.setMode('rainbow');
        changeActiveBtn(document.querySelector('.active-btn'), rainbowBtn);
    });
    specialBtn.addEventListener('click', (e) => {
        Canvas.setMode('special')
        changeActiveBtn(document.querySelector('.active-btn'), specialBtn);
    });
    clearBtn.addEventListener('click', (e) => Canvas.clearCanvas(canvas));
}