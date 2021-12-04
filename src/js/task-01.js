const elArray = document.querySelectorAll('li.item');
console.log('Number of categories:', elArray.length);

elArray.forEach(element => {
    const elTitle = element.querySelector('h2');
    const elLength = element.querySelectorAll('li');

    console.log('Category:', elTitle.textContent);
    console.log('Elements:', elLength.length);
});



