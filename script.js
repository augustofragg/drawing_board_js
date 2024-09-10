//Initial Data

let currentColor = 'black';

let screen = document.querySelector('#tela');

let ctx = screen.getContext('2d');

let canDrawn = false;

let mouseX = 0;
 
let mouseY = 0;

//events

document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click',colorClickEvent);
});

screen.addEventListener('mousedown',mouseDownEvent);
screen.addEventListener('mousemove',mouseMoveEvent);
screen.addEventListener('mouseup',mouseUpEvent);
document.querySelector('.clear').addEventListener('click',clearScreen);


//functions

function colorClickEvent(e) {

    let color = e.target.getAttribute('data-color');

    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');

    e.target.classList.add('active');
}

function mouseDownEvent(e) {
    canDrawn = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
    if(canDrawn) {
        draw(e.pageX,e.pageY);
    }
}


function mouseUpEvent() {
    canDrawn = false;
}

function draw(x,y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX,mouseY);
    ctx.lineTo(pointX,pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen() {
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}