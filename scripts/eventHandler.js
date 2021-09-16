/**
 * @param {NodeListOf<HTMLSpanElement} squares_nums 
 */
function changeSquresNum(squares_nums, value) {
    squares_nums.forEach((squares_num) => {
        squares_num.innerText = value;
    });
}

/**
 * 
 * @param {HTMLButtonElement} originBtn 
 * @param {HTMLButtonElement} newBtn 
 */
function changeActiveBtn(originBtn, newBtn) {
    originBtn.classList.remove('active-btn');
    newBtn.classList.add('active-btn');
}

export {changeSquresNum, changeActiveBtn};