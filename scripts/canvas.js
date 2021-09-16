let mode = 'normal';
/**
 * @param {HTMLDivElement} canvas 
 * @param {HTMLInputElement} color
 * @param {Number} n 
 */
function generateSquares(canvas, colorPalette, n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add('row')
        for (let j = 0; j < n; j++) {
            let square = document.createElement('div');
            square.classList.add('square-grid');
            square.transparency = 1;
            square.addEventListener('mouseover', (e) => renderSquare(square, colorPalette));
            row.appendChild(square);
        }
        canvas.appendChild(row);
    }
}

/**
 * 
 * @param {HTMLDivElement} canvas 
 */
function removeSquares(canvas) {
    canvas.textContent = '';
}

/**
 * @param {HTMLDivElement} square 
 * @param {HTMLInputElement} colorPalette
 */
function renderSquare(square, colorPalette) {
    if (mode === 'normal') {
        let colorValue = colorPalette.value;
        square.style.backgroundColor = colorValue;
        square.transparency = 1;
    }else{
        let hexNumber = colorPalette.value.slice(1, colorPalette.value.length);
        let red = parseInt(hexNumber.slice(0, 2), 16);
        let green = parseInt(hexNumber.slice(2, 4), 16);
        let blue = parseInt(hexNumber.slice(4, 6), 16);
        let originColor = '';
        if(square.transparency === 1){
            // Following line uses regular expression.
            originColor = square.style.backgroundColor.slice(0, -1).replace(/ /g, '');
            originColor = [originColor.substr(0, 3), 'a', originColor.substr(3, originColor.length-3), ','].join('');
        }else{
            originColor = square.style.backgroundColor.slice(0, -4).replace(/ /g, '');
        }
        let newColor = 'rgba(' + red + ',' + green + ',' + blue + ',';
        if(newColor !== originColor)
            square.transparency = 0;

        if(square.transparency !== 1){
            let toRound = (square.transparency + 0.1) * 10;
            square.transparency = Math.round(toRound) / 10;
        }
        square.style.backgroundColor = newColor + square.transparency + ')';
    }
}

/**
 * 
 * @param {HTMLDivElement} canvas 
 */
function clearCanvas(canvas) {
    let rows = canvas.childNodes;
    rows.forEach((row) => {
        let squares = row.childNodes;
        squares.forEach((square) => {
            square.style.backgroundColor = '#ffffff';
        })
    })
}

/**
 * @param {HTMLDivElement} canvas 
 * @param {HTMLInputElement} colorPalette
 * @param {string} mode
 * @param {number} n
 */
function resetCanvas(canvas, colorPalette, mode, n) {
    removeSquares(canvas);
    generateSquares(canvas, colorPalette, mode, n);
}

function setMode(newMode) {
    mode = newMode;
}
export {
    generateSquares, removeSquares, renderSquare,
    clearCanvas, resetCanvas, setMode,
};