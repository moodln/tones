/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let glittery = [];
let requestID = undefined;
let backgroundColor = getComputedStyle(canvas).backgroundColor;
// let bursts = [];

const keyboardKeys = {
    x: undefined,
    y: undefined
}

class Glitter {
    constructor(color) {
        this.x = keyboardKeys.x;
        this.y = keyboardKeys.y;
        this.color = color;
        this.size = Math.random() * 6 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 2 - 1.5;
    }

    update() {
        // debugger
        this.size += 0.5;
        if (this.size >= 40 && this.color !== adjustColor(this.color)) {
            this.color = adjustColor(this.color);
        } else if (this.color === adjustColor(this.color)) {
            
            // glittery.splice(0, 1);
            // this.color = 'rgb(243, 217, 100)';
            // createGlitterBurst(this.color);
            // burst();
        }
    }


    draw() {
        ctx.beginPath();
        // debugger
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

}

function createGlitter(color) {
    glittery.push(new Glitter(color));
    console.log(glittery); 
}

function handleGlitter() {
    // console.log(glittery);
    for (let i = 0; i < glittery.length; i++) {
        glittery[i].update();
        console.log(glittery[i]);
        glittery[i].draw();

    }
}

function animate() {
    requestID = requestAnimationFrame(animate);

    if (glittery.slice(-1)[0].color !== backgroundColor) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleGlitter();
    }
    else {
        // debugger
        cancelAnimationFrame(requestID);
        glittery.splice(0, 1);
        // debugger
    }
    
}


function adjustColor(color) {

    let backgroundColorNumbers = backgroundColor.slice(4, backgroundColor.length - 1).split(', ');
    let backgroundRed = parseInt(backgroundColorNumbers[0]);
    let backgroundGreen = parseInt(backgroundColorNumbers[1]);
    let backgroundBlue = parseInt(backgroundColorNumbers[2]);

    if (color !== backgroundColor) {
    
    let glitterColor = color.slice(4, color.length - 1);
    let colorNumbers = glitterColor.split(', ');
    let glitterRed = parseInt(colorNumbers[0]);
    let glitterGreen = parseInt(colorNumbers[1]);
    let glitterBlue = parseInt(colorNumbers[2]);
    
    while (glitterRed !== backgroundRed || glitterGreen !== backgroundGreen || glitterBlue !== backgroundBlue) {
        if (glitterRed > backgroundRed) {
            glitterRed -= 1;
        } else if (glitterRed < backgroundRed) {
            glitterRed += 1;
        } else {
            glitterRed;
        }
        if (glitterGreen > backgroundGreen) {
            glitterGreen -= 1;
        } else if (glitterGreen < backgroundGreen) {
            glitterGreen += 1;
        } else {
            glitterGreen;
        }
        if (glitterBlue > backgroundBlue) {
            glitterBlue -= 1;
        } else if (glitterBlue < backgroundBlue) {
            glitterBlue += 1;
        } else {
            glitterBlue; 
        }
        // console.log(glitterRed)
        // console.log(glitterBlue)
        // console.log(glitterGreen)
        color = `rgb(${glitterRed}, ${glitterGreen}, ${glitterBlue})`;
        // debugger
        return color;
    }
    } else {
        return color;
    }

}




export {canvas, keyboardKeys, createGlitter, animate}