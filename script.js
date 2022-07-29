const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRgb = document.createElement('button');
const btnSize = document.createElement('button');
const btnReload = document.createElement('button');

function createDivs(cols, rows) {
    for (let i = 0; i < (cols * rows); i++) {
        const div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${cols},1fr)`;
        container.style.gridTemplateRows = `repeat(${rows},1fr)`;
        container.appendChild(div).classList.add('box');
    }
}
createDivs(16, 16);


function resize() {
    btnSize.innerText = 'Reset Grid size';
    btnSize.addEventListener('click', () => {
        let input = window.prompt('Enter the size of the grid');
        while (input < 2 || input > 100) {
            input = window.prompt('ERROR! Grid Size should be between 2 and 100');
            resize();
        }
        if (input == null) {
            reset();
            createDivs(16, 16);
            grayColor();
            blackColor();
            rgbColor();
            reload();
        }
        else {
            reset();
            createDivs(input, input);
            grayColor();
            blackColor();
            rgbColor();
            reload();
        }
    });
    buttonsContainer.appendChild(btnSize).classList.add('btn');
}
resize();

function grayColor() {
    const boxes = container.querySelectorAll('.box');
    btnGray.innerText = 'Gray';
    btnGray.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let rNum = Math.floor(Math.random() * 255);
            let grayScale = `rgb(${rNum},${rNum},${rNum})`;
            box.style.background = grayScale;
        }));
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn');
}
grayColor();


function blackColor() {
    const boxes = container.querySelectorAll('.box');
    btnBlack.innerText = 'Black';
    btnBlack.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black';
        }));
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn', 'black');
}
blackColor();


function rgbColor() {
    const boxes = container.querySelectorAll('.box');
    btnRgb.innerText = 'RGB';
    btnRgb.addEventListener('click', () => {
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            let rgb = `rgb(${R}, ${G}, ${B})`;
            box.style.background = rgb;
        }));
    })
    buttonsContainer.appendChild(btnRgb).classList.add('btn', 'rgb');
}
rgbColor();


function reset() {
    const boxes = container.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
}


function reload() {
    const boxes = container.querySelectorAll('.box');
    btnReload.innerText = 'Reload';
    btnReload.addEventListener('click', () => {
        boxes.forEach(box => box.style.background = 'white');
    })
    buttonsContainer.appendChild(btnReload).classList.add('btn');
}
reload();