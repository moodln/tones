
import Canvas from './scripts/canvas'
import Audio from './scripts/audio'



document.addEventListener('DOMContentLoaded', () => {
    const canvas = new Canvas();
})

document.addEventListener('keydown', (e) => {
    const canvas = new Canvas();
    canvas.draw(e);
    // console.log(e.key);
})

document.addEventListener('keyup', setTimeout.bind(null, myFunc, 3000));

function myFunc() {
    const canvas = new Canvas();
    canvas.removeDraw();
}

document.addEventListener('keydown', (e) => {
    const audio = new Audio();
    let key = e.key;
    audio.createNotes(key);

})








