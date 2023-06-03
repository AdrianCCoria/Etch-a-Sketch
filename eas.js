const gridSizeInput = document.getElementById('grid-size');
const gridSizeValue = document.getElementById('grid-size-value');
const gridContainer = document.getElementById('grid-container');
let size = gridSizeInput.value;

console.log("Hello World");
// initial grid
generateGrid(16);
addGridItemListeners();

// update grid size when slider value changes
gridSizeInput.addEventListener('input',(e) => {
    size = e.target.value;
    gridSizeValue.textContent = size;
    clearGrid();
    generateGrid(size);
    addGridItemListeners();
}); 

// Generate the grid cells dynamically
function generateGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0;i < size * size;i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }
}

const gridItems = document.querySelectorAll('.grid-item');

function addGridItemListeners() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', changeColor);
    });
}

function changeColor(e) {
    const gridItem = e.target;
    const randomColor = getRandomColor();
    gridItem.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


