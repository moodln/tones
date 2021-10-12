
import {canvas, keyboardKeys, createGlitter, animate} from './scripts/canvas'
import Audio from './scripts/audio'



window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

window.addEventListener('DOMContentLoaded', () => {
    animate();
})

document.addEventListener('keydown', (e) => {
    const audio = new Audio();
    let color = 'pink'
    // assign x, y coordinates and color based on frequency of note 
    if (audio.notes[e.key] > 879) {
        // random number between canvas.width/canvas.height and canvas.width
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width);
        console.log(keyboardKeys.x);
        keyboardKeys.y = Math.random() * (canvas.height - 400 - (canvas.height - 600)) + (canvas.height - 600);
        color = 'rgb(243, 217, 100)';
    } else if (audio.notes[e.key] > 348 && audio.notes[e.key] < 879) {
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width);
        keyboardKeys.y = Math.random() * ((canvas.height - 200) - (canvas.height - 400)) + (canvas.height - 400);
        color = 'rgb(243, 157, 100)';
    } else if (audio.notes[e.key] < 348) {
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width);
        keyboardKeys.y = Math.random() * (canvas.height - (canvas.height - 200)) + (canvas.height - 200);
        color = colorAssignment(audio.notes[e.key]);
    }
    
    createGlitter(color);   
})


function colorAssignment(frequency) {
    let colors = [
        'rgb(72,   61, 139)',
        'rgb(25,   25, 112)',
        'rgb(0,   128, 128)',
        'rgb(70,  130, 180)',
        'rgb(95,  158, 160)',
        'rgb(100, 149, 237)',
        'rgb(60,  179, 113)',
        'rgb(106,  90, 205)',
        'rgb(138,  43, 226)',
        'rgb(218, 112, 214)',
        'rgb(176, 196, 222)',
        'rgb(138,  43, 226)',
        'rgb(138,  43, 226)',
        'rgb(138,  43, 226)',
        'rgb(138,  43, 226)',
        'rgb(138,  43, 226)',
        'rgb(138,  43, 226)',
        // 'rgb(85, 107, 47)',
    ];
    if (frequency <= 174.62) {
        let i = Math.floor(Math.random() * (3 - 0) + 0);
        // console.log(i);
        return colors[i];
    } else if (frequency < 262 && frequency > 174.62) {
        let i = Math.floor(Math.random() * (4 - 3) + 3);
        // console.log(i);
        return colors[i];
    } else if (frequency < 393 && frequency > 261) {
        let i = Math.floor(Math.random() * (8 - 5) + 5);
        // console.log(i);
        return colors[i];
    }
}




document.addEventListener('keydown', (e) => {
    const audio = new Audio();
    let key = e.key;
    audio.createNotes(key);

})



// document.addEventListener('keydown', (e) => {
//     const canvas = new Canvas();
//     canvas.draw(e);

// })

// document.addEventListener('keyup' (e) => {
//     const canvas = new Canvas();
//     delete canvas.keys[e.key];
// })

// document.addEventListener('keyup', setTimeout.bind(null, myFunc, 3000));

// function myFunc() {
//     const canvas = new Canvas();
//     canvas.removeDraw();
// }





