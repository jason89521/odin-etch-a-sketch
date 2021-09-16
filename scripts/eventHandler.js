/**
 * @param {NodeListOf<HTMLSpanElement} squares_nums 
 */
function changeSquresNum(squares_nums, value) {
    squares_nums.forEach((squares_num) => {
        squares_num.innerText = value;
    });
}

/**
 * @param {string} oldBtnSelectoer
 * @param {string} newBtnSelector
 */
function changeActiveBtn(oldBtnSelectoer, newBtnSelector) {
    document.querySelector(oldBtnSelectoer).classList.remove('active-btn');
    document.querySelector(newBtnSelector).classList.add('active-btn');
}

/**
 * 
 * @param {HTMLElement} displayElement 
 * @param {string} color
 */
function changeDisplayColor(displayElement, color) {
    displayElement.style.backgroundColor = color;
}
export {changeSquresNum, changeActiveBtn, changeDisplayColor};