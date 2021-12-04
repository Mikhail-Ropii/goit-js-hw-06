const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredUlEl = document.querySelector('ul');

for (const ingredient of ingredients) {
  const ingredEl = document.createElement('li');
  ingredEl.textContent = ingredient;
  ingredEl.classList.add("item");
  ingredUlEl.appendChild(ingredEl);
  
};

console.log(ingredUlEl);

  




