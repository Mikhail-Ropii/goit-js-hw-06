let counterValue = 0;
const value = document.getElementById('value');

const btnMinusEl = document.querySelector('[data-action="decrement"]');
const btnPlusEl = document.querySelector('[data-action="increment"]');

const handleBtnMinusClick = () => {
    if (counterValue >= 1) {
        counterValue--;
        value.innerHTML = counterValue;
    }
};

const handleBtnPlusClick = () => {
    if (counterValue <= 2) {
        counterValue++;
        value.innerHTML = counterValue;
    }
};


btnMinusEl.addEventListener('click', handleBtnMinusClick);
btnPlusEl.addEventListener('click', handleBtnPlusClick);
