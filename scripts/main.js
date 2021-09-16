import * as MyCanvas from "./canvas.js";
import { changeSquresNum, changeActiveBtn, changeDisplayColor } from "./eventHandler.js"

// Canvas related
const canvas = document.querySelector('.canvas');

// Control related
const colorPalette = document.querySelector('input[type=color]');
const gridRange = document.querySelector('input[type=range]');
const squares_nums = document.querySelectorAll('.squares-num');
const controlPanel = document.querySelector('.control-panel');
const colorBtn = document.querySelector('#color-btn');

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
        else if(e.target.dataset.btn === 'color')
            colorPalette.click();
        else{
            MyCanvas.setMode(e.target.dataset.btn);
            changeActiveBtn('.active-btn', '#' + e.target.dataset.btn + '-btn');
        }
    });

    colorPalette.addEventListener('change', (e) => changeDisplayColor(colorBtn, colorPalette.value));

    colorBtn.style.backgroundColor = colorPalette.value;
}