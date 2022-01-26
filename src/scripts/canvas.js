/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 60;
canvas.height = window.innerHeight - 60;

let shapes = [];
let backgroundColor = getComputedStyle(canvas).backgroundColor;

// set keyboardKeys to undefined to begin with, will change value in index.js eventListener
const keyboardKeys = {
    x: undefined,
    y: undefined
}

class Shape {
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
function createShape(color) {
    shapes.push(new Shape(color));
}

function handleShapes() {
    for (let i = 0; i < shapes.length; i++) {
        shapes[i].update();
        shapes[i].draw();
    }
}

function animate() {
    
    handleShapes();

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
    let shapeColor = color.slice(4, color.length - 1);
    let colorNumbers = shapeColor.split(', ');
    let shapeRed = parseInt(colorNumbers[0]);
    let shapeGreen = parseInt(colorNumbers[1]);
    let shapeBlue = parseInt(colorNumbers[2]);
    
    // increase or decrease color of circle, until color of circle becomes background color 
    while (shapeRed !== backgroundRed || shapeGreen !== backgroundGreen || shapeBlue !== backgroundBlue) {
        if (shapeRed > backgroundRed) {
            shapeRed -= 1;
        } else if (shapeRed < backgroundRed) {
            shapeRed += 1;
        } else {
            shapeRed;
        }
        if (shapeGreen > backgroundGreen) {
            shapeGreen -= 1;
        } else if (shapeGreen < backgroundGreen) {
            shapeGreen += 1;
        } else {
            shapeGreen;
        }
        if (shapeBlue > backgroundBlue) {
            shapeBlue -= 1;
        } else if (shapeBlue < backgroundBlue) {
            shapeBlue += 1;
        } else {
            shapeBlue; 
        }

        color = `rgb(${shapeRed}, ${shapeGreen}, ${shapeBlue})`;
        return color;
    }
    // decluttering the shapey array
    } else {
        if (shapes.length > 50 && shapes.slice(-1)[0].color === backgroundColor) {
            shapes.splice(0, 1);
        } else if (shapes.length >= 75 && shapes.slice(-1)[0].color === backgroundColor){
            shapes.splice(0, 1);
        }
        return color;
    }

}




export {canvas, keyboardKeys, createShape, animate}