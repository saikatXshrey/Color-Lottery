const btn = document.querySelector('.Btn');
const box1 = document.querySelector('.container-1');
const box2 = document.querySelector('.container-2');
const box3 = document.querySelector('.container-3');

// array containing colors
const color = ['#5230cc', '#eb128b', '#00d4ff', '#79093e', '#fdbb2d', '#22c1c3', '#fcea46', '#fd1d1d', '#fcb045', '#833ab4', '#32de84', '#66FF00', '#006A4E', '#E31837', '#6F00FF'];

btn.addEventListener('click', generate);

// function which generates colors randomly for 3 boxes
function generate() {
    let color1 = color[create()];
    let color2 = color[create()];
    let color3 = color[create()];

    box1.style.backgroundColor = color1;
    box2.style.backgroundColor = color2;
    box3.style.backgroundColor = color3;

    // winning condition
    if (color1 === color2 &&
        color1 === color3 &&
        color2 === color3)
        alert("You Won the lottery");
}

// throws random color
function create() {
    let num = Math.floor(Math.random() * color.length);
    return num;
}