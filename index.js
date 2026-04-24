const grid = document.querySelector('.container');
const resetBtn = document.getElementById('reset');
const dropdown = document.getElementById('modes');
let mode = "drawing"; // default mode

function hoverEffect() {
    dropdown.addEventListener("change", () => {
        mode = dropdown.value;
        console.log(mode);
    });
}

function squares() {

    hoverEffect();

    for (let i = 1; i <= 400; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        grid.append(box);
        box.addEventListener('mouseenter', () => {
            box.style.background = '#d34e36';
            if (mode !== 'drawing') {
                const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                box.style.background = randomColor;
            }
        });

    }

}

squares();

resetBtn.addEventListener('click', () => {
    let value = +prompt('How many boxes you want? Max of 400');

    if (Number.isNaN(value) || value < 1 || value > 400) {
        value = +prompt('Invalid input. Enter a number between 1 and 400');
    }

    grid.innerHTML = '';

    hoverEffect();
    for (let i = 1; i <= value; i++) {
        const box = document.createElement('div');
        box.classList.add('box');

        grid.appendChild(box);

        box.addEventListener('mouseenter', () => {
            box.style.background = '#d34e36';
            if (mode !== 'drawing') {
                const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                box.style.background = randomColor;
            }
        });
    }
});
