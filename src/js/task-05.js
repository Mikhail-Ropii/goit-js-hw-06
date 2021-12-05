const nameInputEl = document.getElementById('name-input');
const nameOutputEl = document.getElementById('name-output');


nameInputEl.addEventListener('input', (event) => {
    if (nameInputEl.value !== '') {
        nameOutputEl.textContent = event.currentTarget.value;
    }
    else {
        nameOutputEl.textContent = "Anonymous";
    }
});