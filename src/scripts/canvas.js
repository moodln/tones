/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const glittery = [];

const keyboardKeys = {
    x: undefined,
    y: undefined
}

class Glitter {
    constructor(color) {
        this.x = keyboardKeys.x;
        this.y = keyboardKeys.y;
        this.color = color;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 2 - 1.5;
        this.speedY = Math.random() * 2 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.stroke();
    }
}

function createGlitter(color) {
    for (let i = 0; i < 100; i++) {
        glittery.push(new Glitter(color));
    }
}

function handleGlitter() {
    for (let i = 0; i < glittery.length; i++) {
        glittery[i].update();
        glittery[i].draw();
    }
}



function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleGlitter();
    requestAnimationFrame(animate);
}

export {canvas, keyboardKeys, Glitter, createGlitter, handleGlitter, animate}