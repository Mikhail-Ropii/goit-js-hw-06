const counterValue = 0;

const btnMinusEl = document.querySelector('[data-action="decrement"]');
const btnPlusEl = document.querySelector('[data-action="increment"]');

const handleBtnMinusClick = () => {
    counterValue += 1;
};

const handleBtnPlusClick = () => {
    counterValue -= 1;
};


btnMinusEl.addEventListener('click', handleBtnMinusClick);
btnPlusEl.addEventListener('click', handleBtnPlusClick);

console.log(counterValue);


