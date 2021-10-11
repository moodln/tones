/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const keyboardKeys = {
    x: undefined,
    y: undefined
}

function drawCircle(color) {
    ctx.beginPath();
    ctx.arc(keyboardKeys.x, keyboardKeys.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(keyboardKeys.x, keyboardKeys.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.stroke();
}






export {canvas, keyboardKeys, drawCircle}