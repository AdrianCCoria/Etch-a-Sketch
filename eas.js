const gridSizeInput = document.getElementById('grid-size');
const gridSizeValue = document.getElementById('grid-size-value');
const gridContainer = document.getElementById('grid-container');
const randomColorsCheckbox = document.getElementById('random-colors-checkbox');
const plainBlackCheckbox = document.getElementById('plain-black-checkbox');
const clearButton = document.getElementById('clear-button');
let size = gridSizeInput.value;
let useRandomColors = false;
let usePlainBlack = true;

console.log("Hello World");
// initial grid
generateGrid(16);
addGridItemListeners();

// Handle random colors checkbox change
randomColorsCheckbox.addEventListener('change', (e) => {
    useRandomColors = e.target.checked;
});

plainBlackCheckbox.addEventListener('change', (e) => {
    usePlainBlack = e.target.checked;
});

// Handle clear button
clearButton.addEventListener('click', clearGridColors);

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

function addGridItemListeners() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', changeColor);
    });
}

function changeColor(e) {
    const gridItem = e.target;
    
    if(useRandomColors) {
        const randomColor = getRandomColor();
        gridItem.style.backgroundColor = randomColor;
    } else if (usePlainBlack) {
        gridItem.style.backgroundColor = 'black';
    } else {
        gridItem.style.backgroundColor = '#9fc2b2';
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function clearGridColors() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = '#9fc2b2';
    });
}


