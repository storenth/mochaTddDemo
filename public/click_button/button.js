/**
 * Add +1 to the current button innerHtml after click
 */
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let buffer = btn.innerHTML;
    let addNumber = parseInt(buffer) + 1;
    btn.innerHTML = addNumber;
});


