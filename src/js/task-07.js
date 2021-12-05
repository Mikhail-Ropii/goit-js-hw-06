const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

const fontChange = (event) => {
    textEl.style.fontSize = `${event.currentTarget.value}px`;

}

inputEl.addEventListener('input', fontChange);

