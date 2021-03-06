let mode = 'normal';
/**
 * @param {HTMLDivElement} canvas 
 * @param {Number} n 
 */
function generateSquares(canvas, n) {
    for(let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < n; j++) {
            const square = document.createElement('div');
            square.classList.add('square-grid');
            square.transparency = 1;
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
        const colorValue = colorPalette.value;
        square.style.backgroundColor = colorValue;
        square.transparency = 1;
    }
    else if(mode === 'rainbow') {
        let randomNumber = Math.floor((1 << 24) * Math.random()).toString(16);
        randomNumber = ('000000' + randomNumber).slice(6);
        square.style.backgroundColor = '#' + randomNumber;
        square.transparency = 1;
    }
    else{
        const hexNumber = colorPalette.value.slice(1, colorPalette.value.length);
        const red = parseInt(hexNumber.slice(0, 2), 16);
        const green = parseInt(hexNumber.slice(2, 4), 16);
        const blue = parseInt(hexNumber.slice(4, 6), 16);
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
 * @param {number} n
 */
function resetCanvas(canvas, n) {
    removeSquares(canvas);
    generateSquares(canvas, n);
}

function setMode(newMode) {
    mode = newMode;
}
export {
    generateSquares, removeSquares, renderSquare,
    clearCanvas, resetCanvas, setMode,
};