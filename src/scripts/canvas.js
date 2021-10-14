/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 60;
canvas.height = window.innerHeight - 60;

let glittery = [];
let backgroundColor = getComputedStyle(canvas).backgroundColor;

// set keyboardKeys to undefined to begin with, will change value in index.js eventListener
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
        
        this.size += 0.1;
    
        // when circle reaches certain size, gradually change color to blend in with background 
        let randomSizeNum = Math.floor(Math.random() * (50 - 5) + 5);
        
        if (this.size >= randomSizeNum) {
            this.color = adjustColor(this.color);
           
        }
    }

    // draw circle on canvas
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

}

// create instances of circle to later call methods on (allows for the option to have bursts)
function createGlitter(color) {
    glittery.push(new Glitter(color));
}

function handleGlitter() {

    for (let i = 0; i < glittery.length; i++) {
        glittery[i].update();
        glittery[i].draw();
    }
}

function animate(timestamp) {
    const t = timestamp;
    
    handleGlitter();

    requestAnimationFrame(animate);
}


function adjustColor(color) {
    // set variables pointing to different rgb values of background color
    let backgroundColorNumbers = backgroundColor.slice(4, backgroundColor.length - 1).split(', ');
    let backgroundRed = parseInt(backgroundColorNumbers[0]);
    let backgroundGreen = parseInt(backgroundColorNumbers[1]);
    let backgroundBlue = parseInt(backgroundColorNumbers[2]);

    if (color !== backgroundColor) {
    // set variables pointing to different rgb values of circle color
    let glitterColor = color.slice(4, color.length - 1);
    let colorNumbers = glitterColor.split(', ');
    let glitterRed = parseInt(colorNumbers[0]);
    let glitterGreen = parseInt(colorNumbers[1]);
    let glitterBlue = parseInt(colorNumbers[2]);
    
    // increase or decrease color of circle, until color of circle becomes background color 
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

        color = `rgb(${glitterRed}, ${glitterGreen}, ${glitterBlue})`;
        return color;
    }
    // decluttering the glittery array
    } else {
        if (glittery.length > 50 && glittery.slice(-1)[0].color === backgroundColor) {
            glittery.splice(0, 1);
        } else if (glittery.length >= 75 && glittery.slice(-1)[0].color === backgroundColor){
            glittery.splice(0, 1);
        }
        return color;
    }

}




export {canvas, keyboardKeys, createGlitter, animate}