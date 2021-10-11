
import { canvas, keyboardKeys, Glitter, createGlitter, handleGlitter, animate} from './scripts/canvas'
import Audio from './scripts/audio'




window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


document.addEventListener('keydown', (e) => {
    const audio = new Audio();
    let color = 'pink'
    if (audio.notes[e.key] > 879) {
        // random number between canvas.width/canvas.height and canvas.width
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width)
        keyboardKeys.y = Math.random() * (canvas.height - 400 - (canvas.height - 600)) + (canvas.height - 600)
        color = 'rgb(243, 217, 100)';
    } else if (audio.notes[e.key] > 348 && audio.notes[e.key] < 879) {
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width)
        keyboardKeys.y = Math.random() * ((canvas.height - 200) - (canvas.height - 400)) + (canvas.height - 400)
        color = 'rgb(243, 157, 100)'
    } else if (audio.notes[e.key] < 348) {
        keyboardKeys.x = Math.random() * ((canvas.width - canvas.width) - (canvas.width)) + (canvas.width)
        keyboardKeys.y = Math.random() * (canvas.height - (canvas.height - 200)) + (canvas.height - 200)
        color = 'rgb(91, 83, 207)'
    }
    
    createGlitter(color);
    animate();
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

document.addEventListener('keydown', (e) => {
    const audio = new Audio();
    let key = e.key;
    audio.createNotes(key);

})








