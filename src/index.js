
import Example from './scripts/example'



document.addEventListener('DOMContentLoaded', () => {
    // const main = document.getElementById('main');
    // new Example(main);
    draw();
})

document.addEventListener('keydown', (e) => {
    drawAgain(e);
})

document.addEventListener('keyup', () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.moveTo(125, 300);
    ctx.lineTo(125, 420);
    ctx.lineTo(45, 420);
    ctx.fillStyle = 'rgb(187, 193, 214)'
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(500, 200);
    ctx.quadraticCurveTo(425, 525, 65, 62.5);
    ctx.quadraticCurveTo(425, 425, 75, 100);
    ctx.fillStyle = 'rgb(187, 193, 214)'
    ctx.fill();
    
})

function draw() {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'orange'
    ctx.fill(); 

    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue'
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(100, 450, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'violet'
    ctx.fill();

    ctx.beginPath();
    ctx.arc(100, 450, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue'
    ctx.stroke();

}

function drawAgain(e) {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    if (e.key === 'a') {
        ctx.beginPath();
        ctx.moveTo(125, 300);
        ctx.lineTo(125, 420);
        ctx.lineTo(45, 420);
        ctx.fillStyle = 'red'
        ctx.fill();
    } else if (e.key === 'b') {
        ctx.beginPath();
        ctx.moveTo(500, 200);
        ctx.quadraticCurveTo(425, 525, 65, 62.5);
        ctx.quadraticCurveTo(425, 425, 75, 100);
        ctx.fillStyle = 'pink'
        ctx.fill();
    }
    
}




