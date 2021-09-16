import * as MyCanvas from "./canvas.js";
import { changeSquresNum, changeActiveBtn } from "./eventHandler.js"

// Canvas related
let canvas = document.querySelector('.canvas');

// Control related
let colorPalette = document.querySelector('input[type=color]');
let gridRange = document.querySelector('input[type=range]');
let squares_nums = document.querySelectorAll('.squares-num');
let controlPanel = document.querySelector('.control-panel');

init();

function init() {
    squares_nums.forEach((squares_num) => {
        squares_num.innerText = gridRange.value;
    })

    MyCanvas.generateSquares(canvas, gridRange.value);
    MyCanvas.setMode('normal');
    canvas.addEventListener('mouseover', function(e) {
        if(e.target.classList.contains('square-grid'))
            MyCanvas.renderSquare(e.target, colorPalette);
    });

    gridRange.addEventListener('input', (e) => changeSquresNum(squares_nums, e.target.value));
    gridRange.addEventListener('change', (e) => MyCanvas.resetCanvas(canvas, e.target.value));

    controlPanel.addEventListener('click', function(e) {
        if(e.target.dataset.btn === undefined)
            return;

        if(e.target.dataset.btn === 'clear')
            MyCanvas.clearCanvas(canvas);
        else{
            MyCanvas.setMode(e.target.dataset.btn);
            changeActiveBtn('.active-btn', '#' + e.target.dataset.btn + '-btn');
        }
    });
}